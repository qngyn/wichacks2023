import { React, useState } from 'react'
import { HiX } from "react-icons/hi";

export default function Exercise() {

    const [showExercise, setShowExercise] = useState(false);
    const [showExercise2, setShowExercise2] = useState(false);
    const [showExercise3, setShowExercise3] = useState(false);
    const [showExercise4, setShowExercise4] = useState(false);

    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Exercise</div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16" >

                <div className="relative md:space-x-5 m-8 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 py-3 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white bg-white">
                    <div className="grid place-items-center md:drop-shadow-3xl">
                        <h1 className='py-2 text-xl font-semibold'>How to do Lunges?</h1>
                        <img src="https://images.unsplash.com/photo-1540474527619-218b6018f891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" width="450" height="450" alt="img" className="rounded-xl" />
                        <button className='bg-primary text-white py-2 px-8 rounded-md text-lg w-36 my-2' onClick={() => setShowExercise(true)} aria-hidden="false" aria-label="button">View</button>
                        {showExercise ? (
                            <div>
                                <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative my-6 mx-auto w-screen">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none">
                                            <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                                <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                    How to do Lunges?
                                                </div>

                                                <button className="absolute right-6" onClick={() => setShowExercise(false)} aria-hidden="false" aria-label="button">
                                                    <HiX className="h-7 w-7" aria-hidden="false" />
                                                </button>

                                            </div>

                                            <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                            >
                                                <iframe src="https://www.youtube.com/embed/wrwwXE_x-pQ" title="1" height={400} width={700} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className="relative md:space-x-5 m-8 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 py-3 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white bg-white">
                    <div className="grid place-items-center md:drop-shadow-3xl">
                        <h1 className='py-2 text-xl font-semibold'>How to do dumbbell presses?</h1>
                        <img src="https://images.unsplash.com/photo-1659614871735-e133639e4b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" width="450" height="450" alt="img" className="rounded-xl" />
                        <button className='bg-primary text-white py-2 px-8 rounded-md text-lg w-36 my-2' onClick={() => setShowExercise2(true)} aria-hidden="false" aria-label="button">View</button>
                        {showExercise2 ? (
                            <div>
                                <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative my-6 mx-auto w-screen">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none">
                                            <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                                <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                    How to do dumbbell presses?
                                                </div>

                                                <button className="absolute right-6" onClick={() => setShowExercise2(false)} aria-hidden="false" aria-label="button">
                                                    <HiX className="h-7 w-7" aria-hidden="false" />
                                                </button>

                                            </div>

                                            <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                            >
                                                <iframe src="https://www.youtube.com/embed/QsYre__-aro" title="1" height={400} width={700} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className="relative md:space-x-5 m-8 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 py-3 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white bg-white">
                    <div className="grid place-items-center md:drop-shadow-3xl">
                        <h1 className='py-2 text-xl font-semibold'>How to do Pushup?</h1>
                        <img src="https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="450" height="450" alt="img" className="rounded-xl" />
                        <button className='bg-primary text-white py-2 px-8 rounded-md text-lg w-36 my-2' onClick={() => setShowExercise3(true)} aria-hidden="false" aria-label="button">View</button>
                        {showExercise3 ? (
                            <div>
                                <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative my-6 mx-auto w-screen">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none">
                                            <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                                <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                    How to do Pushup?
                                                </div>

                                                <button className="absolute right-6" onClick={() => setShowExercise3(false)} aria-hidden="false" aria-label="button">
                                                    <HiX className="h-7 w-7" aria-hidden="false" />
                                                </button>

                                            </div>

                                            <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                            >
                                                <iframe src="https://www.youtube.com/embed/VQKqjHtY8jA" title="1" height={400} width={700} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className="relative md:space-x-5 m-8 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 py-3 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white bg-white">
                    <div className="grid place-items-center md:drop-shadow-3xl">
                        <h1 className='py-2 text-xl font-semibold'>How to do Planks?</h1>
                        <img src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="450" height="450" alt="img" className="rounded-xl" />
                        <button className='bg-primary text-white py-2 px-8 rounded-md text-lg w-36 my-2' onClick={() => setShowExercise4(true)} aria-hidden="false" aria-label="button">View</button>
                        {showExercise4 ? (
                            <div>
                                <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative my-6 mx-auto w-screen">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none">
                                            <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                                <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                    How to do Planks?
                                                </div>

                                                <button className="absolute right-6" onClick={() => setShowExercise4(false)} aria-hidden="false" aria-label="button">
                                                    <HiX className="h-7 w-7" aria-hidden="false" />
                                                </button>

                                            </div>

                                            <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                            >
                                                <iframe src="https://www.youtube.com/embed/pvIjsG5Svck" title="1" height={400} width={700} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                            </div>
                        ) : null}
                    </div>
                </div>




            </div>
        </div>
    )
}
