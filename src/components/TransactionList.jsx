import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionPreview from "./TransactionPreview";

const TransactionList = () => {
    const { filteredTransactions } = useContext(TransactionContext);

    if (!filteredTransactions) return <p>Loading...</p>;

    return (
        <div className="transaction-list">
            <div className="transaction-list-title">
                <h2>ID</h2>
                <h2>Retailer</h2>
                <h2>Amount</h2>
                <h2>Date</h2>
            </div>
            {filteredTransactions.map((transaction) => {
                return (
                    <TransactionPreview key={transaction.id} transaction={transaction} />
                );
            })}
        </div>
    );
}

export default TransactionList;