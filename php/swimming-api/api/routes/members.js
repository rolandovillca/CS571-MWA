const express = require("express");
const router = express.Router();
const membersController = require("../controllers/members-controller");

// router.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", process.env.ANGULAR_URL);
//     res.header("Access-Control-Allow-Headers",
//                 "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// router.route("/all").get(membersController.getAll);

// router.route("/:teamId")
//     .get(membersController.getOne)
//     .put(membersController.fullUpdateOne)
//     .delete(membersController.deleteOne);

// router.route("/add").post(membersController.addOne);

module.exports = router;