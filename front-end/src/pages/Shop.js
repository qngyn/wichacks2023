import React from 'react'
import Product1 from "../assets/product1.jpeg"
import Product2 from "../assets/product2.jpeg"
import Product3 from "../assets/product3.jpeg"
import Product4 from "../assets/product4.jpeg"
import Product5 from "../assets/product5.jpeg"

export default function Shop() {
  return (
    <div>
      <div className='text-center text-6xl font-base py-6'>Shop</div>

      <div className='flex flex-wrap flex-col-2 justify-around w-full px-16 py-8 space-x-2'>

        <div class="relative max-w-sm min-w-[300px] h-[21rem] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-2xl w-full object-cover" src={Product1} />
          </div>
          <div className='py-1'>
            <div className='text-lg'>Cost: 3.66 $</div>
          </div>
          <div className='grid place-items-center'>
            <div className=''>
              <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="relative max-w-sm min-w-[300px] h-[21rem] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-2xl w-full object-cover" src={Product2} />
          </div>
          <div className='py-1'>
            <div className='text-lg'>Cost: 66 $</div>
          </div>
          <div className='grid place-items-center'>
            <div className=''>
              <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="relative max-w-sm min-w-[300px] h-[21rem] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-2xl w-full object-cover" src={Product3} />
          </div>
          <div className='py-1'>
            <div className='text-lg'>Cost: 1.66 $</div>
          </div>
          <div className='grid place-items-center'>
            <div className=''>
              <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="relative max-w-sm min-w-[300px] h-[21rem] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-2xl w-full object-cover" src={Product4} />
          </div>
          <div className='py-1'>
            <div className='text-lg'>Cost: 5.66 $</div>
          </div>
          <div className='grid place-items-center'>
            <div className=''>
              <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="relative max-w-sm min-w-[300px] h-[21rem] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-2xl w-full object-cover" src={Product5} />
          </div>
          <div className='py-1'>
            <div className='text-lg'>Cost: 6.66 $</div>
          </div>
          <div className='grid place-items-center'>
            <div className=''>
              <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
