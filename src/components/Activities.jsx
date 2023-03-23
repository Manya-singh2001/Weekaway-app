import React from 'react'

const Activities = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
                <img 
                className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                src='https://unsplash.com/photos/MA82mPIZeGI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cmVzb3J0c3xlbnwwfHx8fDE2Nzk1MTk0MjU&force=true' alt='/'/>
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
                <img 
                className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                src='https://unsplash.com/photos/4zqvu9dyvSk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc5NTE5Nzgy&force=true' alt='/'/>
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
                <img
                className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                src='https://unsplash.com/photos/7i5HMCGupVw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZGl2aW5nfGVufDB8fHx8MTY3OTQ2NTUxOQ&force=true' alt='/'/>
            </div>
            </div>
        
    )
}

export default Activities