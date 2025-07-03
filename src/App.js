import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Graph from './pages/Graph';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <>
      <TransactionProvider>
        <Router>
          <div className="App">
            <Header />
            <div className='content'>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/graph' element={<Graph />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </TransactionProvider>

      <Analytics />
    </>
  );
}

export default App;
