import { useEffect, useState } from 'react';
import axios from 'axios';
import { Database, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface ApiResponse {
  status: string;
  message: string;
  timestamp: string;
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBackendStatus = () => {
    setLoading(true);
    setError(null);
    
    axios.get('http://localhost/KioskV2/backend/test.php')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Could not reach the backend server.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBackendStatus();
  }, []);

  return (
    <div style={{
      backgroundColor: '#090d16',
      color: '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#111827',
        border: '1px solid #1f2937',
        borderRadius: '16px',
        padding: '2.5rem',
        maxWidth: '440px',
        width: '100%',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          marginBottom: '1rem'
        }}>
          <Database size={40} color="#06b6d4" />
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
          Barangay Kiosk
        </h1>
        <p style={{ color: '#9ca3af', margin: '0 0 2rem 0', fontSize: '0.95rem' }}>
          Thesis System Pipeline
        </p>

        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#9ca3af' }}>
            <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} />
            <span>Verifying API handshake...</span>
          </div>
        ) : error ? (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: '8px',
            padding: '1rem',
            color: '#f87171',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'center'
          }}>
            <AlertCircle size={20} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.9rem', textAlign: 'left' }}>{error}</span>
          </div>
        ) : data ? (
          <div>
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '8px',
              padding: '1rem',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <CheckCircle size={20} />
              <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{data.message}</span>
            </div>

            <div style={{ textAlign: 'left', backgroundColor: '#1f2937', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#9ca3af' }}>Connected Database:</span> <code style={{ color: '#38bdf8' }}>barangayadmin_db</code>
              </div>
              <div>
                <span style={{ color: '#9ca3af' }}>Server Timestamp:</span> <span style={{ color: '#e2e8f0' }}>{data.timestamp}</span>
              </div>
            </div>
          </div>
        ) : null}

        <button 
          onClick={fetchBackendStatus}
          style={{
            marginTop: '2rem',
            backgroundColor: '#1f2937',
            color: '#f3f4f6',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Recheck Connection
        </button>
      </div>
      
      {/* Quick local style for spinning loader animation */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default App;