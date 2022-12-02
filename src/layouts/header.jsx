import React from 'react';
import styles from '../Header.module.css'
import Logo from '../assets/images/Logo.svg'
import phone from '../assets/phone.svg'


const HeaderLayout = () => {
    return (
        <>
        <div className={styles.header}>
            <img src={Logo} alt="Logo" />
            <span className='hidden laptop:inline'>+7 (495) 495-49-54</span>
            <img className='block laptop:hidden' src={phone} alt="" />
        </div>  
        
        </>
    );
};

export default HeaderLayout;