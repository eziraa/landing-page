"use client";

import React, { useState, useEffect } from "react";

import { useTheme } from "../../hooks/ThemeContext";
import {
  Leaf,
  ShieldCheck,
  Clock,
  SprayCan,
  MapPin,
  Smile,
} from "lucide-react";
import AboutSection from "./components/about";
import FeaturesSection from "./components/features";
import FAQSection from "./components/faqs";
import Footer from "./components/footer";
import CTA from "./components/CTA";
import Hero from "./components/hero";
import Header from "./components/header";
import BookInspectionModal from "./components/Book";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-accent-600" />,
    title: "Same-Day Service",
    description:
      "We offer fast, same-day pest inspections and treatments across Sydney to solve urgent problems without delay.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-accent-600" />,
    title: "Eco-Friendly & Safe",
    description:
      "Our treatments are safe for children and pets, using environmentally friendly products that work effectively without harm.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent-600" />,
    title: "Trusted & Verified",
    description:
      "We’re trusted by thousands of Sydney homeowners for our transparent pricing, professional service, and long-lasting protection.",
  },
  {
    icon: <SprayCan className="w-8 h-8 text-accent-600" />,
    title: "Comprehensive Treatments",
    description:
      "We handle termites, cockroaches, ants, rodents, wasps, spiders, and more — with custom plans for each infestation.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-accent-600" />,
    title: "Sydney Local Experts",
    description:
      "Proudly serving Sydney and surrounding suburbs — we know the pests common to your area and how to eliminate them.",
  },
  {
    icon: <Smile className="w-8 h-8 text-accent-600" />,
    title: "Free Quotes & Upfront Pricing",
    description:
      "We provide honest pricing with no hidden fees, and free quotes so you know exactly what to expect.",
  },
];



export default function LateralLanding() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const homeRef = React.createRef<HTMLDivElement>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("intro");
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [openBookModal, setOpenBookModel] = useState(false);



  const faqs = [
    {
      question: "What areas do you service?",
      answer:
        "We provide same-day pest control services across Sydney and surrounding suburbs. Contact us to check availability in your area.",
    },
    {
      question: "Are your treatments safe for children and pets?",
      answer:
        "Yes! We use eco-friendly, child- and pet-safe products to ensure your family's safety while effectively eliminating pests.",
    },
    {
      question: "What pests do you treat?",
      answer:
        "We handle termites, cockroaches, ants, rodents, wasps, spiders, silverfish, and more — with tailored solutions for each pest.",
    },
    {
      question: "How much does an inspection or treatment cost?",
      answer:
        "We offer free quotes and upfront pricing with no hidden fees. Pricing depends on the type and severity of the infestation.",
    },
    {
      question: "How quickly can you come out?",
      answer:
        "In most cases, we offer same-day service. Contact us early in the day to secure a spot with our local technicians.",
    },
    {
      question: "Do I need to leave my house during treatment?",
      answer:
        "Most treatments allow you to stay home safely. We’ll let you know ahead of time if temporary evacuation is recommended.",
    },
  ];



  const handleFaqToggle = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const sections = [
    { id: "intro", label: "HOME" },
    { id: "features", label: "FEATURES" },
    { id: "faq", label: "FAQ" },
    { id: "contact-us", label: "CONTACT" },
    { id: "about-us", label: "ABOUT US" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "intro"; // default to intro

      // Get all sections and check which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport (accounting for header height)
          if (rect.top <= 100) {
            currentSection = sections[i].id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Run immediately on mount to set initial state
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = homeRef.current;
    if (!el) return;

    const handleScroll = () => {
      setIsHeaderSticky(el.scrollTop > 50);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [homeRef]);

  // Also add a separate effect to handle initial load after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const handleInitialScroll = () => {
        let currentSection = "intro";

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
              currentSection = sections[i].id;
              break;
            }
          }
        }

        setActiveSection(currentSection);
      };

      handleInitialScroll();
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  // Check local storage for tokens or user ID
  useEffect(() => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    const userId = localStorage.getItem("userId");
    if (token || refreshToken || userId) {
      setShowLoginButton(false);
    } else {
      setShowLoginButton(true);
    }
  }, []);

  // Close modal with ESC key and backdrop click
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openBookModal) {
        setOpenBookModel(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [openBookModal]);


  return (
    <div
      id="home"
      ref={homeRef}
      className="min-h-screen max-h-screen custom-scrollbar overflow-y-scroll bg-white dark:bg-[#232226] text-gray-900 dark:text-white transition-all"
    >

      {/* Header */}
      <Header
        sections={sections}
        isHeaderSticky={isHeaderSticky}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        setOpenBookModel={setOpenBookModel}
      />

      {/* Hero Section */}
      <Hero isDarkMode={isDarkMode} setOpenBookModel={setOpenBookModel} />

      {/* About Sections */}
      <AboutSection />




      {/* Features Section */}
      <FeaturesSection features={features} isDarkMode={isDarkMode} />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} activeFaqIndex={activeFaqIndex} handleFaqToggle={handleFaqToggle} />


      {/* Clients Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-center"></div>
            ))}
          </div>
        </div>
        <svg
          className="svg-cta-top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z"
            fill="#047857"
          ></path>
        </svg>
      </section>

      {/* CTA Section */}
      <CTA isDarkMode={isDarkMode} setOpenBookModel ={setOpenBookModel}/>


      <Footer />
     {
      openBookModal && (
        <BookInspectionModal onClose={()=>setOpenBookModel(false)} />
      )
     }
    </div>
  );
}
