import React from 'react';
import Logo from '../assets/images/Logo.svg'
import phone from '../assets/phone.svg'


const Header = () => {
    return (
        <>
            <div className='
            fixed
            h-[55px]
            laptop:h-[55px]
            py-[18px] px-[10vw]
            laptop:px-[20vw] 
            top-0 left-0 right-0 
            flex justify-between
            bg-gradient-to-t from-[#464341] to-[#010101]'>
                <img src={Logo} alt="Logo" />
                <span className='hidden laptop:block text-[white] font-[Manrope] leading-[20px] text-[20px]'>+7 (495) 495-49-54</span>
                <img className='block laptop:hidden' src={phone} alt="" />
            </div>

        </>
    );
};

export default Header;