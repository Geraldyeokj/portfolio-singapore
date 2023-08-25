import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate }
    from 'react-router-dom';
import Home from './pages';
import PageNotFound from './pages/PageNotFound';
import GastimaterMainPage from './pages/ethgastimater/gastimater-main-page';

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route exact path='/ethgastimater' element={<GastimaterMainPage />} />
                <Route exact path='/ethgastimater2' element={<GastimaterMainPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
