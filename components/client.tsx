import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import {testimonials} from '@/data'

function Client() {
  return (
    <div className='py-20' id="testimonials">
       <h1 className="heading text-white capitlaize">
        kind words from
        <span className="text-purple">
            {" "} satisfied clients
        </span>
      </h1> 

      <div className='flex flex-col item-center max-lg:mt-10 md:mt-10 '>
            <InfiniteMovingCards
                    items={testimonials}
                    direction = "right"
                    speed = "slow"
             />
      </div>
    </div>
  )
}

export default Client
