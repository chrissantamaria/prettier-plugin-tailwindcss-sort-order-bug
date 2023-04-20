import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <main className="mt-4 flex flex-col items-center">
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <p>some content</p>
  </main>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
