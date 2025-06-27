import { useState, useEffect, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import './DateFilterSelector.css';

const FilterSelector = () => {
    const { transactions, setFilteredTransactions } = useContext(TransactionContext);

    // year filtering
    const [selectedYear, setSelectedYear] = useState(-1);

    const handleChangeYear = (e) => {
        setSelectedYear(Number(e.target.value));
    };

    const currentYear = new Date().getFullYear();

    const years = [-1];
    for (let year = currentYear; year >= 2000; year--) {
        years.push(year);
    }

    // month filtering
    const [selectedMonth, setSelectedMonth] = useState(-1);

    const handleChangeMonth = (e) => {
        setSelectedMonth(Number(e.target.value));
    };

    const months = [-1];
    for (let month = 1; month <= 12; month++) {
        months.push(month);
    }

    const getMonthLabel = (month) => {
        switch (month) {
            case -1: return "Choose Month";
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
            default: return month;
        }
    };    

    // transaction filtering based on year and month
    useEffect(() => {
        if (!transactions)
            return;

        const newFiltered = transactions.filter((t) => {
            const transactionDate = new Date(t.date);

            if (transactionDate.getFullYear() !== selectedYear &&
                selectedYear !== -1)
                    return false;
            if (transactionDate.getMonth()+1 !== selectedMonth &&
                selectedMonth !== -1)
                    return false;
            return true;
        })
        setFilteredTransactions(newFiltered);
    }, [selectedYear, selectedMonth, transactions, setFilteredTransactions]);

    return (
        <div className="filter-selector">
            <select value={selectedYear} onChange={handleChangeYear}>
                {years.map((year) => {
                    return (
                        <option key={year} value={year}>
                            {year === -1 ? "Choose Year" : year}
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
        </div>
    );
}

export default FilterSelector;