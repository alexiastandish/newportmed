import React, { Component } from 'react'
//import './Circle.css';
import anime from 'animejs'
import { Link } from 'react-router-dom'

class Circle extends Component {
  componentDidMount() {
    anime({
      targets: 'svg',
      translateX: [150, 50],
      rotate: '-360deg',
      easing: 'easeOutSine',
      duration: 1600,
      autoplay: true,
      scale: 1.1,
    })
  }
  render() {
    return (
      <svg
        id="homepage-circle"
        className="homepage-circle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 457.5 457"
      >
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

        <g id="cloud">
          <Link
            to={{
              pathname: `services`,
              state: `cloud-based-services`,
            }}
            id="homepage-circle-diagram"
          >
            <g>
              <path
                fill="url(#MyGradient)"
                d="M515.2,263.8H485.9a7.7,7.7,0,0,0-.2-1.5A199.2,199.2,0,0,0,319.3,90.8a222.2,222.2,0,0,0-27.8-1.5L337,144.8a1.5,1.5,0,0,1,0,1.8l-47.3,57.7a107.1,107.1,0,0,1,24.9,3.2A84.4,84.4,0,0,1,369,263.8H343.6a1.4,1.4,0,0,0-.9,2.5l28.7,23.5,57.1,46.8a1.5,1.5,0,0,0,1.8,0l56.2-46,29.6-24.3A1.4,1.4,0,0,0,515.2,263.8Z"
                transform="translate(-59.2 -58.5)"
              />
              <path
                fill="#ffffff"
                d="M412.2,180.5s3-13.8-9.9-16.2-16.6,10-16.6,10-7.1-2.9-12.6,1-5.1,11.6-5.1,11.6-8.7-.2-10,7.6c-.9,6,3.5,9.5,10.3,9.5h45c8.1,0,11.9-3.6,11.9-11.4C425.2,180.4,412.2,180.5,412.2,180.5Z"
                transform="translate(-59.2 -58.5)"
              />
            </g>
          </Link>
        </g>
        <g id="medical">
          <Link
            to={{
              pathname: `services`,
              state: `practice-advocates`,
            }}
            id="homepage-circle-diagram"
          >
            <g>
              <path
                fill="url(#MyGradient)"
                d="M337,144.8,291.5,89.3,266.7,59a1.4,1.4,0,0,0-2.5.9V89.1a199.2,199.2,0,0,0-173,166.7,249.8,249.8,0,0,0-1.6,28.3l55.9-45.7a1.3,1.3,0,0,1,1.8,0l57.4,47a107.1,107.1,0,0,1,3.2-24.9,84.1,84.1,0,0,1,55.6-54.2l.7-.3v25.5a1.4,1.4,0,0,0,2.5.9l23-28.1L337,146.6A1.5,1.5,0,0,0,337,144.8Z"
                transform="translate(-59.2 -58.5)"
              />
            </g>
            <polygon
              points="144 94.7 126.5 94.7 126.5 113 108.2 113 108.2 130.5 126.5 130.5 126.5 148.8 144 148.8 144 130.5 162.3 130.5 162.3 113 144 113 144 94.7"
              fill="#ffffff"
            />
          </Link>
        </g>
        <g id="cloud-2" data-name="cloud">
          <Link
            to={{
              pathname: `services`,
              state: `revenue-cycle-management`,
            }}
            id="homepage-circle-diagram"
          >
            <path
              d="M428.5,336.6l-57.1-46.8a102,102,0,0,1-3.2,23.6A84.2,84.2,0,0,1,312,367.9V342.5a1.5,1.5,0,0,0-2.6-.9l-23.7,29-46.5,56.8a1.5,1.5,0,0,0,0,1.8l46.3,56.5L309.4,515a1.5,1.5,0,0,0,2.6-.9V484.8h.3A199.2,199.2,0,0,0,484.9,318.2a237.2,237.2,0,0,0,1.6-27.6l-56.2,46A1.5,1.5,0,0,1,428.5,336.6Z"
              transform="translate(-59.2 -58.5)"
              fill="url(#MyGradient)"
            />
            <path
              d="M386.7,360.3a30.5,30.5,0,1,0,30.5,30.5A30.5,30.5,0,0,0,386.7,360.3Zm3.7,48.4v5.6h-7.1v-5.2a20.9,20.9,0,0,1-8.3-2.8l-.6-.3,2.8-7.4.9.6a13.4,13.4,0,0,0,7.3,2.3c1.4,0,4.6-.3,4.6-2.9s-1.3-3.1-5.4-4.9c-6.6-2.9-9.3-6.2-9.3-11.3s3-8.5,8-9.7v-5.4h7.1v5.2a18.2,18.2,0,0,1,6.3,2.3l.7.4-2.8,7.2-.9-.6a11.1,11.1,0,0,0-5.9-1.8c-1.6,0-3.6.4-3.6,2s.7,2.3,5.4,4.4c6.6,3,9.3,6.4,9.3,11.7S395.8,407.4,390.4,408.7Z"
              transform="translate(-59.2 -58.5)"
              fill="#ffffff"
            />
          </Link>
        </g>
        <g id="gears">
          <Link
            to={{
              pathname: `services`,
              state: `solutions-integration`,
            }}
            id="homepage-circle-diagram"
          >
            <path
              d="M239.2,427.4l46.5-56.8a103.4,103.4,0,0,1-24.5-3.2,84.6,84.6,0,0,1-54.5-56.2h25.5a1.5,1.5,0,0,0,.9-2.6l-85.8-70.2a1.3,1.3,0,0,0-1.8,0L89.6,284.1h0L59.7,308.6a1.4,1.4,0,0,0,.9,2.6H89.8A199.2,199.2,0,0,0,256.5,484.1a221.5,221.5,0,0,0,29,1.6l-46.3-56.5A1.5,1.5,0,0,1,239.2,427.4Z"
              transform="translate(-59.2 -58.5)"
              fill="url(#MyGradient)"
            />
            <g>
              <g>
                <path
                  d="M312,485.1h.3v-.3H312Z"
                  transform="translate(-59.2 -58.5)"
                  fill="#ffffff"
                />
                <path
                  d="M486,263.8a10.1,10.1,0,0,0-.1-1.5h-.2a7.7,7.7,0,0,1,.2,1.5Z"
                  transform="translate(-59.2 -58.5)"
                  fill="#ffffff"
                />
                <path
                  d="M264.2,206.7V206l-.7.3v.5Z"
                  transform="translate(-59.2 -58.5)"
                  fill="#ffffff"
                />
                <polygon points="86.3 179.9 30.5 225.6 30.5 225.6 86.3 179.9" fill="#ffffff" />
                <polygon points="86.3 179.9 30.5 225.6 30.5 225.6 86.3 179.9" fill="#ffffff" />
              </g>
            </g>
            <g>
              <path
                d="M215.6,390.6l7.7-4.4-3.1-8.2-8.7,1.7A24.4,24.4,0,0,0,208,376l2.3-8.6-8-3.6-4.9,7.4a29,29,0,0,0-5.1-.2l-4.4-7.7-8.2,3.1,1.7,8.7a21.1,21.1,0,0,0-3.8,3.5l-8.5-2.3-3.6,8,7.2,4.8a23.6,23.6,0,0,0-.1,5.3l-7.6,4.3,3.1,8.3,8.5-1.8a17.4,17.4,0,0,0,3.7,4l-2.3,8.3,8,3.6,4.7-7.1a25.4,25.4,0,0,0,5.5.1l4.2,7.5,8.3-3.1-1.8-8.5a17.1,17.1,0,0,0,3.9-3.7l8.4,2.3,3.6-8-7.3-4.8A22.7,22.7,0,0,0,215.6,390.6ZM203.8,397a10.7,10.7,0,1,1-5.3-14.1A10.7,10.7,0,0,1,203.8,397Z"
                transform="translate(-59.2 -58.5)"
                fill="#ffffff"
              />
              <path
                d="M173.8,368.5l-2.2-3.8a14.4,14.4,0,0,0,2.1-4.1l4.4-.3.5-5.6-4.3-1.1a12.8,12.8,0,0,0-1.4-4.3l3-3.4-3.6-4.3-3.9,2.3a15.3,15.3,0,0,0-4-2.1l-.3-4.6-5.6-.5-1.1,4.4a15.5,15.5,0,0,0-4.3,1.4l-3.4-3-4.4,3.6,2.3,3.9a13.9,13.9,0,0,0-2.1,4l-4.5.3-.5,5.6,4.3,1.1a14.1,14.1,0,0,0,1.4,4.4l-2.9,3.3,3.6,4.3,3.7-2.2a14.1,14.1,0,0,0,4.2,2.2l.3,4.3,5.6.5,1-4.2a13.9,13.9,0,0,0,4.5-1.4l3.3,2.9ZM159,362.2a6,6,0,0,1-4.3-2.2,6.8,6.8,0,0,1-1.5-4.7,6.6,6.6,0,0,1,6.8-5.8h.2a6.2,6.2,0,0,1,4.3,2.2,6.6,6.6,0,0,1,1.4,4.7A6.3,6.3,0,0,1,159,362.2Z"
                transform="translate(-59.2 -58.5)"
                fill="#ffffff"
              />
            </g>
          </Link>
        </g>
      </svg>
    )
  }
}
export default Circle
