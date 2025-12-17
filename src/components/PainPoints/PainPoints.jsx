import { MousePointer, Brain, Clock } from "lucide-react";
import { PAIN_POINTS_CONTENT, PAIN_POINTS_CARDS } from "./constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// Icon mapping for dynamic rendering
const ICON_MAP = {
  MousePointer: MousePointer,
  Brain: Brain,
  Clock: Clock,
};

const PainPoints = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section
      id="pain-points"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-4">
            <span>{PAIN_POINTS_CONTENT.badge.emoji}</span>
            <span>{PAIN_POINTS_CONTENT.badge.text}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {PAIN_POINTS_CONTENT.headline}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {PAIN_POINTS_CONTENT.subheadline}
          </p>
        </header>

        {/* Pain Points Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS_CARDS.map((card, index) => {
            const IconComponent = ICON_MAP[card.icon];
            return (
              <article
                key={card.id}
                className={`group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-default ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
                }}
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Card Number */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-amber-100 transition-colors select-none">
                  0{index + 1}
                </span>

                {/* Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-amber-600" />
                  )}
                </div>

                {/* Card Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
