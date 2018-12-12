import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Clap from "./Clap";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/clap" component={Clap} />
    </BrowserRouter>
  );
};

export default Routes;
