import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { fetchReddit } from './redux/redditSlice';



export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReddit());
  },[dispatch]);

  return (
    <div className="App">
      <h2>Below you will find snippets of your selected sub-reddits.  Click on any to dig deeper.</h2>
        <Outlet />
    </div>
  );
}


