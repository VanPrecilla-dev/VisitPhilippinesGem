"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import Alert from "./Alert";

//this button will act as placeholder only as this page only show Single Page Landing Page

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant?: string;
  full?: boolean;
  alert?: boolean;
  setAlert?: React.Dispatch<React.SetStateAction<boolean>>;
  btnCLick?: () => void;
  w?: number;
};

const CTAButton = (props: ButtonProps) => {
  const { type, title, variant, full, w } = props;

  const [alert, setAlert] = useState(false);

  const btnClick = () => setAlert(!alert);

  return (
    <>
      <button
        className={`flexCenter gap-3 rounded-full border w-${w} p-5 px-16 shadow hover:bg-[#4A756E] bg-[#9CA48E] `}
        type={type}
        onClick={() => btnClick()}
      >
        <label className="bold-20 text-white whitespace-nowrap tracking-widest cursor-pointer">
          {title}
        </label>
        <TbArrowBigRightLinesFilled
          style={{ color: "white", width: "30px", height: "30px" }}
        />
      </button>

      {alert ? <Alert /> : null}
    </>
  );
};

export default CTAButton;
