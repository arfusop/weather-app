import React from 'react'
import WeatherContextWrapper from '../context'
import 'antd/dist/antd.css'

import '../styles/globals.scss'

const App = ({ Component }) => {
    return (
        <WeatherContextWrapper>
            <Component />
        </WeatherContextWrapper>
    )
}

export default App
