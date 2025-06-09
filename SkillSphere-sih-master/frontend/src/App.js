import React from 'react'
import "./styles/styles.css";
import Home from "./Home";
import About from "./About";
import V_lab from './V_lab';
import Course from './Course'
import { Link, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Coverpage from "./Coverpage";
import NotAvailable from './NotAvailable';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Coverpage />,
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    }, {
      path: "/virtual-lab",
      element: <V_lab />
    },{
      path: "/course/:id",
      element: <Course />
    },{
      path: "/404",
      element: <NotAvailable />
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<Coverpage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;