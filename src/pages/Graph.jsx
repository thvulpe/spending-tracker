import TransactionChart from "../components/TransactionChart";
import './Graph.css';

const Graph = () => {
    return (
        <div className="graph">
            <p>Monthly expenses (current year):</p>
            <TransactionChart />
        </div>
    );
}

export default Graph;