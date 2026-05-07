import { Link } from "react-router-dom";

const TermsOfUse = () => {
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
            <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mt-2">Terms of Use</h1>
            <p className="text-gray-400 text-sm mt-1">Last updated: January 2025</p>
          </div>

          <div className="flex flex-col gap-7 text-sm text-gray-600 leading-relaxed">

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">1. Acceptance of Terms</h2>
              <p>By accessing or using ShopHub, you agree to be bound by these Terms of Use. If you do not agree, please do not use our platform.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">2. Account Responsibility</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility. Notify us immediately if you suspect unauthorized access.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">3. Orders & Payments</h2>
              <p>All orders are subject to product availability. We reserve the right to cancel any order due to pricing errors or stock issues. Payments are processed securely and refunds are handled as per our return policy.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">4. Prohibited Activities</h2>
              <p>You may not use ShopHub for any unlawful purpose, to submit false information, to attempt to hack or disrupt our services, or to resell products without authorization.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">5. Intellectual Property</h2>
              <p>All content on ShopHub including logos, product images, and text is owned by ShopHub or its licensors. You may not reproduce or distribute any content without written permission.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">6. Limitation of Liability</h2>
              <p>ShopHub is not liable for any indirect or consequential damages arising from use of our platform. Our maximum liability is limited to the amount paid for the order in question.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">7. Changes to Terms</h2>
              <p>We may update these terms at any time. Continued use of ShopHub after changes means you accept the updated terms.</p>
            </section>

            <section>
              <h2 className="font-black text-gray-950 text-base mb-2">8. Contact</h2>
              <p>For questions about these terms, contact us at{" "}
                <a href="mailto:legal@shophub.com" className="text-gray-950 font-bold hover:underline">
                  legal@shophub.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;