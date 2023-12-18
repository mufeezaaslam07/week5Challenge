import React from "react";

export const Main = () => {
  return (
    <div className="px-4">
      <div
        className="absolute  mt-[17rem] text-3xl md:text-6xl text-black lg:mt-[18rem] lg:ml-[6rem] lg:text-[64px] lg:w-[881px] font-semibold  z-10"
        style={{ lineHeight: "1" }}
      >
        Award-winning Ecommerce Application based in Denmark.
      </div>
      <div class=" absolute mt-[26rem] w-[90%] text-lg md:mt-[29rem] text-black lg:text-xl font-light  lg:mt-[32rem] lg:ml-[6rem] lg:w-[745px]  font-['Mona-Sans'] leading-[23px] z-10">
        We are a development studio working at the intersection of design and
        technology. It’s a really busy intersection though — a lot of our staff
        have been involved in hit and runs.
        <br />
      </div>
    </div>
  );
};
