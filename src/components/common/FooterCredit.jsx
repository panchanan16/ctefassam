import React from "react";

const FooterCredit = () => {
  return (
    <div className="w-full flex justify-center items-center py-4 bg-emerald-100 border-t">
      <p className="text-sm text-gray-600">
        Designed & Developed by{" "}
        <a
          href="https://www.antarikshinfotech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          Antariksh Information Technology
        </a>
      </p>
    </div>
  );
};

export default FooterCredit;