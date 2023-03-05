import React from 'react'

export default function Calorie() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Calorie</div>

            <div className='p-4 grid place-items-center rounded-md'>
                <iframe src='http://localhost:3001/' title="1" height={800} width={1400} />
            </div>
        </div>
    )
}
