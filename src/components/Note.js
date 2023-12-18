import React from "react";
import bg from "../img/bg.png";

import img from "../img/9.png";

export const Note = () => {
  return (
    <div
      className="mt-16 w-full h-[380px] flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-black text-center">
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-lg md:text-2xl lg:text-4xl font-medium font-['Mona-Sans'] leading-[41.40px] mb-6">
          The team at Studio went above and beyond with our onboarding, even
          finding a way to access the user’s microphone without triggering one
          of those annoying permission dialogs.
          <img className="w-[184px] h-9 mt-4" src={img} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
