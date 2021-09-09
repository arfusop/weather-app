import React, { useContext } from 'react'
import { WeatherContext } from '../../context'
import styles from './Current.module.scss'

const CurrentWeather = () => {
    const { current, location, forecast } = useContext(WeatherContext)
    console.log(`current: `, current)
    console.log(`location: `, location)
    console.log(`forecast: `, forecast)
    return (
        <div className={styles.CurrentWeather}>
            <div>
                <div>current weather display/icon goes here</div>
                <div>current date/time goes here</div>
            </div>
            {/* <div>divider here</div> */}
            <div className={styles.divider} />
            <div>
                {current.condition.text}
                <img src={current.condition.icon} alt="" />
            </div>
            <div>
                {location.data.name}, {location.data.region},{' '}
                {location.data.country}
            </div>
        </div>
    )
}

export default CurrentWeather
