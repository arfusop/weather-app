import React, { useState, useContext } from 'react'
import { AutoComplete } from 'antd'
const { Option } = AutoComplete

import CurrentWeather from '../current'
import { handleLocationSearch } from '../../utils/api'
import { WeatherContext } from '../../context'
import styles from './layout.module.scss'

const Nav = () => {
    const { location } = useContext(WeatherContext)
    const [locations, setLocations] = useState([])

    const onLocationChange = async value => {
        const newLocations = await handleLocationSearch(value)
        if (!newLocations) return
        setLocations(newLocations)
    }

    return (
        <nav className={styles.Nav}>
            <AutoComplete
                className={styles.search}
                onSearch={onLocationChange}
                onSelect={value => location.update(value)}
                placeholder="Search for places...">
                {locations?.length
                    ? locations.map(location => {
                          return (
                              <Option key={location.name} value={location.name}>
                                  {location.name}
                              </Option>
                          )
                      })
                    : null}
            </AutoComplete>
            <CurrentWeather />
        </nav>
    )
}

export default Nav
