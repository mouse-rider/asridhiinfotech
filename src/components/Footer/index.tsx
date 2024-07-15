import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]" data-wow-delay=".15s">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
            <div className="mb-8">
              <Image src={logo} alt="Logo" width={100} height={50} />
            </div>
            <p className="text-white text-sm">Asridhi InfoTech</p>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex items-center text-white mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <p>123 Street Name, City, Country</p>
            </div>
            <div className="flex items-center text-white mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <p>info@example.com</p>
            </div>
            <div className="flex items-center text-white">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <p>+123 456 7890</p>
            </div>
          </div>
          {/* Quick Links Section Removed */}
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-white text-sm text-center">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
