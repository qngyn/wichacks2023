import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Calorie from '../pages/Calorie'
import Chatroom from '../pages/Chatroom'
import Exercise from '../pages/Exercise'

function Index() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/calorie" element={<Calorie />} />
                <Route path="/chatroom" element={<Chatroom />} />
                <Route path='/exercise' element={<Exercise />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
