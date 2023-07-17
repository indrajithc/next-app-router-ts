"use client";
import { FC, MouseEventHandler } from "react";
import Image from "next/image";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  const { title, containerStyles, btnType, textStyles, handleClick } = props;
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
