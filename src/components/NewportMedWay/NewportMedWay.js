import React from 'react'
import nmwdesktop from '../../img/home/newportmedway/nmwdesktop.png'
import MediaQuery from 'react-responsive'
import './NewportMedWay.scss'

const NewportMedWay = () => {
  return (
    <div className="nmw-chart">
      <MediaQuery query="(min-width: 1224px)">
        <img src={nmwdesktop} alt="newport-med-way" />
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <p>Tablet or phone sized rendering</p>
      </MediaQuery>
    </div>
  )
}
export default NewportMedWay
