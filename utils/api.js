import axios from 'axios'

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
