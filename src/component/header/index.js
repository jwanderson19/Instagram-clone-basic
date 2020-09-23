import React from 'react'
import logo from '../../img/logo.png'
import './styles.css'

const Header = () =>{

    return(
        <header>
            <a href="#"><img src={logo} alt="logo"/></a>
            <input type="search" placeholder="Pesquisar"></input>
            <ul>
                <li><a href="#"><i className="fas fa-home"></i></a></li>
                <li><a href="#">Icon</a></li>
                <li><a href="#">Icon</a></li>
                <li><a href="#">Icon</a></li>
                <li><a href="#">Icon</a></li>
            </ul>
        </header>
    )
}

export default Header