import { TransactionProvider } from "../context/TransactionContext";
import TransactionAdder from "../components/TransactionAdder";
import DateFilterSelector from "../components/DateFilterSelector";
import TransactionList from "../components/TransactionList";
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <TransactionProvider>
                <TransactionAdder />
                <DateFilterSelector />
                <TransactionList />
            </TransactionProvider>
        </div>
    );
}

export default Home;