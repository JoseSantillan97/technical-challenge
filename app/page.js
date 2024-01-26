'use client'
import styles from './../styles/style.scss'
// import UsernameForm from './../components/FormLogin';
import { submitForm } from "./../components/actions.js";
// import {
// BrowserRouter as Router, Route, Switch, Routes
// } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import UsernameForm from './../components/FormLogin';

export default function App() {
  return (
    <form action={submitForm} className='main'>
      <BrowserRouter>
        <Routes>
          {/* <Switch> */}
          <Route path='/dashboard' element={<Dashboard />} exact >
          </Route>
          {/* <Dashboard></Dashboard> */}
          <Route path='/' element={<UsernameForm />} exact >
          </Route>
          {/* <UsernameForm /> */}
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
    </form >
  );
}
