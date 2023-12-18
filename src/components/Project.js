import React from "react";

export const Project = () => {
  return (
    <div class=" mx-auto w-[90%] bg-black rounded-[41px] p-6 md:p-20 ">
      <div class=" flex-col justify-start items-start gap-9 inline-flex">
        <div class="flex-col justify-start items-start gap-6 flex">
          <div class="justify-start items-center gap-[18px] inline-flex">
            <div class="text-white  md:text-[32px] font-medium font-['Mona-Sans'] leading-9">
              Tell us about your project
            </div>
          </div>
          <div class="w-28s h-[35px] flex-col justify-start items-start gap-[22px] flex">
            <div class="px-3.5 py-2.5 bg-white rounded-[60px] justify-center items-center gap-2.5 inline-flex">
              <div class="text-black text-base font-medium font-['Mona-Sans']">
                Say Hej
              </div>
            </div>
          </div>
        </div>
        <div class=" w-[170px] lg:w-[850px] h-[0px] opacity-60 border border-zinc-500"></div>
        <div class="flex-col justify-start items-start gap-[26px] flex">
          <div class="text-white text-2xl font-medium font-['Mona-Sans'] leading-7">
            Our offices
          </div>
          <div class="flex-col justify-start items-start lg:gap-[286px] ">
            <div class="flex-col justify-start items-start gap-2.5 inline-flex">
              <div class="text-white text-base font-bold font-['Mona-Sans'] leading-[18.40px]">
                Copenagen
              </div>
              <div class="text-white text-base font-light font-['Mona-Sans'] leading-tight">
                1 Carlsberg Gate
                <br />
                1260, København, Denmark
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-2.5 md:ml-[170px] inline-flex">
              <div class="text-white text-base font-bold font-['Mona-Sans'] leading-[18.40px]">
                Billund
              </div>
              <div class="text-white text-base font-light font-['Mona-Sans'] leading-tight">
                24 Lego Allé
                <br />
                7190, Billund, Denmark
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
