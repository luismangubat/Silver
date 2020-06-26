import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from 'antd';
import Profile from '../../assets/images/Luis.JPG'

const navLinks = [
    {

        title: 'Workspace',
        path: '/workspace'
    },
    {   

        title: 'My Account',
        path: '/myaccount'
    },
    {

        title: 'Discover',
        path: '/discover'

    }
]

// Navigation Top Bar 
export default function Navigation({user}) {
    const [menuActive, setMenuActive] = useState(false)


    return (
    <nav className = 'site-navigation' role='navigation'>
        <span className="menu-title"> Silver  </span>
            <div className = {`menu-content-container ${menuActive && 'active'}`}>
                <ul>  

                    {/* Iterate through array using map function, 
                    then return a mutation of specfified html element */}
                { navLinks.map((link, index) => (
                        <li key= {index}>
                            {/* Link each title to specified page */}
                            <Link to= {link.path}> {link.title}</Link>          
                        </li> 
                    ))}
                </ul> 
                <span className='menu-avatar-container'>
                <Avatar src={Profile} size= {38} />
                <span className= 'menu-avatar-name'> {`${user.firstName} ${user.lastName}`} </span> 
                </span>   
            </div>
            <i className='ionicons icon ion-ios-menu' onClick= {()  => setMenuActive(!menuActive)}/>
    </nav>)
}           



