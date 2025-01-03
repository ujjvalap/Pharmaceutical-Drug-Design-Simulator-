import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Fotter';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center">Dashboard</h1>
        <p className="text-center text-gray-700 mt-4">
          Access tools like Molecular Modeling and Simulations here.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
