import { Sparkles } from "lucide-react";
import { FOOTER_CONTENT } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="font-semibold text-white">
                {FOOTER_CONTENT.logo.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{FOOTER_CONTENT.copyright}</p>
          </div>

          {/* Center - Links */}
          <nav className="flex items-center gap-2 text-sm">
            {FOOTER_CONTENT.links.map((link, index) => (
              <span key={link.label} className="flex items-center gap-2">
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
                {index < FOOTER_CONTENT.links.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </span>
            ))}
          </nav>

          {/* Right - Tagline */}
          <p className="text-gray-400 text-sm">{FOOTER_CONTENT.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
