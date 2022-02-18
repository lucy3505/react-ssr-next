const express = require("express");
import React from "react";
import ReactDOMServer from "react-dom/server";
const router = express.Router();
import Document from "../components/Document";
import App from "../components/App";
import { matchPath, StaticRouter } from "react-router-dom";

import { fetchHome } from "./../core/api";
console.log(Document);
import routes from "./../core/routes";

router.get("*", async (req, res) => {
  let data = {};
  let getData = null;
  routes.some((route) => {
    const match = matchPath(req.path, route);
    // console.log("path:", req.path);
    // console.log("route:", route);
    // console.log("match:", match);
    if (match) {
      getData = (route.component || {}).getData;
    }
    return getData;
  });
  if (typeof getData === "function") {
    try {
      data = await getData();
    } catch (err) {}
  }

  const appString = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={data}>
      <App />
    </StaticRouter>
  );

  const html = ReactDOMServer.renderToStaticMarkup(
    <Document data={data}>{appString}</Document>
  );
  res.send(html);
});

module.exports = router;
