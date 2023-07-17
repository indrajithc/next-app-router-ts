"use client";
import { FC, MouseEventHandler } from "react";
import Image from "next/image";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  const { title, containerStyles, handleClick } = props;
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
