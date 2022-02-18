import React from "react";

export default function Method() {
  const get = () => {
    fetch("http://localhost:3000/api/method")
      .then((res) => res.json())
      .then((json) => console.log("get", json));
  };
  const post = () => {
    fetch("http://localhost:3000/api/method", { method: "POST" })
      .then((res) => res.json())
      .then((json) => console.log("post", json));
  };

  return (
    <div>
      <button onClick={get}>get</button>
      <button onClick={post}>post</button>
    </div>
  );
}
