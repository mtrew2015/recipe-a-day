import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';
import menu from '../../assets/menu.png'

 function Header() {
    return (
      
        <div className="header">
        <h1>Lets Make Dinner</h1>
            <nav>
            <Link>Home</Link>
            </nav>
        </div>
        
    )
}

export default Header