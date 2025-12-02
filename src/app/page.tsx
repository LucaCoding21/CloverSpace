"use client";

import { useState, useEffect, useRef } from "react";

// ============ MAIN COMPONENT ============

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [scrolled, setScrolled] = useState(false);
  const [textOn, setTextOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Yellow color from design
  const accentYellow = "#E2A04B";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text is always on - no flickering
  useEffect(() => {
    setTextOn(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white min-h-screen scroll-smooth overflow-x-hidden">

      {/* ============ NAVIGATION - INITIAL BAR (hides on scroll) ============ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo with animated dot */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 group"
            >
              <div className={`w-2 h-2 rounded-full group-hover:scale-125 transition-all duration-500 ${
                textOn ? "shadow-[0_0_8px_rgba(226,160,75,0.6)]" : "bg-white"
              }`} style={{ backgroundColor: textOn ? accentYellow : 'white' }} />
              <span
                className="text-white text-[18px] font-medium tracking-tight"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Clover Space
              </span>
            </button>

            {/* Menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-3 group"
            >
              <span
                className="text-[14px] text-white/60 group-hover:text-white transition-colors hidden sm:block"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Menu
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-[1.5px] bg-white group-hover:w-4 transition-all" />
                <div className="w-4 h-[1.5px] bg-white group-hover:w-6 transition-all" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ============ FLOATING NAV - APPEARS ON SCROLL ============ */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-xl rounded-full px-2 py-2 shadow-lg shadow-black/5 border border-black/5">
          {/* Compact logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-white text-[12px] font-semibold">CS</span>
          </button>

          {/* Nav items */}
          <div className="hidden md:flex items-center">
            {[
              { label: "Work", id: "work" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-[13px] text-black/60 hover:text-black transition-colors rounded-full hover:bg-black/5"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 text-[13px] text-white bg-black rounded-full hover:bg-black/80 transition-colors ml-1"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* ============ FULL-SCREEN MENU OVERLAY ============ */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-[#fafafa] transition-transform duration-700 ease-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="max-w-[1440px] w-full mx-auto px-6 md:px-16">
            <div className="flex items-center justify-between h-20">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-black" />
                <span
                  className="text-black text-[18px] font-medium tracking-tight"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  Clover Space
                </span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 group"
              >
                <span
                  className="text-[14px] text-black/60 group-hover:text-black transition-colors"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  Close
                </span>
                <div className="w-6 h-6 relative">
                  <div className="absolute top-1/2 left-0 w-6 h-[1.5px] bg-black rotate-45" />
                  <div className="absolute top-1/2 left-0 w-6 h-[1.5px] bg-black -rotate-45" />
                </div>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center max-w-[1440px] w-full mx-auto px-6 md:px-16">
            <nav className="space-y-2">
              {[
                { label: "Work", id: "work", num: "01" },
                { label: "About", id: "about", num: "02" },
                { label: "Services", id: "services", num: "03" },
                { label: "Contact", id: "contact", num: "04" },
              ].map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center gap-6 w-full text-left transition-all duration-500 ${
                    mobileMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${150 + i * 75}ms` : "0ms",
                  }}
                >
                  <span
                    className="text-[12px] text-black/30 w-6"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    {item.num}
                  </span>
                  <span
                    className="text-[48px] md:text-[72px] lg:text-[96px] font-medium text-black leading-[1.1] tracking-tight group-hover:text-black/40 transition-colors"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {item.label}
                  </span>
                  <div className="flex-1 h-[1px] bg-black/10 group-hover:bg-black/30 transition-colors hidden md:block" />
                  <svg
                    className="w-6 h-6 text-black/20 group-hover:text-black group-hover:translate-x-2 transition-all hidden md:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div
            className={`max-w-[1440px] w-full mx-auto px-6 md:px-16 py-8 transition-all duration-500 ${
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "400ms" : "0ms" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-black/10 pt-8">
              <a
                href="mailto:hello@cloverspace.co"
                className="text-[15px] text-black/60 hover:text-black transition-colors"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                hello@cloverspace.co
              </a>
              <div className="flex items-center gap-6">
                {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[13px] text-black/40 hover:text-black transition-colors"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ HERO SECTION ============ */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/HeroVideo.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Hero Content - Right aligned */}
        <div className="relative h-full flex items-center">
          <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16">
            <div className="max-w-[700px] ml-auto">
              {/* Main headline */}
              <h1 className="mb-8">
                <span
                  className="block text-[44px] md:text-[60px] lg:text-[72px] font-medium text-white leading-[1.1] tracking-[-0.02em]"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    textShadow: "0 0 30px rgba(255,255,255,0.3)"
                  }}
                >
                  Your Website Should
                </span>
                <span
                  className="block text-[44px] md:text-[60px] lg:text-[72px] font-medium leading-[1.1] tracking-[-0.02em]"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  <span className="text-white" style={{ textShadow: "0 0 30px rgba(255,255,255,0.3)" }}>Bring You </span>
                  <span
                    className="italic"
                    style={{
                      color: accentYellow,
                      textShadow: `0 0 40px ${accentYellow}50`
                    }}
                  >
                    Business
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-[16px] md:text-[18px] text-white/80 max-w-[480px] leading-[1.7] mb-10"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                }}
              >
                We're a duo based in Vancouver, BC helping local businesses turn their online presence into real revenue.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-5">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: accentYellow }}
                >
                  <span
                    className="text-[16px] font-medium text-black"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    Let's Build It
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("work")}
                  className="group flex items-center gap-3 px-8 py-4 border border-white/50 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  <span
                    className="text-[16px] text-white"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    See Results
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR WORK SECTION - White Background ============ */}
      <section id="work" className="relative py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[11px] md:text-[12px] tracking-[0.2em] text-gray-400 uppercase"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Our Work
              </span>
              <div className="h-[1px] w-12 bg-gray-300" />
            </div>

            <h2
              className="text-[32px] md:text-[44px] lg:text-[52px] font-medium leading-[1.05] tracking-tight"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Meaningful,
              <br />
              Measurable Design
            </h2>
          </div>

          {/* Project Grid - 3 columns x 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Coastal Cafe", type: "Restaurant", result: "+180% bookings" },
              { name: "Urban Fitness", type: "Gym & Wellness", result: "+95 new members" },
              { name: "Green Thumb", type: "Landscaping", result: "3x more leads" },
              { name: "Peak Dental", type: "Healthcare", result: "+220% traffic" },
              { name: "Swift Auto", type: "Auto Services", result: "+$40k revenue" },
              { name: "Luxe Salon", type: "Beauty & Spa", result: "Fully booked" },
            ].map((project, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                {/* Placeholder pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Content overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span
                      className="text-[11px] tracking-[0.15em] uppercase text-gray-400"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      {project.type}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>

                  <div>
                    <h3
                      className="text-[22px] md:text-[26px] font-medium text-gray-900 mb-1"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-[13px] font-medium"
                      style={{ fontFamily: "'Figtree', sans-serif", color: accentYellow }}
                    >
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK - Premium Process Section ============ */}
      <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating gradient orbs */}
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${accentYellow}40 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: `radial-gradient(circle, ${accentYellow}30 0%, transparent 70%)` }}
        />

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative">
          {/* Section Header */}
          <div className="text-center mb-20 md:mb-28">
            <span
              className="inline-block text-[11px] md:text-[12px] tracking-[0.25em] text-gray-500 uppercase mb-6"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              How We Work
            </span>
            <h2
              className="text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-[1.05] tracking-tight text-white mb-6"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Simple process,
              <br />
              <span className="italic" style={{ color: accentYellow }}>exceptional</span> results
            </h2>
            <p
              className="text-[16px] md:text-[18px] text-gray-400 max-w-[500px] mx-auto leading-relaxed"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              No corporate nonsense. No endless meetings. Just a straightforward path from idea to launch.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting line - desktop only */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">

              {/* Step 1 - Discovery */}
              <div className="group relative">
                <div className="relative bg-[#1a1a1a] rounded-3xl p-8 md:p-10 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 h-full">
                  {/* Large number */}
                  <div className="mb-8">
                    <span
                      className="text-[72px] md:text-[88px] font-medium leading-none transition-colors duration-500"
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        color: accentYellow
                      }}
                    >
                      01
                    </span>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-[26px] md:text-[32px] font-medium text-white mb-4 leading-tight"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    Discovery Call
                  </h3>
                  <p
                    className="text-[15px] text-gray-400 leading-relaxed mb-6"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    A quick 15-minute chat. No sales pitch, no pressure. We learn about your business, you learn about us. If we're not a fit, we'll tell you.
                  </p>

                  {/* Duration tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <span
                      className="text-[13px] text-gray-400"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      15 minutes
                    </span>
                  </div>
                </div>

                {/* Arrow connector - mobile */}
                <div className="flex justify-center py-6 lg:hidden">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Step 2 - Design & Build */}
              <div className="group relative">
                <div className="relative bg-[#1a1a1a] rounded-3xl p-8 md:p-10 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 h-full">
                  {/* Large number */}
                  <div className="mb-8">
                    <span
                      className="text-[72px] md:text-[88px] font-medium leading-none transition-colors duration-500"
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        color: accentYellow
                      }}
                    >
                      02
                    </span>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-[26px] md:text-[32px] font-medium text-white mb-4 leading-tight"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    Design & Build
                  </h3>
                  <p
                    className="text-[15px] text-gray-400 leading-relaxed mb-6"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    We get to work. You'll see progress daily - not weekly status updates. Real-time collaboration means your feedback shapes every pixel.
                  </p>

                  {/* Duration tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <span
                      className="text-[13px] text-gray-400"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      5-7 days
                    </span>
                  </div>
                </div>

                {/* Arrow connector - mobile */}
                <div className="flex justify-center py-6 lg:hidden">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Step 3 - Launch & Support */}
              <div className="group relative">
                <div className="relative bg-[#1a1a1a] rounded-3xl p-8 md:p-10 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 h-full overflow-hidden">
                  {/* Special glow for final step */}
                  <div
                    className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                    style={{ backgroundColor: accentYellow }}
                  />

                  {/* Large number */}
                  <div className="mb-8 relative">
                    <span
                      className="text-[72px] md:text-[88px] font-medium leading-none transition-colors duration-500"
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        color: accentYellow
                      }}
                    >
                      03
                    </span>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-[26px] md:text-[32px] font-medium text-white mb-4 leading-tight relative"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    Launch & Support
                  </h3>
                  <p
                    className="text-[15px] text-gray-400 leading-relaxed mb-6 relative"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    Your site goes live. But we don't disappear - you get direct access to us via text or call. Questions at 11pm? We've got you.
                  </p>

                  {/* Duration tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 relative">
                    <span
                      className="text-[13px] text-gray-400"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      Ongoing
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 md:mt-28">
            <p
              className="text-[15px] text-gray-500 mb-6"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Ready to start?
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center gap-4 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: accentYellow }}
            >
              <span
                className="text-[16px] font-medium text-black"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Book Your Discovery Call
              </span>
              <svg
                className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ============ ABOUT US SECTION ============ */}
      <section id="about" className="relative py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left - Text Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-[11px] md:text-[12px] tracking-[0.2em] text-gray-400 uppercase"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  About Us
                </span>
                <div className="h-[1px] w-12 bg-gray-300" />
              </div>

              <h2
                className="text-[32px] md:text-[44px] lg:text-[52px] font-medium leading-[1.1] mb-6"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                Two people,
                <br />
                <span style={{ color: accentYellow }}>One</span> Mission
              </h2>

              <p
                className="text-[14px] md:text-[15px] text-gray-500 leading-[1.8] max-w-[440px]"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Lorem Ipsum Dolor Sit Amet Consectetur. Quam Tincidunt Posuere Augue Dui Est Dui. Volutpat Fermentum Diam Interdum Aenean Imperdiet Feugiat.
              </p>
            </div>

            {/* Right - Visual placeholder */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200">
              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-20 h-20 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: accentYellow }}
                  >
                    <span
                      className="text-[28px] font-medium"
                      style={{ fontFamily: "'EB Garamond', serif", color: accentYellow }}
                    >
                      2
                    </span>
                  </div>
                  <p
                    className="text-[13px] text-gray-400 tracking-wide"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    Person Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section id="contact" className="relative py-16 md:py-24 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Heading */}
            <div>
              <p
                className="text-[11px] md:text-[12px] tracking-[0.2em] text-gray-500 uppercase mb-6"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Let's Talk
              </p>
              <h2
                className="text-[32px] md:text-[44px] lg:text-[52px] font-medium leading-[1.1] mb-8"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                Got a business?
                <br />
                Let's chat.
              </h2>
              <p
                className="text-[14px] md:text-[15px] text-gray-400 leading-[1.8] mb-8 max-w-[380px]"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                No sales pitch, no pressure. Just a quick call to see if we're a good fit. Worst case, you walk away with some free advice.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:hello@cloverspace.co"
                  className="block text-[16px] md:text-[18px] hover:text-gray-400 transition-colors"
                  style={{ fontFamily: "'Figtree', sans-serif", color: accentYellow }}
                >
                  hello@cloverspace.co
                </a>
                <p className="text-[14px] text-gray-500" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  Vancouver, BC
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[11px] tracking-[0.15em] text-gray-500 uppercase block mb-2"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-[15px] text-white placeholder-gray-600 focus:border-white outline-none transition-colors"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[11px] tracking-[0.15em] text-gray-500 uppercase block mb-2"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-[15px] text-white placeholder-gray-600 focus:border-white outline-none transition-colors"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-[11px] tracking-[0.15em] text-gray-500 uppercase block mb-2"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-[15px] text-white placeholder-gray-600 focus:border-white outline-none transition-colors resize-none"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="group flex items-center gap-4 mt-6"
                >
                  <span className="text-[15px] text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Message sent!" : "Send message"}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                    <svg
                      className="w-4 h-4 text-white group-hover:text-black transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="px-6 md:px-16 py-8 bg-[#1a1a1a] border-t border-gray-800">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-gray-600" style={{ fontFamily: "'Figtree', sans-serif" }}>
            © {new Date().getFullYear()} CloverSpace
          </p>
          <div className="flex items-center gap-8">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href={`https://${social.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-gray-600 hover:text-white transition-colors"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
