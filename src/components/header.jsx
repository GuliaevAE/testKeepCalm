import React from 'react';
import Logo from '../assets/images/Logo.svg'
import phone from '../assets/phone.svg'
import phoneNumber from '../assets/phoneNumber.svg'

const HeaderLayout = () => {
    return (
        <>
            <div className='
            fixed
            h-[8vh]
            py-[2vh] px-[5vw] 
            top-0 left-0 right-0 
            flex justify-between
            bg-gradient-to-t from-[#464341] to-[#010101]'>
                <img src={Logo} alt="Logo" />
                <span className='hidden laptop:inline text-[white] font-[Manrope] text-[30px]'>+7 (495) 495-49-54</span>
                {/* <img className='hidden laptop:inline py-[1vh]' src={phoneNumber} alt="" /> */}
                <img className='block laptop:hidden' src={phone} alt="" />
            </div>

        </>
    );
};

export default HeaderLayout;