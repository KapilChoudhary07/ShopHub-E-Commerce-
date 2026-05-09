
import { FaHeart, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Top section */}
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">

          {/* Brand + tagline */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <span className="inline-flex w-7 h-7 bg-gray-950 rounded-lg items-center justify-center shrink-0">
                <span className="text-white text-xs font-black">S</span>
              </span>
              <span className="font-black text-gray-950 text-base tracking-tight">ShopHub</span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
              Your one-stop destination for the best products at the best prices.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {[
                { icon: <FaTwitter />, href: "#", label: "Twitter" },
                { icon: <FaInstagram />, href: "#", label: "Instagram" },
                { icon: <FaGithub />, href: "#", label: "GitHub" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 text-gray-400 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-150 text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-1 sm:gap-x-16">
            <div className="flex flex-col gap-2.5">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Shop</p>
              {[
                { label: "All Products", to: "/" },
                { label: "My Orders", to: "/orders" },
                { label: "Wishlist", to: "/wishlist" },
                { label: "Cart", to: "/cart" },
              ].map(({ label, to }) => (
                <Link key={label} to={to}
                  className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors duration-150">
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Company</p>
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Use", to: "/terms-of-use" },
                { label: "Support", to: "/support" },
                { label: "Contact Us", to: "/contact" },
              ].map(({ label, to }) => (
                <Link key={label} to={to}
                  className="text-xs text-gray-500 hover:text-gray-900 font-medium transition-colors duration-150">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            Made with
            <FaHeart className="text-red-400 text-[10px]" />
            in India
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;