import { Chrome } from "lucide-react";
import { CTA_CONTENT } from "./constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const CTA = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700"
    >
      <div className="max-w-4xl mx-auto">
        {/* Content Container with rounded corners */}
        <div className="text-center">
          {/* Headline */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {CTA_CONTENT.headline}
          </h2>

          {/* Subheadline */}
          <p
            className={`text-xl text-indigo-200 mb-10 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            {CTA_CONTENT.subheadline}
          </p>

          {/* CTA Button - Large Green */}
          <a
            href={CTA_CONTENT.button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 cursor-pointer ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <Chrome className="w-6 h-6" />
            {CTA_CONTENT.button.text}
          </a>

          {/* Trust Elements */}
          <div
            className={`mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            {CTA_CONTENT.trustElements.map((element, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-indigo-200 text-sm md:text-base"
              >
                <span>{element.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
