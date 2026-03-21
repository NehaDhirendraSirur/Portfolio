// src/common/Footer.jsx
const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] border-t border-white/10 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
        <span>© {new Date().getFullYear()} Neha Dhirendra Sirur. All rights reserved.</span>
        <a
          href="mailto:sirurneha@gmail.com"
          className="hover:text-blue-300 transition-colors"
        >
          sirurneha@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;