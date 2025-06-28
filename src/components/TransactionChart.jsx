import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TransactionChart.css';
import { useContext } from 'react';
import { TransactionContext } from "../context/TransactionContext";

const TransactionChart = () => {
  const { transactions } = useContext(TransactionContext);


  const currentMonth = new Date().getMonth();

  let data = [];

  for (let i = 0; i <= currentMonth; i++) {
    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let sum = 0;

    transactions.forEach((t) => {
      const transactionMonth = new Date(t.date).getMonth();
      if (transactionMonth === i)
        sum = sum + Number(t.amount);
    });

    data.push({
      Month: monthLabels[i],
      Spent: sum.toFixed(2)
    });
  }

  return (
    <div className='transaction-chart'>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Spent" fill="#FFB347" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionChart;
