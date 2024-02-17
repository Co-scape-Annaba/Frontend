import React from 'react';

const MailButton = () => {
  return (
    <a href="mailto:recipient@example.com" className="flex items-center bg-white hover:border-gray-300 text-black font-bold py-2 px-4 rounded">
      <img src="icons/mail.png" alt="Email" className="py-2 mr-2 h-3 w-3" />
      <span>  StartMeUp@gmail.com</span>
    </a>
  );
};

export default MailButton;
