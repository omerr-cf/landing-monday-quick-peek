import { useState } from "react";
import { Check, X, Shield } from "lucide-react";
import { PRICING_CONTENT, PRICING_PLANS } from "./constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [sectionRef, isVisible] = useScrollAnimation();

  const { free, pro } = PRICING_PLANS;

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <header
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {PRICING_CONTENT.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {PRICING_CONTENT.subheadline}
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-gray-200 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                !isYearly
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {PRICING_CONTENT.toggleMonthly}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isYearly
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {PRICING_CONTENT.toggleYearly}
              <span className="px-2 py-0.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                {PRICING_CONTENT.saveBadge}
              </span>
            </button>
          </div>
        </header>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan Card */}
          <article
            className={`relative bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-default ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {free.name}
              </h3>
              <p className="text-gray-600">{free.description}</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">
                {free.monthlyPrice}
              </span>
              <span className="text-gray-500 ml-1">{free.period}</span>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {free.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 ${
                    !feature.included ? "opacity-50" : ""
                  }`}
                >
                  {feature.included ? (
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                  <span
                    className={
                      feature.included
                        ? "text-gray-700"
                        : "text-gray-400 line-through"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button - Outline */}
            <a
              href={free.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-xl font-bold text-center border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              {free.cta}
            </a>
          </article>

          {/* Pro Plan Card - Highlighted */}
          <article
            className={`relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-all duration-300 cursor-default ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 bg-amber-400 text-amber-900 text-sm font-bold rounded-full shadow-lg">
                {pro.popularBadge}
              </span>
            </div>

            <div className="mb-8 pt-4">
              <h3 className="text-2xl font-bold text-white mb-2">{pro.name}</h3>
              <p className="text-indigo-200">{pro.description}</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">
                {isYearly ? pro.yearlyPrice : pro.monthlyPrice}
              </span>
              <span className="text-indigo-200 ml-1">
                {isYearly ? pro.yearlyPeriod : pro.monthlyPeriod}
              </span>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {pro.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-white">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - White */}
            <a
              href={pro.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-xl font-bold text-center bg-white text-indigo-600 hover:bg-indigo-50 transition-all shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              {pro.cta}
            </a>
          </article>
        </div>

        {/* Money-back Guarantee */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
        >
          <div className="inline-flex items-center gap-2 text-gray-600">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span>{PRICING_CONTENT.guarantee}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
