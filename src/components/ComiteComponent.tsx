import React from 'react'

import { Image } from 'primereact/image';

interface Props {
    img_src: string;
    name: string;
    description: string;
}
        

const ComiteComponent = ({img_src, name, description}: Props) => {
  return (
    <div className='surface-900 border-round-xl p-4 flex flex-column align-items-center w-3 ' >
        <Image src={img_src} imageClassName='border-circle' alt="logo of web development comite" width="100" />
        <p className='text-50 font-bold' >{name}</p>
        <p className='text-50' >{description}</p>
    </div>
  )
}

export default ComiteComponent