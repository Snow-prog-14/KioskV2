import React, { useEffect, useState } from 'react';
import { HelpCircle, ShieldAlert } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      background: 'radial-gradient(circle at center, #229353 0%, #0d5c2e 100%)',
      color: '#ffffff',
      height: '100vh',
      width: '100vw',
      maxHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '2rem 1.5rem 1.5rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      userSelect: 'none'
    }}>
      
      {/* --- BACKGROUND PATTERN OVERLAY --- */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* --- AMBIENT GLOWS --- */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* --- TOP HEADER SECTION (Slightly larger for readability) --- */}
      <div style={{
        width: '100%',
        maxWidth: '650px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: 'clamp(1rem, 4vw, 1.25rem)', // Bumped up minimum font size
        color: '#ffffff',
        textShadow: '0 2px 8px rgba(0,0,0,0.15)',
        zIndex: 3,
        borderBottom: '2px solid rgba(255, 255, 255, 0.25)', // Thicker line separator
        paddingBottom: '1rem',
        flexShrink: 0
      }}>
        <div style={{ letterSpacing: '0.02em' }}>
          {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '1.4rem', letterSpacing: '0.05em', fontWeight: 800 }}>
          {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </div>
      </div>

      {/* --- MAIN HERO CONTENTS --- */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        maxWidth: '580px',
        margin: 'auto 0',
        zIndex: 2
      }}>
        
        {/* Emblem Wrapper (Slightly scaled back to give text ultimate priority) */}
        <div style={{
          width: 'clamp(110px, 16vh, 150px)',
          height: 'clamp(110px, 16vh, 150px)',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25), 0 0 0 6px rgba(255, 255, 255, 0.15)',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <img 
            src="https://images.unsplash.com/photo-1626446973631-f1eb9863fc9a?auto=format&fit=crop&w=200&q=80" 
            alt="Barangay Logo"
            style={{ width: '92%', height: '92%', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>

        {/* Subtitle Accent */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          color: '#ffffff',
          fontSize: 'clamp(0.85rem, 3.5vw, 1rem)', // Enhanced sizing
          fontWeight: 900, // Thicker weight
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
          width: '100%',
          flexShrink: 0
        }}>
          <div style={{ height: '2px', width: '20px', backgroundColor: '#ffffff' }}></div>
          <span>Official Kiosk Terminal</span>
          <div style={{ height: '2px', width: '20px', backgroundColor: '#ffffff' }}></div>
        </div>

        {/* MASSIVE SENIOR-FRIENDLY TITLE */}
        <h1 style={{
          fontSize: 'clamp(2.75rem, 10vw, 4.25rem)', // Significantly enlarged baseline
          fontWeight: 900,
          lineHeight: 1.1,
          margin: '0 0 0.75rem 0',
          letterSpacing: '-0.03em',
          textShadow: '0 4px 15px rgba(0,0,0,0.3)',
          color: '#ffffff',
          flexShrink: 0
        }}>
          Barangay Request<br/>Kiosk
        </h1>

        {/* Location Caption */}
        <p style={{
          fontSize: 'clamp(1.35rem, 5vw, 1.75rem)', // Enlarged baseline
          color: '#e2e8f0',
          fontWeight: 700,
          margin: '0 0 3rem 0',
          letterSpacing: '0.01em',
          flexShrink: 0
        }}>
          Barangay Ugong, Pasig City
        </p>

        {/* --- MASSIVE TACTILE CALL TO ACTION BUTTON --- */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 0.5rem', flexShrink: 0 }}>
          <button
            onClick={onStart}
            style={{
              background: '#ffffff', // Inverted to solid white background for peak daylight visibility and absolute contrast
              border: '3px solid #ffffff',
              color: '#0d5c2e', // Dark green text matching the brand
              borderRadius: '100px',
              padding: '1.35rem 0', // Taller hit target container area
              fontSize: 'clamp(1.3rem, 4.5vw, 1.65rem)', // Giant font size
              fontWeight: 900, // Maximum boldness
              letterSpacing: '0.04em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              boxShadow: '0 15px 35px rgba(0,0,0,0.35)',
              transition: 'transform 0.1s ease, background-color 0.2s',
              width: '100%',
              maxWidth: '420px',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#0d5c2e' }}></span>
            <span>TAP HERE TO START</span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#0d5c2e' }}></span>
          </button>
        </div>

        {/* Tagalog Translation Prompt (Much clearer and darker contrast) */}
        <p style={{
          marginTop: '1.5rem',
          color: '#ffffff',
          fontSize: 'clamp(1.1rem, 3.8vw, 1.3rem)', // Scaled up translation text significantly
          fontStyle: 'italic',
          fontWeight: 700,
          letterSpacing: '0.01em',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          flexShrink: 0
        }}>
          Pindutin dito upang magsimula
        </p>
      </div>

      {/* --- FLOATING BOTTOM UTILITIES BAR --- */}
      <div style={{
        width: '100%',
        maxWidth: '650px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 3,
        borderTop: '2px solid rgba(255, 255, 255, 0.2)',
        paddingTop: '1rem',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.95rem',
        fontWeight: 700,
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldAlert size={16} />
          <span>Authorized Use Only</span>
        </div>
        
        {/* Enriched Touch Target Box for the Help Icon */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          padding: '14px', // Bigger button grid area for finger targets
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <HelpCircle size={22} color="#ffffff" />
        </div>
      </div>

    </div>
  );
};