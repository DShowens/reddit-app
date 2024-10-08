import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Components & Pages
import RootLayout from './components/RootLayout';
import MultiCards from './components/MultiCards';
import Card from './components/Card';
import { Provider } from 'react-redux';
import { store } from './redux/store';


// Create my router as base.  Add additional components as needed
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MultiCards />}/>
        <Route path=":id" element={<Card />}/>
      </Route>
    </Route>
  )
);

// Create router provider and render the router listed above
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
