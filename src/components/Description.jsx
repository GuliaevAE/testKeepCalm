import React from 'react';


const Description = ({ image1, image2 }) => {
    return (
        <>
            <div className='flex 
             justify-between 
             flex-col 
             laptop:flex-row
             laptop:w-[90%] '>
                <div className='
                laptop:w-[50%] 
                min-h-[350px] 
                bg-cover ' style={{ backgroundImage: `url(${image1})` }} />
                <div className='
                laptop:w-[40%]   
                py-[5%]
                px-[5%]
                laptop:px-[0] '>
                    <div className='
                    flex 
                    flex-col '>
                        <span className='
                        text-[30px] 
                        orchidea'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </span>
                        <span>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </span>
                    </div>
                </div>
            </div>


            <div className='
            flex 
            justify-between 
            flex-col-reverse 
            laptop:flex-row
            laptop:w-[90%] '>
                <div className='
                laptop:w-[50%]   
                py-[5%]
                px-[5%]
                laptop:px-[0]
                laptop:pl-[10%]'>
                    <div className='
                    flex 
                    flex-col '>
                        <span className='
                        text-[30px] 
                        orchidea'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </span>
                        <span>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </span>
                    </div>
                </div>
                <div className='
                laptop:w-[40%] 
                min-h-[350px] 
                bg-cover' style={{ backgroundImage: `url(${image2})` }} />
            </div>
        </>
    );
};

export default Description;