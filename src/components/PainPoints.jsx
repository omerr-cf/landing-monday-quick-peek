import { MousePointer, Brain, Clock } from "lucide-react";
import { PAIN_POINTS } from "../constants";

// Icon mapping
const iconMap = {
  MousePointer: MousePointer,
  Brain: Brain,
  Clock: Clock,
};

// Component with Tailwind CSS
const PainPoints = () => {
  const painPointsData = PAIN_POINTS || [
    {
      id: 1,
      title: "Endless Clicking",
      description:
        "Click task → wait for modal → close → repeat. Hundreds of times per day.",
      icon: "MousePointer",
    },
    {
      id: 2,
      title: "Lost Context",
      description:
        "By the time the modal loads, you forgot what you were looking for.",
      icon: "Brain",
    },
    {
      id: 3,
      title: "Wasted Time",
      description:
        "Studies show context switching costs 23 minutes to refocus.",
      icon: "Clock",
    },
  ];

  return (
    <section
      id="pain-points"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-4">
            <span>😤</span>
            <span>Sound Familiar?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Monday.com Frustration
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Every Monday.com user knows these problems. You&apos;re not alone.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPointsData.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <div
                key={point.id}
                className="group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Card number */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-amber-100 transition-colors">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-amber-600" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
