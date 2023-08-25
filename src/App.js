import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate }
    from 'react-router-dom';
import Home from './pages';
import PageNotFound from './pages/PageNotFound';
import LineChartTemplate from './pages/ethgastimater/gastimater';

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route exact path='/ethgastimater' element={<LineChartTemplate />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
