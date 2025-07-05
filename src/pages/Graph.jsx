import TransactionChart from "../components/TransactionChart";
import './Graph.css';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth/auth';

const Graph = () => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="graph">
            <p>Monthly expenses (current year):</p>
            <TransactionChart />
        </div>
    );
}

export default Graph;