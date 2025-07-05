import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Graph from './pages/Graph';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { TransactionProvider } from './context/TransactionContext';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />

          <div className='content'>
            <Routes>
              <Route path="/" element={
                <RequireAuth>
                  <TransactionProvider>
                    <Home />
                  </TransactionProvider>
                </RequireAuth>
              } />

              <Route path="/graph" element={
                <RequireAuth>
                  <TransactionProvider>
                    <Graph />
                  </TransactionProvider>
                </RequireAuth>
              } />

              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>

      <Analytics />
    </>
  );
}

export default App;
