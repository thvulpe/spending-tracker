import './App.css';
import DateFilterSelector from './components/DateFilterSelector';
import Footer from './components/Footer';
import Header from './components/Header';
import TransactionAdder from './components/TransactionAdder';
import TransactionList from './components/TransactionList';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <div className="App">
      <Header />
      <TransactionProvider>
        <DateFilterSelector />
        <TransactionAdder />
        <TransactionList />
      </TransactionProvider>
      <Footer />
    </div>
  );
}

export default App;
