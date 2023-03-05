import logo from './logo.svg';
import './App.css';
import Posting from './Posting';
import Contact from "./Contact";
import Home from './Home';
import {Routes, Route} from 'react-router';
import {BrowserRouter, Link} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile-reducer";
import {Provider} from "react-redux";
import Profile from "./profile";
import EditProfile from "./profile/edit-profile";

const store = configureStore(
    {reducer: {profile: profileReducer}}
);
function App() {
  return (
          <Provider store={store}>
              <div>
                  <BrowserRouter>
                      <Routes>
                          <Route path= "/" element={<Home/>} />
                          <Route path= "posting" element={<Posting/>} />
                          <Route path="contact" element={ <Contact/> } />
                          <Route path="profile" element={<Profile/>}/>
                          <Route path="edit-profile" element={<EditProfile/>}/>
                      </Routes>
                  </BrowserRouter>
              </div>
          </Provider>
  );
}

export default App;