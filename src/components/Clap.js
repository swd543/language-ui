import React from "react";
import ThemePage from "./ThemePage";

const Clap = props => {
  const { elements } = props;
  return elements && elements.map(v => <ThemePage text={v} />);
};

export default Clap;
