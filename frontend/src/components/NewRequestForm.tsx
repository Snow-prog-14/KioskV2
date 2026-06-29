import React, { useState } from 'react';
import { FileText, ArrowLeft, CheckCircle } from 'lucide-react';

interface NewRequestFormProps {
  onBack: () => void;
  onSubmitSuccess: () => void;
}

export const NewRequestForm: React.FC<NewRequestFormProps> = ({ onBack, onSubmitSuccess }) => {
  const [civilStatus, setCivilStatus] = useState('');
  const [sex, setSex] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitSuccess();
  };

  return (
    <div style={{
      background: 'radial-gradient(circle at center, #229353 0%, #0d5c2e 100%)',
      color: '#ffffff',
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '1rem 1.5rem',
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
        maxWidth: '680px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 3,
        marginBottom: '0.5rem',
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
          <span>Back to Menu</span>
        </button>
        <div style={{
          fontSize: '0.9rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#a3e635',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#a3e635' }}></span>
          New Request Form
        </div>
      </div>

      {/* --- MAIN FORM CARD CONTAINER --- */}
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        maxWidth: '680px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2,
        maxHeight: '90vh',
        boxSizing: 'border-box'
      }}>
        
        {/* --- FORM CARD HEADER --- */}
        <div style={{
          background: 'linear-gradient(135deg, #1e824a 0%, #0d5c2e 100%)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          borderBottom: '4px solid #229353'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileText size={26} color="#ffffff" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              Document Request Form
            </h2>
            <p style={{ fontSize: '1rem', margin: '2px 0 0 0', color: '#e2e8f0', fontWeight: 500 }}>
              Fill in all required fields marked with <span style={{ color: '#fca5a5', fontWeight: 800 }}>*</span>
            </p>
          </div>
        </div>

        {/* --- SCROLLABLE CONTAINER FOR FIELDS (Prevents Kiosk Breakout) --- */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f8fafc',
          overflowY: 'auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          
          {/* REQUEST TYPE */}
          <div>
            <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
              Request Type <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <select required style={{
              width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2.5px solid #cbd5e1',
              fontSize: '1.15rem', fontWeight: 600, color: '#1e293b', backgroundColor: '#ffffff'
            }}>
              <option value="barangay_certificate">Issuance of Barangay Certificate / Barangay Clearance</option>
              <option value="certificate_indigency">Certificate of Indigency</option>
              <option value="certificate_residency">Certificate of Residency</option>
              <option value="barangay_permit">Barangay Business Permit</option>
            </select>
          </div>

          {/* PURPOSE */}
          <div>
            <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
              Purpose <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input type="text" required placeholder="e.g., Employment, Travel, Scholarship" style={{
              width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2.5px solid #cbd5e1',
              fontSize: '1.15rem', fontWeight: 600, boxSizing: 'border-box'
            }} />
          </div>

          {/* FULL NAME */}
          <div>
            <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
              Full Name <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input type="text" required placeholder="Last Name, First Name, Middle Name" style={{
              width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2.5px solid #cbd5e1',
              fontSize: '1.15rem', fontWeight: 600, boxSizing: 'border-box'
            }} />
          </div>

          {/* HOME ADDRESS */}
          <div>
            <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
              Home Address <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input type="text" required placeholder="House No., Street, Barangay Ugong, Pasig City" style={{
              width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2.5px solid #cbd5e1',
              fontSize: '1.15rem', fontWeight: 600, boxSizing: 'border-box'
            }} />
          </div>

          {/* THREE COLUMN GRID: AGE, BIRTHDAY, LENGTH OF STAY */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.25fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.4rem' }}>
                Age <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input type="number" required placeholder="60" style={{
                width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2.5px solid #cbd5e1',
                fontSize: '1.15rem', fontWeight: 600, boxSizing: 'border-box'
              }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.4rem' }}>
                Birthday <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input type="date" required style={{
                width: '100%', padding: '0.8rem', borderRadius: '12px', border: '2.5px solid #cbd5e1',
                fontSize: '1.1rem', fontWeight: 600, boxSizing: 'border-box', color: '#1e293b'
              }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.4rem' }}>
                Length of Stay <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input type="text" required placeholder="e.g., 25 years" style={{
                width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2.5px solid #cbd5e1',
                fontSize: '1.15rem', fontWeight: 600, boxSizing: 'border-box'
              }} />
            </div>
          </div>

          {/* CIVIL STATUS (LARGE TOUCH BOXES) */}
          <div>
            <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
              Civil Status <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Single', 'Married', 'Widowed', 'Separated', 'Annulled'].map((status) => (
                <button
                  type="button" key={status} onClick={() => setCivilStatus(status)}
                  style={{
                    padding: '0.75rem 1.25rem', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 700,
                    border: civilStatus === status ? '3px solid #229353' : '2px solid #cbd5e1',
                    backgroundColor: civilStatus === status ? '#f0fdf4' : '#ffffff',
                    color: civilStatus === status ? '#0d5c2e' : '#475569', cursor: 'pointer'
                  }}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* SEX (GIANT TWO COLUMN SELECTION) */}
          <div>
            <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
              Sex <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Male', 'Female'].map((gender) => (
                <button
                  type="button" key={gender} onClick={() => setSex(gender)}
                  style={{
                    padding: '1rem', borderRadius: '14px', fontSize: '1.2rem', fontWeight: 800,
                    border: sex === gender ? '3px solid #229353' : '2px solid #cbd5e1',
                    backgroundColor: sex === gender ? '#f0fdf4' : '#ffffff',
                    color: sex === gender ? '#0d5c2e' : '#475569', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                  }}
                >
                  <span>{gender === 'Male' ? '♂' : '♀'}</span>
                  <span>{gender}</span>
                </button>
              ))}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '2px dashed #cbd5e1', margin: '0.5rem 0' }} />

          {/* OPTIONAL REPRESENTATIVE SECTION */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.05em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Optional — Representative Information (If claiming for someone else)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: '#475569', marginBottom: '0.4rem' }}>Representative Name</label>
                <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '0.85rem', borderRadius: '12px', border: '2px solid #cbd5e1', fontSize: '1.1rem', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: '#475569', marginBottom: '0.4rem' }}>Relationship to Applicant</label>
                <input type="text" placeholder="e.g., Spouse, Parent" style={{ width: '100%', padding: '0.85rem', borderRadius: '12px', border: '2px solid #cbd5e1', fontSize: '1.1rem', boxSizing: 'border-box' }} />
              </div>
            </div>
          </div>

        </div>

        {/* --- FORM SUBMISSION FOOTER ACTION (UNIFORM GREEN & MASSIVE) --- */}
        <div style={{
          padding: '1.25rem 1.5rem',
          backgroundColor: '#ffffff',
          borderTop: '2px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          flexShrink: 0
        }}>
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #229353 0%, #0d5c2e 100%)',
              border: 'none',
              color: '#ffffff',
              borderRadius: '100px',
              padding: '1.25rem 0',
              fontSize: '1.4rem',
              fontWeight: 900,
              letterSpacing: '0.05em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: '0 8px 24px rgba(13, 92, 46, 0.25)'
            }}
          >
            <CheckCircle size={24} />
            <span>SUBMIT REQUEST</span>
          </button>

          <button
            type="button"
            onClick={onBack}
            style={{
              width: '100%',
              backgroundColor: '#f1f5f9',
              border: '2px solid #cbd5e1',
              borderRadius: '100px',
              padding: '0.9rem 0',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#475569',
              cursor: 'pointer'
            }}
          >
            Bumalik sa Menu (Go Back)
          </button>
        </div>

      </form>
    </div>
  );
};