const express = require("express");

const router = express.Router();

router.get("/home", (req, res, next) => {
  res.json({ title: "Home", desc: "welcome to study 163!" });
});

router.get("/user", (req, res, next) => {
  res.json({ name: "zhangsan", age: "21", id: "001" });
});

module.exports = router;
