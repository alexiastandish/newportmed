import React from 'react'
import Carousel from 'nuka-carousel'
import ContainerDimensions from 'react-container-dimensions'

const CarouselSlider = props => {
  return (
    <div className="carousel">
      <ContainerDimensions>
        {({ containerWidth = 100 }) => (
          <Carousel
            width={`${containerWidth}px`}
            cellAlign="center"
            autoplay
            interval={3000}
            enableKeyboardControls
            renderBottomCenterControls
            withoutControls
            wrapAround
            style={{ margin: '0 auto' }}
          >
            <div className="carousel__slide">Slide one</div>
            <div className="carousel__slide">Slide two</div>
            <div className="carousel__slide">Slide three</div>
          </Carousel>
        )}
      </ContainerDimensions>
    </div>
  )
}
export default CarouselSlider
