import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            retailer: "ShopEasy",
            amount: 56.40,
            date: "2024/03/15"
        },
        {
            id: 2,
            retailer: "TechZone",
            amount: 210.99,
            date: "2024/11/22"
        },
        {
            id: 3,
            retailer: "FurniWorld",
            amount: 134.50,
            date: "2025/01/08"
        },
        {
            id: 4,
            retailer: "GroceryLand",
            amount: 78.30,
            date: "2025/06/11"
        },
        {
            id: 5,
            retailer: "DailyMart",
            amount: 89.99,
            date: "2024/07/03"
        },
        {
            id: 6,
            retailer: "BeautyBox",
            amount: 27.45,
            date: "2025/05/29"
        },
        {
            id: 7,
            retailer: "ActiveGear",
            amount: 65.00,
            date: "2024/09/18"
        },
        {
            id: 8,
            retailer: "FreshStop",
            amount: 33.20,
            date: "2025/04/14"
        },
        {
            id: 9,
            retailer: "StylePoint",
            amount: 122.90,
            date: "2024/12/06"
        },
        {
            id: 10,
            retailer: "UrbanCloset",
            amount: 45.75,
            date: "2025/02/21"
        }
    ]);

    const [filteredTransactions, setFilteredTransactions] = useState([...transactions]);

    return (
        <TransactionContext.Provider value={{ filteredTransactions, setFilteredTransactions, transactions, setTransactions }}>
            {children}
        </TransactionContext.Provider>
    );
}