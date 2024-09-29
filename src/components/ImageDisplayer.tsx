import React from 'react'

import { Image } from 'primereact/image';
import { Carousel } from 'primereact/carousel';

interface ImageDisplayerProps {
    src : string
    alt : string
}

const images = [
    {src: '/images/image1.jpg', alt: 'image1'},
    {src: '/images/image2.jpg', alt: 'image2'},
    {src: '/images/image3.jpeg', alt: 'image3'}
]
        

const ImageDisplayer = () => {

    const ImageItem = ({src, alt}: ImageDisplayerProps) => {
        return (
            <div className="card flex justify-content-center">
                <Image src={src} alt={alt} width="250" />
            </div>
          )
    }

  return (
        <div className='w-6' >
            <Carousel value={images} numVisible={1} numScroll={1} itemTemplate={ImageItem} />
        </div>
  )
}



export default ImageDisplayer