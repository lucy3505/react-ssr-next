import React, { useEffect } from "react";
import Router from "next/router";

export default function Routerapi() {
  useEffect(() => {
    Router.beforePopState(({ url }) => {
      if (url !== "/book") {
        alert("url not allowed");
        return false;
      }
      return true;
    });
  }, []);

  //router events
  useEffect(() => {
    const handleRouterChange = (url) => {
      alert(`app is changing to :${url}`);
    };
    Router.events.on("routeChangeStart", handleRouterChange);
    return () => {
      Router.events.off("routeChangeStart", handleRouterChange);
    };
  });

  return (
    <div>
      <h1>RouterApi</h1>
      <ul>
        {/* push */}
        <li>
          <button onClick={() => Router.push("/book")}>静态路由：/book</button>
          <button onClick={() => Router.push("/book/[id]", "/book/123")}>
            动态路由：/book
          </button>
          <button
            onClick={() =>
              Router.push({ pathname: "/book/456", query: { year: "2000" } })
            }
          >
            url对象:/book/456
          </button>
        </li>
      </ul>
    </div>
  );
}
