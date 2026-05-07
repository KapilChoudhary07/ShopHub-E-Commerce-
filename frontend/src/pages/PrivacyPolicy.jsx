import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link to="/" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors duration-150 mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm">

          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Legal</span>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mt-2">Privacy Policy</h1>
            <p className="text-gray-400 text-sm mt-1">Last updated: January 2025</p>
          </div>

          <div className="flex flex-col gap-7 text-sm text-gray-600 leading-relaxed">

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as your name, email address, shipping address, and payment details when you create an account or place an order. We also collect usage data like pages visited and items viewed.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">2. How We Use Your Information</h2>
              <p>We use your information to process orders, send order confirmations and updates, improve our platform, and send promotional emails (only if you opt in). We never sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">3. Data Storage & Security</h2>
              <p>Your data is stored securely on our servers. We use industry-standard encryption (SSL/TLS) to protect your information during transmission. Passwords are hashed and never stored in plain text.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">4. Cookies</h2>
              <p>We use cookies to keep you logged in and remember your cart. We do not use third-party tracking cookies. You can disable cookies in your browser settings, but some features may not work as expected.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">5. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal data at any time. To request data deletion, contact us at the email below.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">6. Contact</h2>
              <p>For any privacy-related questions, email us at{" "}
                <a href="mailto:privacy@shophub.com" className="text-gray-950 font-bold hover:underline">
                  privacy@shophub.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;