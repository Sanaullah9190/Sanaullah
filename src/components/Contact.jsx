// src/components/Contact.jsx
import { FiMail, FiPhone, FiMapPin, FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedin , FaWhatsapp } from "react-icons/fa";
import { contactDetails, socialLinks } from "../data/portfolio";

// react-icons se icons — 'type' field portfolio.js mein isi naam se match hota hai
const icons = {
  email: <FiMail className="w-5 h-5" />,
  phone: <FiPhone className="w-5 h-5" />,
  location: <FiMapPin className="w-5 h-5" />,
  github: <FaGithub className="w-5 h-5" />,
  linkedin: <FaLinkedin className="w-5 h-5" />,
  whatsaap: <FaWhatsapp className="w-5 h-5" />,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center mb-14">
        <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5">
          ~/contact
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Let’s work together.
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Full-stack MERN & React Native developer focused on building fast, scalable applications. Available for full-time roles and freelance projects.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 flex flex-col gap-6">
        {/* Contact Information card */}
        <div className="bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-2xl p-7 hover:border-teal-500 hover:-translate-y-1 transition-all">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Contact Information
          </h3>
          <div className="flex flex-col gap-5">
            {contactDetails.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-white dark:bg-[#0B0D14] border border-gray-200 dark:border-[#242A3A] flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                  {icons[item.type]}
                </span>
                <div>
                  <p className="font-mono text-[11px] tracking-widest uppercase text-gray-400 dark:text-gray-500">
                    {item.label}
                  </p>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect card */}
        <div className="bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-2xl p-7 hover:border-teal-500 hover:-translate-y-1 transition-all">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Connect
          </h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="blank"
                className="flex items-center justify-between gap-4 bg-white dark:bg-[#0B0D14] border border-gray-200 dark:border-[#242A3A] rounded-xl px-4 py-3.5 hover:border-teal-500 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#161A26] flex items-center justify-center text-gray-600 dark:text-gray-300 shrink-0">
                    {icons[social.type]}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                      {social.label}
                    </span>
                    <span className="block text-xs text-gray-400 dark:text-gray-500">
                      {social.handle}
                    </span>
                  </span>
                </span>
                <span className="text-gray-400 dark:text-gray-500">
                  <FiExternalLink className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}