import './App.css';
import TransactionList from './components/TransactionList';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <h1>hi there</h1>
        <TransactionList />
      </TransactionProvider>
    </div>
  );
}

export default App;
