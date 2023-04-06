import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
function StepTwo() {
    const incordec = useSelector(state => state.incordec);
    const [loading, setLoading] = useState(false);
    const handleNetwork = async () => {
        setLoading(true);
        const request = await fetch("https://jsonplaceholder.typicode.com/photos");

        const res = await request.json();

        if (res) {
            setLoading(false);
            console.log(res);
        }
    }

    useEffect(() => {
        if (incordec) {
            handleNetwork();
        }
    }, [])
    return (
        <>
            {
                loading ? (
                    <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <span class="sr-only">Loading...</span>
                    </div>
                ) : (<div className='flex-grow' >
                    <div className='py-[15px] px-[30px]'>
                        <span className='text-[20px] font-semibold'>Step Two</span>
                    </div>
                    <div className='border-b-2 border-grey'></div>
                    <div className='py-[15px] px-[30px]'>
                        Step Two
                    </div>
                </div>)
            }
        </>
    )
}

export default StepTwo