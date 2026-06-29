import React, { useEffect, useState } from 'react';
import { HelpCircle } from 'lucide-react';

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
      background: 'radial-gradient(circle at center, #2fa360 0%, #137e40 100%)',
      color: '#ffffff',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '1.5rem 1rem', // Slightly snugger margins for compact screens
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      userSelect: 'none'
    }}>
      
      {/* --- BACKGROUND AMBIENT BLOW EFFECTS --- */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '10%',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.12)',
        filter: 'blur(35px)',
        pointerEvents: 'none'
      }} />

      {/* --- TOP HEADER SECTION --- */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        fontWeight: 600,
        fontSize: 'clamp(0.75rem, 3.5vw, 1.15rem)', // Prevents date/time text from getting cut off on sides
        color: 'rgba(255, 255, 255, 0.95)',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 3,
        boxSizing: 'border-box'
      }}>
        <div>{time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</div>
        <div style={{ fontFamily: 'monospace', fontWeight: 700, whiteSpace: 'nowrap' }}>
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
        maxWidth: '600px', // Restricts layout scaling width over limits safely
        margin: 'auto 0',
        padding: '1rem 0',
        zIndex: 2,
        boxSizing: 'border-box'
      }}>
        
        {/* Barangay Emblem Box */}
        <div style={{
          width: 'clamp(110px, 18vh, 180px)', // Slightly smaller max height boundary to avoid crowding vertical space
          height: 'clamp(110px, 18vh, 180px)',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          border: '4px solid rgba(255, 255, 255, 0.25)',
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <img 
            src="https://images.unsplash.com/photo-1626446973631-f1eb9863fc9a?auto=format&fit=crop&w=200&q=80" 
            alt="Barangay Logo"
            style={{ width: '90%', height: '90%', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>

        {/* Subtitle Accent Lines */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          color: 'rgba(255,255,255,0.85)',
          fontSize: 'clamp(0.65rem, 2.5vw, 0.8rem)',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
          width: '100%'
        }}>
          <div style={{ height: '1px', flexGrow: 1, maxWidth: '30px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
          <span style={{ whiteSpace: 'nowrap' }}>Official Self-Service Terminal</span>
          <div style={{ height: '1px', flexGrow: 1, maxWidth: '30px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
        </div>

        {/* Responsive Main Header */}
        <h1 style={{
          fontSize: 'clamp(1.75rem, 7vw, 3.5rem)', // Drops lower minimum range safely for mobile view width rules
          fontWeight: 800,
          lineHeight: 1.2,
          margin: '0 0 0.5rem 0',
          letterSpacing: '-0.01em',
          textShadow: '0 4px 10px rgba(0,0,0,0.15)',
          width: '100%'
        }}>
          Barangay Request Kiosk
        </h1>

        {/* Location Caption */}
        <p style={{
          fontSize: 'clamp(0.95rem, 3.5vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 500,
          margin: '0 0 2rem 0'
        }}>
          Barangay Ugong, Pasig City
        </p>

        {/* --- INTERACTIVE ACTION BUTTON --- */}
        <button
          onClick={onStart}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '2px solid rgba(255, 255, 255, 0.7)',
            color: '#ffffff',
            borderRadius: '100px',
            padding: '0.85rem 1.75rem', 
            fontSize: 'clamp(1rem, 4vw, 1.4rem)', // Shrinks smoothly on tiny screens
            fontWeight: 700,
            letterSpacing: '0.02em',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.15s ease, background-color 0.2s',
            width: '90%', // Ensures it respects parent borders
            maxWidth: '340px', // Prevents button from bloating wide on monitors
            boxSizing: 'border-box'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff', flexShrink: 0 }}></span>
          <span style={{ textAlign: 'center' }}>TAP THE SCREEN TO START</span>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff', flexShrink: 0 }}></span>
        </button>

        {/* Translation Footer Prompt */}
        <p style={{
          marginTop: '1rem',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 'clamp(0.8rem, 3vw, 0.95rem)',
          fontStyle: 'italic',
          fontWeight: 500
        }}>
          Pindutin ang screen upang magsimula
        </p>
      </div>

      {/* --- FLOATING HELP UTILITY --- */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255,255,255,0.2)',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        zIndex: 10
      }}>
        <HelpCircle size={20} color="#ffffff" />
      </div>
    </div>
  );
};