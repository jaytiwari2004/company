import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsClock } from "react-icons/bs";

const FloatingHelpButton = () => {
  const rawMessage = "Hello! Now compliancebro is redirecting to the whatapp in a second. Thank you!";
  const message = encodeURIComponent(rawMessage);

  const number = "918989944488"; // correct format

  // 🔥 AUTO-SEND WhatsApp message
  const whatsappLink = `https://wa.me/${number}?text=${message}&send=1`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">

      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white" size={32} />
      </a>

      {/* Text Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-orange-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-orange-400 transition font-medium text-lg"
      >
        <BsClock className="mr-2" size={20} />
        Talk to Tax Expert
      </a>

    </div>
  );
};

export default FloatingHelpButton;
