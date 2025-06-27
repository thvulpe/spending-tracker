import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({children}) => {
    const [transactions, setTransactions] = useState(null);
    const [filteredTransactions, setFilteredTransactions] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/transactions')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setTransactions(data);
            setFilteredTransactions(data);
        });
    }, []);

    return (
        <TransactionContext.Provider value={{filteredTransactions, setFilteredTransactions, transactions, setTransactions}}>
            {children}
        </TransactionContext.Provider>
    );
}