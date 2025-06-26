import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionPreview from "./TransactionPreview";

const TransactionList = () => {
    const { transactions } = useContext(TransactionContext);

    return (
        <div className="transaction-list">
            {transactions.map((transaction) => {
                return (
                    <TransactionPreview key={transaction.id} transaction={transaction} />
                );
            })}
        </div>
    );
}

export default TransactionList;