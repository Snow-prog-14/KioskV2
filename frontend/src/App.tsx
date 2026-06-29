import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { MainMenu } from './components/MainMenu';

type KioskScreen = 'LANDING' | 'MAIN_MENU' | 'NEW_REQUEST' | 'CHECK_STATUS' | 'LANGUAGE' | 'HELP';

export default function App() {
  // Use a string state step variable to control which view is active
  const [currentScreen, setCurrentScreen] = useState<KioskScreen>('LANDING');

  // Core handler functions to pass to child elements
  const handleStartKiosk = () => {
    setCurrentScreen('MAIN_MENU');
  };

  const handleBackToMain = () => {
    setCurrentScreen('MAIN_MENU');
  };

  return (
    <div style={{ margin: 0, padding: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {currentScreen === 'LANDING' && (
        <LandingPage onStart={handleStartKiosk} />
      )}

      {currentScreen === 'MAIN_MENU' && (
        <MainMenu
          onSelectNewRequest={() => setCurrentScreen('NEW_REQUEST')}
          onSelectCheckStatus={() => setCurrentScreen('CHECK_STATUS')}
          onSelectLanguage={() => setCurrentScreen('LANGUAGE')}
          onSelectHelp={() => setCurrentScreen('HELP')}
        />
      )}

      {/* --- PLACEHOLDER FALLBACKS FOR NEXT STEPS --- */}
      {currentScreen === 'NEW_REQUEST' && (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#fff', background: '#0d5c2e', height: '100vh' }}>
          <h2>Document Selection Coming Soon!</h2>
          <button onClick={handleBackToMain} style={{ padding: '1rem 2rem', fontSize: '1.2rem', marginTop: '2rem', borderRadius: '50px', cursor: 'pointer' }}>
            Go Back
          </button>
        </div>
      )}

      {currentScreen === 'CHECK_STATUS' && (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#fff', background: '#0d5c2e', height: '100vh' }}>
          <h2>Status Tracker Coming Soon!</h2>
          <button onClick={handleBackToMain} style={{ padding: '1rem 2rem', fontSize: '1.2rem', marginTop: '2rem', borderRadius: '50px', cursor: 'pointer' }}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}