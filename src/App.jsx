import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='flex flex-col md:flex-row h-screen w-auto'>
      <Sidebar />
      <div className='flex flex-col flex-grow pt-2 pr-4 pb-2 pl-4'>
        <Navbar />
        <div className='flex-grow'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
