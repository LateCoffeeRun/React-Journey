import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import CustomHooks from "./pages/CustomHooks.jsx";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/custom-hooks" element={<CustomHooks/>}/>
            </Routes>
        </div>
    )
}

export default App
