import TransactionAdder from "../components/TransactionAdder";
import DateFilterSelector from "../components/DateFilterSelector";
import TransactionList from "../components/TransactionList";
import './Home.css';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth/auth';

const Home = () => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="home">
            <TransactionAdder />
            <DateFilterSelector />
            <TransactionList />
        </div>
    );
}

export default Home;