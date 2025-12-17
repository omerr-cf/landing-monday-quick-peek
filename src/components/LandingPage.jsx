import { useState, useEffect } from "react";
import {
  Eye,
  Zap,
  Clock,
  MousePointer2,
  Check,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Star,
  Chrome,
  ArrowRight,
  Sparkles,
  Target,
  Shield,
  Puzzle,
  Users,
  Timer,
  MousePointerClick,
  Layers,
  Palette,
  Settings,
  BarChart3,
} from "lucide-react";

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg shadow-gray-200/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 leading-tight">
                Monday Quick Peek
              </span>
              <span className="text-xs text-indigo-600 font-semibold tracking-wide">
                PRO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, "#pricing")}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Chrome className="w-4 h-4" />
              Get Extension
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  mobileMenuOpen ? "top-3 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-3 block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  mobileMenuOpen ? "top-3 -rotate-45" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, "#pricing")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/30"
              >
                <Chrome className="w-4 h-4" />
                Get Extension
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Chrome Extension for Monday.com</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Clicking.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
              Just Hover.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            See item details, updates, and status columns instantly with a quick
            hover. No more endless clicking to find information in Monday.com.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#pricing"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-xl shadow-emerald-500/25 flex items-center gap-3 group"
            >
              <Chrome className="w-5 h-5" />
              Install Free Version
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-all flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              See How It Works
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Trusted by{" "}
              <span className="font-semibold text-gray-700">2,000+</span>{" "}
              Monday.com power users
            </p>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 shadow-2xl shadow-indigo-500/20 max-w-4xl mx-auto">
            {/* Mock Monday.com Interface */}
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
                  <span className="font-semibold text-gray-900">
                    Project Board
                  </span>
                </div>
              </div>
              {/* Table */}
              <div className="p-4">
                <div className="space-y-3">
                  {/* Row with Tooltip */}
                  <div className="relative">
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <span className="text-gray-700 font-medium">
                        Launch Marketing Campaign
                      </span>
                      <div className="ml-auto flex gap-2">
                        <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          Done
                        </div>
                        <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          John D.
                        </div>
                      </div>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white p-4 rounded-xl shadow-2xl w-72 z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <MousePointer2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">
                          Quick Peek Active
                        </span>
                      </div>
                      <h4 className="font-semibold mb-2">
                        Launch Marketing Campaign
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Final review completed. Ready for Q1 launch with full
                        social media strategy.
                      </p>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                          Status: Done
                        </span>
                        <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded">
                          Priority: High
                        </span>
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                  {/* Other Rows */}
                  <div className="flex items-center gap-4 p-3 rounded-lg opacity-50">
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <span className="text-gray-700">Update Website Copy</span>
                    <div className="ml-auto flex gap-2">
                      <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                        In Progress
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg opacity-50">
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    <span className="text-gray-700">Plan Q2 Strategy</span>
                    <div className="ml-auto flex gap-2">
                      <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        Not Started
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pain Points Section
const PainPointsSection = () => {
  const painPoints = [
    {
      icon: MousePointerClick,
      title: "Click... Click... Click...",
      description:
        "Opening every single item just to see basic details? That adds up to hours of wasted time.",
    },
    {
      icon: Timer,
      title: "Context Switching Hell",
      description:
        "Lose focus every time you click away. Your brain needs 23 minutes to refocus!",
    },
    {
      icon: Layers,
      title: "Information Buried Deep",
      description:
        "Updates, status changes, and notes hidden behind multiple clicks and scrolls.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sound Familiar? 😩
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monday.com is powerful, but navigating it can feel like a workout
            for your mouse finger.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                <point.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Instant Item Preview",
      description:
        "Hover over any item to see its full details, updates, and status without clicking.",
      color: "indigo",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Zero loading time. Information appears instantly as you hover.",
      color: "yellow",
    },
    {
      icon: Palette,
      title: "Beautiful Tooltips",
      description:
        "Clean, modern design that matches Monday.com's aesthetic perfectly.",
      color: "pink",
    },
    {
      icon: Settings,
      title: "Customizable Display",
      description:
        "Choose what information shows in tooltips. Status, dates, people, and more.",
      color: "emerald",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "All processing happens locally. Your data never leaves your browser.",
      color: "blue",
    },
    {
      icon: Puzzle,
      title: "Seamless Integration",
      description:
        "Works automatically on any Monday.com board. No setup required.",
      color: "purple",
    },
  ];

  const colorClasses = {
    indigo: "bg-indigo-100 text-indigo-600",
    yellow: "bg-yellow-100 text-yellow-600",
    pink: "bg-pink-100 text-pink-600",
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick Peek Pro is designed to make your Monday.com experience faster
            and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all bg-gradient-to-br from-white to-gray-50/50 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  colorClasses[feature.color]
                } group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Install the Extension",
      description:
        "Add Quick Peek Pro to Chrome in one click. No account needed.",
      icon: Chrome,
    },
    {
      number: "02",
      title: "Open Monday.com",
      description: "Navigate to any of your Monday.com boards as usual.",
      icon: Target,
    },
    {
      number: "03",
      title: "Hover & Peek",
      description: "Simply hover over any item to see its details instantly.",
      icon: Eye,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started in 30 Seconds
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No complicated setup. No learning curve. Just install and go.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-6xl font-bold text-indigo-100 mb-4">
                  {step.number}
                </div>
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-indigo-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Quick Peek",
      features: [
        "Basic hover tooltips",
        "Item name & description",
        "Status column preview",
        "Works on all boards",
        "Community support",
      ],
      notIncluded: [
        "Custom tooltip layouts",
        "All column types",
        "Advanced filtering",
        "Priority support",
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-gray-600 to-gray-700",
    },
    {
      name: "Pro",
      price: "$5",
      period: "/month",
      description: "For power users who want it all",
      features: [
        "Everything in Free, plus:",
        "Custom tooltip layouts",
        "All 20+ column types",
        "Updates & activity preview",
        "Date column integration",
        "People column details",
        "Advanced filtering options",
        "Keyboard shortcuts",
        "Priority email support",
        "Regular feature updates",
      ],
      notIncluded: [],
      cta: "Start Pro Trial",
      popular: true,
      gradient: "from-indigo-600 to-indigo-700",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade when you need more power.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl overflow-hidden ${
                plan.popular
                  ? "ring-2 ring-indigo-600 shadow-2xl shadow-indigo-500/20 scale-105"
                  : "border border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-center py-2 text-sm font-medium">
                  ⭐ Most Popular
                </div>
              )}
              <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-40">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-lg shadow-indigo-500/25"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span>7-day money-back guarantee. No questions asked.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is my Monday.com data safe?",
      answer:
        "Absolutely! Quick Peek Pro processes everything locally in your browser. Your data never leaves your computer and is never sent to any external servers. We take privacy seriously.",
    },
    {
      question: "Does it work with all Monday.com boards?",
      answer:
        "Yes! Quick Peek Pro works with any board type - Main boards, Private boards, Shareable boards, and even Dashboard views. It automatically detects Monday.com pages.",
    },
    {
      question: "Will it slow down Monday.com?",
      answer:
        "Not at all. Quick Peek Pro is highly optimized and only activates when you hover over items. There's no impact on page load times or Monday.com performance.",
    },
    {
      question: "Can I customize what shows in tooltips?",
      answer:
        "Pro users can fully customize tooltip content. Choose which columns to display, set the order, and even create custom layouts for different board types.",
    },
    {
      question: "What's the difference between Free and Pro?",
      answer:
        "The free version includes basic hover tooltips with item name, description, and status. Pro unlocks all 20+ column types, custom layouts, updates preview, and advanced features.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel anytime from your account settings. No questions asked. You'll continue to have Pro access until the end of your billing period.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Monday.com Experience?
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
          Join thousands of power users who save hours every week with Quick
          Peek Pro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-3 group"
          >
            <Chrome className="w-5 h-5" />
            Install Quick Peek Pro
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <p className="mt-6 text-indigo-300 text-sm">
          Free version available • No credit card required
        </p>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Quick Peek Pro
              </span>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed">
              The essential Chrome extension for Monday.com power users. See
              item details with a simple hover.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Quick Peek Pro. All rights reserved.
          </p>
          <p className="text-sm">Not affiliated with Monday.com</p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
