
import { Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h2>Below you will find snippets of your selected sub-reddits.  Click on any to dig deeper.</h2>
        <Outlet />
    </div>
  );
}


