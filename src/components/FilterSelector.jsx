import { useState, useEffect, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const FilterSelector = () => {
    const {transactions, setFilteredTransactions} = useContext(TransactionContext);

    const currentYear = new Date().getFullYear();

    const [selectedYear, setSelectedYear] = useState(currentYear);

    const handleChange = (e) => {
        setSelectedYear(Number(e.target.value));
    };

    const years = [];
    for (let year = currentYear; year >= 2000; year--) {
        years.push(year);
    }

    useEffect(() => {
        if (!transactions)
            return;

        const newFiltered = transactions.filter((t) => {
            const transactionDate = new Date(t.date);
            return (transactionDate.getFullYear() === selectedYear);
        })
        setFilteredTransactions(newFiltered);
    }, [selectedYear]);

    return (
        <div className="filter-selector">
            <h2>choose a year</h2>
            <select value={selectedYear} onChange={handleChange}>
                {years.map((year) => {
                    return (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default FilterSelector;