import React from 'react';
import { FilePlus, Search, Globe, HelpCircle } from 'lucide-react';

interface MainMenuProps {
  onSelectNewRequest: () => void;
  onSelectCheckStatus: () => void;
  onSelectLanguage: () => void;
  onSelectHelp: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  onSelectNewRequest,
  onSelectCheckStatus,
  onSelectLanguage,
  onSelectHelp,
}) => {
  return (
    <div style={{
      // Unified brand gradient matching the landing page
      background: 'radial-gradient(circle at center, #229353 0%, #0d5c2e 100%)',
      color: '#ffffff',
      height: '100vh',
      width: '100vw',
      maxHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '1.5rem',
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

      {/* --- MAIN INTERACTIVE CARD --- */}
      <div style={{
        width: '100%',
        maxWidth: '560px',
        backgroundColor: '#ffffff',
        borderRadius: '28px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2,
        maxHeight: '92vh'
      }}>
        
        {/* --- CARD HEADER (Unified Brand Green) --- */}
        <div style={{
          background: 'linear-gradient(135deg, #1e824a 0%, #0d5c2e 100%)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          borderBottom: '4px solid #229353'
        }}>
          {/* Actual Barangay Emblem Layout Placeholder */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1626446973631-f1eb9863fc9a?auto=format&fit=crop&w=150&q=80" 
              alt="Barangay Logo" 
              style={{ width: '90%', height: '90%', objectFit: 'contain', borderRadius: '50%' }}
            />
          </div>

          <div>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#a3e635', // Vibrant lime accent for readability
              marginBottom: '0.25rem'
            }}>
              Official Document Services
            </div>
            <h2 style={{
              fontSize: 'clamp(1.35rem, 4.5vw, 1.65rem)',
              fontWeight: 800,
              margin: 0,
              color: '#ffffff',
              lineHeight: 1.3
            }}>
              Welcome — please choose an option to continue.
            </h2>
          </div>
        </div>

        {/* --- CARD BODY / OPTIONS VIEW --- */}
        <div style={{
          padding: '1.75rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          backgroundColor: '#f8fafc'
        }}>
          
          {/* OPTION 1: START NEW REQUEST */}
          <button
            onClick={onSelectNewRequest}
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              border: '3px solid #229353', // Deep crisp border for visibility
              borderRadius: '20px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              textAlign: 'left',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'transform 0.1s, background-color 0.2s',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0fdf4'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: '#229353',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 10px rgba(34, 147, 96, 0.3)'
            }}>
              <FilePlus size={32} color="#ffffff" />
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0d5c2e', marginBottom: '0.2rem' }}>
                START NEW REQUEST
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>
                Request certificates, clearances, or permits
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#166534', display: 'flex', alignItems: 'center' }}>
                Magsimite ng kahilingan ❯
              </div>
            </div>
          </button>

          {/* OPTION 2: CHECK STATUS (Now Uniformly Green!) */}
          <button
            onClick={onSelectCheckStatus}
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              border: '3px solid #16a34a', // Clear contrast green matching theme
              borderRadius: '20px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              textAlign: 'left',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'transform 0.1s, background-color 0.2s',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0fdf4'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 10px rgba(22, 163, 74, 0.3)'
            }}>
              <Search size={32} color="#ffffff" />
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#14532d', marginBottom: '0.2rem' }}>
                CHECK STATUS
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>
                Track your request progress using a reference code
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#166534', display: 'flex', alignItems: 'center' }}>
                Tingnan ang katayuan ❯
              </div>
            </div>
          </button>

          {/* --- BOTTOM UTILITIES BUTTONS (Larger & Accessible) --- */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginTop: '0.5rem'
          }}>
            <button
              onClick={onSelectLanguage}
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #cbd5e1',
                borderRadius: '100px',
                padding: '0.9rem 1rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              <Globe size={20} color="#64748b" />
              <span>Language / Wika</span>
            </button>

            <button
              onClick={onSelectHelp}
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #cbd5e1',
                borderRadius: '100px',
                padding: '0.9rem 1rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              <HelpCircle size={20} color="#64748b" />
              <span>Help / Tulong</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};