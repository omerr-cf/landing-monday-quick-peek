import { Chrome, ArrowRight } from "lucide-react";
import { CTA_CONTENT } from "./constants";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {CTA_CONTENT.headline}
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
          {CTA_CONTENT.subheadline}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CTA_CONTENT.button.href}
            className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-3 group"
          >
            <Chrome className="w-5 h-5" />
            {CTA_CONTENT.button.text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-indigo-300 text-sm">{CTA_CONTENT.footer}</p>
      </div>
    </section>
  );
};

export default CTA;

