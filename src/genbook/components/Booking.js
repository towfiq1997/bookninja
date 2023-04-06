import React, { useState } from 'react'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { useSelector, useDispatch } from 'react-redux';
import { setIncorDec } from '../store/genbookslice';
function Booking() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.pageno);
    const incordec = useSelector((state) => state.incordec);
    const navigationstep = [{ label: "Services Selection" }, { label: "STEP TWO" }, { label: "STEP THREE" }];
    console.log(page);
    const stepinc = () => {
        dispatch(setIncorDec("inc"));
    }
    const stepdec = () => {
        dispatch(setIncorDec("dec"));
    }

    const RenderStep = () => {
        if (page == 1) {
            return <StepOne />
        } else if (page == 2) {
            return <StepTwo />
        }
        else if (page == 3) {
            return <StepThree />
        }
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='h-[600px] w-[980px] bg-white flex'>
                <div className='bg-[#4943bf] w-[190px] h-full'>
                    <div className='steps flex-col items-start font-["DM_Sans"] p-[15px]'>

                        {
                            navigationstep.map((nav, index) => (
                                <div key={index} className='step flex justify-start  items-center mb-5  font-semibold text-[15px]'>
                                    <span className={index + 1 > page ? ('h-[22px] w-[22px] bg-white opacity-25 rounded-full flex justify-center items-center mr-4  font-light text-[#626c76]') : ('h-[22px] w-[22px] bg-green-600 rounded-full flex justify-center items-center mr-4 text-white')}>{index + 1}</span>
                                    <span className={index + 1 > page ? ('text-[#626c76]') : ('text-white')}>{nav.label}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-[calc(100%-190px)] bg-[#f5f7fa] flex flex-col'>
                    <RenderStep />
                    {page == 1 ? (<div className="py-[15px] px-[30px] flex justify-end bg-white">
                        <button onClick={stepinc} className="py-[5px] px-[18px]   rounded-[4px] border-[2px] border-[#3b82f6] bg-blue-500 text-white font-semibold">NEXT STEP</button>
                        {console.log(incordec)}
                    </div>) : <>
                        {
                            page == 3 ? (<div className="py-[15px] px-[30px] flex justify-between bg-white">
                                <button onClick={stepdec} className="py-[5px] px-[18px] border-[2px] border-[#e2e2e2]      rounded-[4px] font-semibold">BACK</button>
                                <button onClick={stepinc} className="py-[5px] px-[18px]   rounded-[4px] border-[2px] border-[#3b82f6] bg-blue-500 text-white font-semibold">FINISH</button>
                                {console.log(incordec)}
                            </div>) : (<div className="py-[15px] px-[30px] flex justify-between bg-white">
                                <button onClick={stepdec} className="py-[5px] px-[18px] border-[2px] border-[#e2e2e2]      rounded-[4px] font-semibold">BACK</button>
                                <button onClick={stepinc} className="py-[5px] px-[18px]   rounded-[4px] border-[2px] border-[#3b82f6] bg-blue-500 text-white font-semibold">NEXT STEP</button>
                                {console.log(incordec)}
                            </div>)
                        }
                    </>}
                </div>
            </div>
        </div >
    )
}

export default Booking