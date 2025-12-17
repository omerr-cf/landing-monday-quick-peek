import {
  Sparkles,
  Chrome,
  ArrowRight,
  Download,
  Play,
  Star,
  Users,
  Check,
  Eye,
  Zap,
  MousePointer2,
} from "lucide-react";
import {
  HERO_CONTENT,
  HERO_CTAS,
  TRUST_BADGES,
  DEMO_PREVIEW,
} from "./constants";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>{HERO_CONTENT.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {HERO_CONTENT.headline.regular}{" "}
              <span className="text-indigo-600">
                {HERO_CONTENT.headline.highlighted}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {HERO_CONTENT.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href={HERO_CTAS.primary.href}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5" />
                {HERO_CTAS.primary.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={HERO_CTAS.secondary.href}
                className="group px-8 py-4 bg-white text-gray-700 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
              >
                <Play className="w-5 h-5" />
                {HERO_CTAS.secondary.text}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{TRUST_BADGES.rating}</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-500" />
                <span>
                  <span className="font-semibold">{TRUST_BADGES.users}</span>{" "}
                  users
                </span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>{TRUST_BADGES.freeTier}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Demo Visual */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative Blur Circles */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-indigo-400/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-emerald-400/30 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />

            {/* Demo Browser Frame */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-1 shadow-2xl shadow-indigo-500/30">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[22px] p-6 sm:p-8">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex-1 bg-gray-700/50 rounded-lg px-4 py-1.5 text-gray-400 text-xs font-mono">
                    {DEMO_PREVIEW.browserUrl}
                  </div>
                </div>

                {/* Demo Content Area */}
                <div className="bg-white rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-gray-50" />

                  {/* Mock Interface */}
                  <div className="relative w-full h-full p-4">
                    {/* Mock Board Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="h-4 bg-gray-300 rounded w-32" />
                    </div>

                    {/* Mock Rows */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <div className="h-3 bg-gray-200 rounded flex-1" />
                        <div className="h-6 w-16 bg-emerald-100 rounded-full" />
                      </div>

                      {/* Highlighted Row with Tooltip */}
                      <div className="relative">
                        <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg border-2 border-indigo-300 shadow-lg">
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="h-3 bg-gray-300 rounded flex-1" />
                          <div className="h-6 w-16 bg-yellow-100 rounded-full" />
                        </div>

                        {/* Tooltip Preview */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white p-4 rounded-xl shadow-2xl w-56 z-10 animate-pulse">
                          <div className="flex items-center gap-2 mb-2">
                            <Eye className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 text-xs font-medium">
                              Quick Peek
                            </span>
                          </div>
                          <div className="h-3 bg-gray-700 rounded w-full mb-2" />
                          <div className="h-2 bg-gray-700 rounded w-3/4 mb-3" />
                          <div className="flex gap-2">
                            <div className="h-5 w-14 bg-emerald-500/30 rounded" />
                            <div className="h-5 w-14 bg-indigo-500/30 rounded" />
                          </div>
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45" />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 opacity-50">
                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                        <div className="h-3 bg-gray-200 rounded flex-1" />
                        <div className="h-6 w-16 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Cursor Icon */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-4">
                    <MousePointer2 className="w-8 h-8 text-gray-800 drop-shadow-lg transform -rotate-6" />
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded-xl bg-black/20">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-indigo-600 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">
                  {DEMO_PREVIEW.floatingBadge.title}
                </div>
                <div className="text-xs text-gray-500">
                  {DEMO_PREVIEW.floatingBadge.subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
