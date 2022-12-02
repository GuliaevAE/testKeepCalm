import React, { useRef } from 'react';
import { InView } from "react-intersection-observer";
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
    const timerId = useRef(null)
    let sliderClicked = false
    const slider = useRef(null);

    const incrementCounter = () => {
        let maxScrollX = slider.current.scrollWidth - slider.current.clientWidth
        let n = maxScrollX / 8
        if (props.direction === 'down') {
            oldScrollX = slider.current.scrollLeft + n
            slider.current.scroll({
                left: slider.current.scrollLeft + n,
                top: 0,
                behavior: 'smooth'
            })
            if (slider.current.scrollLeft < maxScrollX) {
                timerId.current = setTimeout(() => incrementCounter(), 1000);
            }
            else { resetCounter() }
        }
        if (props.direction === 'up') {
            oldScrollX = slider.current.scrollLeft - n
            slider.current.scroll({
                left: slider.current.scrollLeft - n,
                top: 0,
                behavior: 'smooth'
            })
            if (slider.current.scrollLeft > 0) {
                timerId.current = setTimeout(() => incrementCounter(), 1000);
            }
            else {
                resetCounter()
            }
        }
    };

    const resetCounter = () => {
        clearTimeout(timerId.current);
        timerId.current = null;
    };

    async function sliderAnimation(inView) {
        if (inView) {
            timerId.current = setTimeout(() => incrementCounter(), 1000);
        } else {
            resetCounter()
        }
    }
    return (
        <div className='mt-[10%] w-full    mb-[100px] '
            onDragStart={(e) => e.preventDefault()}
            onClick={(e)=>e.preventDefault()}
            onMouseDown={(e) => {
                resetCounter()
                mouseDownX = e.clientX
                sliderClicked = true
            }}
            onMouseUp={(e) => {
                sliderClicked = false
                // e.target.parentNode.scrollLeft = oldScrollX + mouseDownX - e.clientX
                oldScrollX = e.target.parentNode.scrollLeft
            }}
            onMouseMove={(e) => {
                if (sliderClicked) { e.target.parentNode.scrollLeft = oldScrollX + mouseDownX - e.clientX }
            }}

        >
            <div className='uppercase 
            text-[30px]  
            px-[5%] 
            laptop:pl-[10vw]
            font-[600]
            orchidea'>Lorem ipsum dolor sit amet</div>
            <InView onChange={(inView) => sliderAnimation(inView)}>
                <div ref={slider} className='mt-[5%]
                 sliderNoScroll
                 flex overflow-x-auto 
                 px-[5%] laptop:px-[10%] 
                 gap-[20px]
                 '>
                    {imgarray.map(x => {
                        return <img className='w-[55vw] laptop:w-[19vw]  select-none ' key={x} src={x} alt={x} />
                    })}
                </div>
            </InView>

        </div>
    );
};

export default Slider;