import React from 'react';


const Description = ({ image1, image2 }) => {
    return (
        <>
            <div className='flex 
             justify-between 
             flex-col 
             laptop:flex-row
             laptop:w-[85%] '>
                <div className='
                laptop:w-[45vw] 
                min-h-[350px] 
                bg-cover
                bg-center
                aspect-[5/3]' src={image1} style={{ backgroundImage: `url(${image1})` }} />
                <div className='
                laptop:w-[35vw]   
                py-[5%]
                px-[5%]
                my-[auto]
                laptop:px-[0] '>
                    <div className='
                    flex 
                    flex-col '>
                        <span className='
                        text-[30px] font-[600] leading-[40px]
                        orchidea'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </span>
                        <span className='text-[18px] mt-[20px]'>
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
            mt-[5%] 
            laptop:flex-row
            laptop:w-[85%] '>
                <div className='
                laptop:w-[35vw]   
                my-[auto]
                py-[5%]
                px-[5%]
                laptop:px-[0]
                laptop:ml-[10vw]'>
                    <div className='
                    flex 
                    flex-col '>
                        <span className='
                        text-[30px] font-[600] leading-[40px]
                        orchidea'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </span>
                        <span className='text-[18px]'>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </span>
                    </div>
                </div>
                <div className='
                laptop:w-[35vw] 
                min-h-[350px] 
                bg-cover
                bg-center
                aspect-[4/3]
                ' src={image2} style={{ backgroundImage: `url(${image2})` }} />
            </div>
        </>
    );
};

export default Description;