import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "@components/CustomButton";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto  flex justify-between item-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="Cart hub log"
            width={118}
            height={18}
            className="object-center"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
