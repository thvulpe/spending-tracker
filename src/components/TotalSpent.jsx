import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import './TotalSpent.css';

const TotalSpent = () => {
    const {filteredTransactions} = useContext(TransactionContext);
    let sum = 0;
    
    for (let i = 0; i < filteredTransactions.length; i++)
        sum = sum + filteredTransactions[i].amount;

    return (
        <div className="total-spent">
            <div className="text">Total spent</div>
            <div className="number">{sum.toFixed(2)}</div>
        </div>
    );
}

export default TotalSpent;