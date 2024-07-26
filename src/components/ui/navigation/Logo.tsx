import React from "react";
import LOGO from "../../../app/assets/LOGO.png"
import Image from "next/image";

const logo = () => {
  return <div >
    <Image src={LOGO} className="bg-green-500 rounded-[100%] hover:bg-white" alt={""} width={150} height={100}/>
  </div>;
};

export default logo;
