import {NavLink} from "react-router-dom";

const Header = () => {

    const getClass = ({ isActive }) => (isActive ? "nav-active" : null);
    return (
        <header>
            <nav>
                <NavLink to="/" className={getClass}>
                    Home
                </NavLink> {" "}
                <NavLink to="/login" className={getClass}>
                    Login
                </NavLink>
            </nav>
        </header>
    )
}

export default Header