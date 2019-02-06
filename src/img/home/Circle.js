import React, { Component } from 'react'
//import './Circle.css';
import anime from 'animejs'
import { Link } from 'react-router-dom'

class Circle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    anime({
      targets: 'svg',
      translateX: [160, 0],
      rotate: '-360deg',
      easing: 'easeOutSine',
      duration: 1600,
      autoplay: true,
      scale: 1.25,
    })
  }
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.5 494.8">
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="5%" stopColor="#568dc1" />
            <stop offset="95%" stopColor="#afdce2" />
          </linearGradient>
          <linearGradient id="MyGradient">
            <stop offset="5%" stopColor="#568dc1" />
            <stop offset="95%" stopColor="#afdce2" />
          </linearGradient>
          <linearGradient
            id="New_Gradient_Swatch_1-3"
            x1="351.95"
            y1="123.96"
            x2="66.96"
            y2="123.96"
          />
          <linearGradient
            id="New_Gradient_Swatch_1-4"
            x1="395.59"
            y1="341.91"
            x2="395.59"
            y2="57.4"
          />
        </defs>
        <title>homepage</title>
        <g id="gears">
          <Link to="/services" id="homepage-circle-diagram">
            <path
              fill="url(#MyGradient)"
              d="M238.2,335.6a84.4,84.4,0,0,1-54.4-56.3h39.4L183,234.4l-59.6-66.6L67,230.8,23.6,279.3H66.9a199.1,199.1,0,0,0,166.6,173l-55.7-56Z"
              transform="translate(-23.6 -13.6)"
            />
          </Link>

          <g>
            <path
              fill="#ffffff"
              d="M174.6,337.2l8-3.8-2.4-8.4-8.9,1.1a17.6,17.6,0,0,0-3.2-4l3.1-8.4-7.7-4.3-5.5,7.1a22.2,22.2,0,0,0-5.1-.6l-3.8-8.1-8.4,2.5,1,8.7a24.4,24.4,0,0,0-4,3.2l-8.3-2.9-4.3,7.7,6.9,5.3a19.6,19.6,0,0,0-.6,5.3l-7.9,3.7,2.4,8.4,8.6-1a19.5,19.5,0,0,0,3.4,4.3l-2.9,8,7.6,4.3,5.3-6.8a16.6,16.6,0,0,0,5.4.6l3.7,7.8,8.4-2.4-1-8.6a22.5,22.5,0,0,0,4.1-3.4l8.2,3,4.3-7.7-6.9-5.4A23.5,23.5,0,0,0,174.6,337.2Zm-12.3,5.4a10.7,10.7,0,0,1-14.5,4.2,10.6,10.6,0,1,1,14.5-4.2Z"
              transform="translate(-23.6 -13.6)"
            />
            <path
              fill="#ffffff"
              d="M134.7,311.9l-1.9-4a14.1,14.1,0,0,0,2.4-3.9h4.4l1-5.5-4.2-1.4a13.5,13.5,0,0,0-1.1-4.5l3.3-3.1-3.3-4.6-4.1,2a13.6,13.6,0,0,0-3.8-2.4v-4.6L122,279l-1.5,4.3a13.4,13.4,0,0,0-4.4,1l-3.2-3.3-4.6,3.3,2,4a13.6,13.6,0,0,0-2.4,3.8h-4.5l-1,5.5,4.2,1.5a14.6,14.6,0,0,0,1,4.5l-3.1,3,3.2,4.6,3.9-1.9a12.8,12.8,0,0,0,4,2.5v4.4l5.6.9,1.4-4.1a13.4,13.4,0,0,0,4.5-1l3.1,3.1Zm-14.3-7.5a6.3,6.3,0,0,1-4.1-2.6,6.2,6.2,0,0,1-1.1-4.7,6.4,6.4,0,0,1,7.2-5.2h.2a6.5,6.5,0,0,1,4.1,2.6,6.6,6.6,0,0,1,1.1,4.7A6.4,6.4,0,0,1,120.4,304.4Z"
              transform="translate(-23.6 -13.6)"
            />
          </g>
        </g>
        <g id="money">
          <Link to="/services" id="homepage-circle-diagram">
            <path
              fill="url(#MyGradient)"
              d="M346.2,274.7c-5.3,23.3-20,43.7-41.1,55.1a95.3,95.3,0,0,1-15.8,6.5V284.2l-51.1,51.4-60.4,60.7,55.7,56,55.8,56v-55A199.2,199.2,0,0,0,461.9,286.6v-6.8l-55.6,62.1Z"
              transform="translate(-23.6 -13.6)"
            />
          </Link>
          <path
            fill="#ffffff"
            d="M333.1,350.1a30.5,30.5,0,1,0,30.4,30.5A30.5,30.5,0,0,0,333.1,350.1Zm3.7,48.4v5.6h-7.2v-5.2a18.6,18.6,0,0,1-8.2-2.8l-.6-.3,2.8-7.4.9.7a14.2,14.2,0,0,0,7.3,2.2c1.4,0,4.6-.3,4.6-2.9s-1.3-3.1-5.4-4.9c-6.6-2.9-9.3-6.2-9.3-11.3s3-8.5,7.9-9.7v-5.4h7.2v5.3a16.3,16.3,0,0,1,6.3,2.2l.6.4-2.7,7.2-.9-.6a11.2,11.2,0,0,0-5.9-1.7c-1.7,0-3.7.3-3.7,2s.8,2.2,5.4,4.3c6.6,3.1,9.3,6.4,9.3,11.7S342.2,397.2,336.8,398.5Z"
            transform="translate(-23.6 -13.6)"
          />
        </g>
        <g id="medical">
          <g>
            <Link to="/services" id="homepage-circle-diagram">
              <path
                fill="url(#MyGradient)"
                d="M183,234.4a84.4,84.4,0,0,1,57.4-60v38.8l44.7-40L352,113.4l-62.6-56-49-43.8V57.4C150.7,68.4,78.2,139.3,67,230.8l56.4-63Z"
                transform="translate(-23.6 -13.6)"
              />
            </Link>
            <polygon
              fill="#ffffff"
              points="172 96 154.4 96 154.4 114.2 136.2 114.2 136.2 131.8 154.4 131.8 154.4 150.1 172 150.1 172 131.8 190.3 131.8 190.3 114.2 172 114.2 172 96"
            />
          </g>
        </g>
        <g id="cloud">
          <Link to="/services" id="homepage-circle-diagram">
            <path
              fill="url(#MyGradient)"
              d="M462.8,230.4c-11.3-89.5-82.1-161.8-173.4-173l62.6,56-66.9,59.8a84.2,84.2,0,0,1,60.6,57.2H306.5l39.7,44.3,60.1,67.2,55.6-62.1,44.2-49.4Z"
              transform="translate(-23.6 -13.6)"
            />
          </Link>
          <path
            fill="#ffffff"
            d="M404.2,169.8s3-13.9-10-16.3-16.5,10.1-16.5,10.1-7.1-2.9-12.6.9-5.1,11.7-5.1,11.7-8.7-.3-10,7.5c-1,6.1,3.5,9.6,10.2,9.6h45.1c8.1,0,11.9-3.7,11.9-11.5C417.2,169.6,404.2,169.8,404.2,169.8Z"
            transform="translate(-23.6 -13.6)"
          />
        </g>
      </svg>
    )
  }
}
export default Circle
