import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("app mounted");
  }, []);
  return <h2 onClick={() => alert("clicked")}>hello ssr22!!</h2>;
}
