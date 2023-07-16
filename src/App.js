import Header from "./Header";
import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
    
        <Routes>
        <Route
            path="/search/:searchTerm"
            element={
              <div className="app_page">
                    <Sidebar />
                
                <SearchPage />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app_page">
                    <Sidebar />
                <Recommended />
              </div>
            }
          />
        </Routes>
      </Router>
      {/* <h1>im clone</h1> */}
    </div>
  );
}

export default App;
