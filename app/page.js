'use client'
import styles from './../styles/style.scss'
import { submitForm } from "./../components/actions.js";
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import FormLogin from './../components/FormLogin';

export default function App() {
  return (
    <>
      <form action={submitForm} className='main'>
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} exact >
            </Route>
            <Route path='/' element={<FormLogin />} exact >
            </Route>
          </Routes>
        </BrowserRouter>
      </form >
    </>
  );
}
