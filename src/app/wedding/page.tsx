"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [scrolled, setScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [demoPhase, setDemoPhase] = useState<"typing" | "thinking" | "response">("typing");
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  // Soft, romantic color palette
  const sage = "#9CAF88";
  const cream = "#FFFDF7";
  const dustyRose = "#D4A5A5";
  const charcoal = "#3D3D3D";
  const warmGray = "#6B6B6B";

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

    // Phase 1: Type out the query
    const typeInterval = setInterval(() => {
      if (charIndex < query.length) {
        setDisplayedQuery(query.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Phase 2: Show thinking dots
        setDemoPhase("thinking");

        // Phase 3: Show response after thinking
        setTimeout(() => {
          setDemoPhase("response");
          setShowResponse(true);

          // Move to next demo after showing response
          setTimeout(() => {
            setActiveDemo((prev) => (prev + 1) % 4);
          }, 3500);
        }, 1000);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [activeDemo]);

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

  const demoQueries = [
    { query: "Best wedding photographer in Austin", answer: "Sarah Mills Photography", type: "ChatGPT" },
    { query: "Romantic vineyard wedding venues Napa", answer: "Vineyard Grove Estate", type: "Perplexity" },
    { query: "Top wedding florists in Denver", answer: "Petals & Stems Studio", type: "Claude" },
    { query: "Wedding planner recommendations Chicago", answer: "Elegant Affairs Co", type: "Google AI" },
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
              {["Services", "Process", "About", "Contact"].map((item) => (
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
            {["Services", "Process", "About"].map((item) => (
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
              {["Services", "Process", "About", "Contact"].map((item, i) => (
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
        {/* Soft organic shapes */}
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
                  GEO for Wedding Professionals
                </span>
              </div>

              <h1 className="mb-6">
                <span
                  className="block text-[42px] md:text-[56px] lg:text-[64px] font-normal leading-[1.1] tracking-[-0.02em]"
                  style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
                >
                  When couples ask AI,
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
                Engaged couples are using ChatGPT and Perplexity to find their perfect vendors.
                We make sure you're the one they discover.
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
                {/* ChatGPT Header */}
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

                {/* Chat Content */}
                <div className="px-5 py-8 min-h-[280px]" style={{ backgroundColor: '#212121' }}>
                  {/* User Message - Right aligned */}
                  <div className="flex justify-end mb-8">
                    <p className="text-[15px] text-white leading-relaxed text-right" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      {displayedQuery}
                      {demoPhase === "typing" && (
                        <span className="inline-block w-[2px] h-[16px] bg-white ml-[2px] animate-pulse" />
                      )}
                    </p>
                  </div>

                  {/* AI Response - Left aligned */}
                  {(demoPhase === "thinking" || demoPhase === "response") && (
                    <div className="text-left">
                      {/* Thinking dots */}
                      {demoPhase === "thinking" && (
                        <div className="flex gap-1 py-2">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '600ms' }} />
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms', animationDuration: '600ms' }} />
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms', animationDuration: '600ms' }} />
                        </div>
                      )}

                      {/* Actual response */}
                      {showResponse && (
                        <div className="animate-fadeIn">
                          <p className="text-[15px] text-gray-300 leading-[1.7]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                            Here's a curated list of the best options for <span className="text-white">{demoQueries[activeDemo].answer}</span>, grouped by style so you can quickly find what fits your vision.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="px-4 py-3" style={{ backgroundColor: '#212121' }}>
                  <div className="rounded-full px-4 py-3 flex items-center gap-3" style={{ backgroundColor: '#303030' }}>
                    <span className="text-[14px] text-gray-500 flex-1" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      Ask anything
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
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

      {/* ============ AI GROWTH GRAPH ============ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2
              className="text-[32px] md:text-[42px] lg:text-[48px] font-normal leading-[1.2] mb-4"
              style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
            >
              Couples Are Discovering Vendors Differently
            </h2>
            <p
              className="text-[16px] md:text-[18px]"
              style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
            >
              AI tools are shaping shortlists before couples ever click Google
            </p>
          </div>
          <div className="scroll-animate">
            <img
              src="/graph.png"
              alt="Growth of Wedding Vendor Recommendations Driven by AI"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ============ GET DISCOVERED SECTION ============ */}
      {/* White background with floating card */}
      <div className="relative" style={{ backgroundColor: 'white' }}>
        <div className="pb-32 md:pb-40">
          {/* This is just spacing for the cream area */}
        </div>

        {/* Floating Card - overlaps both sections */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-[900px] px-6 md:px-12 z-10">
          <div
            className="rounded-3xl p-8 md:p-12 shadow-lg scroll-animate"
            style={{ backgroundColor: cream, border: '1px solid #e5e5e5' }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left Content */}
              <div className="flex-1">
                <h3
                  className="text-[24px] md:text-[32px] font-normal leading-[1.2] mb-4"
                  style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
                >
                  Lorem Ipsum Dolor Sit
                </h3>
                <p
                  className="text-[14px] md:text-[15px] leading-[1.7] mb-6"
                  style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                >
                  Lorem ipsum dolor sit amet consectetur. Quam dignissim amet sed tristique porttitor. Nibh id etiam eu elementum nullam molestie. Amet posuere auctor donec integer at ut.
                </p>
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-6 py-3 rounded-full text-white text-[14px] transition-all hover:opacity-90 cursor-pointer"
                  style={{ backgroundColor: sage, fontFamily: "'Figtree', sans-serif" }}
                >
                  Get To Know Us
                </button>
              </div>

              {/* Right - Placeholder for Illustration */}
              <div className="flex-shrink-0">
                <div
                  className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-2xl flex items-center justify-center border-2 border-dashed"
                  style={{ borderColor: warmGray, backgroundColor: `${warmGray}10` }}
                >
                  <p
                    className="text-[13px] text-center px-4"
                    style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
                  >
                    Illustration: Person sitting with coffee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Olive section with rounded top */}
      <section
        className="pt-40 md:pt-48 pb-16 md:pb-24"
        style={{
          backgroundColor: '#6B7B5E',
          borderTopLeftRadius: '48px',
          borderTopRightRadius: '48px',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* AI Discovery Demo */}
          <div className="text-center scroll-animate">
            <h3
              className="text-[28px] md:text-[36px] font-normal leading-[1.2] mb-4"
              style={{ fontFamily: "'EB Garamond', serif", color: cream }}
            >
              Let us help you get discovered through AI
            </h3>
            <p
              className="text-[15px] leading-[1.7] mb-10 max-w-[500px] mx-auto"
              style={{ fontFamily: "'Figtree', sans-serif", color: `${cream}90` }}
            >
              Lorem ipsum dolor sit amet consectetur. Quam dignissim amet sed tristique porttitor. Nibh id etiam eu elementum nullam molestie. Amet posuere
            </p>

            {/* Google AI Overview Demo */}
            <div className="max-w-[800px] mx-auto">
              {/* Browser Window */}
              <div className="rounded-xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#202124' }}>
                {/* Browser Chrome */}
                <div className="flex items-center gap-3 px-4 py-2.5" style={{ backgroundColor: '#35363a' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ed6a5e]" />
                    <div className="w-3 h-3 rounded-full bg-[#f4bf4f]" />
                    <div className="w-3 h-3 rounded-full bg-[#61c554]" />
                  </div>
                  <div
                    className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px]"
                    style={{ backgroundColor: '#202124', color: '#9aa0a6' }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    google.com/search?q=best+wedding+photographer+vancouver
                  </div>
                </div>

                {/* Google Page Content */}
                <div className="p-4" style={{ backgroundColor: '#202124' }}>
                  {/* Google Logo + Search Bar */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[24px] font-medium" style={{ fontFamily: 'Arial' }}>
                      <span style={{ color: '#4285f4' }}>G</span>
                      <span style={{ color: '#ea4335' }}>o</span>
                      <span style={{ color: '#fbbc05' }}>o</span>
                      <span style={{ color: '#4285f4' }}>g</span>
                      <span style={{ color: '#34a853' }}>l</span>
                      <span style={{ color: '#ea4335' }}>e</span>
                    </span>
                    <div
                      className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-full"
                      style={{ backgroundColor: '#303134', border: '1px solid #5f6368' }}
                    >
                      <span className="text-[14px]" style={{ color: '#e8eaed', fontFamily: "'Figtree', sans-serif" }}>
                        best wedding photographer vancouver bc
                      </span>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-4 mb-4 text-[12px] border-b border-[#3c4043] pb-2">
                    <span style={{ color: '#8ab4f8', borderBottom: '2px solid #8ab4f8', paddingBottom: '6px' }}>All</span>
                    <span style={{ color: '#9aa0a6' }}>Images</span>
                    <span style={{ color: '#9aa0a6' }}>Videos</span>
                    <span style={{ color: '#9aa0a6' }}>Shopping</span>
                    <span style={{ color: '#9aa0a6' }}>News</span>
                  </div>

                  {/* AI Overview Card */}
                  <div
                    className="rounded-xl p-5 text-left"
                    style={{ backgroundColor: '#303134' }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L9 9H2L7.5 13.5L5.5 21L12 16.5L18.5 21L16.5 13.5L22 9H15L12 2Z" fill="url(#sparkle2)" />
                        <defs>
                          <linearGradient id="sparkle2" x1="2" y1="2" x2="22" y2="21">
                            <stop stopColor="#4285f4" />
                            <stop offset="0.5" stopColor="#9b72cb" />
                            <stop offset="1" stopColor="#d96570" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="text-[13px]" style={{ color: '#bdc1c6', fontFamily: "'Figtree', sans-serif" }}>
                        AI Overview
                      </span>
                    </div>

                    {/* Main Layout */}
                    <div className="flex gap-5">
                      {/* Left - Text Content */}
                      <div className="flex-1">
                        {/* Paragraph */}
                        <p
                          className="text-[13px] leading-[1.8] mb-4"
                          style={{ color: '#bdc1c6', fontFamily: "'Figtree', sans-serif" }}
                        >
                          Blush & Bloom Photography is{' '}
                          <strong style={{ backgroundColor: '#3b5567', borderRadius: '2px', padding: '0 2px', fontWeight: 600 }}>a highly sought-after Vancouver wedding photographer known for</strong>{' '}
                          <strong style={{ backgroundColor: '#3b5567', borderRadius: '2px', padding: '0 2px', fontWeight: 600 }}>romantic, fine-art imagery that captures the Pacific Northwest's natural beauty</strong>{' '}
                          <strong style={{ backgroundColor: '#3b5567', borderRadius: '2px', padding: '0 2px', fontWeight: 600 }}>and intimate moments</strong>. They specialize in outdoor ceremonies at Stanley Park, vineyard weddings in the Okanagan, and elegant ballroom receptions across Greater Vancouver.
                        </p>

                        {/* Key Characteristics Section */}
                        <p
                          className="text-[14px] font-bold mb-2"
                          style={{ color: '#e8eaed', fontFamily: "'Figtree', sans-serif" }}
                        >
                          Key Characteristics:
                        </p>
                        <ul className="space-y-1.5 mb-4">
                          <li className="flex items-start gap-1">
                            <span className="text-[13px]" style={{ color: '#bdc1c6' }}>•</span>
                            <span className="text-[13px]" style={{ color: '#bdc1c6', fontFamily: "'Figtree', sans-serif" }}>
                              <strong style={{ color: '#e8eaed' }}>Fine-art style:</strong> Soft, romantic imagery with a focus on natural light and candid emotion.
                            </span>
                          </li>
                          <li className="flex items-start gap-1">
                            <span className="text-[13px]" style={{ color: '#bdc1c6' }}>•</span>
                            <span className="text-[13px]" style={{ color: '#bdc1c6', fontFamily: "'Figtree', sans-serif" }}>
                              <strong style={{ color: '#e8eaed' }}>Local expertise:</strong> Familiar with top Vancouver venues including Fairmont Pacific Rim and Brock House.
                            </span>
                          </li>
                          <li className="flex items-start gap-1">
                            <span className="text-[13px]" style={{ color: '#bdc1c6' }}>•</span>
                            <span className="text-[13px]" style={{ color: '#bdc1c6', fontFamily: "'Figtree', sans-serif" }}>
                              <strong style={{ color: '#e8eaed' }}>Highly rated:</strong> 5-star reviews on Google and WeddingWire with 200+ weddings photographed.
                            </span>
                          </li>
                        </ul>

                        {/* Show More */}
                        <button
                          className="flex items-center gap-1 text-[12px] px-4 py-2 rounded-full"
                          style={{ backgroundColor: '#3c4043', color: '#8ab4f8', fontFamily: "'Figtree', sans-serif" }}
                        >
                          Show more
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Right Column - Sources */}
                      <div className="w-[180px] space-y-3">
                        {/* Source Card 1 */}
                        <div className="flex items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] leading-snug mb-0.5" style={{ color: '#8ab4f8', fontFamily: "'Figtree', sans-serif" }}>
                              Best Vancouver Wedding Photographers 2025
                            </p>
                            <p className="text-[10px] leading-snug mb-1" style={{ color: '#9aa0a6', fontFamily: "'Figtree', sans-serif" }}>
                              Find top-rated wedding photographers in Vancouver, BC...
                            </p>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ea4335' }} />
                              <span className="text-[9px]" style={{ color: '#9aa0a6' }}>weddingwire.ca</span>
                            </div>
                          </div>
                          <div
                            className="w-[55px] h-[55px] rounded-lg flex-shrink-0 flex items-center justify-center text-[7px]"
                            style={{ backgroundColor: '#3c4043', color: '#9aa0a6' }}
                          >
                            IMG
                          </div>
                        </div>

                        {/* Source Card 2 */}
                        <div className="flex items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] leading-snug mb-0.5" style={{ color: '#8ab4f8', fontFamily: "'Figtree', sans-serif" }}>
                              Top Wedding Photographers | Vancouver
                            </p>
                            <p className="text-[10px] leading-snug mb-1" style={{ color: '#9aa0a6', fontFamily: "'Figtree', sans-serif" }}>
                              Browse portfolios and reviews from local vendors...
                            </p>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#34a853' }} />
                              <span className="text-[9px]" style={{ color: '#9aa0a6' }}>junebugweddings.com</span>
                            </div>
                          </div>
                          <div
                            className="w-[55px] h-[55px] rounded-lg flex-shrink-0 flex items-center justify-center text-[7px]"
                            style={{ backgroundColor: '#3c4043', color: '#9aa0a6' }}
                          >
                            IMG
                          </div>
                        </div>

                        {/* Source Card 3 */}
                        <div className="flex items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] leading-snug mb-0.5" style={{ color: '#8ab4f8', fontFamily: "'Figtree', sans-serif" }}>
                              Vancouver Wedding Photography Guide
                            </p>
                            <p className="text-[10px] leading-snug mb-1" style={{ color: '#9aa0a6', fontFamily: "'Figtree', sans-serif" }}>
                              Expert tips for finding your perfect photographer...
                            </p>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fbbc05' }} />
                              <span className="text-[9px]" style={{ color: '#9aa0a6' }}>vancouverbride.com</span>
                            </div>
                          </div>
                          <div
                            className="w-[55px] h-[55px] rounded-lg flex-shrink-0 flex items-center justify-center text-[7px]"
                            style={{ backgroundColor: '#3c4043', color: '#9aa0a6' }}
                          >
                            IMG
                          </div>
                        </div>

                        {/* Show All Button */}
                        <button
                          className="w-full py-2 rounded-full text-[11px]"
                          style={{ backgroundColor: '#3c4043', color: '#8ab4f8', fontFamily: "'Figtree', sans-serif" }}
                        >
                          Show all
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-10 px-8 py-4 rounded-full text-[15px] font-medium transition-all hover:opacity-90 hover:scale-105 cursor-pointer shadow-lg"
                style={{ backgroundColor: cream, color: charcoal, fontFamily: "'Figtree', sans-serif" }}
              >
                Get Your Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>

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
              style={{ fontFamily: "'Figtree', sans-serif", color: dustyRose }}
            >
              The uncomfortable truth
            </p>
            <h2
              className="text-[32px] md:text-[48px] font-normal leading-[1.2] mb-8"
              style={{ fontFamily: "'EB Garamond', serif", color: cream }}
            >
              Right now, AI is recommending<br />
              <span style={{ color: dustyRose }}>your competitors instead of you</span>
            </h2>
            <p
              className="text-[18px] leading-[1.8] max-w-[600px] mx-auto mb-12"
              style={{ fontFamily: "'Figtree', sans-serif", color: `${cream}80` }}
            >
              When couples ask ChatGPT or Perplexity for vendor recommendations,
              AI doesn't show ads or featured listings. It recommends whoever has
              the clearest, most consistent presence online.
            </p>

            {/* Pain Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {[
                { stat: "0/20", label: "Most vendors appear in zero AI prompts" },
                { stat: "73%", label: "Of couples now use AI for vendor research" },
                { stat: "$0", label: "You're paying for ads AI doesn't read" },
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

      {/* ============ WHAT WE FIX SECTION ============ */}
      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: cream }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="scroll-animate">
              <p
                className="text-[13px] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Figtree', sans-serif", color: sage }}
              >
                What we fix
              </p>
              <h2
                className="text-[36px] md:text-[44px] font-normal leading-[1.2] mb-6"
                style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
              >
                We make AI choose you
              </h2>
              <p
                className="text-[17px] leading-[1.8] mb-8"
                style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
              >
                GEO (Generative Engine Optimization) is about making your business
                the obvious answer when AI searches for recommendations. We fix the
                signals that AI trusts.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Your Google Business Profile", desc: "Complete, accurate, optimized for AI extraction" },
                  { title: "Your website structure", desc: "Schema markup, FAQs, and content AI can cite" },
                  { title: "Your review presence", desc: "Consistent reviews across platforms AI trusts" },
                  { title: "Your mentions", desc: "Featured in listicles and directories AI pulls from" },
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

            {/* Right - Visual Comparison */}
            <div className="scroll-animate">
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#212121' }}>
                {/* Header */}
                <div className="px-5 py-3 flex items-center gap-2" style={{ backgroundColor: '#2a2a2a' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#10a37f' }} />
                  <span className="text-[13px] text-gray-400" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    ChatGPT Response
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 text-[14px] mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    "Best wedding photographers in Vancouver?"
                  </p>

                  <div className="space-y-3">
                    {/* Your competitor */}
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                      <span className="text-[14px]" style={{ color: sage }}>1.</span>
                      <span className="text-white text-[14px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        Your Competitor's Studio
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                      <span className="text-[14px]" style={{ color: sage }}>2.</span>
                      <span className="text-white text-[14px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        Another Competitor
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#2a2a2a' }}>
                      <span className="text-[14px]" style={{ color: sage }}>3.</span>
                      <span className="text-white text-[14px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        Yet Another Competitor
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="py-4">
                      <div className="h-px" style={{ backgroundColor: '#3a3a3a' }} />
                      <p className="text-center text-[12px] py-3" style={{ color: dustyRose, fontFamily: "'Figtree', sans-serif" }}>
                        Where's your business?
                      </p>
                      <div className="h-px" style={{ backgroundColor: '#3a3a3a' }} />
                    </div>

                    {/* Your business - highlighted */}
                    <div
                      className="flex items-center gap-3 p-3 rounded-lg border-2"
                      style={{ backgroundColor: `${sage}15`, borderColor: sage }}
                    >
                      <span className="text-[14px]" style={{ color: sage }}>→</span>
                      <span className="text-white text-[14px] font-medium" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        Your Business (after GEO)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS (3 STEPS) ============ */}
      <section id="process" className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
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

          {/* Timeline-style steps */}
          <div className="relative scroll-animate">
            {/* Connecting line - desktop only */}
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
                  desc: "We get you mentioned in listicles, local features, and industry content. The signals AI trusts compound over time.",
                  highlight: "Lasting visibility"
                },
              ].map((step, i) => (
                <div key={i} className="relative text-center">
                  {/* Step number bubble */}
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

          {/* CTA */}
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

      {/* ============ RESULTS SECTION ============ */}
      <section id="about" className="py-24 md:py-32" style={{ backgroundColor: cream }}>
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 scroll-animate">
            <span
              className="text-[12px] tracking-[0.2em] uppercase mb-4 block"
              style={{ fontFamily: "'Figtree', sans-serif", color: sage }}
            >
              What Changes
            </span>
            <h2
              className="text-[36px] md:text-[44px] font-normal mb-4"
              style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
            >
              Real visibility, not vanity metrics
            </h2>
          </div>

          {/* Results comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 scroll-animate">
            {/* Before */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'white', border: '1px solid #e5e5e5' }}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${dustyRose}20` }}
                >
                  <svg className="w-5 h-5" style={{ color: dustyRose }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-[18px]" style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}>
                  Before GEO
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "0 mentions in AI recommendations",
                  "Incomplete or outdated profiles",
                  "No schema markup",
                  "Scattered reviews",
                  "Website AI can't parse",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px]" style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}>
                    <span style={{ color: dustyRose }}>×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl p-8 border-2" style={{ backgroundColor: `${sage}05`, borderColor: sage }}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${sage}20` }}
                >
                  <svg className="w-5 h-5" style={{ color: sage }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[18px]" style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}>
                  After GEO
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "7+ mentions in AI recommendations",
                  "Fully optimized GBP & directories",
                  "Schema markup installed",
                  "Review system generating consistently",
                  "AI-citable content throughout",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px]" style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}>
                    <span style={{ color: sage }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What's included */}
          <div className="rounded-2xl p-8 md:p-10 scroll-animate" style={{ backgroundColor: 'white', border: '1px solid #e5e5e5' }}>
            <h3
              className="text-[22px] mb-6 text-center"
              style={{ fontFamily: "'EB Garamond', serif", color: charcoal }}
            >
              What's included in every engagement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "AI visibility audit (20+ queries)",
                "Google Business Profile optimization",
                "Directory audit & cleanup",
                "Schema markup implementation",
                "FAQ page creation",
                "Review request templates",
                "Monthly tracking reports",
                "Strategy calls",
                "Priority support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `${sage}08` }}>
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: sage }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[14px]" style={{ fontFamily: "'Figtree', sans-serif", color: charcoal }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
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
            {/* Foundation Tier */}
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

            {/* Growth Tier - Featured */}
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
                  "Listicle outreach templates",
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

          {/* ROI Note */}
          <div className="mt-12 text-center scroll-animate">
            <p
              className="text-[15px] max-w-[600px] mx-auto"
              style={{ fontFamily: "'Figtree', sans-serif", color: warmGray }}
            >
              One AI-referred inquiry that converts pays for months of this work.
              Unlike ads, the visibility you build <span style={{ color: charcoal, fontWeight: 500 }}>compounds over time</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL / TRUST SECTION ============ */}
      <section className="py-20 md:py-24" style={{ backgroundColor: charcoal }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center scroll-animate">
          <div className="mb-8">
            <svg className="w-10 h-10 mx-auto opacity-30" style={{ color: cream }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote
            className="text-[24px] md:text-[32px] font-normal leading-[1.4] mb-8"
            style={{ fontFamily: "'EB Garamond', serif", color: cream }}
          >
            "We went from zero AI mentions to being recommended in 8 out of 20 prompts.
            Couples are now finding us through ChatGPT before they even check The Knot."
          </blockquote>
          <div>
            <p className="text-[15px] font-medium" style={{ fontFamily: "'Figtree', sans-serif", color: cream }}>
              — Wedding Photographer
            </p>
            <p className="text-[13px]" style={{ fontFamily: "'Figtree', sans-serif", color: `${cream}60` }}>
              Vancouver, BC
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
                q: "Do you guarantee AI rankings?",
                a: "No — and be wary of anyone who does. AI models evolve constantly. What we guarantee is the work: concrete deliverables, monthly tracking, and proven strategies. We show you progress, not promises."
              },
              {
                q: "How is this different from SEO?",
                a: "SEO optimizes for Google's algorithm. GEO optimizes for how AI pulls and cites information — your reviews, directory consistency, website structure, and web mentions. Different sources, different signals."
              },
              {
                q: "How long until I see results?",
                a: "Some signals move fast — profile fixes and website changes can impact within weeks. Authority building takes longer. You'll see progress reports every month showing exactly where you stand."
              },
              {
                q: "I'm already on The Knot. Is that enough?",
                a: "Those reviews help, but AI doesn't read ads or featured listings. It reads reviews, consistency, and authority signals across the web. We make sure AI can find and trust what's already there."
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
            {/* Left - CTA Content */}
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

            {/* Right - Form */}
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
                GEO for wedding professionals
              </span>
            </div>

            <div className="flex items-center gap-6">
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
