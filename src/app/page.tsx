"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Torus, Environment, useTexture } from "@react-three/drei";
import * as THREE from "three";

// ============ 3D COMPONENTS - GEOMETRIC COMPOSITION ============

function FloatingFrame({ position, rotation, scale, speed = 1, imageUrl }: { position: [number, number, number], rotation?: [number, number, number], scale?: number, speed?: number, imageUrl: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useTexture(imageUrl);

  useFrame(({ clock, pointer }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2 * speed) * 0.1 + (rotation?.[0] || 0);
      meshRef.current.rotation.y = clock.elapsedTime * 0.1 * speed + (rotation?.[1] || 0);
      meshRef.current.position.x = position[0] + pointer.x * 0.3;
      meshRef.current.position.y = position[1] + pointer.y * 0.2 + Math.sin(clock.elapsedTime * 0.5 * speed) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale || 1}>
      {/* Browser frame bezel */}
      <RoundedBox args={[1.8, 1.15, 0.06]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </RoundedBox>
      {/* Screen with actual work */}
      <mesh position={[0, -0.02, 0.035]}>
        <planeGeometry args={[1.65, 0.95]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

function FloatingRing({ position, scale = 1, speed = 1 }: { position: [number, number, number], scale?: number, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.4 * speed) * 0.5;
      meshRef.current.position.x = position[0] + pointer.x * 0.2;
      meshRef.current.position.y = position[1] + pointer.y * 0.15;
    }
  });

  return (
    <Torus ref={meshRef} args={[0.5, 0.08, 16, 48]} position={position} scale={scale}>
      <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
    </Torus>
  );
}

// Project images for 3D scene
const PROJECT_IMAGES = {
  img1: "https://www.figma.com/api/mcp/asset/218a034e-5e64-48f0-9838-33f87e922636",
  img2: "https://www.figma.com/api/mcp/asset/2643d1d5-1428-4ccd-b209-61e87935347e",
  img3: "https://www.figma.com/api/mcp/asset/3d7a9285-b7ea-450c-a4ff-a42c83ea204c",
};

function HeroScene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, 5]} intensity={0.3} />

      {/* Browser frames with actual work */}
      <FloatingFrame
        position={isMobile ? [0.2, 0.2, 0] : [1.2, 0.3, 0]}
        scale={isMobile ? 0.9 : 1.3}
        speed={0.6}
        imageUrl={PROJECT_IMAGES.img1}
      />
      <FloatingFrame
        position={isMobile ? [0.6, -0.6, -1.2] : [2.4, -0.5, -1.2]}
        rotation={[0.1, -0.2, 0.05]}
        scale={isMobile ? 0.65 : 0.95}
        speed={0.8}
        imageUrl={PROJECT_IMAGES.img2}
      />

      {/* Single accent ring - minimal */}
      <FloatingRing position={isMobile ? [-0.6, 0.7, -0.5] : [0.2, 1, -0.8]} scale={isMobile ? 0.5 : 0.6} speed={0.5} />

      <Environment preset="city" />
    </>
  );
}

// ============ MAIN COMPONENT ============

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [activeProject, setActiveProject] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Figma assets
  const imgImage2 = "https://www.figma.com/api/mcp/asset/218a034e-5e64-48f0-9838-33f87e922636";
  const imgImage3 = "https://www.figma.com/api/mcp/asset/2643d1d5-1428-4ccd-b209-61e87935347e";
  const imgImage4 = "https://www.figma.com/api/mcp/asset/3d7a9285-b7ea-450c-a4ff-a42c83ea204c";

  const projects = [
    { src: imgImage2, name: "HeyCoach", category: "Sports Platform", year: "2024" },
    { src: imgImage3, name: "Coastal Retreat", category: "Hospitality", year: "2024" },
    { src: imgImage4, name: "Mountain Explorer", category: "Travel", year: "2023" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate projects every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

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
              <div className="w-2 h-2 rounded-full bg-black group-hover:scale-125 transition-transform" />
              <span
                className="text-black text-[18px] font-medium tracking-tight"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                CloverSpace
              </span>
            </button>

            {/* Menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-3 group"
            >
              <span
                className="text-[14px] text-black/60 group-hover:text-black transition-colors hidden sm:block"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Menu
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-[1.5px] bg-black group-hover:w-4 transition-all" />
                <div className="w-4 h-[1.5px] bg-black group-hover:w-6 transition-all" />
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
                  CloverSpace
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
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#fafafa]">
        {/* Grain overlay for premium feel */}
        <div
          className="absolute inset-0 z-30 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* 3D Canvas - Positioned to the right on desktop */}
        <div className="absolute inset-0 z-10 lg:left-[30%]">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Content - Asymmetric Layout */}
        <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
          <div className="max-w-[800px]">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-4 mb-8 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-12 h-[1px] bg-black/20" />
              <span
                className="text-[11px] md:text-[12px] tracking-[0.3em] text-black/40 uppercase"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Vancouver Web Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6">
              <span
                className="block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[100px] font-medium text-black leading-[0.95] tracking-[-0.02em] animate-fade-in-up"
                style={{ fontFamily: "'EB Garamond', serif", animationDelay: '0.3s' }}
              >
                Your website
              </span>
              <span
                className="block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[100px] font-medium leading-[0.95] tracking-[-0.02em] animate-fade-in-up"
                style={{ fontFamily: "'EB Garamond', serif", animationDelay: '0.4s' }}
              >
                <span className="text-black">should</span>
                <span className="text-black/20"> work</span>
              </span>
              <span
                className="block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[100px] font-medium text-black/20 leading-[0.95] tracking-[-0.02em] animate-fade-in-up"
                style={{ fontFamily: "'EB Garamond', serif", animationDelay: '0.5s' }}
              >
                as hard as you do.
              </span>
            </h1>

            {/* Subheadline + CTA Row */}
            <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mt-12">
              <p
                className="text-[15px] md:text-[17px] text-black/50 max-w-[320px] leading-[1.7] animate-fade-in"
                style={{ fontFamily: "'Figtree', sans-serif", animationDelay: '0.6s' }}
              >
                We're a duo from Vancouver helping local businesses turn their websites into their best salesperson.
              </p>

              <div
                className="flex items-center gap-6 animate-fade-in"
                style={{ animationDelay: '0.7s' }}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group flex items-center gap-3 px-6 py-4 bg-black text-white rounded-full text-[14px] font-medium hover:bg-black/80 transition-all"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  Start a Project
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-[14px] text-black/40 hover:text-black transition-colors underline underline-offset-4"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  View Work
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Edge Detail */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/5 z-20" />
      </section>

      {/* ============ REST OF SITE ============ */}
      <div className="max-w-[1440px] mx-auto">

        {/* ============ WORK SECTION ============ */}
        <section id="work" className="relative pt-16 pb-8 md:pt-24 md:pb-12">
          <div
            className="absolute -right-64 top-1/4 w-[800px] h-[800px] opacity-40 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(233, 213, 255, 0.4) 0%, transparent 60%)",
              filter: "blur(80px)",
            }}
          />

          <div className="px-6 md:px-16 mb-10 md:mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-[12px] md:text-[14px] tracking-[0.3em] text-gray-400 uppercase"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Our Work
              </span>
              <div className="h-[1px] w-16 bg-gray-200" />
            </div>

            <h2
              className="text-[40px] md:text-[72px] lg:text-[96px] font-medium leading-[0.95] tracking-tight max-w-[900px]"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Sites that actually
              <br />
              <span className="text-gray-300">work</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-16 top-0 z-20 flex flex-col gap-3">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    activeProject === i
                      ? "border-black bg-black text-white"
                      : "border-gray-200 text-gray-400 hover:border-gray-400"
                  }`}
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  <span className="text-[14px] font-medium">0{i + 1}</span>
                </button>
              ))}
            </div>

            <div className="relative ml-0 md:ml-32 mr-0 md:mr-16">
              <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-none md:rounded-[32px]">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      activeProject === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={project.src}
                      alt={project.name}
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <p
                      className="text-white/60 text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      {projects[activeProject].category}
                    </p>
                    <h3
                      className="text-white text-[32px] md:text-[48px] font-medium"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {projects[activeProject].name}
                    </h3>
                  </div>
                  <span
                    className="text-white/40 text-[14px] md:text-[16px]"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    {projects[activeProject].year}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-16 mt-12 md:mt-16">
            <button className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors">
              <span
                className="text-[14px] md:text-[16px] tracking-wide"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                View all projects
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </section>

        {/* ============ PHILOSOPHY SECTION ============ */}
        <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
          <div
            className="absolute -left-96 top-0 w-[1000px] h-[1000px] opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(233, 213, 255, 0.3) 0%, transparent 50%)",
              filter: "blur(100px)",
            }}
          />

          <div className="relative px-6 md:px-16">
            <div className="max-w-[1200px]">
              <p
                className="text-[11px] md:text-[13px] tracking-[0.4em] text-gray-400 uppercase mb-8 md:mb-12"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Why Us
              </p>

              <h2
                className="text-[28px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-medium leading-[1.1] tracking-tight text-black"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                A pretty website means nothing
                <br />
                <span className="text-gray-300">if it doesn't bring you</span>
                <br />
                <span className="text-gray-300">actual</span> customers.
              </h2>
            </div>

            <div className="mt-10 md:mt-16 max-w-[500px] ml-auto">
              <p
                className="text-[15px] md:text-[17px] text-gray-500 leading-[1.8]"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                We've seen too many small businesses pay for websites that look nice but don't perform.
                Every site we build is designed with one goal: turning visitors into paying customers.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SERVICES SECTION ============ */}
        <section id="services" className="relative py-12 md:py-16 border-t border-gray-100">
          <div className="px-6 md:px-16">
            <div className="space-y-0">
              {[
                { num: "01", title: "We Learn Your Business", desc: "Before we touch a pixel, we understand what makes your customers tick." },
                { num: "02", title: "Design That Converts", desc: "Not just pretty. Every element is designed to guide visitors to take action." },
                { num: "03", title: "Built Fast & Right", desc: "Clean code, fast loading, works on every device. No cutting corners." },
                { num: "04", title: "Launch & Support", desc: "We don't disappear after launch. Questions? We're a text away." },
              ].map((service, i) => (
                <div key={i} className="group py-8 md:py-12 border-b border-gray-100 cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                    <span
                      className="text-[12px] md:text-[14px] text-gray-300 w-16 shrink-0"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      {service.num}
                    </span>
                    <h3
                      className="text-[24px] md:text-[32px] lg:text-[40px] font-medium flex-1 group-hover:text-gray-400 transition-colors duration-300"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-[14px] md:text-[15px] text-gray-400 max-w-[350px] md:opacity-0 md:translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      {service.desc}
                    </p>
                    <div className="hidden md:flex w-12 h-12 items-center justify-center ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ABOUT SECTION ============ */}
        <section id="about" className="relative py-16 md:py-24 bg-[#fafafa]">
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-40 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(233, 213, 255, 0.3) 0%, transparent 60%)",
              filter: "blur(80px)",
            }}
          />

          <div className="px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p
                  className="text-[11px] md:text-[13px] tracking-[0.4em] text-gray-400 uppercase mb-6"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  About Us
                </p>
                <h2
                  className="text-[32px] md:text-[44px] lg:text-[52px] font-medium leading-[1.1] mb-8"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Two people.
                  <br />
                  <span className="text-gray-400">One mission.</span>
                </h2>
                <p
                  className="text-[15px] md:text-[17px] text-gray-500 leading-[1.8] mb-6 max-w-[480px]"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  We met at a hackathon, stayed up way too late building things together, and realized we made a pretty good team. Now we're taking those late-night skills and helping Vancouver businesses get online the right way.
                </p>
                <p
                  className="text-[15px] md:text-[17px] text-gray-500 leading-[1.8] max-w-[480px]"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  One designs, one codes. No handoffs, no miscommunication, no bloated agency fees. Just two people who actually care about making your business look good online.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 md:gap-10">
                {[
                  { number: "2", label: "Person team", suffix: "" },
                  { number: "7", label: "Day turnaround", suffix: "" },
                  { number: "1", label: "Goal: get you clients", suffix: "" },
                  { number: "0", label: "Templates used", suffix: "" },
                ].map((stat, i) => (
                  <div key={i} className="group relative">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-[56px] md:text-[72px] lg:text-[88px] font-medium text-black leading-none group-hover:text-gray-400 transition-colors duration-500"
                        style={{ fontFamily: "'EB Garamond', serif" }}
                      >
                        {stat.number}
                      </span>
                      {stat.suffix && (
                        <span
                          className="text-[24px] md:text-[32px] text-gray-300 font-medium"
                          style={{ fontFamily: "'EB Garamond', serif" }}
                        >
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-[12px] md:text-[13px] text-gray-400 tracking-wide mt-1"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIAL SECTION ============ */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-[#fafafa]">
          <div className="relative px-6 md:px-16">
            <div className="max-w-[900px] mx-auto">
              {/* Quote mark */}
              <div
                className="text-[120px] md:text-[180px] text-black/[0.04] leading-none mb-[-60px] md:mb-[-90px] select-none"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                "
              </div>

              <blockquote
                className="text-[22px] md:text-[32px] lg:text-[40px] font-medium leading-[1.35] text-black/80 mb-10"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                Most agencies gave me a quote and disappeared. These two actually sat down,
                understood my business, and delivered something that actually gets me clients.
              </blockquote>

              {/* Attribution - cleaner, no fake avatar */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black/20" />
                <div>
                  <p
                    className="text-[13px] md:text-[14px] text-black/60 tracking-wide"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    Small business owner in Vancouver
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT SECTION ============ */}
        <section id="contact" className="relative py-16 md:py-24 bg-black text-white overflow-hidden">
          <div
            className="absolute -right-64 -top-32 w-[600px] h-[600px] opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(233, 213, 255, 0.3) 0%, transparent 50%)",
              filter: "blur(100px)",
            }}
          />

          <div className="relative px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <p
                  className="text-[11px] md:text-[13px] tracking-[0.4em] text-gray-500 uppercase mb-6"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  Let's Talk
                </p>
                <h2
                  className="text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-[1.05] mb-8"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Got a business?
                  <br />
                  Let's chat.
                </h2>
                <p
                  className="text-[15px] md:text-[17px] text-gray-400 leading-[1.8] mb-12 max-w-[400px]"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  No sales pitch, no pressure. Just a quick call to see if we're a good fit.
                  Worst case, you walk away with some free advice.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@cloverspace.co"
                    className="block text-[18px] md:text-[20px] text-white hover:text-gray-400 transition-colors"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    hello@cloverspace.co
                  </a>
                  <p className="text-[15px] text-gray-500" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Vancouver, BC
                  </p>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[12px] tracking-[0.2em] text-gray-500 uppercase block mb-3"
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
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-[16px] md:text-[18px] text-white placeholder-gray-600 focus:border-white outline-none transition-colors"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[12px] tracking-[0.2em] text-gray-500 uppercase block mb-3"
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
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-[16px] md:text-[18px] text-white placeholder-gray-600 focus:border-white outline-none transition-colors"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[12px] tracking-[0.2em] text-gray-500 uppercase block mb-3"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-[16px] md:text-[18px] text-white placeholder-gray-600 focus:border-white outline-none transition-colors resize-none"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="group flex items-center gap-4 mt-8"
                  >
                    <span className="text-[16px] md:text-[18px] text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Message sent!" : "Send message"}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                      <svg
                        className="w-5 h-5 text-white group-hover:text-black transition-colors"
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
        <footer className="px-6 md:px-16 py-8 bg-black border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[14px] text-gray-600" style={{ fontFamily: "'Figtree', sans-serif" }}>
              © {new Date().getFullYear()} CloverSpace
            </p>
            <div className="flex items-center gap-8">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-gray-600 hover:text-white transition-colors"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
