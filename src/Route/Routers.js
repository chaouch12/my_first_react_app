import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../apps/Main";
import Features from "../components/Features";
import Demo from "../components/Demo";
import Documents from "../components/Documents";

  function Routers() {
      return (
          <BrowserRouter basename="/">
              <Routes>
                  <Route path="/" element={<Main/>}>
                      <Route path="/Features" element={<Features/>}/>
                      <Route path="/Demo" element={<Demo/>}/>
                      <Route path="/Documents" element={<Documents/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      );
}

export default Routers
