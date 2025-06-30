import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 bg-[#393E46]/10 backdrop-blur-md border-b border-white/20 shadow-md text-black">
      <div className=" container mx-auto flex justify-between items-center p-6">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <div className="text-2xl">
              <FaGithub />
            </div>
            <div className="text-2xl">
              <FaInstagram />
            </div>
            <div className="text-2xl">
              <FaLinkedinIn />
            </div>
            <div className="text-2xl">
              <FaWhatsapp />
            </div>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};
