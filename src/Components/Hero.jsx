import React from "react";

function Hero() {
  return (
    <div className="hero bg-[#EBF7F7] flex flex-col sm:flex-row">
      <div className="left w-screen sm:w-1/2 flex items-center flex-col text-[#212529] py-10 gap-5 sm:ml-[10vw]">
        <h1 className="w-[80vw] text-[7vw] sm:text-[2.8vw] ml-[0vw] sm:text-start sm:w-[80%] text-center">Every Classroom Has ELL Needs</h1>
        <div className="w-[100vw] text-center text-[5vw] sm:text-[1.4vw] sm:font-[400] sm:text-start sm:w-[70%] sm:leading-7 sm:mr-[10%]">
          Discover 90 scaffolded lessons to build vocabulary and grammar skills
          for English learners at every level.
        </div>
        <button className="bg-[#89C5F4] border-none w-[80vw] flex justify-center py-[0.85rem] text-[5.5vw] font-[600] text-[#212529] rounded-lg ml-[0vw] sm:w-[10vw] sm:h-[3vw] sm:text-lg sm:flex sm:p-0 sm:items-center sm:ml-[-22vw]">
            Get in touch
        </button>
      </div>
      <div className="right w-screen sm:w-1/2 h-1/2 sm:mr-[10vw]">
        <img className="w-full h-full object-cover object-center" src="https://cdn-ell.brainpop.com/homepage/Hero%20mobile%202%20_ELL_May@2x.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
