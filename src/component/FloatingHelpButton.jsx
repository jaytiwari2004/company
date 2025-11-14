import React from "react";

const FloatingHelpButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end space-y-3">

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-8 h-8"
          alt="WhatsApp"
        />
      </a>

      {/* Talk to Expert Button */}
      <button className="bg-[#F7931E] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#ffa733] transition-all">
        <span className="text-xl">⏱</span>
        <span className="font-semibold">Talk to Tax Expert</span>
      </button>

    </div>
  );
};

export default FloatingHelpButton;
