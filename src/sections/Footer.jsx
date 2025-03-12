import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-3 text-white text-2xl">
        <a href="https://github.com/algod-shubh" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/shubhham.arora/" target="_blank" rel="noopener noreferrer" className="social-icon text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/shubham-arora-dev/" target="_blank" rel="noopener noreferrer" className="social-icon text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/_shubhamarora_/" target="_blank" rel="noopener noreferrer" className="social-icon text-yellow-400">
          <SiLeetcode />
        </a>
      </div>

      <p className="text-white-500">© 2025 Shubham Arora. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
