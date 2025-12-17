import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_CONTENT, FAQ_ITEMS } from "./constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const FAQ = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const [sectionRef, isVisible] = useScrollAnimation();

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <header
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {FAQ_CONTENT.headline}
          </h2>
          <p className="text-xl text-gray-600">{FAQ_CONTENT.subheadline}</p>
        </header>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openItemId === item.id;

            return (
              <article
                key={item.id}
                className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "ring-2 ring-indigo-500 ring-opacity-50" : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 50 + 200}ms` : "0ms",
                }}
              >
                {/* Question Button */}
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-indigo-600 text-white rotate-0"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
