import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/axly-web">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
