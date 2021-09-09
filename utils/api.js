import axios from 'axios'
import { format } from 'date-fns'

const BASE_URL = 'http://api.weatherapi.com/v1'

export const handleLocationSearch = async value => {
    try {
        const request = {
            method: 'GET',
            url: `${BASE_URL}/search.json?key=${process.env.NEXT_PUBLIC_API}&q=${value}`
        }
        const response = await axios(request)
        return response?.data || []
    } catch (error) {
        console.log(error)
    }
}

export const getForecastData = async location => {
    try {
        const url = `${BASE_URL}/forecast.json?key=${process.env.NEXT_PUBLIC_API}&q=${location}&days=7&aqi=yes&alerts=yes`

        const request = {
            method: 'GET',
            url
        }
        const response = await axios(request)

        return response?.data || []
    } catch (error) {
        return error
    }
}

export const getAstronomyData = async location => {
    try {
        const day = format(new Date(), 'yyyy-MM-dd')
        const url = `${BASE_URL}/astronomy.json?key=${process.env.NEXT_PUBLIC_API}&q=${location}&dt=${day}`

        const request = {
            method: 'GET',
            url
        }
        const response = await axios(request)

        return response?.data || []
    } catch (error) {
        return error
    }
}
