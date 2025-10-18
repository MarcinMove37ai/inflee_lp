// src/app/components/SlideshowHero.tsx

"use client"

import React, { useState, useEffect } from "react"
import { ChevronRight, CheckCircle2 } from "lucide-react"

const SlideshowHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const processSteps = [
    {
      title: "Analiza twórcy",
      description: "AI identyfikuje Twoje supermocne kompetencje",
      items: ["Ekspert w fotografii", "Specjalista od social media", "Mentor lifestyle'u"],
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      statusTexts: [
        'Inicjalizacja analizy...',
        'Skanowanie Twoich postów i treści...',
        'Analiza zaangażowania i interakcji...',
        'Identyfikacja kluczowych kompetencji...',
        'Profil twórcy gotowy!'
      ]
    },
    {
      title: "Analiza odbiorców",
      description: "Rozpoznaje problemy Twojej grupy docelowej",
      items: ["Brak czasu na naukę", "Chęć rozwoju hobby", "Potrzeba praktycznych porad"],
      icon: "👥",
      color: "from-blue-500 to-purple-500",
      statusTexts: [
        'Zbieranie danych o odbiorcach...',
        'Analiza demografii i zainteresowań...',
        'Mapowanie potrzeb i problemów grupy...',
        'Segmentacja odbiorców...',
        'Charakterystyka grupy docelowej zakończona!'
      ]
    },
    {
      title: "Tworzenie treści",
      description: "Generator ebooków bazujący na analizie",
      items: [
        "Wskazano tytuł ebooka",
        "Spis treści edytowany i zatwierdzony",
        "Treść zweryfikowana i zatwierdzona"
      ],
      icon: "📚",
      color: "from-green-500 to-blue-500",
      statusTexts: [
        'Analiza Twoich kompetencji i potrzeb odbiorców...',
        'Generowanie propozycji angażujących tytułów...',
        'Automatyczne tworzenie struktury rozdziałów...',
        'Pisanie treści ebooka przez AI...',
        'Ebook gotowy do publikacji i dystrybucji!'
      ]
    },
    {
      title: "Strona zapisu",
      description: "Automatyczne tworzenie landing page",
      items: [
        "Analiza treści ebooka pod kątem korzyści",
        "Generowanie perswazyjnych tekstów na stronę",
        "Automatyczne tworzenie formularza zapisu"
      ],
      icon: "🎨",
      color: "from-yellow-500 to-orange-500",
      statusTexts: [
        'Skanowanie finalnej wersji ebooka...',
        'Wyciąganie kluczowych argumentów sprzedażowych...',
        'Optymalizacja tekstów pod kątem konwersji...',
        'Konfiguracja formularza i integracji...',
        'Landing page gotowy i opublikowany!'
      ]
    },
    {
      title: "Kampania 'Skomentuj a otrzymasz'",
      description: "System zwiększający zaangażowanie",
      items: [
        "Post do kampanii wybrany strategicznie",
        "Hasło kampanii \"EBOOK\" skonfigurowane",
        "Spersonalizowana treść wiadomości gotowa"
      ],
      icon: "💬",
      color: "from-pink-500 to-red-500",
      statusTexts: [
        'Analiza Twoich najpopularniejszych postów...',
        'Rekomendacja posta o wysokim potencjale zaangażowania...',
        'Definiowanie słowa kluczowego do komentarzy...',
        'Przygotowanie automatycznych odpowiedzi z linkiem...',
        'Kampania gotowa do uruchomienia!'
      ]
    },
    {
      title: "Baza leadów",
      description: "Automatyczne zbieranie kontaktów",
      items: [
        "Kampania 'Fotografia dla początkujących' → 23 nowe kontakty",
        "Kampania 'Sekrety Social Media' → 31 nowych kontaktów",
        "Kampania 'Twój Lifestyle na Maxa' → 47 nowych kontaktów"
      ],
      icon: "📊",
      color: "from-indigo-500 to-purple-500",
      statusTexts: [
        'Inicjalizacja systemu zbierania leadów...',
        'Śledzenie interakcji i komentarzy w kampaniach...',
        'Automatyczna weryfikacja i dodawanie kontaktów...',
        'Synchronizacja z bazą danych w czasie rzeczywistym...',
        'Wszystkie nowe leady bezpiecznie zebrane!'
      ]
    },
    {
      title: "Wyślij do społeczności",
      description: "Komunikacja z odbiorcami",
      items: [
        "Informuj społeczność o nowych materiałach (email/SMS)",
        "Twórz angażujące newslettery z aktualnościami",
        "Zwiększaj sprzedaż dzięki regularnej komunikacji"
      ],
      icon: "📨",
      color: "from-teal-500 to-green-500",
      statusTexts: [
        'Przygotowanie szablonów wiadomości...',
        'Personalizacja treści dla segmentów odbiorców...',
        'Weryfikacja listy kontaktów przed wysyłką...',
        'Harmonogramowanie lub natychmiastowe wysyłanie...',
        'Komunikacja wysłana, zaangażowanie rośnie!'
      ]
    },
    {
      title: "Zarządzanie finansami",
      description: "Monitorowanie i wypłaty zarobków",
      items: [
        "Nowa wpłata od klienta została zaksięgowana",
        "Aktualne saldo dostępne do wglądu",
        "Wypłać swoje środki jednym kliknięciem"
      ],
      icon: "💰",
      color: "from-green-500 to-emerald-500",
      statusTexts: [
        'Bezpieczne łączenie z systemem płatności online...',
        'Automatyczne księgowanie nowej wpłaty...',
        'Aktualizacja salda w czasie rzeczywistym...',
        'Procesowanie żądania wypłaty środków...',
        'Środki bezpiecznie wypłacone na Twoje konto!'
      ]
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % processSteps.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [processSteps.length]);

  const SlideVisualization = ({ step, isActive }: { step: any, isActive: boolean }) => {
    const [progressPercent, setProgressPercent] = useState(0);
    const [visibleItems, setVisibleItems] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);
    const [showSuccessFrame, setShowSuccessFrame] = useState(false);

    useEffect(() => {
      if (isActive) {
        setProgressPercent(0);
        setVisibleItems(0);
        setStatusIndex(0);
        setShowSuccessFrame(false);

        const initialStatusTimer = setTimeout(() => {
          if (step.statusTexts.length > 1) setStatusIndex(1);
          setProgressPercent(10);
        }, 500);

        const itemTimers = step.items.map((_: any, index: number) =>
          setTimeout(() => {
            setVisibleItems(prev => prev + 1);
            if (step.statusTexts.length > index + 2) {
              setStatusIndex(index + 2);
            }
            const totalItems = step.items.length;
            if (totalItems > 0) {
              setProgressPercent(Math.min(100, ( (index + 1) / totalItems ) * 100));
            }
          }, 1000 + (index * 1000))
        );

        const finalStatusTimer = setTimeout(() => {
          setStatusIndex(step.statusTexts.length - 1);
          setProgressPercent(100);
        }, 1000 + (step.items.length * 1000) + 1500);

        return () => {
          clearTimeout(initialStatusTimer);
          clearTimeout(finalStatusTimer);
          itemTimers.forEach(timer => clearTimeout(timer));
        };
      }
    }, [isActive, step.items, step.statusTexts]);

    useEffect(() => {
      if (visibleItems === step.items.length && progressPercent === 100) {
        const successTimer = setTimeout(() => {
          setShowSuccessFrame(true);
        }, 1500);

        return () => clearTimeout(successTimer);
      } else {
        setShowSuccessFrame(false);
      }
    }, [visibleItems, progressPercent, step.items.length]);

    const getCurrentStatusText = () => {
      return step.statusTexts[statusIndex] || step.statusTexts[0];
    };

    const getSuccessText = () => {
      // Skrócone wersje dla mobile
      const mobileSuccessTexts = {
        "Profil twórcy gotowy!": "Analiza zakończona!",
        "Charakterystyka grupy docelowej zakończona!": "Odbiorcy przeanalizowani!",
        "Ebook gotowy do publikacji i dystrybucji!": "Ebook gotowy!",
        "Landing page gotowy i opublikowany!": "Strona gotowa!",
        "Kampania gotowa do uruchomienia!": "Kampania gotowa!",
        "Wszystkie nowe leady bezpiecznie zebrane!": "Leady zebrane!",
        "Komunikacja wysłana, zaangażowanie rośnie!": "Wiadomości wysłane!",
        "Środki bezpiecznie wypłacone na Twoje konto!": "Wypłata zrealizowana!"
      };

      const fullText = step.statusTexts[step.statusTexts.length - 1];
      return mobileSuccessTexts[fullText] || fullText;
    };

    return (
      <div className={`transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}`}>
        <div className="bg-white p-3 sm:p-6 h-full flex flex-col">

          {/* STAŁY HEADER - zawsze ta sama wysokość */}
          <div className="flex items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4 min-h-[60px] sm:min-h-[80px]">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${step.color} rounded-lg sm:rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg transform transition-all duration-500 flex-shrink-0 ${isActive ? 'scale-100 rotate-0' : 'scale-75 rotate-12'}`}>
              {step.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-2">{step.title}</h3>
              {/* Status - stała wysokość */}
              <div className="min-h-[32px] sm:min-h-[40px]">
                {showSuccessFrame ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span className="truncate">
                      <span className="sm:hidden">{getSuccessText()}</span>
                      <span className="hidden sm:inline">{step.statusTexts[step.statusTexts.length -1]}</span>
                    </span>
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm text-gray-600 transition-all duration-500 leading-tight">
                    {getCurrentStatusText()}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* STAŁA SEKCJA POSTĘPU / STATYSTYK - zawsze ta sama wysokość */}
          <div className="mb-4 sm:mb-6 min-h-[60px] sm:min-h-[80px] flex flex-col justify-center">
            {/* Pasek postępu dla standardowych slajdów */}
            {step.title !== "Baza leadów" && step.title !== "Wyślij do społeczności" && step.title !== "Zarządzanie finansami" ? (
              <div>
                <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                  <span>Postęp procesu</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              /* Specjalne wizualizacje dla slajdów ze statystykami */
              <div className="text-center py-2 sm:py-3 bg-gray-50 rounded-lg">
                {step.title === "Zarządzanie finansami" && (
                  <>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                      💳 {visibleItems === 0 ? '0.00' : visibleItems === 1 ? '147.50' : visibleItems === 2 ? '392.50' : '392.50'} zł
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {visibleItems === 0 ? 'Saldo początkowe' :
                       visibleItems === 1 ? 'Po nowej wpłacie' :
                       visibleItems === 2 ? 'Aktualne saldo konta' :
                       'Środki gotowe do wypłaty'}
                    </div>
                  </>
                )}

                {step.title === "Wyślij do społeczności" && (
                  <>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                      📬 {visibleItems === 0 ? '0' : visibleItems === 1 ? '47' : visibleItems === 2 ? '94' : '141'} wiadomości
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Wysłanych (Email + SMS) do całej bazy
                    </div>
                  </>
                )}

                {step.title === "Baza leadów" && (
                  <>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                      📈 {visibleItems === 0 ? '0' : visibleItems === 1 ? '23' : visibleItems === 2 ? '54' : '101'} kontaktów
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Łączna liczba zebranych leadów
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* ELASTYCZNA SEKCJA Z ELEMENTAMI - wypełnia pozostałą przestrzeń */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-700 mb-2 sm:mb-3 text-xs sm:text-sm font-medium leading-tight">
              { step.title === "Baza leadów" ? "Kluczowe wyniki zbierania kontaktów:" :
                step.title === "Wyślij do społeczności" ? "Główne korzyści z komunikacji:" :
                step.title === "Zarządzanie finansami" ? "Elementy procesu finansowego:" :
                step.description + ":"
              }
            </p>

            {/* Lista elementów z jednolitym spacingiem */}
            <div className="space-y-2 flex-1">
              {step.items.map((item: string, index: number) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${step.color} text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transform transition-all duration-500 ease-out flex items-start sm:items-center text-xs sm:text-sm ${
                    index < visibleItems ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${isActive ? index * 150 : 0}ms`
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-white flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="flex-grow leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative font-sans">
      <div className="relative bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-200">
        {/* Window Bar - responsywny */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
            <span className="text-gray-400 text-xs ml-2 hidden sm:inline">inflee.app - Symulacja procesu</span>
          </div>
          <div className="text-xs text-gray-500 font-medium">
            {currentSlide + 1} / {processSteps.length}
          </div>
        </div>

        {/* Slide Title Frame - responsywny */}
        <div className="text-center bg-white border border-gray-200 rounded-lg p-2.5 sm:p-3 shadow-sm mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-gray-800 leading-tight">
            <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${processSteps[currentSlide].color}`}>
              {processSteps[currentSlide].title}
            </span>
            <span className="mx-1 sm:mx-2 text-gray-400">•</span>
            <span className="text-gray-600">{processSteps[currentSlide].description}</span>
          </p>
        </div>

        {/* Slide Container - responsywna wysokość */}
        <div className="relative h-[360px] sm:h-[420px] lg:h-[450px] overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
          {processSteps.map((step, index) => (
            <SlideVisualization
              key={index}
              step={step}
              isActive={index === currentSlide}
            />
          ))}
        </div>

        {/* Progress Dots - responsywne */}
        <div className="mt-4 sm:mt-6">
          <div className="flex justify-center space-x-2 sm:space-x-3">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 sm:h-4 rounded-full transition-all duration-300 ease-in-out hover:scale-110 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${processSteps[index].color} w-8 sm:w-12 shadow-lg`
                    : 'bg-gray-300 w-3 sm:w-4 hover:bg-gray-400'
                }`}
                aria-label={`Przejdź do kroku ${index + 1}: ${processSteps[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements - ukryte na bardzo małych ekranach */}
      <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-lg animate-blob animation-delay-2000 hidden sm:block"></div>
      <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-tl from-blue-200 to-teal-200 rounded-full opacity-30 blur-lg animate-blob animation-delay-4000 hidden sm:block"></div>
    </div>
  );
};

export default SlideshowHero;