import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const productLinks = [
    "Core HR",
    "Payroll",
    "Attendance",
    "Recruitment",
    "Performance",
    "Employee Self Service",
  ];

  const resourceLinks = [
    "Documentation",
    "Help Center",
    "API",
    "Blog",
    "FAQs",
    "Support",
  ];

  const companyLinks = [
    "About Us",
    "Careers",
    "Partners",
    "Contact",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: "#" },
    { icon: FaTwitter, url: "#" },
    { icon: FaLinkedinIn, url: "#" },
    { icon: FaInstagram, url: "#" },
    { icon: FaGithub, url: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Company */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-white">
              Koko<span className="text-cyan-400">HR</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Modern HRMS platform designed to simplify Recruitment,
              Attendance, Payroll, Leave Management, Performance,
              Compliance and Employee Self-Service with AI-powered
              automation.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-cyan-400" />
                support@kokohr.com
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-cyan-400" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-cyan-400" />
                New Delhi, India
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-4">
              {productLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-4">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Stay Updated
              </h3>

              <p className="mt-2 text-slate-400">
                Subscribe to receive product updates and HR insights.
              </p>
            </div>

            <div className="flex w-full max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500"
              />

              <button className="flex items-center gap-2 rounded-r-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 font-semibold text-white transition hover:opacity-90">
                Subscribe
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">
          <p className="text-slate-500">
            © {new Date().getFullYear()} KokoHR. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}