import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route exact path='/' exact element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
