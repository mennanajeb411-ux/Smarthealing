import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LandingPage from './components/LandingPage';
import UserChoice from './components/UserChoice';
import HomeUserMode from './components/HomeUserMode';
import ProfessionalMode from './components/ProfessionalMode';
import Dashboard from './components/Dashboard';
import TreatmentLibrary from './components/TreatmentLibrary';
import './styles.css';

type Screen = 'landing' | 'choice' | 'home' | 'professional' | 'dashboard' | 'library';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentScreen === 'landing' && (
          <LandingPage
            key="landing"
            onNavigate={setCurrentScreen}
            language={language}
            setLanguage={setLanguage}
          />
        )}
        {currentScreen === 'choice' && (
          <UserChoice
            key="choice"
            onNavigate={setCurrentScreen}
            language={language}
          />
        )}
        {currentScreen === 'home' && (
          <HomeUserMode
            key="home"
            onNavigate={setCurrentScreen}
            language={language}
          />
        )}
        {currentScreen === 'professional' && (
          <ProfessionalMode
            key="professional"
            onNavigate={setCurrentScreen}
            language={language}
          />
        )}
        {currentScreen === 'dashboard' && (
          <Dashboard
            key="dashboard"
            onNavigate={setCurrentScreen}
            language={language}
          />
        )}
        {currentScreen === 'library' && (
          <TreatmentLibrary
            key="library"
            onNavigate={setCurrentScreen}
            language={language}
          />
        )}
      </AnimatePresence>
    </div>
  );
}