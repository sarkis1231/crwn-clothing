import React from 'react';
import Directory from '../../components/directory/Directory'
import './homePage.scss'

const HomePage = ({ history }) => {
    console.log(history)
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default HomePage;