const express = require("express");
const router = express.Router();
// const userController = require("../controllers/user-controller");

// Middleware executed before each route
// router.use((req, res, next) => {
//     console.log(req.method + " " + req.url);
//     next();
// });

// router.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", process.env.ANGULAR_URL);
//     res.header("Access-Control-Allow-Headers",
//                 "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// router.route("/all").get(teamsController.getAll);
// router.route("/add").post(teamsController.addOne);

// router.route("/:teamId")
//     .get(teamsController.getOne)
//     .put(teamsController.fullUpdateOne)
//     .delete(teamsController.deleteOne);


module.exports = router;