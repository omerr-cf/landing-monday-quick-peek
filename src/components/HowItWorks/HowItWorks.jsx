import { Chrome, Target, Eye, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_CONTENT, STEPS } from "./constants";

// Icon mapping for dynamic rendering
const ICON_MAP = {
  Chrome: Chrome,
  Target: Target,
  Eye: Eye,
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {HOW_IT_WORKS_CONTENT.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {HOW_IT_WORKS_CONTENT.subheadline}
          </p>
        </header>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => {
            const IconComponent = ICON_MAP[step.icon];
            const isLastStep = index === STEPS.length - 1;

            return (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-indigo-100 mb-4">
                    {step.number}
                  </div>

                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </article>

                {/* Arrow Connector (hidden on last step) */}
                {!isLastStep && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-indigo-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

