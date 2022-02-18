import React, { useEffect } from "react";
import { fetchUser } from "../core/api";
import useGetData from "../hooks/useData";

export default function User({ staticContext }) {
  console.log("staticContext", staticContext);
  const [user, setUser] = useGetData(staticContext, fetchUser);
  const { name, age, id } = user;
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Id:{id}</p>
      <button onClick={() => alert("user click")}>click</button>
    </div>
  );
}
User.getData = fetchUser;
