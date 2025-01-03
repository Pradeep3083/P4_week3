import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        login();
        navigate('/home'); // Redirect to home page
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#FFF',
      padding: '20px',
    },
    form: {
      background: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px 15px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
      transition: 'border-color 0.3s',
    },
    button: {
      width: '100%',
      padding: '10px 15px',
      background: '#ff6f61',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    buttonHover: {
      background: '#e63946',
    },
    footer: {
      marginTop: '20px',
      fontSize: '0.9rem',
      color: '#555',
    },
    link: {
      color: '#ff6f61',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <>
      <Navbar cartItemCount={0} />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleLogin}>
          <h2 style={styles.title}>Welcome Back</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.background = styles.buttonHover.background)}
            onMouseLeave={(e) => (e.target.style.background = styles.button.background)}
          >
            Login
          </button>
          <p style={styles.footer}>
            Don't have an account?{' '}
            <a
              href="/register"
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.textDecoration = styles.linkHover.textDecoration)}
              onMouseLeave={(e) => (e.target.style.textDecoration = styles.link.textDecoration)}
            >
              Register
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;