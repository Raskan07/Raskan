import React from 'react'
import { gridItems } from '@/data'
import { BentoGrid,BentoGridItem } from './ui/GridGlobe'



function Grid() {
  return (
    <section id="about">
      <BentoGrid className='w-full p-20'>
        {
            gridItems.map((item)=> (
                <BentoGridItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    spareImg={item.spareImg}
                    titleClassName={item.titleClassName}
                 />
            ))
        }
      </BentoGrid>
    </section>
  )
}

export default Grid
