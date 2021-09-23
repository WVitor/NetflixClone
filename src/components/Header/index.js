import React from "react";
import './index.css'


export default function Header({transition}){
    return(
        <header className={transition ? 'transition' : ''}>
            <div className='header-logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png' alt='Netflix'/>
                </a>
            </div>
            <div className='header-user'>
                <a href='/user'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='user'/>
                </a>
            </div>
        </header>
    )
}