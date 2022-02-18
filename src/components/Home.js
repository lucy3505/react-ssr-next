import React, { useEffect, useState } from "react";
import { fetchHome } from "../core/api";
import useGetData from "../hooks/useData";
export default function Home({ staticContext }) {
  console.log("staticContext", staticContext);
  // const getInitialData = () => {
  //   if (staticContext) {
  //     console.log("server render");
  //     return staticContext;
  //   }
  //   if (window.__APP_DATA__) {
  //     console.log("client first render");
  //     return window.__APP_DATA__;
  //   }
  // };

  // const [home, setHome] = useState(getInitialData());
  // useEffect(() => {
  //   fetchHome().then((res) => {
  //     console.log(res);
  //     setHome(res);
  //   });
  // }, []);
  const [home, setHome] = useGetData(staticContext, fetchHome);
  const { title, desc } = home;
  return (
    <div>
      Home
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

Home.getData = fetchHome;
