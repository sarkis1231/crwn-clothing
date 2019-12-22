import React from 'react';
import { connect } from 'react-redux'
import MenuItem from './../menu-item/MenuItem'
import './directory.scss';



const Directory = ({ directory }) => {

    console.log(directory.sections)
    return (
        <div className='directory-menu'>
            {directory.sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </div>

    )



}


const mapStateToProps = ({ directory }) => ({
    directory,
})
export default connect(mapStateToProps)(Directory);