"use client";
 
import { useEffect } from "react";
 
export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
 
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
        :root {
          --sand: #FFF8EE;
          --sand-dark: #F2E8D4;
          --brown: #3D2B1F;
          --orange: #E8622A;
          --orange-light: #FF8C56;
          --teal: #1D7A6B;
          --teal-light: #E1F5EE;
          --cream: #FFFDF8;
          --text: #2A1A0F;
          --muted: #7A5E4A;
        }
 
        html { scroll-behavior: smooth; }
 
        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--sand);
          color: var(--text);
          overflow-x: hidden;
        }
 
        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 2.5rem;
          background: rgba(255,248,238,0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(61,43,31,0.08);
        }
        .nav-logo {
          font-family: 'Righteous', cursive;
          font-size: 1.5rem; color: var(--orange); text-decoration: none;
        }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a {
          text-decoration: none; font-size: 0.9rem; font-weight: 500;
          color: var(--muted); transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--orange); }
        .nav-cta {
          background: var(--orange); color: white;
          padding: 0.55rem 1.4rem; border-radius: 100px;
          font-size: 0.9rem; font-weight: 500; text-decoration: none;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: #c94d1d; }
 
        /* HERO */
        .hero {
          min-height: 100vh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; padding: 8rem 2.5rem 4rem; gap: 3rem;
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; top: -200px; right: -200px;
          width: 700px; height: 700px;
          background: radial-gradient(circle, #FF8C5640 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--teal-light); color: var(--teal);
          font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em;
          padding: 0.35rem 1rem; border-radius: 100px;
          margin-bottom: 1.5rem; text-transform: uppercase;
        }
        .hero h1 {
          font-family: 'Righteous', cursive;
          font-size: clamp(3rem, 6vw, 5rem); line-height: 1.05;
          color: var(--brown); margin-bottom: 1.5rem;
        }
        .hero h1 span { color: var(--orange); }
        .hero-sub {
          font-size: 1.15rem; line-height: 1.7; color: var(--muted);
          font-weight: 300; max-width: 480px; margin-bottom: 2.5rem;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          background: var(--orange); color: white;
          padding: 0.85rem 2rem; border-radius: 100px;
          font-size: 1rem; font-weight: 500; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: #c94d1d; transform: translateY(-2px); }
        .btn-secondary {
          background: transparent; color: var(--brown);
          padding: 0.85rem 2rem; border-radius: 100px;
          font-size: 1rem; font-weight: 500; text-decoration: none;
          border: 1.5px solid var(--brown); transition: all 0.2s;
        }
        .btn-secondary:hover { background: var(--brown); color: white; }
        .van-card {
          background: var(--cream); border-radius: 2rem; padding: 2.5rem;
          border: 1.5px solid rgba(61,43,31,0.1); text-align: center;
          width: 100%; max-width: 420px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .van-emoji { font-size: 7rem; display: block; margin-bottom: 1rem; line-height: 1; }
        .van-tagline { font-family: 'Righteous', cursive; font-size: 1.2rem; color: var(--orange); margin-bottom: 0.5rem; }
        .van-sub { font-size: 0.9rem; color: var(--muted); }
        .stat-chips { display: flex; gap: 0.75rem; margin-top: 1.5rem; justify-content: center; flex-wrap: wrap; }
        .chip {
          background: white; border: 1px solid var(--sand-dark);
          border-radius: 100px; padding: 0.4rem 1rem;
          font-size: 0.8rem; font-weight: 500; color: var(--brown);
        }
        .chip strong { color: var(--orange); }
 
        /* SECTIONS */
        section { padding: 6rem 2.5rem; }
        .section-label {
          font-size: 0.8rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--orange);
          margin-bottom: 1rem; display: block;
        }
        .section-h2 {
          font-family: 'Righteous', cursive;
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--brown); line-height: 1.1; margin-bottom: 1.5rem;
        }
        .section-intro { font-size: 1.1rem; color: var(--muted); max-width: 600px; line-height: 1.7; font-weight: 300; }
 
        /* PROBLEM */
        .problem-section { background: var(--brown); }
        .problem-section .section-label { color: var(--orange-light); }
        .problem-section .section-h2 { color: white; }
        .problem-section .section-intro { color: rgba(255,255,255,0.65); }
        .problem-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem; margin-top: 3rem;
        }
        .problem-card {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
          border-radius: 1.25rem; padding: 1.75rem; transition: background 0.2s;
        }
        .problem-card:hover { background: rgba(255,255,255,0.1); }
        .problem-icon { font-size: 2rem; margin-bottom: 0.75rem; display: block; }
        .problem-card h3 { color: white; font-size: 1rem; font-weight: 500; margin-bottom: 0.5rem; }
        .problem-card p { color: rgba(255,255,255,0.55); font-size: 0.9rem; line-height: 1.6; font-weight: 300; }
 
        /* HOW IT WORKS */
        .how-section { background: var(--cream); }
        .steps {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0; margin-top: 3rem; position: relative;
        }
        .step { padding: 2rem; text-align: center; position: relative; }
        .step:not(:last-child)::after {
          content: '→'; position: absolute; right: -0.5rem; top: 50%;
          transform: translateY(-50%); font-size: 1.5rem; color: var(--sand-dark);
        }
        .step-num {
          width: 48px; height: 48px; background: var(--orange); color: white;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-family: 'Righteous', cursive; font-size: 1.25rem; margin: 0 auto 1rem;
        }
        .step-icon { font-size: 2rem; margin-bottom: 0.75rem; display: block; }
        .step h3 { font-size: 1rem; font-weight: 500; color: var(--brown); margin-bottom: 0.5rem; }
        .step p { font-size: 0.875rem; color: var(--muted); line-height: 1.6; font-weight: 300; }
 
        /* PRICING */
        .pricing-section { background: var(--sand); }
        .pricing-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem; margin-top: 3rem;
        }
        .price-card {
          background: white; border: 1.5px solid var(--sand-dark);
          border-radius: 1.5rem; padding: 2rem; position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .price-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(61,43,31,0.1); }
        .price-card.featured { border-color: var(--orange); background: linear-gradient(135deg, #FFF5EF 0%, white 100%); }
        .featured-badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: var(--orange); color: white;
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.05em;
          padding: 0.3rem 1rem; border-radius: 100px; text-transform: uppercase; white-space: nowrap;
        }
        .price-title { font-size: 1rem; font-weight: 500; color: var(--muted); margin-bottom: 0.75rem; }
        .price-amount { font-family: 'Righteous', cursive; font-size: 2.75rem; color: var(--brown); line-height: 1; margin-bottom: 0.25rem; }
        .price-amount span { font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 400; color: var(--muted); }
        .price-desc { font-size: 0.875rem; color: var(--muted); margin-bottom: 1.5rem; font-weight: 300; }
        .price-features { list-style: none; }
        .price-features li {
          font-size: 0.9rem; color: var(--brown); padding: 0.4rem 0;
          display: flex; align-items: center; gap: 0.6rem;
          border-bottom: 1px solid var(--sand-dark);
        }
        .price-features li:last-child { border-bottom: none; }
        .price-features li::before { content: '✓'; color: var(--teal); font-weight: 600; flex-shrink: 0; }
        .price-saving {
          display: inline-block; background: var(--teal-light); color: var(--teal);
          font-size: 0.75rem; font-weight: 500; padding: 0.2rem 0.6rem; border-radius: 100px; margin-left: 0.5rem;
        }
 
        /* COVERAGE */
        .coverage-section { background: var(--cream); }
        .coverage-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .district-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1.5rem; }
        .district-pill {
          background: var(--sand); border: 1px solid var(--sand-dark);
          border-radius: 0.75rem; padding: 0.75rem 1rem;
          font-size: 0.9rem; font-weight: 500; color: var(--brown);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .district-pill::before { content: '📍'; font-size: 0.9rem; }
        .hours-card { background: var(--brown); color: white; border-radius: 1.5rem; padding: 2rem; }
        .hours-card h3 { font-family: 'Righteous', cursive; font-size: 1.25rem; margin-bottom: 1.5rem; }
        .hours-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .hours-row:last-child { border-bottom: none; }
        .hours-label { color: rgba(255,255,255,0.6); font-size: 0.9rem; }
        .hours-time { color: var(--orange-light); font-weight: 500; font-size: 0.9rem; }
        .hours-note {
          margin-top: 1.25rem; background: rgba(255,255,255,0.06);
          border-radius: 0.75rem; padding: 0.75rem 1rem;
          font-size: 0.85rem; color: rgba(255,255,255,0.55); font-style: italic; font-weight: 300;
        }
 
        /* ABOUT */
        .about-section { background: var(--sand); }
        .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .founder-card {
          background: white; border-radius: 2rem; padding: 2.5rem;
          border: 1.5px solid var(--sand-dark); text-align: center;
        }
        .founder-avatar {
          width: 100px; height: 100px; border-radius: 50%;
          background: linear-gradient(135deg, var(--orange), #c94d1d);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Righteous', cursive; font-size: 2.5rem; color: white;
          margin: 0 auto 1.25rem;
        }
        .founder-name { font-family: 'Righteous', cursive; font-size: 1.4rem; color: var(--brown); margin-bottom: 0.25rem; }
        .founder-role { font-size: 0.9rem; color: var(--orange); font-weight: 500; margin-bottom: 1.25rem; }
        .founder-quote {
          font-size: 0.95rem; color: var(--muted); line-height: 1.7;
          font-style: italic; font-weight: 300; padding: 1rem;
          background: var(--sand); border-radius: 1rem;
        }
        .creds { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; justify-content: center; }
        .cred-badge {
          background: var(--teal-light); color: var(--teal);
          font-size: 0.8rem; font-weight: 500; padding: 0.35rem 0.85rem; border-radius: 100px;
        }
 
        /* BOOKING */
        .booking-section { background: var(--orange); text-align: center; padding: 6rem 2.5rem; }
        .booking-section .section-h2 { color: white; }
        .booking-section p { color: rgba(255,255,255,0.85); font-weight: 300; margin-bottom: 2rem; font-size: 1.1rem; }
        .btn-white {
          background: white; color: var(--orange);
          padding: 0.95rem 2.5rem; border-radius: 100px;
          font-size: 1.05rem; font-weight: 600; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
        .email-link {
          display: inline-flex; align-items: center; gap: 0.5rem;
          color: rgba(255,255,255,0.8); font-size: 0.95rem; margin-top: 1.5rem;
          text-decoration: none; font-weight: 300;
        }
        .email-link:hover { color: white; }
 
        /* FOOTER */
        .footer {
          background: var(--brown); color: rgba(255,255,255,0.5);
          padding: 2.5rem; text-align: center; font-size: 0.875rem; font-weight: 300;
        }
        .footer strong { color: white; font-family: 'Righteous', cursive; font-size: 1rem; }
 
        /* ANIMATIONS */
        .fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
 
        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav { padding: 1rem 1.25rem; }
          .nav-links { display: none; }
          .hero { grid-template-columns: 1fr; padding: 6rem 1.25rem 3rem; text-align: center; }
          .hero-sub { margin: 0 auto 2rem; }
          .hero-actions { justify-content: center; }
          .hero::before { display: none; }
          section { padding: 4rem 1.25rem; }
          .coverage-inner, .about-inner { grid-template-columns: 1fr; gap: 2rem; }
          .step:not(:last-child)::after { display: none; }
        }
      `}</style>
 
      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">🐾 <span style={{ color: "var(--brown)" }}>Paw</span><span style={{ color: "var(--orange)" }}>Run</span></a>
        <ul className="nav-links">
          <li><a href="#how">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#coverage">Coverage</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <a href="#booking" className="nav-cta">Book a Session</a>
      </nav>
 
      {/* HERO */}
      <section className="hero">
        <div>
          <span className="hero-badge">★ First in Kuwait</span>
          <h1>Your dog&apos;s<br /><span>run</span> comes<br />to you.</h1>
          <p className="hero-sub">
            Kuwait&apos;s only mobile dog exercise service — a professional slat-belt treadmill van that arrives at your door. No heat. No traffic. No stress. Just happy, healthy dogs.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn-primary">Book Now →</a>
            <a href="#how" className="btn-secondary">See How It Works</a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="van-card">
            <span className="van-emoji">🚐</span>
            <div className="van-tagline">The PawRun Van</div>
            <div className="van-sub">Air-conditioned · Professional handler · Comes to you</div>
            <div className="stat-chips">
              <div className="chip"><strong>2</strong> treadmills on board</div>
              <div className="chip"><strong>45°C</strong> summers? No problem.</div>
              <div className="chip">Self-paced &amp; safe</div>
            </div>
          </div>
        </div>
      </section>
 
      {/* PROBLEM */}
      <section className="problem-section fade-up" id="problem">
        <span className="section-label">The Problem We Solve</span>
        <h2 className="section-h2">Kuwait&apos;s dogs deserve better.</h2>
        <p className="section-intro">Kuwait has thousands of dogs — and zero infrastructure to exercise them. Until now.</p>
        <div className="problem-grid">
          {[
            { icon: "🌡️", title: "Extreme Heat", desc: "Summers exceed 45°C — walking outdoors becomes dangerous or impossible for months." },
            { icon: "🚫", title: "No Dog Parks", desc: "There are no off-leash parks, exercise areas, or canine fitness facilities anywhere in Kuwait." },
            { icon: "🛣️", title: "Dangerous Streets", desc: "Heavy traffic and limited green space make outdoor exercise risky year-round." },
            { icon: "🐕", title: "Under-Exercised Dogs", desc: "Large, high-energy breeds need far more than casual walks — causing anxiety, weight gain, and destructive behaviour." },
          ].map((c) => (
            <div className="problem-card" key={c.title}>
              <span className="problem-icon">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* HOW IT WORKS */}
      <section className="how-section fade-up" id="how">
        <span className="section-label">How It Works</span>
        <h2 className="section-h2">Four steps to a tired, happy dog.</h2>
        <p className="section-intro">Booking is effortless. Our van does the rest.</p>
        <div className="steps">
          {[
            { n: "1", icon: "📱", title: "Book via WhatsApp", desc: "Pick your time, location, and session length. We confirm instantly." },
            { n: "2", icon: "🚐", title: "We Come to You", desc: "The PawRun van arrives at your home, building, or preferred spot — on time." },
            { n: "3", icon: "🏃", title: "Your Dog Runs", desc: "Our handler guides your dog onto the self-paced slat-belt treadmill. Safe, comfortable, effective." },
            { n: "4", icon: "😴", title: "Happy, Tired Dog", desc: "You get a session summary and the option to rebook. Your dog gets a great nap." },
          ].map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <span className="step-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* PRICING */}
      <section className="pricing-section fade-up" id="pricing">
        <span className="section-label">Pricing</span>
        <h2 className="section-h2">Simple, transparent pricing.</h2>
        <p className="section-intro">Per-session or monthly packs — no hidden fees, ever.</p>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-title">Single Session</div>
            <div className="price-amount">8 <span>KWD / 30 min</span></div>
            <div className="price-desc">Perfect for trying PawRun for the first time.</div>
            <ul className="price-features">
              <li>One dog, one treadmill session</li>
              <li>Professional handler included</li>
              <li>At your door, any district</li>
              <li>45-min sessions at 11 KWD</li>
            </ul>
          </div>
          <div className="price-card featured">
            <div className="featured-badge">Most Popular</div>
            <div className="price-title">Monthly — 8 Sessions</div>
            <div className="price-amount">55 <span>KWD / month</span></div>
            <div className="price-desc">Best value for regular runners. <span className="price-saving">Save 14%</span></div>
            <ul className="price-features">
              <li>8 × 30-min sessions</li>
              <li>Flexible scheduling</li>
              <li>Priority booking</li>
              <li>Session summary after each run</li>
            </ul>
          </div>
          <div className="price-card">
            <div className="price-title">Monthly — 12 Sessions</div>
            <div className="price-amount">75 <span>KWD / month</span></div>
            <div className="price-desc">For the serious athlete. <span className="price-saving">Save 21%</span></div>
            <ul className="price-features">
              <li>12 × 30-min sessions</li>
              <li>Top priority scheduling</li>
              <li>Second dog add-on: +5 KWD</li>
              <li>Same-day rebooking available</li>
            </ul>
          </div>
        </div>
      </section>
 
      {/* COVERAGE */}
      <section className="coverage-section fade-up" id="coverage">
        <div className="coverage-inner">
          <div>
            <span className="section-label">Service Area</span>
            <h2 className="section-h2">We cover Kuwait&apos;s top neighbourhoods.</h2>
            <p className="section-intro">Operating across all major residential districts, 7 days a week.</p>
            <div className="district-grid">
              {["Kuwait City","Salmiya","Mishref","Bayan","Rumaithiya","Fintas","Jabriya","Hawalli"].map((d) => (
                <div className="district-pill" key={d}>{d}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="hours-card">
              <h3>🕐 Operating Hours</h3>
              <div className="hours-row">
                <span className="hours-label">Morning Slot</span>
                <span className="hours-time">7:00 AM – 1:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-label">Evening Slot</span>
                <span className="hours-time">5:00 PM – 9:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-label">Days</span>
                <span className="hours-time">Every day of the week</span>
              </div>
              <div className="hours-note">
                Slots are designed to avoid Kuwait&apos;s peak heat — your dog runs in comfort, always.
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ABOUT */}
      <section className="about-section fade-up" id="about">
        <div className="about-inner">
          <div>
            <span className="section-label">The Founder</span>
            <h2 className="section-h2">Built by a dog owner who felt the problem.</h2>
            <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
              PawRun Kuwait was founded by Aisha Abu-Marzouq, a Kuwaiti national who experienced firsthand how impossible it was to properly exercise her dog in Kuwait. No parks. Brutal heat. Zero solutions.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.8, fontWeight: 300 }}>
              With a background in advertising and marketing strategy, Aisha built PawRun to fill a gap that was obvious to every dog owner in Kuwait — and invisible to everyone else. PawRun is 100% Kuwaiti-owned and operated.
            </p>
          </div>
          <div className="founder-card">
            <div className="founder-avatar">A</div>
            <div className="founder-name">Aisha Abu-Marzouq</div>
            <div className="founder-role">Founder &amp; Managing Director</div>
            <div className="founder-quote">
              &ldquo;I got tired of watching my dog pace the apartment in summer. I wanted a real solution — so I built one.&rdquo;
            </div>
            <div className="creds">
              <span className="cred-badge">B.A. Advertising</span>
              <span className="cred-badge">M.Sc. Marketing</span>
              <span className="cred-badge">Kuwaiti National</span>
            </div>
          </div>
        </div>
      </section>
 
      {/* BOOKING CTA */}
      <section className="booking-section fade-up" id="booking">
        <h2 className="section-h2">Ready to run? 🐾</h2>
        <p>Book your first session in minutes. Your dog is waiting.</p>
        <a href="https://wa.me/96500000000" className="btn-white">
          📱 Book on WhatsApp
        </a>
        <br />
        <a href="mailto:hello@pawrunkuwait.com" className="email-link">
          Or email us at hello@pawrunkuwait.com
        </a>
      </section>
 
      {/* FOOTER */}
      <footer className="footer">
        <strong>🐾 <span style={{ color: "var(--brown)"}}>Paw</span><span style={{color: "var(--orange)"}}>Run</span> Kuwait</strong>
        <br /><br />
        Kuwait City, Kuwait &nbsp;·&nbsp; hello@pawrunkuwait.com &nbsp;·&nbsp; 7 days a week
        <br /><br />
        © 2026 PawRun Kuwait. All rights reserved. Kuwait&apos;s first mobile dog exercise service.
      </footer>
    </>
  );
}
 
