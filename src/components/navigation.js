import React from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {

        title: 'Home',
        path: '/'
    },
    {   

        title: 'Blog',
        path: '/blog'
    },
    {

        title: 'Contact Us',
        path: '/contact-us'

    }, 
    {
        title: 'Login',
        path: '/login'
    }
    
    
]

// Navigation Top Bar 
export default function Navigation() {
    return (
    <nav className = 'site-navigation'>
        <span> React Blog </span>
        <ul> 

            {/* 
            Iterate through array using map function, 
            then return a mutation of specfified html element 
            */}
          { navLinks.map((link, index) => (
                <li key= {index}>
                    {/* Link each title to specified page */}
                    <Link to= {link.path}> {link.title}</Link>          
                </li> 
            ))}
        </ul>  
    </nav>)
}           




