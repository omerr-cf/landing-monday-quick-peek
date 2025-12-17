import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ_CONTENT, FAQ_ITEMS } from "./constants";

const FAQ = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {FAQ_CONTENT.headline}
          </h2>
          <p className="text-xl text-gray-600">{FAQ_CONTENT.subheadline}</p>
        </header>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openItemId === item.id;

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                {/* Question Button */}
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {/* Answer Panel */}
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

