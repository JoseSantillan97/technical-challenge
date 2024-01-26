"use client"
import { useState, useMemo, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

export default function UsernameForm() {
  const { pending, data } = useFormStatus();

  const [showSubmitted, setShowSubmitted] = useState(false);
  const submittedUsername = useRef(null);
  const submittedPassword = useRef(null);
  const timeoutId = useRef(null);
  const navigate = useNavigate()

  useMemo(() => {
    if (pending) {
      data.append('name', submittedUsername.current)
      data.append('password', submittedPassword.current)
      submittedUsername.current = data.get('username')
      submittedPassword.current = data.get('password')
      if (data.get('username') === 'azteca' && data.get('password') === '12345') {
        navigate('/dashboard')
      }
      if (timeoutId.current != null) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = setTimeout(() => {
        timeoutId.current = null;
        setShowSubmitted(false);
      }, 2000);
      setShowSubmitted(true);
    }
  }, [pending, data, navigate]);
  console.log('soy navigation', navigation)

  return (
    <section className='loginform'>
      <div className='loginform-sec1'>
        <h1>¡Bienvenido a Banco Azteca!</h1>
        <p>Sueñas. Decides. Logras</p>
      </div>
      <div className="loginform-sec2">
        <label>Inicia sesión:</label>
      </div>
      <div className="loginform-sec3">
        <input type="text" name="username" placeholder='Usuario' />
        {
          submittedUsername.current !== 'azteca'
          && submittedUsername.current !== null
          && <p>El usuario es incorrecto</p>
        }
        <input type="password" name="password" placeholder='Contraseña' id="" />
        {
          submittedPassword.current !== '12345'
          && submittedPassword.current !== null
          && <p>Contraseña incorrecta</p>
        }
        <button type="submit" disabled={pending}>
          {pending ? 'Comprobando' : 'Iniciar sesión'}
        </button>
      </div>


    </section>
  );
}
