import React from 'react'
import ComiteComponent from './ComiteComponent'

import {data} from '../data/ComitesData'

const ComiteSection = () => {

  return (
    <div className='flex flex-column align-items-center gap-4' >
    <h2 className='border-bottom-3' >
        Nos Comités
    </h2>
    <div className='flex flex-row justify-content-between gap-6 mx-4' >
        {data.map((comite, index) => (
            <ComiteComponent key={index}
                img_src={comite.img_src}
                name={comite.name}
                description={comite.description}
            />
        ))}
  </div>
  </div>
  )
}

export default ComiteSection