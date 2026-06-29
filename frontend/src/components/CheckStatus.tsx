import React, { useState } from 'react';
import { Search, ArrowLeft, Delete, CornerDownLeft } from 'lucide-react';

interface CheckStatusProps {
  onBack: () => void;
  onSearchSubmit: (referenceNumber: string) => void;
}

export const CheckStatus: React.FC<CheckStatusProps> = ({ onBack, onSearchSubmit }) => {
  const [inputVal, setInputVal] = useState('');

  // Built-in touch keyboard rows layout
  const rows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '-'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE', 'CLEAR']
  ];

  const handleKeyPress = (key: string) => {
    if (key === 'CLEAR') {
      setInputVal('');
    } else if (key === 'BACKSPACE') {
      setInputVal(prev => prev.slice(0, -1));
    } else {
      // Set a reasonable reference max limit
      if (inputVal.length < 20) {
        setInputVal(prev => prev + key);
      }
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onSearchSubmit(inputVal);
    }
  };

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

      {/* --- TOP HEADER NAVIGATION TRACK --- */}
      <div style={{
        width: '100%',
        maxWidth: '620px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 3,
        marginBottom: '0.75rem',
        padding: '0 0.5rem'
      }}>
        <button 
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.1rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={20} />
          <span>Main Menu</span>
        </button>
        <div style={{
          fontSize: '0.9rem',
          fontWeight: 800,
          letterSpacing: '0.1rem',
          textTransform: 'uppercase',
          color: '#a3e635',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#a3e635' }}></span>
          Status Inquiry
        </div>
      </div>

      {/* --- MAIN KEYBOARD CARD CONTAINER --- */}
      <div style={{
        width: '100%',
        maxWidth: '620px',
        backgroundColor: '#ffffff',
        borderRadius: '28px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2,
        boxSizing: 'border-box',
        marginBottom: '1rem'
      }}>
        
        {/* --- CARD HEADER (Now Uniformly Green!) --- */}
        <div style={{
          background: 'linear-gradient(135deg, #1e824a 0%, #0d5c2e 100%)',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          borderBottom: '4px solid #229353'
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Search size={26} color="#ffffff" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              Track Your Request
            </h2>
            <p style={{ fontSize: '1.05rem', margin: '2px 0 0 0', color: '#e2e8f0', fontWeight: 600 }}>
              Enter your reference number below
            </p>
          </div>
        </div>

        {/* --- INTERACTIVE BODY ROW --- */}
        <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc' }}>
          
          {/* SEARCH INPUT BAR */}
          <form onSubmit={handleSearch} style={{
            display: 'flex',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ position: 'relative', flexGrow: 1 }}>
              <input
                type="text"
                readOnly
                value={inputVal}
                placeholder="BRG-2026-XXXXXX"
                style={{
                  width: '100%',
                  padding: '1.1rem 1.25rem',
                  borderRadius: '16px',
                  border: '3px solid #cbd5e1',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#1e293b',
                  backgroundColor: '#ffffff',
                  boxSizing: 'border-box',
                  letterSpacing: '0.04em'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #229353 0%, #0d5c2e 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '16px',
                padding: '0 1.75rem',
                fontSize: '1.25rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 12px rgba(13, 92, 46, 0.2)'
              }}
            >
              <Search size={20} />
              <span>Search</span>
            </button>
          </form>

          {/* VIRTUAL TOUCH KEYBOARD GRID */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {rows.map((row, rIdx) => (
              <div key={rIdx} style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.6rem'
              }}>
                {row.map((key) => {
                  const isBackspace = key === 'BACKSPACE';
                  const isClear = key === 'CLEAR';
                  
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => handleKeyPress(key)}
                      style={{
                        flexGrow: isBackspace || isClear ? 1.5 : 1,
                        flexBasis: isBackspace || isClear ? '80px' : '44px',
                        height: '56px',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        backgroundColor: isClear ? '#fef2f2' : isBackspace ? '#fffbeb' : '#ffffff',
                        color: isClear ? '#ef4444' : isBackspace ? '#d97706' : '#1e293b',
                        fontSize: isBackspace || isClear ? '1rem' : '1.35rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04)',
                        transition: 'transform 0.05s',
                      }}
                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {isBackspace ? <Delete size={20} /> : isClear ? 'CLR' : key}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- DEDICATED ACCESSIBLE BOTTOM BACK BUTTON --- */}
      <button
        onClick={onBack}
        style={{
          width: '100%',
          maxWidth: '620px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '100px',
          padding: '1.1rem 0',
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          cursor: 'pointer',
          backdropFilter: 'blur(4px)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
      >
        <ArrowLeft size={20} />
        <span>Bumalik sa Main Menu (Go Back)</span>
      </button>

    </div>
  );
};