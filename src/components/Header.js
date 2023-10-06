import React from 'react'
import SpeedOMeter from './SpeedOMeter'

const Header = () => {
    return (
        <div className='headerContainer'>
            <img src="logo.svg" alt="DoSelect" />
            <SpeedOMeter />
        </div>
    )
}

export default Header