import React from "react";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";

export const Blackbar = () => {
  return (
    <div>
      <div className=" h-[370px] bg-black rounded-[30px] flex justify-center items-center">
        <div className=" w-[1200px] h-[180px] flex-col  gap-[60px] inline-flex">
          <div className=" items-center gap-[18px] sm:inline-flex ">
            <div className="text-white text-md md:text-xl font-medium font-['Mona-Sans'] leading-[23px]">
              We’ve worked with hundreds of amazing people
            </div>
            <div className="  w-64 lg:w-[687px]  h-[0px] border border-neutral-400"></div>
          </div>
          {/* Listing */}
          <div className="flex justify-evenly md:flex-col md:gap-[30px]">
            <div className="md:inline-flex md:gap-[80px]">
              <div className="w-[140px] lg:w-[184px] h-9 relative">
                <img src={img2} alt="" />
              </div>
              <div className="w-[140px] lg:w-[184px] h-9 relative">
                <img src={img4} alt="" />
              </div>
              <div className="w-[140px] lg:w-[184px]  h-9 relative">
                <img src={img3} alt="" />
              </div>
              <div className="w-[140px] lg:w-[184px]  h-9 relative">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="md:inline-flex md:gap-[80px]">
              <div className="w-[140px] lg:w-[184px]  h-9 relative">
                <img src={img7} alt="" />
              </div>
              <div className="w-[140px] lg:w-[184px]  h-9 relative">
                <img src={img5} alt="" />
              </div>
              <div className="w-[140px] lg:w-[184px] h-9 relative">
                <img src={img8} alt="" />
              </div>
              <div className="w-[140px] lg:w-[184px]  h-9 relative">
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
          {/* listign ends */}
        </div>
      </div>
    </div>
  );
};
