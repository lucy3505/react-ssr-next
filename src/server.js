require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});
const express = require("express");
const appRouter = require("./server/appRouter");
const apiRouter = require("./server/apiRouter");
const app = express();

//接口
app.use("/api/", apiRouter);

app.use("/build", express.static("build"));
app.use("/", appRouter);
app.listen(3003, function () {
  console.log("listen in 666");
});
