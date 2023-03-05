import React from 'react'
import { Link } from "react-router-dom"
import Chat1 from "../assets/maths.svg"
import Chat2 from "../assets/biology.svg"
import Chat3 from "../assets/chemistry.svg"

export default function Chatrooms() {
  return (
    <div>
      <div className='text-center text-6xl font-base py-6'>Groups</div>

      <div className='flex flex-wrap flex-col-2 justify-around w-full px-16 py-8 space-x-2'>

        <div class="relative max-w-sm min-w-[300px] h-[20rem] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-2xl w-full object-cover" src={Chat1} />
          </div>
          <div className='grid place-items-center'>
            <div className=''>
              <div className='text-center text-xl'>Maths</div>
              <Link to="/chat">
                <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Join Room</button>
              </Link>
            </div>
          </div>
        </div>

        <div class="relative max-w-sm min-w-[300px] h-[20rem] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-2xl w-full object-cover" src={Chat2} />
          </div>
          <div className='grid place-items-center'>
            <div className=''>
              <div className='text-center text-xl'>Biology</div>
              <Link to="/chat/modernart">
                <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Join Room</button>
              </Link>
            </div>
          </div>
        </div>

        <div class="relative max-w-sm min-w-[300px] h-[20rem] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-2xl w-full object-cover" src={Chat3} />
          </div>
          <div className='grid place-items-center'>
            <div className=''>
              <div className='text-center text-xl'>Chemistry</div>
              <Link to="/chat/modernart">
                <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Join Room</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
