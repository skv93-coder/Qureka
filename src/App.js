import React from "react";
import "./styles.css";
import Landing from "./Landing";
//import { pink } from "@material-ui/core/colors";
// }}
//   }}
const styles = {
  background: "pink"
};
export default function App() {
  return (
    <div className="body" styles={styles}>
      <Landing />
    </div>
  );
}
