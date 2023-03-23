import React from 'react'

const Gallery = () => {
    return (
        <div id='Gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-hover' src="https://unsplash.com/photos/O453M2Liufs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fHx8MTY3OTU3MDMwMg&force=true" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-hover' src="https://unsplash.com/photos/bs1eqd6zSiU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fHRyYXZlbCUyMHRyaXBzfGVufDB8fHx8MTY3OTU3MTA3OQ&force=true" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-hover' src="https://unsplash.com/photos/lri4DUnAUrI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTh8fHRyYXZlbCUyMHRyaXBzfGVufDB8fHx8MTY3OTU3MTA3OQ&force=true" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-hover' src="https://unsplash.com/photos/T7K4aEPoGGk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHx8fDE2Nzk1NzAzMDI&force=true" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-hover' src="https://unsplash.com/photos/knQ2EiWX2S8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mjd8fHRyYXZlbCUyMHRyaXBzfGVufDB8fHx8MTY3OTU3MTEwNg&force=true" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Gallery