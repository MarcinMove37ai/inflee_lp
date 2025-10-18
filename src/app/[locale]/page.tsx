// app/[locale]/page.tsx
"use client";
import { AppAnimation } from "./components/AppAnimation";
import LanguageSwitcher from './components/LanguageSwitcher';
import { createPortal } from 'react-dom';
import React, { useEffect, useMemo, useState, FormEvent } from "react";
import { useTranslations } from 'next-intl';
import {
  Check, ChevronDown, BookOpenCheck, LayoutTemplate, UsersRound, Image as ImageIcon, Coffee, Zap, Sparkles, Flame, ChevronLeft, ChevronRight, CreditCard, Smartphone, ArrowUpCircle, MinusCircle, X
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// INTERFEJSY I TYPY
type PaymentMethod = 'card' | 'blik';

interface Plan {
  id: string;
  nameKey: string;
  descriptionKey: string;
  priceCard: number;
  priceBlik: number;
  currencyKey: string;
  featuresKeys: string[];
  notIncludedKeys: string[];
  highlighted?: boolean;
  isGolden?: boolean;
  buttonTextKey: string;
}

// KOMPONENTY
const ContactModal = ({ isOpen, onClose, subject }: { isOpen: boolean; onClose: () => void; subject: string; }) => {
  const t = useTranslations('contactModal');
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(t('thankYou'));
    onClose();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[110] p-4" onClick={onClose}>
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="bg-slate-900/80 ring-1 ring-white/10 rounded-2xl p-8 w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors" aria-label={t('close')}> <X className="w-6 h-6" /> </button>
            <h2 className="text-2xl font-bold text-white text-center mb-2">{t('title')}</h2>
            <p className="text-sm text-slate-400 text-center mb-6">{t('subtitle')}</p>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div> <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">{t('subject')}</label> <input type="text" id="subject" name="subject" value={subject} readOnly className="w-full bg-slate-800/50 ring-1 ring-white/10 rounded-md py-2 px-3 text-white focus:ring-indigo-400 focus:outline-none" /> </div>
              <div> <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">{t('emailLabel')}</label> <input type="email" id="email" name="email" required placeholder={t('emailPlaceholder')} className="w-full bg-slate-800/50 ring-1 ring-white/10 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:ring-indigo-400 focus:outline-none" /> </div>
              <div> <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">{t('phoneLabel')}</label> <input type="tel" id="phone" name="phone" required placeholder={t('phonePlaceholder')} className="w-full bg-slate-800/50 ring-1 ring-white/10 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:ring-indigo-400 focus:outline-none" /> </div>
              <div className="flex items-start space-x-3 pt-2"> <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 mt-1 rounded border-slate-600 bg-slate-700 text-indigo-500 focus:ring-indigo-500" /> <div className="text-sm"> <label htmlFor="consent" className="text-slate-400">{t('consent')}</label> </div> </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg">{t('submitButton')}</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (activeIndex !== null) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [activeIndex]);

  const openModal = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex + 1) % images.length));
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex - 1 + images.length) % images.length));
  };

  const selectedImage = activeIndex !== null ? images[activeIndex] : null;
  const xOffset = isMobile ? 40 : 50;
  const yOffset = isMobile ? 30 : 35;
  const centralImageIndex = (images.length - 1) / 2;

  const modalContent = selectedImage && (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8" onClick={closeModal}>
      <button onClick={goToPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full transition" aria-label="Previous image"> <ChevronLeft className="w-6 h-6 text-white" /> </button>
      <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative">
          <div className="p-1.5 bg-black/20 backdrop-blur-sm border border-purple-500/50 rounded-xl shadow-2xl">
            <img src={selectedImage} alt="Enlarged gallery image" className="max-w-full max-h-[85vh] object-contain rounded-md" />
          </div>
          <button onClick={closeModal} className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg z-20 hover:scale-110 transition-transform" aria-label="Close gallery"> &times; </button>
        </motion.div>
      </div>
      <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full transition" aria-label="Next image"> <ChevronRight className="w-6 h-6 text-white" /> </button>
    </div>
  );

  return (
    <>
      <div className="relative w-full h-48 pb-24 md:h-80 flex items-center justify-center">
        {images.map((src, index) => (
          <div key={src} className="absolute w-full max-w-[280px] md:w-4/5 md:max-w-md transition-all duration-300 ease-in-out cursor-pointer group hover:z-20 hover:scale-105" style={{ transform: `translateX(${(index - centralImageIndex) * xOffset}px) translateY(${index * yOffset}px)`, zIndex: index }} onClick={() => openModal(index)}>
            <div className="p-1.5 bg-black/20 backdrop-blur-sm border border-purple-500/50 rounded-xl transition-colors shadow-2xl">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover object-top rounded-md aspect-video" />
            </div>
          </div>
        ))}
      </div>
      {isMounted ? createPortal(<AnimatePresence>{modalContent}</AnimatePresence>, document.body) : null}
    </>
  );
};

// DANE
const galleryImages = [
  ["/images/hiw_1_1.png", "/images/hiw_1_2.png", "/images/hiw_1_3.png", "/images/hiw_1_4.png"],
  ["/images/hiw_2_1.png", "/images/hiw_2_2.png", "/images/hiw_2_3.png", "/images/hiw_2_4.png"],
  ["/images/hiw_3_1.png", "/images/hiw_3_2.png", "/images/hiw_3_3.png", "/images/hiw_3_4.png"],
  ["/images/hiw_4_1.png", "/images/hiw_4_2.png", "/images/hiw_4_3.png", "/images/hiw_4_4.png"],
];

function cx(...a: (string | false | undefined)[]) {
  return a.filter(Boolean).join(" ");
}

const InfleeVerticalLanding: React.FC = () => {
  const t = useTranslations();
  // DEBUG - pokaż aktualny locale i przykładowy tekst
  console.log('Current locale:', t('nav.features'));
  console.log('Hero title:', t('hero.title1.part1'));
  const [open, setOpen] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('');

  const handleOpenModal = (subject: string) => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const nav = [
    { href: "#features", label: t('nav.features') },
    { href: "#pricing", label: t('nav.pricing') },
    { href: "/login", label: t('nav.login') },
  ];

  const howItWorks = [
    { icon: <BookOpenCheck className="w-8 h-8 text-indigo-400" />, ring: "bg-indigo-500/10 border-indigo-500/30", sectionKey: "howItWorks.step1" },
    { icon: <LayoutTemplate className="w-8 h-8 text-purple-400" />, ring: "bg-purple-500/10 border-purple-500/30", sectionKey: "howItWorks.step2" },
    { icon: <UsersRound className="w-8 h-8 text-pink-400" />, ring: "bg-pink-500/10 border-pink-500/30", sectionKey: "howItWorks.step3" },
    { icon: <Zap className="w-8 h-8 text-violet-400" />, ring: "bg-violet-500/10 border-violet-500/30", sectionKey: "howItWorks.step4" },
  ];

  const features = [
    { icon: <BookOpenCheck className="w-10 h-10 text-purple-400" />, sectionKey: "features.feature1" },
    { icon: <ImageIcon className="w-10 h-10 text-indigo-400" />, sectionKey: "features.feature2" },
    { icon: <LayoutTemplate className="w-10 h-10 text-pink-400" />, sectionKey: "features.feature3" },
    { icon: <UsersRound className="w-10 h-10 text-purple-400" />, sectionKey: "features.feature4" },
    { icon: <Coffee className="w-10 h-10 text-indigo-400" />, sectionKey: "features.feature5" },
    { icon: <Zap className="w-10 h-10 text-pink-400" />, sectionKey: "features.feature6" },
  ];

  const faqs = ["faq.faq1", "faq.faq2", "faq.faq3", "faq.faq4", "faq.faq5", "faq.faq6"];

  const plans: Plan[] = [
    { id: 'rookie', nameKey: 'pricing.plans.rookie.name', descriptionKey: 'pricing.plans.rookie.description', priceCard: 37, priceBlik: 87, currencyKey: 'pricing.currencyPerMonth', featuresKeys: ['pricing.plans.rookie.feature1', 'pricing.plans.rookie.feature2', 'pricing.plans.rookie.feature3', 'pricing.plans.rookie.feature4', 'pricing.plans.rookie.feature5'], notIncludedKeys: ['pricing.plans.rookie.notIncluded1', 'pricing.plans.rookie.notIncluded2', 'pricing.plans.rookie.notIncluded3', 'pricing.plans.rookie.notIncluded4', 'pricing.plans.rookie.notIncluded5', 'pricing.plans.rookie.notIncluded6', 'pricing.plans.rookie.notIncluded7'], buttonTextKey: 'pricing.plans.rookie.button' },
    { id: 'creator', nameKey: 'pricing.plans.creator.name', descriptionKey: 'pricing.plans.creator.description', priceCard: 87, priceBlik: 137, currencyKey: 'pricing.currencyPerMonth', featuresKeys: ['pricing.plans.creator.feature1', 'pricing.plans.creator.feature2', 'pricing.plans.creator.feature3', 'pricing.plans.creator.feature4', 'pricing.plans.creator.feature5', 'pricing.plans.creator.feature6'], notIncludedKeys: ['pricing.plans.creator.notIncluded1', 'pricing.plans.creator.notIncluded2', 'pricing.plans.creator.notIncluded3', 'pricing.plans.creator.notIncluded4', 'pricing.plans.creator.notIncluded5', 'pricing.plans.creator.notIncluded6', 'pricing.plans.creator.notIncluded7'], highlighted: true, buttonTextKey: 'pricing.plans.creator.button' },
    { id: 'unlimited', nameKey: 'pricing.plans.unlimited.name', descriptionKey: 'pricing.plans.unlimited.description', priceCard: 297, priceBlik: 347, currencyKey: 'pricing.currencyPerMonth', featuresKeys: ['pricing.plans.unlimited.feature1', 'pricing.plans.unlimited.feature2', 'pricing.plans.unlimited.feature3', 'pricing.plans.unlimited.feature4', 'pricing.plans.unlimited.feature5', 'pricing.plans.unlimited.feature6', 'pricing.plans.unlimited.feature7'], notIncludedKeys: [], buttonTextKey: 'pricing.plans.unlimited.button' },
    { id: 'whitelabel', nameKey: 'pricing.plans.whitelabel.name', descriptionKey: 'pricing.plans.whitelabel.description', priceCard: 10000, priceBlik: 10000, currencyKey: 'pricing.currencyOnce', featuresKeys: ['pricing.plans.whitelabel.feature1', 'pricing.plans.whitelabel.feature2', 'pricing.plans.whitelabel.feature3', 'pricing.plans.whitelabel.feature4', 'pricing.plans.whitelabel.feature5', 'pricing.plans.whitelabel.feature6', 'pricing.plans.whitelabel.feature7', 'pricing.plans.whitelabel.feature8', 'pricing.plans.whitelabel.feature9'], notIncludedKeys: [], isGolden: true, buttonTextKey: 'pricing.plans.whitelabel.button' }
  ];

  const getPrice = (plan: Plan) => {
    const price = paymentMethod === 'card' ? plan.priceCard : plan.priceBlik;
    const formattedPrice = new Intl.NumberFormat('pl-PL').format(price);

    if (plan.id === 'whitelabel') {
      return (
        <div>
          <div className="flex items-baseline justify-center">
            <span className="text-xl font-medium text-slate-400 mr-2">{t('pricing.from')}</span>
            <span>{formattedPrice}</span>
            <span className="text-xl font-medium text-slate-400 ml-2">{t(plan.currencyKey)}</span>
          </div>
          <div className="text-xs font-normal text-slate-500 mt-2 text-center">{t('pricing.plusMaintenance')}</div>
        </div>
      );
    }

    return (
      <div className="flex items-baseline">
        <span>{formattedPrice}</span>
        <span className="text-xl font-medium text-slate-400 ml-2">{t(plan.currencyKey)}</span>
      </div>
    );
  };

  const renderPlanButton = (plan: Plan) => {
    const buttonClass = `w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all shadow-md ${
      plan.isGolden
        ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:opacity-90 shadow-lg cursor-pointer'
        : plan.highlighted
        ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-[0_10px_20px_rgba(139,92,246,0.20)] hover:shadow-[0_15px_25px_rgba(139,92,246,0.30)] hover:-translate-y-0.5'
        : 'bg-white/10 border border-white/10 hover:bg-white/20 text-white'
    }`;

    if (plan.id === 'whitelabel') {
      return (
        <button onClick={() => handleOpenModal(t('pricing.plans.whitelabel.modalSubject'))} className={buttonClass}>
          {t(plan.buttonTextKey)}
        </button>
      );
    }

    return (
      <a href="/register" target="_blank" rel="noopener noreferrer">
        <button className={buttonClass}>
          {t(plan.buttonTextKey)}
        </button>
      </a>
    );
  };

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".animate-on-scroll");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const styles = useMemo(
    () => ({
      heroGlow: "shadow-[0_0_40px_rgba(168,85,247,0.30),0_0_60px_rgba(99,102,241,0.20)] md:shadow-[0_0_80px_rgba(168,85,247,0.30),0_0_120px_rgba(99,102,241,0.20)]",
      featureCard: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition",
      cta: "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-[0_10px_20px_rgba(139,92,246,0.20)] hover:shadow-[0_15px_25px_rgba(139,92,246,0.30)] transition hover:-translate-y-0.5",
    }),
    []
  );

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-x-hidden bg-[#0A0A0A] text-slate-200 min-h-screen">
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} subject={modalSubject} />
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"; }
        .gradient-text { background: linear-gradient(135deg, #A855F7, #6366F1); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .animate-on-scroll { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold gradient-text">inflee.app</a>
            <nav className="hidden md:flex items-center space-x-8 text-sm">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-slate-300 hover:text-white transition">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <a href="/register" className={cx("px-5 py-2 rounded-lg text-sm font-semibold", styles.cta)}>
                {t('nav.register')}
              </a>
            </div>
          </div>
      </header>

      <main className="pt-0">
        <section className="py-20 md:py-32 relative overflow-visible">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center" initial="hidden" animate="visible" variants={heroContainerVariants}>
              <div className="text-left">
                <motion.div variants={heroItemVariants}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    {t('hero.title1.part1')} <span className="gradient-text">{t('hero.title1.part2')}</span> {t('hero.title1.part3')}
                  </h1>
                  <div className="w-24 h-px bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
                </motion.div>

                <motion.div variants={heroItemVariants}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    {t('hero.title2.part1')} <span className="gradient-text">{t('hero.title2.part2')}</span>
                  </h1>
                  <div className="w-64 h-px bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
                </motion.div>

                <motion.p variants={heroItemVariants} className="mt-6 text-lg md:text-xl text-slate-400">
                  {t('hero.subtitle')} <br />
                </motion.p>

                <div className="mt-8 space-y-3">
                  {[t('hero.benefit1'), t('hero.benefit2'), t('hero.benefit3')].map((point, i) => (
                    <motion.div key={i} variants={heroItemVariants} className="flex items-center gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-base md:text-lg">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={heroItemVariants} className="mt-10">
                  <a href="/register" className={cx("inline-block px-24 py-4 rounded-xl font-bold", styles.cta)}>
                    {t('hero.cta')}
                  </a>
                  <p className="mt-4 text-xs text-slate-500">
                    {t('hero.subCta')}
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="px-4 sm:px-4 lg:px-0 mb-12 lg:mb-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <div className={cx("rounded-2xl p-2 bg-white/5 border border-white/10 aspect-square", styles.heroGlow)}>
                  <AppAnimation />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {t('howItWorks.title.part1')} <span className="gradient-text">{t('howItWorks.title.part2')}</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                {t('howItWorks.subtitle')}
              </p>
            </div>
            <div className="my-16 md:my-20 h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
            <div className="mt-20">
              {howItWorks.map((step, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <div className="my-16 md:my-20 h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
                  )}
                  <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
                    <div className={cx("order-1", idx % 2 === 0 ? "md:order-1" : "md:order-2")}>
                      <div className="flex items-start gap-4">
                        <div className={cx("w-16 h-16 rounded-full border flex items-center justify-center flex-shrink-0", step.ring)}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">{t(`${step.sectionKey}.title`)}</h3>
                          <p className="text-slate-400 text-lg leading-relaxed mb-4">{t(`${step.sectionKey}.text`)}</p>
                          <ul className="space-y-2">
                            {(t.raw(`${step.sectionKey}.details`) as string[]).map((detail: string, i: number) => (
                              <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={cx("order-2 flex md:items-start justify-center mt-12 md:mt-0 pb-12 md:pb-0", idx % 2 === 0 ? "md:order-2" : "md:order-1")}>
                      <ImageGallery images={galleryImages[idx]} />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-32 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {t('features.title.part1')} <span className="gradient-text">{t('features.title.part2')}</span> {t('features.title.part3')}
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                {t('features.subtitle')}
              </p>
            </div>
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className={cx("p-8 rounded-2xl animate-on-scroll", styles.featureCard)} style={{transitionDelay: `${i * 100}ms`}}>
                  {f.icon}
                  <h3 className="mt-4 text-xl font-bold text-white">{t(`${f.sectionKey}.title`)}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">{t(`${f.sectionKey}.text`)}</p>
                  <ul className="mt-4 space-y-2">
                    {(t.raw(`${f.sectionKey}.benefits`) as {text: string, isGuaranteed?: boolean}[]).map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        {benefit.isGuaranteed ? <Flame className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" /> : <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />}
                        <span>{benefit.isGuaranteed ? <strong className="text-white">{benefit.text}</strong> : benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-white md:whitespace-nowrap">
                {t('pricing.title.part1')} <span className="gradient-text">{t('pricing.title.part2')} <br className="md:hidden" /> {t('pricing.title.part3')}</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400">{t('pricing.subtitle')}</p>
            </div>

            <div className="text-center my-12 animate-on-scroll">
              <div className="bg-slate-900/80 rounded-lg ring-1 ring-white/10 p-1 inline-flex backdrop-blur-sm">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    paymentMethod === 'card'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  {t('pricing.paymentMethods.subscription')}
                </button>
                <button
                  onClick={() => setPaymentMethod('blik')}
                  className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    paymentMethod === 'blik'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  {t('pricing.paymentMethods.oneTime')}
                </button>
              </div>
              <p className="text-slate-400 text-sm mt-4">{t('pricing.paymentMethods.prompt')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              {plans.map((plan, i) => (
                <div key={plan.id} className="relative rounded-2xl transition-all duration-300 animate-on-scroll" style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`p-0.5 rounded-2xl ${plan.highlighted ? 'bg-gradient-to-b from-purple-500 to-indigo-500' : plan.isGolden ? 'bg-gradient-to-b from-amber-500 to-yellow-600' : ''}`}>
                    <div className={cx("relative bg-[#0A0A0A] backdrop-blur-sm rounded-[15px] h-full flex flex-col", !plan.highlighted && !plan.isGolden ? 'border border-white/10' : '')}>
                      {plan.highlighted && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                            {t('pricing.mostPopular')}
                          </span>
                        </div>
                      )}
                      {plan.isGolden && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                            {t('pricing.ownApp')}
                          </span>
                        </div>
                      )}

                      <div className="flex flex-col h-full py-8 px-7">
                        <h3 className="text-2xl font-bold text-white mb-2">{t(plan.nameKey)}</h3>
                        <p className="text-sm text-slate-400 mb-6 h-10">{t(plan.descriptionKey)}</p>

                        <div className="mb-2 flex flex-col items-center justify-center">
                          <div className="border border-white/10 rounded-xl px-6 py-3 transition-colors duration-300">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={plan.id === 'whitelabel' ? 'whitelabel-price' : paymentMethod}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="text-4xl font-bold text-white"
                              >
                                {getPrice(plan)}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>

                        <div className="min-h-[40px]">
                          <AnimatePresence>
                            {paymentMethod === 'blik' && plan.priceBlik > plan.priceCard && plan.id !== 'whitelabel' && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                style={{ overflow: 'hidden' }}
                              >
                                <p className="text-xs text-slate-400 mt-2 mb-4 text-center">
                                  {t('pricing.cheaperBy', { amount: plan.priceBlik - plan.priceCard })}
                                  {' '}
                                  <button
                                    onClick={() => setPaymentMethod('card')}
                                    className="font-semibold text-purple-400 hover:text-purple-300 transition-colors underline cursor-pointer"
                                  >
                                    {t('pricing.check')}
                                  </button>
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="mt-auto mb-8">
                          {renderPlanButton(plan)}
                          {plan.id === 'rookie' && (
                            <div className="text-xs text-slate-500 text-left mt-2 space-y-1">
                              <p>{t('pricing.noCardNeeded')}</p>
                            </div>
                          )}
                        </div>

                        <div className="flex-grow">
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">{t('pricing.includes')}:</div>
                          {plan.featuresKeys.map((featureKey, index) => (
                            <div key={index} className="flex items-start mb-3">
                              {plan.id === 'creator' && featureKey.includes('creator.feature1') ? (
                                <Flame className="w-5 h-5 text-amber-400 fill-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                              ) : (
                                <Check className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                              )}
                              <span className="text-sm text-slate-300 leading-relaxed">{t(featureKey)}</span>
                            </div>
                          ))}

                          {(plan.id === 'creator' || plan.id === 'unlimited') && (
                            <div className="pt-3 mt-3 border-t border-white/10">
                              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">{t('pricing.comingSoon')}:</div>
                              <div className="flex items-start mb-3 opacity-60">
                                <Check className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-400 leading-relaxed">{t('pricing.stripeIntegration')}</span>
                              </div>
                            </div>
                          )}

                          {plan.notIncludedKeys.length > 0 && (
                            <>
                              <div className={`text-xs font-semibold uppercase tracking-wide mt-6 mb-3 ${plan.id === 'creator' ? 'text-slate-400' : 'text-slate-500'}`}>
                                {t('pricing.limits')}:
                              </div>
                              {plan.notIncludedKeys.map((featureKey, index) => (
                                <div key={index} className="flex items-start mb-3">
                                  {plan.id === 'creator' ? (
                                    <>
                                      <ArrowUpCircle className="w-5 h-5 text-sky-400 mr-3 flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-slate-400 leading-relaxed">{t(featureKey)}</span>
                                    </>
                                  ) : (
                                    <>
                                      <MinusCircle className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-slate-500 leading-relaxed">{t(featureKey)}</span>
                                    </>
                                  )}
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {t('faq.title.part1')} <span className="gradient-text">{t('faq.title.part2')}</span>
              </h2>
            </div>
            <div className="mt-16 space-y-4 animate-on-scroll">
              {faqs.map((faqKey, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} data-state={isOpen ? "open" : "closed"} className="rounded-xl overflow-hidden bg-white/[0.03] border border-white/10 transition">
                    <button
                      className="w-full flex justify-between items-center text-left p-6"
                      onClick={() => setOpen((prev) => (prev === i ? null : i))}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                    >
                      <span className="font-semibold text-white">{t(`${faqKey}.q`)}</span>
                      <ChevronDown className={cx("w-5 h-5 text-slate-400 transition-transform duration-300", isOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                          id={`faq-${i}`}
                        >
                          <div className="px-6 pb-6 text-slate-400">
                            <p>{t(`${faqKey}.a`)}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {t('finalCta.title.part1')} <br /> {t('finalCta.title.part2')} <span className="gradient-text">{t('finalCta.title.part3')}</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              {t('finalCta.subtitle')}
            </p>
            <div className="mt-10">
              <a href="/register" className={cx("px-8 py-4 rounded-xl font-bold text-white text-lg", styles.cta)}>
                🚀 {t('finalCta.button')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-sm">
            <p className="text-lg font-bold gradient-text">inflee.app</p>
            <p className="text-slate-400 mt-2">{t('footer.copyright')}</p>
          </div>
          <div className="flex space-x-6 mt-6 md:mt-0 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition">{t('footer.terms')}</a>
            <a href="mailto:kontakt@inflee.app" className="hover:text-white transition">{t('footer.contact')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InfleeVerticalLanding;