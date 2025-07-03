import TransactionAdder from "../components/TransactionAdder";
import DateFilterSelector from "../components/DateFilterSelector";
import TransactionList from "../components/TransactionList";
import './Home.css';

const Home = () => {

    return (
        <div className="home">
            <TransactionAdder />
            <DateFilterSelector />
            <TransactionList />
        </div>
    );
}

export default Home;