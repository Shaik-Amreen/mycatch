import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
 
  return (
    <div className={style.navbarContainer}>
       <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/logo.svg"}
         height={40}
         width={130}
        alt=""
        />
    </div>
  );
};

export default Navbar;
