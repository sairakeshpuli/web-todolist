
import { Outlet, Link } from "react-router-dom";

import "./index.css"



const Header = () => {
    return (
        <div className="header-container">
            <ul className="nav-items">
                <li className="items">
                    <Link to="/"></Link>
                </li>
                <li className="items">
                    <Link to="/loginform">Sign In </Link>
                </li>
                <li className="items">
                    <Link to="/register">Sign Up</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
};

export default Header;