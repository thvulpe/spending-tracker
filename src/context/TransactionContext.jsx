import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔐 verifică dacă tokenul este valid
    if (!token?.trim()) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:8080/api/v1/transactions", {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          window.location.href = "/login";
          return null;
        }
        return res.json();
      })
      .then(data => {
        if (!data) return;
        const transactionsWithDates = data.map(t => ({
          ...t,
          date: new Date(t.date)
        }));
        setTransactions(transactionsWithDates);
        setFilteredTransactions(transactionsWithDates);
      })
      .catch(err => {
        console.error("Failed to fetch transactions:", err);
      });
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        filteredTransactions,
        setFilteredTransactions
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};