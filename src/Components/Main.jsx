import React, { useState } from 'react'

function Main() {
    const [box, setbox] = useState([{img: "https://static.brainpop.com/images/nuxt/brainpop/categories/ell/placement_test_icon.svg", msg: "Placement Test", color: "#55AAEB", bt_color: "#3D7DB1"},{img: "https://cdn-ell.brainpop.com/level1/icon.svg", msg: "Level 1", color: "#E9694F", bt_color: "#D03230"}])
  return (
    <div className='main min-h-[100vh] w-full bg-[#9AE6DF]'>
        <div className="left sm:w-1/2 sm:pl-[10vw] flex items-end flex-col">
            <div className="part  sm:mt-6">
            <div className="part-1">
                <div className="headline rounded-t-md uppercase font-[600] text-[#fff] bg-purple-800 text-[6.5vw] sm:text-[1.5vw] sm:px-2 sm:py-2 px-4 py-3">
                    Today's feature
                </div>
            </div>
            <div className="part2 w-full h-[45vh] sm:h-[60vh] flex overflow-hidden" style={{borderBottom: "4px", borderBottomColor: "purple", borderBottomStyle: "solid"}}>
                <div className="img-cont flex ">
                <img className='h-full w-full object-cover object-center' src="https://cdn-ell.brainpop.com/level1/unit1/lesson1/screenshot_2.png" alt="Check the internet" />
                <img className='h-full w-full object-cover object-center' src="https://cdn-ell.brainpop.com/level1/unit1/lesson1/screenshot_1.png" alt="Check the internet" />
                <img className='h-full w-full object-cover object-center' src="https://cdn-ell.brainpop.com/level1/unit1/lesson1/screenshot_2.png" alt="Check the internet" />
                </div>
            </div>
            <div className="part3 w-full rounded-b-md h-[10vh] bg-[#fff] flex justify-center items-center flex-col gap-2 sm:py-20 py-12">
                <h1 className='text-purple-800'>The Friends</h1>
                <p>Personel Pronouns</p>
            </div>
            </div>
            <div className="part-btn flex flex-col sm:flex-row sm:w-full w-[90vw] sm:mr-[0] mr-[5vw] sm:mt-[2vw] mt-[5vw] gap-3">
                <button className="quick sm:w-1/2 border-none flex items-center gap-3 sm:px-3 px-5 sm:h-[16vh] py-4 text-purple-800 sm:text-[1.5vw] text-[6vw] font-[600] rounded-xl">
                    <img src="https://cdn-ell.brainpop.com/_nuxt/img/esl_quick_tour_icon.d2df389.svg" alt="" /> Quick Tour
                </button>
                <button className="quick sm:w-1/2 border-none flex items-center gap-3 sm:px-3 px-5 sm:h-[16vh] py-4 text-purple-800 sm:text-[1.5vw] text-[6vw] font-[600] rounded-xl">
                <img data-v-5b0fc558="" alt="" class="lazyLoad isLoaded" src="https://cdn-ell.brainpop.com/_nuxt/img/for_teachers.6a2b1be.svg"/> For Teachers
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Main