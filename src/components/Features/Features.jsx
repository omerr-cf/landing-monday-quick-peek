import {
  Eye,
  Zap,
  Palette,
  Settings,
  Shield,
  Puzzle,
  Sparkles,
} from "lucide-react";
import { FEATURES_CONTENT, FEATURE_CARDS, COLOR_CLASSES } from "./constants";

// Icon mapping for dynamic rendering
const ICON_MAP = {
  Eye: Eye,
  Zap: Zap,
  Palette: Palette,
  Settings: Settings,
  Shield: Shield,
  Puzzle: Puzzle,
};

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{FEATURES_CONTENT.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {FEATURES_CONTENT.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {FEATURES_CONTENT.subheadline}
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((feature) => {
            const IconComponent = ICON_MAP[feature.icon];
            return (
              <article
                key={feature.id}
                className="p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all bg-gradient-to-br from-white to-gray-50/50 group"
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    COLOR_CLASSES[feature.color]
                  } group-hover:scale-110 transition-transform`}
                >
                  {IconComponent && <IconComponent className="w-7 h-7" />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
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

