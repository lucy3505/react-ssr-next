const express = require("express");
import React from "react";
import ReactDOMServer from "react-dom/server";
const router = express.Router();
import Document from "./components/Document";
import App from "./components/App";

console.log(Document);

const appString = ReactDOMServer.renderToString(<App />);
// const html = ReactDOMServer.renderToStaticMarkup(<Document />);
const html = ReactDOMServer.renderToStaticMarkup(
  <Document>{appString}</Document>
);
router.get("/", (req, res) => {
  res.send(html);
});

module.exports = router;
