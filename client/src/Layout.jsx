// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const  Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Calls</Link>
          </li>
          <li className="mb-2">
            <Link to="/analytics" className="text-blue-600 hover:text-blue-800">Analytics</Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
