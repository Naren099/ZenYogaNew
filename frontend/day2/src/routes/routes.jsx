import React from 'react';
import { Form, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import Login  from '../pages/Login';
import Signup from '../pages/Signup';
import { Contact } from '../pages/Contact';
import { Classes } from '../pages/Classes';
import MyProfile from '../pages/Profile';
import Admin from '../pages/Admin';


export const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/form" element={<Form/>} />


        
        
        {/* <Route path="/profile" element={<Profil />} /> */}
    </>
);