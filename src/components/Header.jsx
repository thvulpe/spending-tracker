import './Header.css';
import { Link } from 'react-router-dom';
import { isAuthenticated } from "../auth/auth";

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <header className="header">
            <h1>💸 Spending Tracker</h1>
            <div className='links'>
                {isAuthenticated() && <Link to="/">Home</Link>}
                {isAuthenticated() && <Link to="/graph">Graph</Link>}
                {!isAuthenticated() && <Link to="/register">Register</Link>}
                {!isAuthenticated() && <Link to="/login">Login</Link>}
                {isAuthenticated() && <button onClick={handleLogout}>Logout</button>}
            </div>
        </header>
    );
}

export default Header;