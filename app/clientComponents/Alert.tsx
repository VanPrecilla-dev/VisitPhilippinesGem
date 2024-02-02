import React from "react";
import Image from "next/image";

const Alert = () => {
  return (
    <div
      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md fixed z-20 top-11 "
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <Image src="/alert.svg" alt="Alert icon" width={20} height={20} />{" "}
        </div>
        <div>
          <p className="font-bold">
            {" "}
            This button will act as placeholder only as this page only show
            Single Landing Page
          </p>
          <p className="regular-14 lg:regular-16">
            You should be redirected to different page. Click the button again
            to close this alert
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
