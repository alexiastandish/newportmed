import React from 'react'
import Carousel from 'nuka-carousel'
import ContainerDimensions from 'react-container-dimensions'

const CarouselSlider = props => {
  const { testimonials } = props

  return (
    <div className="carousel">
      <ContainerDimensions>
        {({ containerWidth = 500 }) => (
          <Carousel
            width={`${containerWidth}px`}
            cellAlign="center"
            autoplay
            interval={10000}
            enableKeyboardControls
            withoutControls
            wrapAround
            style={{ margin: '0 auto', fontSize: '1.5rem' }}
          >
            {Object.values(testimonials).map(testi => {
              return (
                <div>
                  <p className="carousel__slide">{testi.testimonial}</p>
                  <p className="carousel__slide-person">{testi.person}</p>
                </div>
              )
            })}
          </Carousel>
        )}
      </ContainerDimensions>
    </div>
  )
}
export default CarouselSlider
