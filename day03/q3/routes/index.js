const express = require("express");
const router = express.Router();

router.use("/multiply/:num1", (req, res, next) => {
    // http://localhost:3000/op/multiply/2/?num2=3
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1 * num2;
    res.myResult = result;
    console.log("Router Middleware: num1=" + num1 + "*num2=" + num2 + "=" + result);
    next();
});

router.get("/multiply/:num1", (req, res) => {
    // http://localhost:3000/op/multiply/2/?num2=3
    // const num1 = parseInt(req.params.num1);
    // const num2 = parseInt(req.query.num2);
    // const result = num1 * num2;
    // res.json({"num1": num1, "num2": num2, result: result});
    res.json(res.myResult);
});

module.exports = router;