import './App.css';
import DateFilterSelector from './components/DateFilterSelector';
import TransactionAdder from './components/TransactionAdder';
import TransactionList from './components/TransactionList';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <DateFilterSelector />
        <TransactionAdder />
        <TransactionList />
      </TransactionProvider>
    </div>
  );
}

export default App;
