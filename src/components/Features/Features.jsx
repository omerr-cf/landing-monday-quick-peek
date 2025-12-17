import {
  Zap,
  Layout,
  Eye,
  Keyboard,
  Moon,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { FEATURES_CONTENT, FEATURE_CARDS } from "./constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// Icon mapping for dynamic rendering
const ICON_MAP = {
  Zap: Zap,
  Layout: Layout,
  Eye: Eye,
  Keyboard: Keyboard,
  Moon: Moon,
  CheckCircle: CheckCircle,
};

const Features = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{FEATURES_CONTENT.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {FEATURES_CONTENT.headline}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {FEATURES_CONTENT.subheadline}
          </p>
        </header>

        {/* Features Grid - 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURE_CARDS.map((feature, index) => {
            const IconComponent = ICON_MAP[feature.icon];
            return (
              <article
                key={feature.id}
                className={`group p-6 lg:p-8 bg-white rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 cursor-default ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
                }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-indigo-100 rounded-xl lg:rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-200 group-hover:scale-110 transition-all duration-300">
                  {IconComponent && (
                    <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-indigo-600" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
