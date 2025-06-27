import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionAdder = () => {
    const [retailer, setRetailer] = useState("");
    const [amount, setAmount] = useState("");

    const {transactions, setTransactions} = useContext(TransactionContext);
    
    // year
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    
    const handleChangeYear = (e) => {
        setSelectedYear(Number(e.target.value));
    };
    
    const years = [];
    for (let year = currentYear; year >= 2000; year--) {
        years.push(year);
    }
    
    // month
    const currentMonth = new Date().getMonth();
    
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    
    const handleChangeMonth = (e) => {
        setSelectedMonth(Number(e.target.value));
    };
    
    const months = [];
    for (let month = 0; month <= 11; month++) {
        months.push(month);
    }

    // day
    const currentDay = new Date().getDate();
    
    const [selectedDay, setSelectedDay] = useState(currentDay);
    
    const handleChangeDay = (e) => {
        setSelectedDay(Number(e.target.value));
    };
    
    const days = [];
    for (let day = 1; day <= 31; day++) {
        days.push(day);
    }
    
    const getMonthLabel = (month) => {
        switch (month) {
            case 0: return "January";
            case 1: return "February";
            case 2: return "March";
            case 3: return "April";
            case 4: return "May";
            case 5: return "June";
            case 6: return "July";
            case 7: return "August";
            case 8: return "September";
            case 9: return "October";
            case 10: return "November";
            case 11: return "December";
            default: return month;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let lastID = 1;
        if (transactions)
            lastID = Number(transactions.at(-1).id)+1;
        const transactionToAdd = {
            id: lastID,
            retailer: retailer,
            amount: amount,
            date: new Date(selectedYear, selectedMonth, selectedDay).toLocaleDateString('en-CA').slice(0, 10)
        }
        setTransactions([...transactions, transactionToAdd]);
    }
    
    return (
        <form className="add-transaction-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Retailer"
                value={retailer}
                onChange={(e) => setRetailer(e.target.value)}
                required
            />
            <input
                type="number"
                step="0.01"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <select value={selectedYear} onChange={handleChangeYear}>
                {years.map((year) => {
                    return (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    );
                })}
            </select>
            <select value={selectedMonth} onChange={handleChangeMonth}>
                {months.map((month) => {
                    return (
                        <option key={month} value={month}>
                            {getMonthLabel(month)}
                        </option>
                    );
                })}
            </select>
            <select value={selectedDay} onChange={handleChangeDay}>
                {days.map((day) => {
                    return (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    );
                })}
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionAdder;