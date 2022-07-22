
import { Outlet, Link } from "react-router-dom";

import "./index.css"



const Header = () => {
    return (
        <div className="header-container">
            <ul className="nav-items">
                <li className="items">
                    <Link to="/">Home</Link>
                </li>
                <li className="items">
                    <Link to="/about">About</Link>
                </li>

                <li className="items">
                    <Link to="/ourimpact">Ourimpact</Link>
                </li>
                <li className="items">
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
};

export default Header;