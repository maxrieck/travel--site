import React, { useState, useEffect } from 'react'

import './Carousel.css'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const IntervalCarousel = ({data}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if(isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => prevIndex===data.length-1 ?
                0 : currentIndex +1
            )
        }, 2800)

        return () => clearInterval(interval)

    }, [currentIndex, isHovered, data.length])

  return (
    <div className='carouselContainer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}    
    >

        <button className='carouselBtn prev'
            onClick={() => setCurrentIndex(
                currentIndex===0 ? data.length-1 : currentIndex - 1 
            )}
        > <MdArrowBackIos /> </button>

        {data.map((item, index) => (
            <div key={index} className='carouselItem'
                style={{ transform: `translate(-${currentIndex * 100}%)`}}
            >
                <img src={item.image} alt="" />                
            </div>
        ))}

        <button className='carouselBtn next'
            onClick={() => setCurrentIndex(
                currentIndex===data.length-1 ? 0 : currentIndex + 1
            )}
        ><MdArrowForwardIos /> </button>

    </div>
  )
}

export default IntervalCarousel;