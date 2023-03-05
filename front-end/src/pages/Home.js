import React from 'react'
import HeroHomeImg from "../assets/hero.svg"
export default function Home() {
    return (
        <div>
            <main className="flex flex-col items-center justify-center mt-4">

                <div className='md:grid md:grid-cols-2 items-center px-36 py-8'>
                    <div className='text-white'>
                        <h1 className='text-3xl md:text-6xl'>About Us</h1>
                        <p className='text-xl md:text-2xl py-4 tracking-wider'>I have created a web application that helps users how to stay fit and healthy by keeping track of daily calorie intake and exercise.</p>

                    </div>
                    <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                        <img src={HeroHomeImg} alt="img" width="350" height="350" />
                    </div>
                </div>

                <section
                    className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center parallex1 text-white">
                    <h1 className="text-5xl font-semibold mt-20 mb-10">
                        Keep track of your diet
                    </h1>

                    <span className="text-center font-bold text-xl my-20">
                        <p className=''>Add food item</p>

                        <hr className="h-[0.15rem] w-36 my-4 bg-white" />

                        <p className=''>Do yoga</p>


                        <hr className="h-[0.15rem] w-36 my-4 bg-white" />

                        <p className=''>Chat with others</p>

                    </span>
                </section>

                <section className="p-20 space-y-8">
                    <div className='text-white'>
                        <h1 className='text-5xl'>Tips to stay fit:</h1>
                        <ul className="text-xl ml-5 py-4">
                            <li className="list-disc py-1">Drink More Water</li>
                            <li className="list-disc py-1">Get Enough Sleep</li>
                            <li className="list-disc py-1">Eat a Balanced Diet</li>
                            <li className="list-disc py-1">Practise Yoga and Meditation</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}
