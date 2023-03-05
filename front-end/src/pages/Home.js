import React from 'react'
import HeroHomeImg from "../assets/hero.svg"
export default function Home() {
    return (
        <div>
            <main className="flex flex-col items-center justify-center mt-4">

                <div className='md:grid md:grid-cols-2 items-center px-36 py-8'>
                    <div className=''>
                        <h1 className='text-3xl md:text-6xl'>About Us</h1>
                        <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Many times students don't have anyone to answer their doubts or any group to study with. On StudyNexus students can connect with other students and answer each others doubts, and join groups.</p>

                    </div>
                    <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                        <img src={HeroHomeImg} alt="img" width="350" height="350" />
                    </div>
                </div>

                <section
                    className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center bg-parallex1">
                    <h1 className="text-5xl font-semibold mt-20 mb-10 text-white">
                        Answer th questions and help others
                    </h1>

                    <span className="text-center font-bold text-xl my-20 text-white">
                        <p className=''>Answer the doubts and get rewards</p>

                        <hr className="h-[0.15rem] w-96 my-4 bg-black" />

                        <p className=''>Buy and Sell Books</p>


                        <hr className="h-[0.15rem] w-96 my-4 bg-black" />

                        <p className=''>Join rooms to help each other</p>

                    </span>
                </section>

                <section className="p-20 space-y-8">
                    <div className=''>
                        <h1 className='text-5xl'>Tips for Studying:</h1>
                        <ul className="text-xl ml-5 py-4">
                            <li className="list-disc py-1">Ask for Help.</li>
                            <li className="list-disc py-1">Use the Buddy System.</li>
                            <li className="list-disc py-1">Plan Ahead—and Stick To It.</li>
                            <li className="list-disc py-1">Cultivate a Productive Space.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}