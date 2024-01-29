import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Basket from './Pages/Basket';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route
          path='/basket'
          element={
            <Basket />
          }
        />
      </Routes>
    </div >
  )
}

export default App
