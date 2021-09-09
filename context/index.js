import React, { useState, createContext } from 'react'
import { getForecastData, getAstronomyData } from '../utils/api'

export const WeatherContext = createContext(null)

const WeatherContextWrapper = ({ children }) => {
    const [location, setLocation] = useState(null)
    const [current, setCurrent] = useState(null)
    const [weatherAlerts, setWeatherAlerts] = useState(null)
    const [forecast, setForecast] = useState(null)
    const [astronomy, setAstronomy] = useState(null)

    // implement error alerts

    const onLocationSelection = async value => {
        try {
            const city = value.split(',')[0]
            const forecastRes = await getForecastData(city)
            const astronomyRes = await getAstronomyData(city)

            setLocation(forecastRes.location)
            setCurrent(forecastRes.current)
            setWeatherAlerts(forecastRes.alerts)
            setForecast(forecastRes.forecast)
            setAstronomy(astronomyRes.astronomy)
        } catch (error) {
            // trigger off alert -> forecast data could not be reached
            console.log(error)
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                location: { update: onLocationSelection, data: location },
                current,
                weatherAlerts,
                forecast,
                astronomy
            }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextWrapper
