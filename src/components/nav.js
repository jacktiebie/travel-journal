import React from 'react'
import ReactDOM from 'react-dom'
import Logo from '../../src/images/logo.png'

export default function Nav() {
    return (
    <nav className='nav'>
        <img src={Logo} alt="logo" className='nav-img'/>
        <h1 className='nav-title'>my travel journal.</h1>
    </nav>
    )
}