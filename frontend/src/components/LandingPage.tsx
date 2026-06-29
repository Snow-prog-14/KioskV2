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
      // Deep rich gradient base
      background: 'radial-gradient(circle at center, #229353 0%, #0d5c2e 100%)',
      color: '#ffffff',
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '2.5rem 1.5rem 1.5rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      userSelect: 'none'
    }}>
      
      {/* --- BACKGROUND PATTERN OVERLAY (Adds depth) --- */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* --- RICH AMBIENT GLOWS --- */}
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
      <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '-10%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.15)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* --- TOP HEADER SECTION --- */}
      <div style={{
        width: '100%',
        maxWidth: '650px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: 'clamp(0.85rem, 3.8vw, 1.1rem)',
        color: '#ffffff',
        textShadow: '0 2px 8px rgba(0,0,0,0.15)',
        zIndex: 3,
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        paddingBottom: '1rem'
      }}>
        <div style={{ letterSpacing: '0.02em' }}>
          {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '1.25rem', letterSpacing: '0.05em' }}>
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
        maxWidth: '550px',
        margin: 'auto 0',
        zIndex: 2,
        transform: 'translateY(-10px)' // Visually balances the vertical center line
      }}>
        
        {/* Grounded Emblem Graphic Ring */}
        <div style={{
          width: 'clamp(140px, 22vh, 185px)',
          height: 'clamp(140px, 22vh, 185px)',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25), 0 0 0 8px rgba(255, 255, 255, 0.15)',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          overflow: 'hidden'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1626446973631-f1eb9863fc9a?auto=format&fit=crop&w=200&q=80" 
            alt="Barangay Logo"
            style={{ width: '92%', height: '92%', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>

        {/* Subtitle Accent Lines */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          color: '#e2e8f0',
          fontSize: 'clamp(0.7rem, 3vw, 0.85rem)',
          fontWeight: 800,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
          width: '100%',
          opacity: 0.9
        }}>
          <div style={{ height: '2px', width: '25px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
          <span>Official Kiosk Terminal</span>
          <div style={{ height: '2px', width: '25px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
        </div>

        {/* Strong Bold Title Layout */}
        <h1 style={{
          fontSize: 'clamp(2.3rem, 9vw, 3.6rem)',
          fontWeight: 900,
          lineHeight: 1.15,
          margin: '0 0 0.6rem 0',
          letterSpacing: '-0.03em',
          textShadow: '0 4px 15px rgba(0,0,0,0.25)',
          color: '#ffffff'
        }}>
          Barangay Request<br/>Kiosk
        </h1>

        {/* Location Caption */}
        <p style={{
          fontSize: 'clamp(1.1rem, 4.5vw, 1.4rem)',
          color: 'rgba(255, 255, 255, 0.85)',
          fontWeight: 600,
          margin: '0 0 3.5rem 0',
          letterSpacing: '0.02em'
        }}>
          Barangay Ugong, Pasig City
        </p>

        {/* --- EXPANDED INTERACTIVE BUTTON --- */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
          <button
            onClick={onStart}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
              border: '2.5px solid #ffffff',
              color: '#ffffff',
              borderRadius: '100px',
              padding: '1.1rem 0', 
              fontSize: 'clamp(1.1rem, 4.2vw, 1.35rem)',
              fontWeight: 800,
              letterSpacing: '0.06em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
              transition: 'transform 0.15s ease, background 0.2s',
              width: '100%',
              maxWidth: '380px',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff', filter: 'drop-shadow(0 0 4px #fff)' }}></span>
            <span>TAP THE SCREEN TO START</span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff', filter: 'drop-shadow(0 0 4px #fff)' }}></span>
          </button>
        </div>

        {/* Translation Prompt */}
        <p style={{
          marginTop: '1.25rem',
          color: 'rgba(255, 255, 255, 0.65)',
          fontSize: 'clamp(0.85rem, 3.5vw, 1rem)',
          fontStyle: 'italic',
          fontWeight: 600,
          letterSpacing: '0.02em'
        }}>
          Pindutin ang screen upang magsimula
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
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '1rem',
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.8rem',
        fontWeight: 600
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldAlert size={14} />
          <span>Authorized Access Only</span>
        </div>
        
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <HelpCircle size={18} color="#ffffff" />
        </div>
      </div>

    </div>
  );
};