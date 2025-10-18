'use client'
import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const InfleeVerticalLanding = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [showSuccessFrame, setShowSuccessFrame] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Feature rotation with animations
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 6000); // Shorter interval for mobile
    return () => clearInterval(timer);
  }, []);

  // Animation effects for current feature
  useEffect(() => {
    // Reset animation state
    setProgressPercent(0);
    setVisibleItems(0);
    setStatusIndex(0);
    setShowSuccessFrame(false);

    const currentStep = features[currentFeature];

    // Initial status and progress
    const initialTimer = setTimeout(() => {
      if (currentStep.statusTexts.length > 1) setStatusIndex(1);
      setProgressPercent(10);
    }, 500);

    // Animate items appearing
    const itemTimers = currentStep.items.map((_, index) =>
      setTimeout(() => {
        setVisibleItems(prev => prev + 1);
        if (currentStep.statusTexts.length > index + 2) {
          setStatusIndex(index + 2);
        }
        setProgressPercent(Math.min(100, ((index + 1) / currentStep.items.length) * 100));
      }, 800 + (index * 800))
    );

    // Final status and success
    const finalTimer = setTimeout(() => {
      setStatusIndex(currentStep.statusTexts.length - 1);
      setProgressPercent(100);
      setTimeout(() => setShowSuccessFrame(true), 800);
    }, 800 + (currentStep.items.length * 800) + 400);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(finalTimer);
      itemTimers.forEach(timer => clearTimeout(timer));
    };
  }, [currentFeature]);

  // Add custom animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-up {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes glow-pulse {
        0%, 100% { box-shadow: 0 0 15px rgba(139, 92, 246, 0.5); }
        50% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.8); }
      }
      @keyframes bounce-in {
        0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
        50% { transform: scale(1.05) rotate(2deg); }
        70% { transform: scale(0.9) rotate(-1deg); }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
      @keyframes slide-up {
        0% { transform: translateY(50px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes success-celebration {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(5deg); }
        50% { transform: scale(1.2) rotate(-5deg); }
        75% { transform: scale(1.1) rotate(3deg); }
      }
      @keyframes spectacular-bounce {
        0% { transform: scale(0.1) rotate(-20deg); opacity: 0; }
        30% { transform: scale(1.3) rotate(10deg); opacity: 1; }
        60% { transform: scale(0.8) rotate(-5deg); }
        80% { transform: scale(1.1) rotate(2deg); }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'ANALIZA TWÓRCY',
      description: 'AI bada Twoje mocne strony i kompetencje',
      items: [
        'Analiza zaangażowania',
        'Identyfikacja tematów',
        'Rozpoznanie stylu'
      ],
      color: 'from-blue-400 to-cyan-500',
      statusTexts: [
        'Inicjalizacja...',
        'Skanowanie postów...',
        'Analiza zaangażowania...',
        'Identyfikacja kompetencji...',
        'Profil gotowy!'
      ]
    },
    {
      icon: '🎯',
      title: 'ANALIZA ODBIORCÓW',
      description: 'AI odkrywa bóle i potrzeby Twoich odbiorców',
      items: [
        'Demografia obserwujących',
        'Mapowanie potrzeb',
        'Profil idealnego klienta'
      ],
      color: 'from-green-400 to-emerald-500',
      statusTexts: [
        'Zbieranie danych...',
        'Analiza demografii...',
        'Mapowanie potrzeb...',
        'Segmentacja...',
        'Persona gotowa!'
      ]
    },
    {
      icon: '📖',
      title: 'TWÓJ EBOOK W 15 MINUT',
      description: 'Nawet jeżeli to Twój pierwszy raz - bez Canva!',
      items: [
        'Angażujący tytuł',
        'Struktura rozdziałów',
        'Treść przez AI'
      ],
      color: 'from-purple-400 to-violet-500',
      statusTexts: [
        'Analiza kompetencji...',
        'Generowanie tytułów...',
        'Tworzenie struktury...',
        'Pisanie treści...',
        'Ebook gotowy!'
      ]
    },
    {
      icon: '🌐',
      title: 'WŁASNY LANDING PAGE',
      description: 'Skuteczna strona do pobierania e-book`a',
      items: [
        'Analiza korzyści',
        'Copywriting w Twoim stylu',
        'Formularz zapisu'
      ],
      color: 'from-orange-400 to-red-500',
      statusTexts: [
        'Skanowanie ebooka...',
        'Wyciąganie argumentów...',
        'Optymalizacja tekstów...',
        'Konfiguracja formularza...',
        'Landing opublikowany!'
      ]
    },
    {
      icon: '📧',
      title: 'SYSTEM DO ZBIERANIA LEADÓW',
      description: 'Pozostań w kontakcie z fanami poza Socialami',
      items: [
        'Kampanie komentarzy',
        'Sekwencje emaili',
        'Organiczny zasięg'
      ],
      color: 'from-teal-400 to-cyan-500',
      statusTexts: [
        'Analiza postów...',
        'Definiowanie słów kluczowych...',
        'Auto odpowiedzi...',
        'Sekwencje nurturingowe...',
        'System aktywny!'
      ]
    },
    {
      icon: '💰',
      title: 'GROMADŹ WPŁATY OD FANÓW',
      description: 'Odbieraj "💰 kawy" od wdzięcznych odbiorców',
      items: [
        'Integracja płatności',
        'Auto księgowanie',
        'Bez ZUS i VAT'
      ],
      color: 'from-yellow-400 to-orange-500',
      statusTexts: [
        'Łączenie płatności...',
        'Auto księgowanie...',
        'Weryfikacja wypłat...',
        'Test przepływu...',
        'System gotowy!'
      ]
    }
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden" style={{ aspectRatio: '9/16' }}>
        {/* Success background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 70%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
            `
          }}
        />

        {/* Success confetti */}
        <div className="absolute inset-0">
          {isClient && Array.from({length: 30}).map((_, i) => {
            // Deterministic values to avoid hydration mismatch
            const left = (i * 11.7 + 5) % 100;
            const top = (i * 13.3 + 8) % 100;
            const duration = 3 + (i % 2);
            const colors = ['#fbbf24', '#f59e0b', '#22c55e', '#3b82f6', '#8b5cf6'];

            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: colors[i % 5],
                  left: `${left}%`,
                  top: `${top}%`,
                  animation: `float-up ${duration}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            );
          })}
        </div>

        <div className="relative z-10 text-center max-w-sm mx-auto px-4">
          <div
            className="text-6xl mb-4"
            style={{
              animation: 'success-celebration 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))'
            }}
          >
            🎉
          </div>

          <h1 className="text-3xl font-black text-white mb-3">
            WITAMY W KLUBIE!
          </h1>

          <p className="text-lg text-green-300 mb-4 font-semibold">
            Jesteś na liście oczekujących!
          </p>

          <div className="space-y-2 text-white/80 text-sm">
            <p>📧 Sprawdź email - wysłaliśmy potwierdzenie</p>
            <p>🎁 50% taniej przez cały pierwszy rok!</p>
            <p>🤖 Wczesny dostęp do AI-powered narzędzi</p>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-xl border border-white/20">
            <h3 className="text-base font-bold text-white mb-2">Co dalej?</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Otrzymasz wczesny dostęp do platformy AI, która przeanalizuje Twoje kompetencje
              i pomoże stworzyć pierwsze produkty cyfrowe. Start już wkrótce!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden" style={{ aspectRatio: '9/16' }}>
      {/* Dynamic background */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
          `
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {isClient && Array.from({length: 20}).map((_, i) => {
          // Deterministic values based on index to avoid hydration mismatch
          const left = (i * 17.3 + 15) % 100;
          const top = (i * 23.7 + 10) % 100;
          const duration = 4 + (i % 3);

          return (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full opacity-40"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `float-up ${duration}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <header className="p-4 text-center mt-14">
          <div
            className="inline-flex items-center space-x-3"
            style={{ animation: 'bounce-in 1s ease-out' }}
          >
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center p-1">
              <img src="/logo.png" alt="inflee.app logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                inflee.app
              </h1>
              <span className="text-xs mt-1 text-white/70 font-medium tracking-wide uppercase leading-tight">
                Edukuj | Rośnij | Zarabiaj
              </span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 space-y-4">
          {/* Horizontal divider line between logo and main content */}
          <div className="w-full max-w-xs mx-auto">
            <div
              className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{ animation: 'slide-up 1s ease-out 0.3s both' }}
            />
          </div>

          {/* Hero section */}
          <div
            className="text-center mb-4"
            style={{ animation: 'slide-up 1s ease-out 0.5s both' }}
          >
            <h2 className="text-3xl leading-[1.3] font-bold text-white mb-4">
              Zacznij <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent relative">
                zarabiać
                {/* Mobile version - cieńsza linia, dalej od tekstu */}
                <svg className="absolute -bottom-2.5 left-0 w-full h-4" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M3,9 Q30,2 70,4 Q90,5 97,7" stroke="#8B5CF6" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9"/>
                </svg>
              </span><br />
              na swojej obecność w sieci<br />
              dzięki wsparciu AI
            </h2>

            {/* Horizontal divider line */}
            <div className="w-full max-w-xs mx-auto mb-4">
              <div
                className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ animation: 'slide-up 1s ease-out 0.8s both' }}
              />
            </div>

            <p className="text-sm text-white/80 mb-4 leading-relaxed px-2">
              Kompleksowy ekosystem dla twórców cyfrowych napędzany AI.<br />
              <span className="text-green-400 font-semibold">Od analizy kompetencji po pierwsze zarobki.</span>
            </p>
          </div>

          {/* Compact Feature Presentation */}
          <div className="relative w-full max-w-sm mb-4">
            {/* Main Feature Window */}
            <div className="bg-white/95 backdrop-blur-xl border border-white/30 rounded-xl overflow-hidden shadow-xl">
              {/* Window Bar */}
              <div className="flex items-center justify-between p-3 bg-white/50 border-b border-white/20">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  <span className="text-gray-600 text-xs ml-2 font-semibold">inflee.app</span>
                </div>
                <div className="text-xs text-gray-500 font-semibold">
                  {currentFeature + 1}/{features.length}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4">
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center text-lg shadow-lg transform transition-all duration-500 flex-shrink-0`}
                    style={{ animation: 'bounce-in 0.8s ease-out' }}
                  >
                    {features[currentFeature].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black leading-tight text-gray-700">
                      {features[currentFeature].title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-tight">
                      {features[currentFeature].description}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="mb-4 min-h-[20px]">
                  {!showSuccessFrame && (
                    <p className="text-xs text-gray-600 transition-all duration-500 leading-relaxed font-medium">
                      {features[currentFeature].statusTexts[statusIndex] || features[currentFeature].statusTexts[0]}
                    </p>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-2 font-medium">
                    <span>Postęp</span>
                    <span className="font-bold">{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${features[currentFeature].color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div>
                  <p className="text-gray-700 mb-3 text-xs font-bold">
                    Kluczowe elementy:
                  </p>
                  <div className="space-y-2">
                    {features[currentFeature].items.map((item, index) => (
                      <div
                        key={index}
                        className={`bg-gradient-to-r ${features[currentFeature].color} text-white px-3 py-2 rounded-lg font-semibold transform transition-all duration-500 ease-out flex items-center text-xs ${
                          index < visibleItems ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{
                          transitionDelay: `${index * 150}ms`
                        }}
                      >
                        <CheckCircle2 className="w-3 h-3 mr-2 text-white flex-shrink-0" />
                        <span className="flex-grow leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Spectacular Success Popup */}
            {showSuccessFrame && (
              <div
                className="absolute inset-0 flex items-center justify-center z-10"
                style={{
                  animation: 'spectacular-bounce 0.8s ease-out',
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                }}
              >
                <div
                  className={`bg-gradient-to-r ${features[currentFeature].color} p-4 rounded-2xl shadow-2xl transform scale-105 border-4 border-white/50`}
                  style={{
                    animation: 'success-celebration 2s ease-in-out infinite',
                    background: `linear-gradient(135deg, rgba(34, 197, 94, 0.95) 0%, rgba(16, 185, 129, 0.95) 100%)`,
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl animate-pulse">🎉</div>
                    <div>
                      <div className="text-white font-black text-sm uppercase tracking-wide">
                        GOTOWE!
                      </div>
                      <div className="text-white/90 text-xs font-semibold">
                        {features[currentFeature].statusTexts[features[currentFeature].statusTexts.length - 1]}
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Feature indicators */}
          <div className="flex justify-center space-x-2 mb-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`h-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110 ${
                  index === currentFeature
                    ? `bg-gradient-to-r ${features[index].color} w-6 shadow-lg`
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Przejdź do: ${features[index].title}`}
              />
            ))}
          </div>

          {/* Signup form */}
          <div
            className="w-full max-w-sm"
            style={{
              animation: 'slide-up 1s ease-out 0.7s both'
            }}
          >
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full p-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
              style={{
                background: isLoading
                  ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(168, 85, 247, 0.5) 100%)'
                  : 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                boxShadow: isLoading
                  ? 'none'
                  : '0 10px 20px rgba(139, 92, 246, 0.4)',
                color: 'white'
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Zapisujemy...</span>
                </div>
              ) : (
                '🚀 Dołącz do listy oczekujących!'
              )}
            </button>
          </div>

        </main>

        {/* Footer */}
        <footer className="p-3 text-center text-white/40 text-xs">
          <p>&copy; 2025 inflee.app • Stworzony z ❤️ w Polsce</p>
        </footer>
      </div>
    </div>
  );
};

export default InfleeVerticalLanding;