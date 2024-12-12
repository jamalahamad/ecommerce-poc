// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from './router/Router'
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <AppRouter />
        </main>
      </Router>
    </AuthProvider>
  );
};

export default App;
