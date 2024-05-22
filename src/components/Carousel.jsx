import { useEffect, useState } from 'react'
import { Indicators } from './Indicators'
import { Slide } from './Slide'

export const Carousel = ({ imageUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const goPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? activeIndex - 1 : setActiveIndex(imageUrls.length - 1)
    )
  }

  const goNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < imageUrls.length - 1 ? prevIndex + 1 : setActiveIndex(0)
    )
  }

  return (
    <div className="carousel">
      {imageUrls.map((imageUrl, index) => (
        <Slide
          key={index}
          imageUrl={imageUrl}
          isActive={activeIndex === index}
        />
      ))}
      <Indicators activeIndex={activeIndex} length={imageUrls.length} />
      <button className="carousel-button prev" onClick={goPrev}>
        Anterior
      </button>
      <button className="carousel-button next" onClick={goNext}>
        Próximo
      </button>
    </div>
  )
}
