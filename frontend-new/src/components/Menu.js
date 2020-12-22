import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/membership">Membership</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/training">Personal Training</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/classes">Fitness Classes</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/team">Our Team</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><Link onClick={props.onToggleMenu} to="/membership#freepass" className="button special fit">FREE SEVEN DAY PASS</Link></li>
                <li><a href="#" className="button fit">Fitness Republic App</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
