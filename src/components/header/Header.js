import React from 'react';
import {Link} from 'react-router-dom';

export default function Header () {
    return (
        <div className='Header'>
            <h1>Shelfie</h1>
            <Link to='/add'>Add</Link>
            <Link to='/'>Dashboard</Link>
        </div>
        
    )
}