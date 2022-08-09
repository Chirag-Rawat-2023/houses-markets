
import './App.css';
import React from 'react';
import Homepajes from './pages/Homepajes';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Privatrout from './component/layout/Privatrout';
import ForgetPassword from './pages/ForgetPassword';
import Category from './pages/Category';
import Createlist from './pages/Createlist';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import EditListing from './pages/EditListing';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Homepajes/>} />
      <Route path='/offers' element={<Offers/>} />
      <Route path='/editlisting/:listingId' element={<EditListing/>} />
      <Route path='/category/:categoryName' element={<Category/>} />
      <Route path='/signIn' element={<SignIn/>} />
      <Route path='/profile' element={<Privatrout/>} >
        <Route path='/profile' element={<Profile/>} />
      </Route>
      <Route path='/forgot-password' element={<ForgetPassword/>} />
      <Route path='/create-listing' element={<Createlist/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/category/:categoryName/:listingId' element={<Listing/>} />
      <Route path='/contact/:landlordId' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  ); 
}

export default App;
