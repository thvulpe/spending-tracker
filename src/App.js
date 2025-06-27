import './App.css';
import FilterSelector from './components/FilterSelector';
import TransactionList from './components/TransactionList';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <FilterSelector />
        <TransactionList />
      </TransactionProvider>
    </div>
  );
}

export default App;
