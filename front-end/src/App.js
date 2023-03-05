import { Routes, Route } from 'react-router';
import { BrowserRouter, Link } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile-reducer";
import { Provider } from "react-redux";
import Navbar from './components/Navbar';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home';
import Posting from './pages/Posting';
import Group from './pages/Group';
import Chat from './pages/Chat';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Contact from "./pages/Contact";

const store = configureStore(
  { reducer: { profile: profileReducer } }
);
function App() {
  return (
    <Provider store={store}>
      <div className='font-nunito'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/posting" element={<Posting />} />
            <Route path='/group' element={<Group />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;