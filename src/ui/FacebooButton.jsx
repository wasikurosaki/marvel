import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FacebookButton = () => {
  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61570623544992",
      "_blank"
    );
  };

  return (
    <button
      onClick={openFacebook}
      className="fixed bottom-10 right-5 w-14 h-14 bg-blue-500 text-white rounded-full flex justify-center items-center shadow-lg hover:bg-blue-900 transition-colors z-50"
    >
      <i>
        <FaFacebook size={28} color="#ffffff" />
      </i>
    </button>
  );
};

export default FacebookButton;
