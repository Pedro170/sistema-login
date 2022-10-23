import React from 'react';
import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Router from './routes/Router';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Dashboard />
        <section className='home'><Router /></section>
      </main>
    </>
  );
}

export default App;
