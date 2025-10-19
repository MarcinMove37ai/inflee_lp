// src/app/[locale]/components/CookieConsent.tsx
"use client";
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { LazyMotion, domAnimation, m as motion, AnimatePresence } from "framer-motion";
import Cookie from 'lucide-react/dist/esm/icons/cookie';
import X from 'lucide-react/dist/esm/icons/x';
import Settings from 'lucide-react/dist/esm/icons/settings';
import Check from 'lucide-react/dist/esm/icons/check';

const CookieConsent = () => {
  const t = useTranslations('cookies');
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Preferencje ciasteczek
  const [preferences, setPreferences] = useState({
    necessary: true, // Zawsze włączone
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Sprawdź czy użytkownik już wyraził zgodę
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Opóźnienie 1s przed pokazaniem bannera (lepsze UX)
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);

    // Tutaj można zainicjalizować narzędzia analityczne
    initializeTracking(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowSettings(false);

    // Inicjalizuj tylko wybrane narzędzia
    initializeTracking(savedPreferences);
  };

  const initializeTracking = (consent: any) => {
    // Google Analytics
    if (consent.analytics && typeof window !== 'undefined') {
      // window.gtag('consent', 'update', {
      //   'analytics_storage': 'granted'
      // });
    }

    // Marketing pixels
    if (consent.marketing && typeof window !== 'undefined') {
      // Facebook Pixel, Google Ads, etc.
    }
  };

  if (!showBanner) return null;

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {showBanner && (
          <>
            {/* ✅ BACKDROP Z BLUR - pokrywa całą stronę */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[119]"
            />

            {/* BANNER CIASTECZEK - nad backdropem */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              className="fixed bottom-0 left-0 right-0 z-[120] p-4 md:p-6"
            >
              <div className="max-w-6xl mx-auto">
                {/* PANEL USTAWIEŃ */}
                {showSettings ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center">
                          <Settings className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{t('settings.title')}</h3>
                          <p className="text-sm text-slate-400">{t('settings.subtitle')}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                        aria-label={t('close')}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      {/* Ciasteczka niezbędne */}
                      <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-white">{t('settings.necessary.title')}</h4>
                            <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">
                              {t('settings.required')}
                            </span>
                          </div>
                          <p className="text-sm text-slate-400">{t('settings.necessary.description')}</p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-6 bg-purple-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Ciasteczka analityczne */}
                      <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{t('settings.analytics.title')}</h4>
                          <p className="text-sm text-slate-400">{t('settings.analytics.description')}</p>
                        </div>
                        <button
                          onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                          className="ml-4"
                          aria-label={t('settings.analytics.title')}
                        >
                          <div className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                            preferences.analytics
                              ? 'bg-purple-600 justify-end'
                              : 'bg-slate-700 justify-start'
                          } px-1 cursor-pointer`}>
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </button>
                      </div>

                      {/* Ciasteczka marketingowe */}
                      <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{t('settings.marketing.title')}</h4>
                          <p className="text-sm text-slate-400">{t('settings.marketing.description')}</p>
                        </div>
                        <button
                          onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                          className="ml-4"
                          aria-label={t('settings.marketing.title')}
                        >
                          <div className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                            preferences.marketing
                              ? 'bg-purple-600 justify-end'
                              : 'bg-slate-700 justify-start'
                          } px-1 cursor-pointer`}>
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleSavePreferences}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2"
                      >
                        <Check className="w-5 h-5" />
                        {t('settings.save')}
                      </button>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="flex-1 bg-white/10 border border-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all"
                      >
                        {t('settings.cancel')}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* BANNER GŁÓWNY */
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      {/* Ikona */}
                      <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Cookie className="w-6 h-6 text-purple-400" />
                      </div>

                      {/* Treść */}
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                          {t('banner.title')}
                        </h3>
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                          {t('banner.description')}{' '}
                          <a
                            href="/privacy-policy"
                            className="text-purple-400 hover:text-purple-300 underline transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t('banner.privacyLink')}
                          </a>
                        </p>
                      </div>

                      {/* Przyciski */}
                      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button
                          onClick={handleAcceptAll}
                          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-lg whitespace-nowrap"
                        >
                          {t('banner.acceptAll')}
                        </button>
                        <button
                          onClick={() => setShowSettings(true)}
                          className="bg-white/10 border border-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all whitespace-nowrap"
                        >
                          {t('banner.customize')}
                        </button>
                        <button
                          onClick={handleRejectAll}
                          className="bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-medium py-3 px-6 rounded-lg transition-all whitespace-nowrap"
                        >
                          {t('banner.rejectAll')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default CookieConsent;