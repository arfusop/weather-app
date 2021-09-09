import React, { useState, useContext } from 'react'
import { AutoComplete } from 'antd'
const { Option } = AutoComplete

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
            <div>
                <AutoComplete
                    className={styles.search}
                    onSearch={onLocationChange}
                    onSelect={(value, option) => location.update(value)}
                    placeholder="Search for places...">
                    {locations?.length
                        ? locations.map(location => {
                              return (
                                  <Option
                                      key={location.name}
                                      value={location.name}>
                                      {location.name}
                                  </Option>
                              )
                          })
                        : null}
                </AutoComplete>
            </div>
            <div>
                <div>current weather display/icon goes here</div>
                <div>current date/time goes here</div>
            </div>
            <div>divider here</div>
            <div>smaller footnote details go here</div>
            <div>
                close out with image of location & text label if image is
                available
            </div>
        </nav>
    )
}

export default Nav
