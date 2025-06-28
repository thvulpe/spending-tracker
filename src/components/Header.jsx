import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>💸 Spending Tracker</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/graph">Graphs</Link>
            </div>
        </header>
    );
}

export default Header;