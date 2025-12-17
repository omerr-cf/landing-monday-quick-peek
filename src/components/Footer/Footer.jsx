import { Eye } from "lucide-react";
import { FOOTER_LOGO, FOOTER_NAV, FOOTER_BOTTOM } from "./constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                {FOOTER_LOGO.name}
              </span>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed">
              {FOOTER_LOGO.description}
            </p>
          </div>

          {/* Product Links */}
          <nav>
            <h4 className="font-semibold text-white mb-4">
              {FOOTER_NAV.product.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_NAV.product.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav>
            <h4 className="font-semibold text-white mb-4">
              {FOOTER_NAV.legal.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_NAV.legal.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} {FOOTER_BOTTOM.copyright}
          </p>
          <p className="text-sm">{FOOTER_BOTTOM.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

