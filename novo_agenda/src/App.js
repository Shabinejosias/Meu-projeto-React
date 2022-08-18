import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Components/Add"
import List from "./Components/ListContact/ListaContacto"
import Update from "./Components/Update"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route exact path="/add" element={<Add />}></Route>
          <Route exact path="/" element={<List />}></Route>
          <Route exact path="/update/:id" element={<Update />}></Route>

          {/* <Route exact path="/cart" element={<Cart />}></Route> */}

        </Routes>
      </BrowserRouter>

    </div>
  )
}