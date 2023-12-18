import React, { useState } from "react";
import logo from "../img/logo.png";
import framer from "../img/Vector.png";
import cart from "../img/bi_cart.png";
import { useCart } from "./CartContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart: cartItems } = useCart();
  const cartCount = cartItems.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar w-full h-14 flex justify-between items-center  ">
      <div className="w-full h-9 justify-between items-center inline-flex">
        <div className="justify-center items-center gap-2.5 flex">
          <div className="w-6 h-[30px] ">
            <img src={logo} alt="" />
          </div>
          <div className="text-black text-xl font-semibold font-['Mona-Sans']">
            Ecommerce App
          </div>
        </div>
        <div className="justify-start items-end gap-[15px] flex">
          <div className="px-3.5 py-2.5 hidden md:flex  bg-black rounded-[60px] justify-center items-center gap-2.5 ">
            <div className="text-white text-base font-medium font-['Mona-Sans']">
              Contact us
            </div>
          </div>
          <div className="px-[18px] py-2.5 bg-black rounded-[60px] justify-center items-center gap-[3px] flex">
            <div className="w-4 h-4 relative">
              <img src={cart} alt="" />
            </div>
            <div className="text-white text-base font-medium font-['Mona-Sans']">
              ({cartCount})
            </div>
          </div>
          <div className="px-2 py-3 h-[50px] w-[50px] bg-neutral-200 rounded-[31px] flex-col justify-center items-center gap-2.5 inline-flex">
            <a href="#">
              <img src={framer} alt="" onClick={toggleMenu} />
            </a>
            <ul
              className={`font-semibold bg-black text-white relative w-[200px] ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <li className="mx-[10px] cursor-pointer">Home</li>
              <li className="mx-[10px] cursor-pointer">About Us</li>
              <li className="mx-[10px] cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
