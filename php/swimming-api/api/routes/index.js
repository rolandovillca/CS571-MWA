const teamRoutes = require("./teams");
const memberRoutes = require("./members");
const userRoutes = require("./users");
const loginRoutes = require("./login")

const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

router.use("/teams", teamRoutes);
router.use("/members", memberRoutes);
router.use("/users", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;