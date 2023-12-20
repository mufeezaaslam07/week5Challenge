import React, { useState } from "react";
import framer from "../img/Vector.png";
import logo from "../img/logo.png";
import img from "../img/bi_cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import useCartStore from "../stores/CartStore";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const { cart, updateQuantity, removeFromCart } = useCartStore();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };
  const handleCloseCart = () => {
    setIsCartVisible(false);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
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
          <div
            onClick={toggleCartVisibility}
            className="relative px-[18px] py-2.5 bg-black rounded-[60px] justify-center items-center gap-[3px] flex text-white"
          >
            <img src={img} alt="" />({cart.length})
            <div className="absolute top-12  w-96  shadow-md text-white ">
              {isCartVisible && (
                <div className="bg-black rounded-xl flex flex-col items-center p-3 ">
                  <button className="text-3xl mb-5" onClick={handleCloseCart}>
                    &times;
                  </button>
                  <ul className="flex flex-col gap-4">
                    {cart.map((item) => (
                      <li className="flex gap-8  items-center" key={item.id}>
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-14 h-14 "
                        />
                        <button
                          className="p-2 bg-blue-600  rounded-2xl h-6 flex items-center"
                          onClick={(event) => {
                            handleButtonClick(event);
                            updateQuantity(item.id, item.quantity + 1);
                          }}
                        >
                          +
                        </button>
                        <div className="flex  items-center text-lg">
                          {item.quantity}
                        </div>

                        <button
                          className="p-2 bg-blue-600 rounded-2xl h-6 flex  items-center"
                          onClick={(event) => {
                            handleButtonClick(event);
                            updateQuantity(item.id, item.quantity - 1);
                          }}
                        >
                          -
                        </button>
                        <button
                          className="  "
                          onClick={(event) => {
                            handleButtonClick(event);
                            removeFromCart(item.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
