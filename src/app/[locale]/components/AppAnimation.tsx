import React, { useState, useEffect } from 'react';
import { FileText, ListOrdered, FileEdit, Image, MousePointer, Palette, Rocket, Coffee, Share2, MessageCircle, TrendingUp } from 'lucide-react';

export const AppAnimation = () => {
  const [step, setStep] = useState(0);

  const steps = [
    // SEKCJA 1: UTWÓRZ EBOOK
    {
      section: "1. UTWÓRZ EBOOK",
      title: "Dodaj tytuł oraz źródła",
      subtitle: "PDF / WWW",
      icon: <FileText className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-purple-500 to-indigo-500",
      content: (
        <div className="space-y-3 md:space-y-4 w-full max-w-md px-4">
          <input
            type="text"
            value="Przewodnik po AI dla biznesu"
            readOnly
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white text-sm md:text-lg font-semibold"
          />
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">📄</div>
              <div className="text-xs md:text-sm text-white font-medium">Wgraj PDF</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-3 md:p-4 text-center">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">🌐</div>
              <div className="text-xs md:text-sm text-white font-medium">Link WWW</div>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "1. UTWÓRZ EBOOK",
      title: "Dostosuj spis treści",
      subtitle: "AI wygenerował strukturę",
      icon: <ListOrdered className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-indigo-500 to-purple-500",
      content: (
        <div className="w-full max-w-lg bg-white/5 border border-white/20 rounded-xl p-4 md:p-6 mx-4">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h4 className="text-white font-bold text-base md:text-lg">Spis treści</h4>
            <span className="text-xs text-purple-300 bg-purple-500/20 px-2 md:px-3 py-1 rounded-full">8 rozdziałów</span>
          </div>
          <div className="space-y-2">
            {[
              "1. Wprowadzenie do AI",
              "2. Narzędzia AI w marketingu",
              "3. Automatyzacja procesów",
              "4. ChatGPT dla biznesu",
              "5. Generowanie treści",
              "6. Analiza danych z AI"
            ].map((chapter, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 rounded-lg p-2 md:p-3 hover:bg-white/10 transition">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-500/20 rounded flex items-center justify-center text-white text-xs md:text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-white text-xs md:text-sm">{chapter}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      section: "1. UTWÓRZ EBOOK",
      title: "Redaguj rozdziały",
      subtitle: "Edytuj wygenerowane treści",
      icon: <FileEdit className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-purple-500 to-pink-500",
      content: (
        <div className="w-full max-w-2xl bg-white/5 border border-white/20 rounded-xl overflow-hidden mx-4">
          <div className="bg-white/10 border-b border-white/10 px-3 md:px-4 py-2 md:py-3 flex items-center justify-between flex-wrap gap-2">
            <span className="text-white font-semibold text-xs md:text-sm">Rozdział 2: Narzędzia AI</span>
            <div className="flex gap-2">
              <button className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium">Zapisz</button>
              <button className="px-2 md:px-3 py-1 bg-white/10 text-white rounded text-xs font-medium">AI Rewrite</button>
            </div>
          </div>
          <div className="p-4 md:p-6 space-y-3">
            <div className="space-y-2">
              <div className="h-2 md:h-3 bg-white/20 rounded w-full"></div>
              <div className="h-2 md:h-3 bg-white/20 rounded w-11/12"></div>
              <div className="h-2 md:h-3 bg-white/20 rounded w-full"></div>
              <div className="h-2 md:h-3 bg-gradient-to-r from-purple-500/40 to-transparent rounded w-2/3 animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2 text-xs text-purple-300 mt-4">
              <span className="bg-purple-500/20 px-2 py-1 rounded">✨ AI sugeruje: Dodaj przykład</span>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "1. UTWÓRZ EBOOK",
      title: "Dodaj grafiki",
      subtitle: "Okładka i ilustracje rozdziałów",
      icon: <Image className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-pink-500 to-rose-500",
      content: (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center px-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition"></div>
            <div className="relative w-32 h-44 md:w-48 md:h-64 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 rounded-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-xl mb-2 md:mb-4 flex items-center justify-center text-xl md:text-3xl">🤖</div>
                <div className="text-white font-bold text-sm md:text-xl mb-1 md:mb-2">AI dla Biznesu</div>
                <div className="text-white/80 text-xs md:text-sm">Kompletny przewodnik</div>
              </div>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3 w-full max-w-xs">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 flex items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex-shrink-0"></div>
              <div>
                <div className="text-white text-xs md:text-sm font-medium">Rozdział 1</div>
                <div className="text-xs text-white/60">Wprowadzenie</div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 flex items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0"></div>
              <div>
                <div className="text-white text-xs md:text-sm font-medium">Rozdział 2</div>
                <div className="text-xs text-white/60">Narzędzia AI</div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 flex items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex-shrink-0"></div>
              <div>
                <div className="text-white text-xs md:text-sm font-medium">Rozdział 3</div>
                <div className="text-xs text-white/60">Automatyzacja</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SEKCJA 2: UTWÓRZ LANDING
    {
      section: "2. UTWÓRZ LANDING",
      title: "Stwórz stronę jednym kliknięciem",
      subtitle: "AI generuje landing page",
      icon: <MousePointer className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-emerald-500 to-teal-500",
      content: (
        <div className="relative px-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full animate-ping opacity-20"></div>
          </div>
          <button className="relative px-6 py-4 md:px-12 md:py-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg md:text-2xl shadow-2xl hover:scale-110 transition-transform">
            🚀 Utwórz Landing Page
          </button>
          <div className="mt-4 md:mt-6 text-center">
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-2 md:px-6">
              <span className="text-white text-xs md:text-sm">⚡ Gotowe w 30 sekund</span>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "2. UTWÓRZ LANDING",
      title: "Dostosuj treści i opublikuj",
      subtitle: "Twoja strona zapisu jest gotowa",
      icon: <Palette className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-teal-500 to-cyan-500",
      content: (
        <div className="w-full max-w-2xl px-4">
          <div className="bg-white/5 border border-white/20 rounded-xl overflow-hidden">
            <div className="bg-white/10 border-b border-white/10 px-3 md:px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1 md:gap-1.5">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/60"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/60"></div>
              </div>
              <div className="flex-1 bg-white/5 rounded px-2 md:px-3 py-1 text-xs text-white/60 truncate">
                twoja-domena.infle.app/ai-przewodnik
              </div>
            </div>
            <div className="p-4 md:p-8 space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-16 h-20 md:w-24 md:h-32 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg shadow-lg flex-shrink-0"></div>
                <div className="flex-1 space-y-2 md:space-y-3 min-w-0">
                  <h3 className="text-lg md:text-2xl font-bold text-white">Pobierz darmowy E-book</h3>
                  <p className="text-white/70 text-xs md:text-sm">Kompletny przewodnik po AI - 50+ stron!</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-500/20 text-purple-300 px-2 md:px-3 py-1 rounded-full text-xs">Marketing</span>
                    <span className="bg-pink-500/20 text-pink-300 px-2 md:px-3 py-1 rounded-full text-xs">AI</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <input
                  type="email"
                  placeholder="Twój email..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white text-sm md:text-base"
                  readOnly
                />
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 md:py-4 rounded-lg text-sm md:text-base">
                  📥 Pobierz E-book Za Darmo
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SEKCJA 3: PUBLIKACJA I MONETYZACJA
    {
      section: "3. PUBLIKACJA",
      title: "Dodaj link do buycoffee.to",
      subtitle: "Umożliw wsparcie od odbiorców",
      icon: <Coffee className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-amber-500 to-orange-500",
      content: (
        <div className="w-full max-w-md space-y-4 px-4">
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/30 rounded-xl flex items-center justify-center text-xl md:text-2xl">☕</div>
              <div>
                <div className="text-white font-bold text-sm md:text-base">buycoffee.to</div>
                <div className="text-xs text-white/60">Zbierz wsparcie</div>
              </div>
            </div>
            <input
              type="text"
              value="buycoffee.to/twoja-nazwa"
              readOnly
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 text-white text-xs md:text-sm mb-3"
            />
            <div className="flex items-center justify-between text-xs md:text-sm">
              <span className="text-white/70">Status połączenia:</span>
              <span className="text-green-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Aktywne
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "3. PUBLIKACJA",
      title: "Promuj w social media",
      subtitle: "Udostępnij link w swoich kanałach",
      icon: <Share2 className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-blue-500 to-cyan-500",
      content: (
        <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-lg px-4">
          {[
            { name: 'Facebook', icon: '📘', color: 'from-blue-600 to-blue-500', stats: '1.2k kliknięć' },
            { name: 'Instagram', icon: '📸', color: 'from-pink-600 to-purple-500', stats: '856 kliknięć' },
            { name: 'LinkedIn', icon: '💼', color: 'from-blue-700 to-blue-600', stats: '2.1k kliknięć' },
            { name: 'Twitter/X', icon: '🐦', color: 'from-slate-800 to-slate-700', stats: '643 kliknięć' }
          ].map((social, i) => (
            <div key={i} className={`bg-gradient-to-br ${social.color} rounded-xl p-3 md:p-5 text-center transform hover:scale-105 transition-transform shadow-xl`}>
              <div className="text-2xl md:text-4xl mb-1 md:mb-2">{social.icon}</div>
              <div className="text-white font-bold text-xs md:text-sm mb-1">{social.name}</div>
              <div className="text-white/80 text-xs">{social.stats}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      section: "3. PUBLIKACJA",
      title: "Automatyzuj z ManyChat",
      subtitle: "Połącz za darmo i buduj relacje",
      icon: <MessageCircle className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-indigo-500 to-purple-500",
      content: (
        <div className="w-full max-w-md px-4">
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-xl p-4 md:p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg">
                💬
              </div>
              <div>
                <div className="text-white font-bold text-base md:text-lg">ManyChat</div>
                <div className="text-xs text-white/60">Automatyzacja komunikacji</div>
              </div>
            </div>
            <div className="space-y-2 bg-white/5 rounded-lg p-3 md:p-4">
              <div className="flex items-center gap-2 text-xs md:text-sm text-white">
                <span className="text-green-400">✓</span>
                <span>Auto-wysyłka e-booka</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-white">
                <span className="text-green-400">✓</span>
                <span>Sekwencje follow-up</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-white">
                <span className="text-green-400">✓</span>
                <span>Budowanie relacji 24/7</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-2 md:py-3 rounded-lg text-sm md:text-base">
              Połącz ManyChat
            </button>
          </div>
        </div>
      )
    },
    {
      section: "3. PUBLIKACJA",
      title: "Rozwijaj społeczność i zarabiaj!",
      subtitle: "Dashboard Twoich wyników",
      icon: <TrendingUp className="w-8 h-8 md:w-12 md:h-12" />,
      color: "from-green-500 to-emerald-500",
      content: (
        <div className="w-full max-w-2xl px-4">
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {[
                { label: 'Nowe leady', value: '847', icon: '👥', change: '+23%', color: 'from-blue-500 to-cyan-500' },
                { label: 'Pobrania', value: '2,134', icon: '📥', change: '+45%', color: 'from-purple-500 to-pink-500' },
                { label: 'Przychód', value: '3,240 zł', icon: '💰', change: '+67%', color: 'from-green-500 to-emerald-500' }
              ].map((stat, i) => (
                <div key={i} className={`bg-gradient-to-br ${stat.color} bg-opacity-20 rounded-xl p-3 md:p-4 border border-white/10`}>
                  <div className="text-xl md:text-2xl mb-1 md:mb-2">{stat.icon}</div>
                  <div className="text-lg md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/70 mb-1">{stat.label}</div>
                  <div className="text-xs text-green-400 font-semibold">{stat.change} ↗</div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 rounded-lg p-3 md:p-4">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="text-white font-semibold text-sm md:text-base">Konwersja</span>
                <span className="text-xl md:text-2xl font-bold text-white">32%</span>
              </div>
              <div className="h-2 md:h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: '32%'}}></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentStep = steps[step];

  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-pink-500/30 rounded-full blur-3xl animate-pulse"
           style={{ animationDuration: '5s', animationDelay: '1s' }} />

      {/* Section Badge - LEFT TOP CORNER */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
        <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 md:px-6 md:py-2">
          <span className="text-white/80 font-bold text-xs md:text-sm tracking-wider">{currentStep.section}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-8 pt-20 md:pt-24 pb-20 md:pb-32">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 transition-all duration-700 ${
              step === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            {/* Icon */}
            <div className={`mb-4 md:mb-6 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center shadow-2xl text-white`}>
              {s.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white mb-1 md:mb-2 text-center px-4">
              {s.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-lg text-purple-200 mb-6 md:mb-8 text-center px-4">
              {s.subtitle}
            </p>

            {/* Content */}
            <div className="w-full flex justify-center overflow-y-auto max-h-[280px] md:max-h-[350px]">
              {s.content}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
              step === i ? 'w-6 md:w-8 bg-gradient-to-r from-purple-500 to-pink-500' : 'w-1.5 md:w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};