import React, { useState, createContext } from 'react'
import { handleLocationSearch } from '../utils/api'

export const WeatherContext = createContext(null)

const WeatherContextWrapper = ({ children }) => {
    const [location, setLocation] = useState(null)

    const onLocationSelection = async (value, option) => {
        // query location, set
        console.log(`value: `, value)
        console.log(`option: `, option)
        // const response = await handleLocationSearch(value)
        // console.log(`response: `, response)
    }

    return (
        <WeatherContext.Provider
            value={{
                location: { update: onLocationSelection, data: location }
            }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextWrapper
