import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const Nav = () => {
    return (<>
            <span><Link to='/home'>Review Main</Link></span>
            <span><Link to='/review-list'>Review List</Link></span>
            <span><Link to='/write-review'>Review Write</Link></span>
    </>)
}

export default Nav