import React from "react";
import { Router } from "./Router";
import { NavLink } from "react-router-dom";
import "./App.scss";

export function App() {
  return (
    <div className="App">
      <header className="App__Header">
        <div className="container">
          <nav className="App__HeaderNav">
            <NavLink exact to="/" className="App__HeaderNavLink">
              Home
            </NavLink>
            <NavLink to="/users" className="App__HeaderNavLink">
              Users
            </NavLink>
            <NavLink to="/location" className="App__HeaderNavLink">
              Location
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="App__Main">
        <div className="container">
          <Router />
        </div>
      </main>
    </div>
  );
}
