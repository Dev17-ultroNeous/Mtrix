import React, { useState, useEffect, useMemo } from "react";

import './App.css';
import Test from './componets/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componets/TodoStyle.css';
import Form from './componets/Form';
import ArrayComponet from "./componets/ArrayComponet";
import DataJson from "./utils/DataJson";
import TodoList from "./componets/TodoList";
import FetchData from "./componets/FetchData";
import NavBar from "./componets/NavBar";
import UserDetails from "./componets/UserDetails";
import "./componets/NavBarStyle.css";
import "./componets/ThankyouStyle.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Thankyou from "./componets/Thankyou";

function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<FetchData />} />
        <Route path="fetchdata/:id" element={<UserDetails />} />
        <Route path="form" element={<Form />} />
        <Route path="todolist" element={<TodoList />} />

      </Routes>
    </>
  );
}

export default App;
