import React, { useState, useEffect, useRef } from 'react';
import { InView, useInView } from "react-intersection-observer";
import '../index.css'



import img1 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1.png'
import img2 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-1.png'
import img3 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-2.png'
import img4 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-3.png'
import img5 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-4.png'
import img6 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-5.png'
import img7 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-6.png'
import img8 from '../assets/images/slider/andres-vera-CmmYT6Mm948-unsplash 1-7.png'


const Slider = (props) => {

    const imgarray = [img1, img2, img3, img4, img5, img6, img7, img8]
    let mouseDownX = 0
    let oldScrollX = 0
    let timerId


    const reff = useRef(null);

    function num() {
        reff.current.scrollLeft = + 101
    }


    function anim(inView) {
        console.log(props)
        let maxScrollX = reff.current.scrollWidth - reff.current.clientWidth
        // scrollWidth 1863- clientWidth 374 = scrollLeft 1488
        // console.log('maxScrollX', maxScrollX)

        if (inView) {
            clearTimeout(timerId)
            let n = maxScrollX / 8
            if (props.direction === 'down') {

                clearTimeout(timerId)
                timerId = setTimeout(function request() {
                    oldScrollX = reff.current.scrollLeft+n
                    reff.current.scroll({
                        left: reff.current.scrollLeft + n,
                        top: 0,
                        behavior: 'smooth'
                    })
                    
                    if (reff.current.scrollLeft < maxScrollX && inView) {
                        timerId = setTimeout(request, 1000)
                    }
                    else {
                        clearTimeout(timerId)
                    }
                }, 1000)
            } else {

                clearTimeout(timerId)
                timerId = setTimeout(function request() {
                    oldScrollX = reff.current.scrollLeft+n
                    reff.current.scroll({
                        left: reff.current.scrollLeft - n,
                        top: 0,
                        behavior: 'smooth'
                    })
                    
                    if (reff.current.scrollLeft > 0 && inView) {
                        timerId = setTimeout(request, 1000)
                    }
                    else {
                        clearTimeout(timerId)
                    }
                }, 1000)
            }
        } else {
            clearTimeout(timerId)
        }
    }
    return (
        <div className='mt-[10%] w-full    mb-[100px] '
            onDrag={(e) => {
                e.target.parentNode.scrollLeft = oldScrollX + mouseDownX - e.clientX
            }}
            onDragEnd={(e) => {
                e.target.parentNode.scrollLeft = oldScrollX + mouseDownX - e.clientX
                oldScrollX = e.target.parentNode.scrollLeft
            }}
            onMouseDown={(e) => {
                clearTimeout(timerId)
                mouseDownX = e.clientX
            }}

        >
            <div className='uppercase 
            text-[30px]  
            px-[5%] 
            laptop:pl-[10%]
            font-[600]
            orchidea
            '>   Lorem ipsum dolor sit amet</div>
            <InView onChange={(inView) => anim(inView)}>
                <div ref={reff} className='mt-[5%]
                 sliderNoScroll
                 flex overflow-x-auto 
                 px-[5%] laptop:px-[10%] 
                 gap-[25px]
                 '>
                    {imgarray.map(x => {
                        return <img className='w-[55vw] laptop:w-[]   select-none ' key={x} src={x} alt={x} />
                    })}
                </div>
            </InView>

        </div>
    );
};

export default Slider;