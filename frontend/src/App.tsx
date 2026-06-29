import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { MainMenu } from './components/MainMenu';
import { NewRequestForm } from './components/NewRequestForm'; // Import the form component
import { CheckStatus } from './components/CheckStatus'; // Make sure to add this import line!

type KioskScreen = 'LANDING' | 'MAIN_MENU' | 'NEW_REQUEST' | 'CHECK_STATUS' | 'LANGUAGE' | 'HELP' | 'SUCCESS';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<KioskScreen>('LANDING');

  return (
    <div style={{ margin: 0, padding: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {currentScreen === 'LANDING' && (
        <LandingPage onStart={() => setCurrentScreen('MAIN_MENU')} />
      )}

      {currentScreen === 'MAIN_MENU' && (
        <MainMenu
          onSelectNewRequest={() => setCurrentScreen('NEW_REQUEST')}
          onSelectCheckStatus={() => setCurrentScreen('CHECK_STATUS')}
          onSelectLanguage={() => setCurrentScreen('LANGUAGE')}
          onSelectHelp={() => setCurrentScreen('HELP')}
          onBack={() => setCurrentScreen('LANDING')}
        />
      )}

      {/* Mount the newly designed uniform form block */}
      {currentScreen === 'NEW_REQUEST' && (
        <NewRequestForm 
          onBack={() => setCurrentScreen('MAIN_MENU')}
          onSubmitSuccess={() => setCurrentScreen('SUCCESS')}
        />
      )}

      {/* SUCCESS SCREEN CONFIRMATION VIEW */}
      {currentScreen === 'SUCCESS' && (
        <div style={{
          background: 'radial-gradient(circle at center, #229353 0%, #0d5c2e 100%)',
          color: '#ffffff', height: '100vh', width: '100vw', display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'
        }}>
          <div style={{ backgroundColor: '#fff', color: '#0d5c2e', padding: '3rem', borderRadius: '24px', textAlign: 'center', maxWidth: '500px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <span style={{ fontSize: '5rem' }}>✅</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '1rem 0 0.5rem 0' }}>Request Submitted!</h2>
            <p style={{ color: '#475569', fontSize: '1.2rem', fontWeight: 600, margin: '0 0 2rem 0' }}>Please get your printed Reference Slip below.</p>
            <button onClick={() => setCurrentScreen('LANDING')} style={{ background: '#0d5c2e', color: '#fff', border: 'none', padding: '1rem 2rem', fontSize: '1.2rem', fontWeight: 700, borderRadius: '50px', cursor: 'pointer', width: '100%' }}>
              Done / Tapos Na
            </button>
          </div>
        </div>
      )}

     {currentScreen === 'CHECK_STATUS' && (
        <CheckStatus 
          onBack={() => setCurrentScreen('MAIN_MENU')}
          onSearchSubmit={(refNum) => {
            alert(`Searching for reference number: ${refNum}`);
            // Later we can link this to a beautiful custom timeline tracking view component!
          }}
        />
      )}
    </div>
  );
}