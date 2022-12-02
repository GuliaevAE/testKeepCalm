import React, { useState, useEffect, useRef } from 'react';
import { InView, useInView } from "react-intersection-observer";

import img1 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1.png'
import img2 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-1.png'
import img3 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-2.png'
import img4 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-3.png'
import img5 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-4.png'
import img6 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-5.png'
import img7 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-6.png'
import img8 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-7.png'


const Slider = () => {
    const imgarray = [img1, img2, img3, img4, img5, img6, img7, img8]
    let mouseDownX = 0
    let oldScrollX = 0
    let [sliderGrabed, setis] = useState(false)




    const reff = useRef(null);

    function num() {
        reff.current.scrollLeft = + 101
    }


    function anim(inView) {

        if (inView) {
            let scrollWidth = reff.current.scrollWidth
            let p = 100
            // reff.current.scroll(reff.current.scrollLeft+10,0)
            //  timerId = setTimeout(function request() {
            //     console.log('lkkkkkk')
            //     reff.current.scroll(p, 0)
            //     p += 100
            //     if (p <= 1000) {
            //         timerId =setTimeout(request, 1000)
            //     }

            // }, 1000)

        } else {
            // reff.current.scrollLeft = 0
            // clearTimeout(timerId)
        }

    }


    return (
        <div className='mt-[10%] w-full    mb-[100px] '

            onClick={(e) => e.target.scroll(500, 0)}
            onMouseMove={(e) => {
                if (sliderGrabed) {
                    e.target.scrollLeft = oldScrollX + mouseDownX - e.clientX
                }
            }}
            onMouseUp={() => {
                sliderGrabed = false
            }}
            onMouseDown={(e) => {
                sliderGrabed = true
                oldScrollX = e.target.scrollLeft
                mouseDownX = e.clientX
            }}

        >
            <div className='uppercase 
            text-[30px]  
            px-[5%] 
            laptop:pl-[10%]
            orchidea
            '>   Lorem ipsum dolor sit amet</div>

            <InView onChange={(inView, entry) => anim(inView)}>
                <div ref={reff} className='mt-[5%]
                 scroll-smooth laptop:scroll-[none]  
                 flex overflow-x-auto 
                 pl-[5%] laptop:pl-[10%] 
                 pr-[10%]'>
                    {imgarray.map(x => {
                        return <img className=' pointer-events-none mr-[25px] select-none ' key={x} src={x} alt={x} />
                    })}
                </div>
            </InView>

        </div>
    );
};

export default Slider;