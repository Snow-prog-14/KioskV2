import { useState } from 'react';
import { LandingPage } from './components/LandingPage';

type ScreenState = 'LANDING' | 'MAIN_MENU' | 'CITIZEN_LOGIN' | 'REQUEST_FORM';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('LANDING');

  const startKioskSession = () => {
    setCurrentScreen('MAIN_MENU');
    console.log("Navigated away from landing page!");
  };

  return (
    <>
      {currentScreen === 'LANDING' && (
        <LandingPage onStart={startKioskSession} />
      )}

      {currentScreen === 'MAIN_MENU' && (
        <div style={{ color: '#fff', textAlign: 'center', padding: '5rem' }}>
          <h1>Main Menu Screen Placeholder</h1>
          <button onClick={() => setCurrentScreen('LANDING')}>Go Back</button>
        </div>
      )}
    </>
  );
}

export default App;