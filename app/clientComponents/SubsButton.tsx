"use client";
import React, { useState } from "react";
import Alert from "./Alert";

type ButtonProps = {
  alert?: boolean;
  setAlert?: React.Dispatch<React.SetStateAction<boolean>>;
  btnCLick?: () => void;
};

const SubsButton = () => {
  const [alert, setAlert] = useState(false);

  const btnClick = () => setAlert(!alert);
  return (
    <>
    
      <button
      type="button"
        className="regular-20 p-5 w-full text-white tracking-widest shadow appearance-none border rounded-2xl bg-[#153F58] hover:bg-[#9CA48E] "
        onClick={() => btnClick()}
      >
        Subscribe Now
      </button>

      {alert ? <Alert /> : null}
    </>
  );
};

export default SubsButton;
