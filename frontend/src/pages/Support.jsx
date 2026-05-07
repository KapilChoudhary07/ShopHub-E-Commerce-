import { useState } from "react";
import { Link } from "react-router-dom";

const Support = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // mailto: se directly email client khulega
    const mailto = `mailto:support@shophub.com?subject=${encodeURIComponent(form.subject || "Support Request")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How do I track my order?",
      a: "Go to My Orders from the navbar. You'll see real-time status of all your orders there.",
    },
    {
      q: "Can I cancel or modify my order?",
      a: "Orders can be cancelled before they are shipped. Contact us immediately via this form if you need to make changes.",
    },
    {
      q: "What is the return policy?",
      a: "We accept returns within 7 days of delivery for unused items in original packaging. Reach out to us to initiate a return.",
    },
    {
      q: "My payment failed but amount was deducted. What do I do?",
      a: "This usually resolves automatically within 3-5 business days. If not, contact us with your order details and we'll sort it out.",
    },
  ];

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

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Help Center</span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mt-2">Support</h1>
          <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours.</p>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm mb-4">
          <h2 className="font-black text-gray-950 text-base mb-5">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                <p className="font-bold text-gray-900 text-sm mb-1">{faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="font-black text-gray-950 text-base mb-1">Still need help?</h2>
          <p className="text-gray-400 text-sm mb-6">Fill out the form and we'll get back to you.</p>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-black text-gray-950 text-lg">Message sent!</p>
              <p className="text-gray-400 text-sm mt-1">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-5 text-sm font-bold text-gray-400 hover:text-gray-700 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white transition-all duration-150 placeholder:text-gray-300"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white transition-all duration-150 placeholder:text-gray-300"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Order not received"
                  value={form.subject}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white transition-all duration-150 placeholder:text-gray-300"
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea
                  placeholder="Describe your issue in detail..."
                  rows={5}
                  value={form.message}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white transition-all duration-150 placeholder:text-gray-300 resize-none"
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.message}
                className="w-full bg-gray-950 text-white font-bold text-sm py-3.5 rounded-2xl hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all duration-150"
              >
                Send Message
              </button>

            </div>
          )}
        </div>

        <div className="h-6 sm:h-0" />
      </div>
    </div>
  );
};

export default Support;