import {
  Download,
  Key,
  Link,
  CreditCard,
  Mail,
  Sparkles,
  CheckCircle2,
  ArrowDown,
  Crown,
} from "lucide-react";
import {
  SETUP_GUIDE_CONTENT,
  FREE_SETUP_STEPS,
  PRO_UPGRADE_STEPS,
} from "./constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { LINKS } from "../../constants";

// Icon mapping for dynamic rendering
const ICON_MAP = {
  Download: Download,
  Key: Key,
  Link: Link,
  CreditCard: CreditCard,
  Mail: Mail,
  Sparkles: Sparkles,
};

const StepCard = ({ step, index, isVisible, isPro = false }) => {
  const IconComponent = ICON_MAP[step.icon];

  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
      }}
    >
      <article
        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
          isPro
            ? "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300"
            : "bg-white border-gray-100 hover:border-indigo-200"
        }`}
      >
        {/* Step Number Badge */}
        <div
          className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
            isPro
              ? "bg-gradient-to-br from-amber-500 to-orange-500"
              : "bg-gradient-to-br from-indigo-500 to-purple-500"
          }`}
        >
          {step.number}
        </div>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            isPro ? "bg-amber-100" : "bg-indigo-100"
          }`}
        >
          {IconComponent && (
            <IconComponent
              className={`w-6 h-6 ${isPro ? "text-amber-600" : "text-indigo-600"}`}
            />
          )}
        </div>

        {/* Content */}
        <h3
          className={`text-lg font-bold mb-2 ${isPro ? "text-amber-900" : "text-gray-900"}`}
        >
          {step.title}
        </h3>
        <p className={`text-sm mb-3 ${isPro ? "text-amber-700" : "text-gray-600"}`}>
          {step.description}
        </p>

        {/* Tip */}
        <div
          className={`flex items-start gap-2 text-xs px-3 py-2 rounded-lg ${
            isPro ? "bg-amber-100/50 text-amber-600" : "bg-indigo-50 text-indigo-600"
          }`}
        >
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{step.tip}</span>
        </div>
      </article>
    </div>
  );
};

const SetupGuide = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section
      id="setup-guide"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {SETUP_GUIDE_CONTENT.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {SETUP_GUIDE_CONTENT.subheadline}
          </p>
        </header>

        {/* Free Setup Section */}
        <div className="mb-16">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
            <span className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-sm">
              <Download className="w-4 h-4" />
              Free Setup
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FREE_SETUP_STEPS.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isVisible={isVisible}
                isPro={false}
              />
            ))}
          </div>

          {/* CTA Button for Free */}
          <div
            className={`text-center mt-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
          >
            <a
              href={LINKS.chromeStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-200"
            >
              <Download className="w-5 h-5" />
              Add to Chrome - It's Free
            </a>
          </div>
        </div>

        {/* Arrow Divider */}
        <div
          className={`flex justify-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Want unlimited previews?</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>

        {/* Pro Upgrade Section */}
        <div>
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full font-semibold text-sm border border-amber-200">
              <Crown className="w-4 h-4" />
              Upgrade to Pro
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRO_UPGRADE_STEPS.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index + 3}
                isVisible={isVisible}
                isPro={true}
              />
            ))}
          </div>

          {/* CTA Button for Pro */}
          <div
            className={`text-center mt-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1100ms" : "0ms" }}
          >
            <a
              href={LINKS.gumroadYearly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all hover:scale-105 shadow-lg shadow-amber-200"
            >
              <Crown className="w-5 h-5" />
              Get Pro - One-Time Payment
            </a>
          </div>
        </div>

        {/* Final Note */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "1200ms" : "0ms" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            <span className="text-emerald-700 font-medium">
              Pro tip: Refresh Monday.com after setup to ensure everything is working!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;

