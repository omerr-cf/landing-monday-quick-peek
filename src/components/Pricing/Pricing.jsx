import { Check, X, Shield, BarChart3 } from "lucide-react";
import { PRICING_CONTENT, PRICING_PLANS } from "./constants";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            <span>{PRICING_CONTENT.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {PRICING_CONTENT.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {PRICING_CONTENT.subheadline}
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative bg-white rounded-3xl overflow-hidden ${
                plan.isPopular
                  ? "ring-2 ring-indigo-600 shadow-2xl shadow-indigo-500/20 scale-105"
                  : "border border-gray-200 shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-center py-2 text-sm font-medium">
                  ⭐ Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.isPopular ? "pt-14" : ""}`}>
                {/* Plan Name & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, index) => (
                    <li
                      key={`not-${index}`}
                      className="flex items-start gap-3 opacity-40"
                    >
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={plan.ctaHref}
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-lg shadow-indigo-500/25"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Money-back Guarantee */}
        <div className="mt-12 text-center">
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

