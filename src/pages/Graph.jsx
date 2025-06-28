import TransactionChart from "../components/TransactionChart";
import { TransactionProvider } from "../context/TransactionContext";
import './Graph.css';

const Graph = () => {
    return (
        <div className="graph">
            <p>Monthly expenses (current year):</p>
            <TransactionProvider>
                <TransactionChart />
            </TransactionProvider>
        </div>
    );
}

export default Graph;