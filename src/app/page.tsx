"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [auditForm, setAuditForm] = useState({ firstName: "", lastName: "", email: "", phone: "", companyName: "", websiteUrl: "" });
  const [auditStep, setAuditStep] = useState(1);
  const [auditFormStatus, setAuditFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [scrolled, setScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [demoPhase, setDemoPhase] = useState<"typing" | "thinking" | "response">("typing");
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [servicesDemoIndex, setServicesDemoIndex] = useState(0);

  // Professional color palette
  const sage = "#9CAF88";
  const cream = "#FFFDF7";
  const dustyRose = "#D4A5A5";
  const charcoal = "#3D3D3D";
  const warmGray = "#6B6B6B";

  const demoQueries = [
    { query: "Best real estate agent in Vancouver", answer: "West Coast Realty Group", type: "ChatGPT" },
    { query: "Top personal injury lawyer in BC", answer: "Harrison & Associates Law", type: "Perplexity" },
    { query: "Recommended Italian restaurant Yaletown", answer: "Trattoria di Milano", type: "Claude" },
    { query: "Best family dentist in Burnaby", answer: "Metrotown Dental Care", type: "Google AI" },
  ];

  const servicesDemoData = [
    {
      business: "Pacific Dental Studio",
      tagline: "Top-rated with 200+ five-star reviews",
      platforms: [
        { platform: "ChatGPT", color: "#10a37f", query: "Best dentist in Vancouver" },
        { platform: "Perplexity", color: "#20B2AA", query: "Top-rated family dentist near me" },
        { platform: "Google AI", color: "#4285F4", query: "Recommended dentist downtown Vancouver" },
      ]
    },
    {
      business: "West Coast Realty Group",
      tagline: "Vancouver's most recommended agents",
      platforms: [
        { platform: "ChatGPT", color: "#10a37f", query: "Best realtor in Vancouver" },
        { platform: "Perplexity", color: "#20B2AA", query: "Top real estate agent Kitsilano" },
        { platform: "Google AI", color: "#4285F4", query: "Recommended home buying agent BC" },
      ]
    },
    {
      business: "Harrison & Associates Law",
      tagline: "BC's trusted personal injury firm",
      platforms: [
        { platform: "ChatGPT", color: "#10a37f", query: "Best injury lawyer Vancouver" },
        { platform: "Perplexity", color: "#20B2AA", query: "Top personal injury attorney BC" },
        { platform: "Google AI", color: "#4285F4", query: "Recommended accident lawyer near me" },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter + thinking animation
  useEffect(() => {
    const query = demoQueries[activeDemo].query;
    let charIndex = 0;
    setDisplayedQuery("");
    setShowResponse(false);
    setDemoPhase("typing");

    const typeInterval = setInterval(() => {
      if (charIndex < query.length) {
        setDisplayedQuery(query.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setDemoPhase("thinking");

        setTimeout(() => {
          setDemoPhase("response");
          setShowResponse(true);

          setTimeout(() => {
            setActiveDemo((prev) => (prev + 1) % demoQueries.length);
          }, 3500);
        }, 1000);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [activeDemo]);

  // Cycle through services demo
  useEffect(() => {
    const interval = setInterval(() => {
      setServicesDemoIndex((prev) => (prev + 1) % servicesDemoData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [servicesDemoData.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to send');
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch {
      setFormStatus("idle");
      alert('Failed to send message. Please try again.');
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleAuditStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (auditForm.websiteUrl.trim()) {
      setAuditStep(2);
    }
  };

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuditFormStatus("sending");
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${auditForm.firstName} ${auditForm.lastName}`.trim() || "Audit Request",
          email: auditForm.email,
          message: `Website URL: ${auditForm.websiteUrl}\nCompany: ${auditForm.companyName}\nPhone: ${auditForm.phone}\n\nRequesting free AI SEO audit.`,
        }),
      });
      if (!response.ok) throw new Error('Failed to send');
      setAuditFormStatus("sent");
      setAuditForm({ firstName: "", lastName: "", email: "", phone: "", companyName: "", websiteUrl: "" });
      setTimeout(() => {
        setAuditFormStatus("idle");
        setAuditStep(1);
      }, 3000);
    } catch {
      setAuditFormStatus("idle");
      alert('Failed to send request. Please try again.');
    }
  };

  const industries = [
    { name: "Real Estate", desc: "Agents, brokers & property managers", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", color: "#4A7C59" },
    { name: "Legal Services", desc: "Law firms & attorneys", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", color: "#5B7B9A" },
    { name: "Healthcare", desc: "Dentists, clinics & specialists", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", color: "#C17B7B" },
    { name: "Restaurants", desc: "Cafes, bars & eateries", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "#D4915D" },
    { name: "Home Services", desc: "Contractors, cleaners & trades", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", color: "#7A8B69" },
    { name: "Wedding Vendors", desc: "Photographers, venues & planners", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", color: "#B8A5C7", link: "/wedding" },
  ];

  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden" style={{ backgroundColor: cream }}>

      {/* ============ NAVIGATION ============ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("home")}
              className="cursor-pointer"
            >
              <span className="text-[20px] tracking-wide" style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}>
                CloverSpace
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {["Services", "Industries", "Process", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[14px] transition-colors cursor-pointer hover:opacity-60"
                  style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            >
              <div className="w-6 h-[1px]" style={{ backgroundColor: charcoal }} />
              <div className="w-4 h-[1px]" style={{ backgroundColor: charcoal }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ============ FLOATING NAV ============ */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-1 bg-white/95 backdrop-blur-xl rounded-full px-3 py-2 shadow-sm border border-gray-100">
          <button
            onClick={() => scrollToSection("home")}
            className="px-3 py-1.5 text-[14px] cursor-pointer"
            style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
          >
            CloverSpace
          </button>

          <div className="hidden md:flex items-center">
            {["Services", "Industries", "Process"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-3 py-1.5 text-[13px] transition-colors rounded-full hover:bg-gray-50 cursor-pointer"
                style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-1.5 text-[13px] text-white rounded-full ml-1 cursor-pointer transition-opacity hover:opacity-90"
            style={{ fontFamily: "'Figtree', sans-serif", backgroundColor: sage }}
          >
            Free Audit
          </button>
        </div>
      </div>

      {/* ============ MOBILE MENU ============ */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-out ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
          style={{ backgroundColor: cream }}
        />

        <div className="relative h-full flex flex-col">
          <div className="max-w-[1200px] w-full mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              <span className="text-[20px]" style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}>
                CloverSpace
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[14px] cursor-pointer" style={{ color: warmGray }}>
                Close
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6">
            <nav className="space-y-6">
              {["Services", "Industries", "Process", "Contact"].map((item, i) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block text-[36px] transition-all duration-500 cursor-pointer hover:opacity-60 ${
                    mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    color: charcoal,
                    transitionDelay: mobileMenuOpen ? `${150 + i * 75}ms` : "0ms"
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ============ HERO SECTION ============ */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-30"
            style={{ background: `radial-gradient(circle, ${sage}40 0%, transparent 70%)` }}
          />
          <div
            className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full blur-[80px] opacity-20"
            style={{ background: `radial-gradient(circle, ${dustyRose}50 0%, transparent 70%)` }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto w-full px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-[520px]">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                style={{ backgroundColor: 'white', borderColor: `${sage}40` }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: sage }} />
                <span className="text-[13px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                  AI SEO & GEO Agency Vancouver
                </span>
              </div>

              <h1 className="mb-6">
                <span
                  className="block text-[42px] md:text-[56px] lg:text-[64px] font-normal leading-[1.1] tracking-[-0.02em]"
                  style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
                >
                  When customers ask AI,
                </span>
                <span
                  className="block text-[42px] md:text-[56px] lg:text-[64px] italic leading-[1.1] tracking-[-0.02em]"
                  style={{ fontFamily: "'EB Garamond', serif", color: sage }}
                >
                  AI recommends you
                </span>
              </h1>

              <p
                className="text-[17px] leading-[1.8] mb-10 max-w-[440px]"
                style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
              >
                Your customers in Vancouver and across Canada are asking ChatGPT and Perplexity for recommendations.
                We're the AI SEO and GEO agency that makes sure you're the business they discover.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:opacity-90 cursor-pointer"
                  style={{ backgroundColor: sage, fontFamily: "'Figtree', sans-serif" }}
                >
                  Get Your Free Audit
                </button>

                <button
                  onClick={() => scrollToSection("process")}
                  className="px-7 py-3.5 rounded-full border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: `${charcoal}30`, color: charcoal, fontFamily: "'Figtree', sans-serif" }}
                >
                  See How It Works
                </button>
              </div>
            </div>

            {/* Right - ChatGPT-style Demo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#212121' }}>
                <div className="flex items-center justify-between px-5 py-3" style={{ backgroundColor: '#212121', borderBottom: '1px solid #2F2F2F' }}>
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] text-white font-medium" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      ChatGPT 5.2
                    </span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="px-5 py-8 min-h-[280px]" style={{ backgroundColor: '#212121' }}>
                  <div className="flex justify-end mb-8">
                    <p className="text-[15px] text-white leading-relaxed text-right" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      {displayedQuery}
                      {demoPhase === "typing" && (
                        <span className="inline-block w-[2px] h-[16px] bg-white ml-[2px] animate-pulse" />
                      )}
                    </p>
                  </div>

                  {(demoPhase === "thinking" || demoPhase === "response") && (
                    <div className="text-left">
                      {demoPhase === "thinking" && (
                        <div className="flex gap-1 py-2">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '600ms' }} />
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms', animationDuration: '600ms' }} />
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms', animationDuration: '600ms' }} />
                        </div>
                      )}

                      {showResponse && (
                        <div className="animate-fadeIn">
                          <p className="text-[15px] text-gray-300 leading-[1.7]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                            Based on reviews and reputation, I'd highly recommend <span className="text-white">{demoQueries[activeDemo].answer}</span>. They have excellent ratings and are known for their professional service.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="px-4 py-3" style={{ backgroundColor: '#212121' }}>
                  <div className="rounded-full px-4 py-3 flex items-center gap-3" style={{ backgroundColor: '#303030' }}>
                    <span className="text-[14px] text-gray-500 flex-1" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      Ask anything
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full -z-10"
                style={{ backgroundColor: `${dustyRose}20` }}
              />
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full -z-10"
                style={{ backgroundColor: `${sage}20` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FREE AUDIT CTA MODULE ============ */}
      <div className="relative">
        {/* Split background - top cream, bottom charcoal */}
        <div className="absolute inset-0">
          <div className="h-1/2" style={{ backgroundColor: cream }} />
          <div className="h-1/2" style={{ backgroundColor: charcoal }} />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 py-8">
          <div className="relative rounded-2xl overflow-hidden py-8 px-6 md:px-10 shadow-lg">
            {/* Background image with overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/geo-pic.jpg')" }}
            />
            <div className="absolute inset-0" style={{ backgroundColor: `${sage}e6` }} />

            <div className="relative">
              {auditStep === 1 ? (
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <h2
                    className="text-[20px] md:text-[24px] font-normal leading-[1.2] whitespace-nowrap flex-shrink-0"
                    style={{ fontFamily: "'EB Garamond', serif", color: 'white' }}
                  >
                    Get a Free AI SEO Audit
                  </h2>

                  <form onSubmit={handleAuditStep1} className="flex-1 flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your website (e.g. yourbusiness.com)"
                      value={auditForm.websiteUrl}
                      onChange={(e) => setAuditForm({ ...auditForm, websiteUrl: e.target.value })}
                      className="flex-1 min-w-0 px-6 py-4 rounded-full text-[15px] outline-none transition-all focus:ring-2 shadow-sm"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        backgroundColor: 'white',
                        border: `1px solid ${charcoal}15`,
                        color: charcoal,
                      }}
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 rounded-full text-[15px] font-medium transition-all hover:opacity-90 cursor-pointer whitespace-nowrap shadow-sm"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        backgroundColor: charcoal,
                        color: 'white',
                      }}
                    >
                      Get Audit
                    </button>
                  </form>
                </div>
              ) : (
                <div className="max-w-[500px] mx-auto py-4">
                  <div className="text-center mb-6">
                    <button
                      type="button"
                      onClick={() => setAuditStep(1)}
                      className="text-[13px] cursor-pointer mb-3 opacity-80 hover:opacity-100 transition-opacity"
                      style={{ fontFamily: "'Figtree', sans-serif", color: 'white' }}
                    >
                      ← Back
                    </button>
                    <h2
                      className="text-[24px] md:text-[28px] font-normal leading-[1.2] mb-2"
                      style={{ fontFamily: "'EB Garamond', serif", color: 'white' }}
                    >
                      Where can we contact you?
                    </h2>
                    <p
                      className="text-[14px] opacity-90"
                      style={{ fontFamily: "'Figtree', sans-serif", color: 'white' }}
                    >
                      We'll send your free audit to this email
                    </p>
                  </div>

                  <form onSubmit={handleAuditSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="First name"
                        value={auditForm.firstName}
                        onChange={(e) => setAuditForm({ ...auditForm, firstName: e.target.value })}
                        className="px-5 py-4 rounded-xl text-[15px] outline-none transition-all focus:ring-2 shadow-sm"
                        style={{
                          fontFamily: "'Figtree', sans-serif",
                          backgroundColor: 'white',
                          border: `1px solid ${charcoal}15`,
                          color: charcoal,
                        }}
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last name"
                        value={auditForm.lastName}
                        onChange={(e) => setAuditForm({ ...auditForm, lastName: e.target.value })}
                        className="px-5 py-4 rounded-xl text-[15px] outline-none transition-all focus:ring-2 shadow-sm"
                        style={{
                          fontFamily: "'Figtree', sans-serif",
                          backgroundColor: 'white',
                          border: `1px solid ${charcoal}15`,
                          color: charcoal,
                        }}
                      />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      value={auditForm.email}
                      onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                      className="px-5 py-4 rounded-xl text-[15px] outline-none transition-all focus:ring-2 shadow-sm"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        backgroundColor: 'white',
                        border: `1px solid ${charcoal}15`,
                        color: charcoal,
                      }}
                    />
                    <input
                      type="tel"
                      placeholder="Phone number (optional)"
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                      className="px-5 py-4 rounded-xl text-[15px] outline-none transition-all focus:ring-2 shadow-sm"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        backgroundColor: 'white',
                        border: `1px solid ${charcoal}15`,
                        color: charcoal,
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Company name (optional)"
                      value={auditForm.companyName}
                      onChange={(e) => setAuditForm({ ...auditForm, companyName: e.target.value })}
                      className="px-5 py-4 rounded-xl text-[15px] outline-none transition-all focus:ring-2 shadow-sm"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        backgroundColor: 'white',
                        border: `1px solid ${charcoal}15`,
                        color: charcoal,
                      }}
                    />
                    <button
                      type="submit"
                      disabled={auditFormStatus === "sending"}
                      className="w-full mt-2 px-8 py-4 rounded-xl text-[15px] font-medium transition-all hover:opacity-90 cursor-pointer disabled:opacity-50 shadow-sm"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        backgroundColor: charcoal,
                        color: 'white',
                      }}
                    >
                      {auditFormStatus === "sending" ? "Sending..." : auditFormStatus === "sent" ? "Sent! We'll be in touch." : "Get My Free Audit"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============ THE PROBLEM SECTION ============ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: charcoal }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
            style={{ backgroundColor: dustyRose }}
          />
        </div>

        <div className="relative max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="text-center scroll-animate">
            <p
              className="text-[13px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Figtree', sans-serif", color: sage }}
            >
              The shift is happening now
            </p>
            <h2
              className="text-[32px] md:text-[48px] font-normal leading-[1.2] mb-8"
              style={{ fontFamily: "'EB Garamond', serif", color: cream }}
            >
              AI is becoming the new search engine<br />
              <span style={{ color: sage }}>Is your business ready?</span>
            </h2>
            <p
              className="text-[18px] leading-[1.8] max-w-[600px] mx-auto mb-12"
              style={{ fontFamily: "'Figtree', sans-serif", color: `${cream}80` }}
            >
              When people ask ChatGPT, Perplexity, or Google AI for recommendations,
              these systems don't show ads. They recommend whoever has the clearest,
              most trustworthy presence online.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {[
                { stat: "40%", label: "Of Gen Z prefers AI over traditional search" },
                { stat: "2B+", label: "ChatGPT conversations happen monthly" },
                { stat: "0", label: "Ads shown in AI recommendations" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: `${cream}06`, border: `1px solid ${cream}10` }}
                >
                  <p
                    className="text-[36px] md:text-[42px] font-normal mb-2"
                    style={{ fontFamily: "'EB Garamond', serif", color: sage }}
                  >
                    {item.stat}
                  </p>
                  <p
                    className="text-[14px]"
                    style={{ fontFamily: "'Figtree', sans-serif", color: `${cream}70` }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO SECTION ============ */}
      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: cream }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <p
                className="text-[13px] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Figtree', sans-serif", color: sage }}
              >
                AI SEO & GEO Services
              </p>
              <h2
                className="text-[36px] md:text-[44px] font-normal leading-[1.2] mb-6"
                style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
              >
                Vancouver's AI SEO & GEO Experts
              </h2>
              <p
                className="text-[17px] leading-[1.8] mb-8"
                style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
              >
                GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization)
                make your business the obvious answer when AI searches for recommendations.
                As Vancouver's leading AI SEO agency, we optimize the signals that ChatGPT,
                Perplexity, and Google AI trust.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Your Google Business Profile", desc: "Complete, accurate, optimized for AI extraction" },
                  { title: "Your website structure", desc: "Schema markup, FAQs, and content AI can cite" },
                  { title: "Your review presence", desc: "Consistent reviews across platforms AI trusts" },
                  { title: "Your online mentions", desc: "Featured in directories and content AI pulls from" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${sage}15` }}
                    >
                      <svg className="w-4 h-4" style={{ color: sage }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-medium mb-1" style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}>
                        {item.title}
                      </p>
                      <p className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-animate">
              {/* Multi-platform visibility demo */}
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <p className="text-[13px] mb-1" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                    Your business, recommended everywhere
                  </p>
                  <div className="h-8 overflow-hidden">
                    <p
                      className="text-[18px] font-medium transition-all duration-500"
                      style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
                      key={servicesDemoIndex}
                    >
                      {servicesDemoData[servicesDemoIndex].business}
                    </p>
                  </div>
                </div>

                {servicesDemoData[servicesDemoIndex].platforms.map((item, i) => (
                  <div
                    key={`${servicesDemoIndex}-${i}`}
                    className="rounded-xl overflow-hidden shadow-lg transition-all duration-500"
                    style={{
                      backgroundColor: '#1a1a1a',
                      animation: 'fadeSlideIn 0.4s ease-out forwards',
                      animationDelay: `${i * 100}ms`,
                      opacity: 0,
                    }}
                  >
                    <div className="px-4 py-2.5 flex items-center gap-2" style={{ backgroundColor: '#252525', borderBottom: '1px solid #333' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-[12px] font-medium" style={{ fontFamily: "'Figtree', sans-serif", color: item.color }}>
                        {item.platform}
                      </span>
                    </div>
                    <div className="px-4 py-4">
                      <p className="text-[12px] text-gray-500 mb-2" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        "{item.query}"
                      </p>
                      <div className="flex items-start gap-2">
                        <span className="text-[11px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                          #1
                        </span>
                        <div>
                          <p className="text-white text-[14px] font-medium" style={{ fontFamily: "'Figtree', sans-serif" }}>
                            {servicesDemoData[servicesDemoIndex].business}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5" style={{ fontFamily: "'Figtree', sans-serif" }}>
                            {servicesDemoData[servicesDemoIndex].tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Progress dots */}
                <div className="flex justify-center gap-2 pt-3">
                  {servicesDemoData.map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: i === servicesDemoIndex ? sage : `${charcoal}30`,
                        transform: i === servicesDemoIndex ? 'scale(1.2)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>

                <div className="text-center pt-1">
                  <p className="text-[12px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                    Same business. Every AI platform.{" "}
                    <span style={{ color: sage }}>That's GEO.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES SECTION ============ */}
      <section id="industries" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: charcoal }}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: sage }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
            style={{ backgroundColor: dustyRose }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 scroll-animate">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-[12px] tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Figtree', sans-serif", color: sage, backgroundColor: `${sage}15`, border: `1px solid ${sage}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sage }} />
              Industries We Serve in Canada
            </span>
            <h2
              className="text-[36px] md:text-[48px] font-normal mb-5"
              style={{ fontFamily: "'EB Garamond', serif", color: cream }}
            >
              AI SEO & GEO for Canadian Businesses
            </h2>
            <p
              className="text-[17px] max-w-[500px] mx-auto leading-relaxed"
              style={{ fontFamily: "'Figtree', sans-serif", color: `${cream}70` }}
            >
              We specialize in helping Vancouver and Canadian businesses get discovered by AI through our expert GEO and AEO services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 scroll-animate">
            {industries.map((industry, i) => {
              const CardContent = (
                <>
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${industry.color}20` }}
                    >
                      <svg className="w-6 h-6 transition-colors" style={{ color: industry.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                      </svg>
                    </div>
                    {industry.link && (
                      <span
                        className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider"
                        style={{ backgroundColor: `${industry.color}20`, color: industry.color, fontFamily: "'Figtree', sans-serif" }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-[20px] mb-2 transition-colors"
                    style={{ fontFamily: "'EB Garamond', serif", color: cream }}
                  >
                    {industry.name}
                  </h3>
                  <p
                    className="text-[14px] mb-6 leading-relaxed"
                    style={{ fontFamily: "'Figtree', sans-serif", color: `${cream}60` }}
                  >
                    {industry.desc}
                  </p>
                  <div
                    className="flex items-center gap-2 text-[13px] transition-all duration-300 group-hover:gap-3"
                    style={{ fontFamily: "'Figtree', sans-serif", color: industry.color }}
                  >
                    <span>{industry.link ? 'View dedicated page' : 'Learn more'}</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: industry.color }}
                  />
                </>
              );

              return industry.link ? (
                <Link
                  key={i}
                  href={industry.link}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: `${cream}08`,
                    border: `1px solid ${cream}15`,
                  }}
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={i}
                  className="group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: `${cream}08`,
                    border: `1px solid ${cream}15`,
                  }}
                  onClick={() => scrollToSection("contact")}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14 scroll-animate">
            <p
              className="text-[15px] mb-6"
              style={{ fontFamily: "'Figtree', sans-serif", color: `${cream}60` }}
            >
              Don't see your industry? We work with all local service businesses.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] transition-all duration-300 hover:gap-3 cursor-pointer"
              style={{
                fontFamily: "'Figtree', sans-serif",
                color: charcoal,
                backgroundColor: cream,
              }}
            >
              <span>Get your free audit</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="process" className="py-24 md:py-32" style={{ backgroundColor: cream }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 scroll-animate">
            <span
              className="text-[12px] tracking-[0.2em] uppercase mb-4 block"
              style={{ fontFamily: "'Figtree', sans-serif", color: sage }}
            >
              How It Works
            </span>
            <h2
              className="text-[36px] md:text-[44px] font-normal mb-4"
              style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
            >
              From invisible to recommended
            </h2>
            <p
              className="text-[17px] max-w-[550px] mx-auto"
              style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
            >
              A clear path to getting found by AI — no mystery, no fluff.
            </p>
          </div>

          <div className="relative scroll-animate">
            <div className="hidden md:block absolute top-[60px] left-[16.66%] right-[16.66%] h-[2px]" style={{ backgroundColor: `${sage}20` }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Audit",
                  desc: "We run 20+ prompts across ChatGPT, Perplexity, Claude, and Google AI. You see exactly where you're missing — and why.",
                  highlight: "Free to start"
                },
                {
                  num: "02",
                  title: "Optimize",
                  desc: "We fix your profiles, add schema markup, write AI-friendly content, and set up systems for consistent reviews.",
                  highlight: "Real work, not reports"
                },
                {
                  num: "03",
                  title: "Grow",
                  desc: "We get you mentioned in directories, local features, and industry content. The signals AI trusts compound over time.",
                  highlight: "Lasting visibility"
                },
              ].map((step, i) => (
                <div key={i} className="relative text-center">
                  <div
                    className="w-[120px] h-[120px] rounded-full mx-auto flex items-center justify-center mb-6 relative z-10"
                    style={{ backgroundColor: cream, border: `3px solid ${sage}` }}
                  >
                    <span
                      className="text-[32px]"
                      style={{ fontFamily: "'EB Garamond', serif", color: sage }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <h3
                    className="text-[26px] mb-3"
                    style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.7] mb-4 max-w-[280px] mx-auto"
                    style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                  >
                    {step.desc}
                  </p>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[12px]"
                    style={{ backgroundColor: `${sage}15`, color: sage, fontFamily: "'Figtree', sans-serif" }}
                  >
                    {step.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 scroll-animate">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-full text-white text-[15px] transition-all hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: sage, fontFamily: "'Figtree', sans-serif" }}
            >
              Start with a Free Audit
            </button>
          </div>
        </div>
      </section>

      {/* ============ PRICING SECTION ============ */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 scroll-animate">
            <span
              className="text-[12px] tracking-[0.2em] uppercase mb-4 block"
              style={{ fontFamily: "'Figtree', sans-serif", color: sage }}
            >
              Investment
            </span>
            <h2
              className="text-[36px] md:text-[44px] font-normal mb-4"
              style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
            >
              Choose your path to visibility
            </h2>
            <p
              className="text-[17px] max-w-[550px] mx-auto"
              style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
            >
              Start with a one-time setup or grow with ongoing optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-animate">
            <div className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: cream, border: '1px solid #e5e5e5' }}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3
                    className="text-[26px] mb-1"
                    style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
                  >
                    Foundation
                  </h3>
                  <p className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                    One-time setup
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[28px]" style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}>
                    $1,500-$2,000
                  </span>
                  <p className="text-[12px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                    CAD, one-time
                  </p>
                </div>
              </div>

              <p className="text-[15px] mb-6" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                Everything you need to establish your AI presence. Delivered in 2 weeks.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Complete GBP optimization",
                  "Schema markup installation",
                  "Directory audit & cleanup",
                  "15-question FAQ page",
                  "AI visibility baseline report",
                  "Review request templates",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: sage }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3.5 rounded-full border-2 transition-all hover:bg-white cursor-pointer text-[14px]"
                style={{ borderColor: charcoal, color: charcoal, fontFamily: "'Figtree', sans-serif" }}
              >
                Get Started
              </button>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10 relative border-2"
              style={{ backgroundColor: `${sage}05`, borderColor: sage }}
            >
              <div
                className="absolute -top-3 right-8 px-4 py-1 rounded-full text-[11px] uppercase tracking-wider"
                style={{ backgroundColor: sage, color: 'white', fontFamily: "'Figtree', sans-serif" }}
              >
                Recommended
              </div>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3
                    className="text-[26px] mb-1"
                    style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
                  >
                    Growth
                  </h3>
                  <p className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                    Monthly retainer
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[28px]" style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}>
                    $900-$1,200
                  </span>
                  <p className="text-[12px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                    CAD/month
                  </p>
                </div>
              </div>

              <p className="text-[15px] mb-6" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                Foundation setup + ongoing content creation, tracking, and authority building.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Everything in Foundation",
                  "Monthly AI visibility tracking",
                  "1 blog post/guide per month",
                  "2 GBP posts per month",
                  "Review strategy support",
                  "Directory outreach",
                  "Monthly strategy call",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: sage }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3.5 rounded-full text-white transition-all hover:opacity-90 cursor-pointer text-[14px]"
                style={{ backgroundColor: sage, fontFamily: "'Figtree', sans-serif" }}
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="mt-12 text-center scroll-animate">
            <p
              className="text-[15px] max-w-[600px] mx-auto"
              style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
            >
              One AI-referred customer that converts pays for months of this work.
              Unlike ads, the visibility you build <span style={{ color: charcoal, fontWeight: 500 }}>compounds over time</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="py-24 md:py-32" style={{ backgroundColor: cream }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12 scroll-animate">
            <h2
              className="text-[32px] md:text-[40px] font-normal"
              style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
            >
              Common questions
            </h2>
          </div>

          <div className="space-y-4 scroll-animate">
            {[
              {
                q: "What is AI SEO, GEO, and AEO?",
                a: "AI SEO optimizes your business for AI-powered search. GEO (Generative Engine Optimization) focuses on getting recommended by generative AI like ChatGPT. AEO (Answer Engine Optimization) ensures AI assistants cite your business as the answer. We're Vancouver's experts in all three."
              },
              {
                q: "Do you guarantee AI rankings?",
                a: "No — and be wary of anyone who does. AI models evolve constantly. What we guarantee is the work: concrete deliverables, monthly tracking, and proven strategies. We show you progress, not promises."
              },
              {
                q: "How is GEO different from traditional SEO?",
                a: "Traditional SEO optimizes for Google's algorithm. GEO and AEO optimize for how AI pulls and cites information — your reviews, directory consistency, website structure, and web mentions. Different sources, different signals."
              },
              {
                q: "How long until I see results?",
                a: "Some signals move fast — profile fixes and website changes can impact within weeks. Authority building takes longer. You'll see progress reports every month showing exactly where you stand."
              },
              {
                q: "Do you work with businesses outside Vancouver?",
                a: "Yes! While we're based in Vancouver, BC, we work with businesses across Canada and the US. Our AI SEO and GEO strategies work for any local service business — real estate, legal, healthcare, restaurants, home services, and wedding vendors."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-gray-100"
              >
                <h3
                  className="text-[16px] mb-2"
                  style={{ fontFamily: "'Figtree', sans-serif", color: charcoal, fontWeight: 500 }}
                >
                  {item.q}
                </h3>
                <p
                  className="text-[14px] leading-[1.7]"
                  style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION ============ */}
      <section id="contact" className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 scroll-animate">
              <h2
                className="text-[32px] md:text-[40px] font-normal leading-[1.2] mb-6"
                style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
              >
                See how AI sees you today
              </h2>

              <p
                className="text-[17px] leading-[1.8] mb-8"
                style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
              >
                Get a free audit showing exactly where you appear in AI recommendations —
                and what needs to change.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "20+ prompts tested across AI platforms",
                  "See your current visibility score",
                  "Get actionable recommendations",
                  "Results within 48 hours",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${sage}15` }}
                    >
                      <svg className="w-3 h-3" style={{ color: sage }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t" style={{ borderColor: '#e5e5e5' }}>
                <p className="text-[13px] mb-1" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                  Questions?
                </p>
                <a
                  href="mailto:cloverspaceinfo@gmail.com"
                  className="text-[15px] hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "'Figtree', sans-serif", color: sage }}
                >
                  cloverspaceinfo@gmail.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 scroll-animate">
              <form onSubmit={handleSubmit} className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: cream }}>
                <h3
                  className="text-[22px] mb-6"
                  style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
                >
                  Request your free audit
                </h3>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[12px] tracking-wider uppercase block mb-2"
                      style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b-2 border-gray-200 py-3 text-[15px] focus:border-gray-400 outline-none transition-colors bg-transparent"
                      style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}
                      placeholder="Your name"
                    />
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="absolute -left-[9999px]"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-[12px] tracking-wider uppercase block mb-2"
                      style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b-2 border-gray-200 py-3 text-[15px] focus:border-gray-400 outline-none transition-colors bg-transparent"
                      style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}
                      placeholder="you@yourbusiness.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-[12px] tracking-wider uppercase block mb-2"
                      style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                    >
                      Tell us about your business
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full border-b-2 border-gray-200 py-3 text-[15px] focus:border-gray-400 outline-none transition-colors resize-none bg-transparent"
                      style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}
                      placeholder="What do you do and where are you located?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full py-4 rounded-full text-white text-[15px] font-medium transition-all hover:opacity-90 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: sage, fontFamily: "'Figtree', sans-serif" }}
                  >
                    {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent! We'll be in touch." : "Get My Free Audit"}
                  </button>

                  <p
                    className="text-center text-[12px]"
                    style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                  >
                    No spam. We'll only reach out about your audit.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-12 border-t" style={{ backgroundColor: cream, borderColor: `${charcoal}10` }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <span className="text-[18px]" style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}>
                CloverSpace
              </span>
              <span className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                AI SEO & GEO Agency Vancouver, Canada
              </span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/wedding"
                className="text-[14px] hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
              >
                Wedding GEO
              </Link>
              <a
                href="mailto:cloverspaceinfo@gmail.com"
                className="text-[14px] hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
              >
                Email
              </a>
              <span className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                Vancouver, BC
              </span>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t" style={{ borderColor: `${charcoal}10` }}>
            <p className="text-[13px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
              © {new Date().getFullYear()} CloverSpace
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
