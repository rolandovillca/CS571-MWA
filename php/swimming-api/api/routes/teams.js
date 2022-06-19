const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teams-controller");

router.route("/all").get(teamsController.getAll);
router.route("/add").post(teamsController.addOne);

router.route("/:teamId")
    .get(teamsController.getOne)
    .put(teamsController.fullUpdateOne)
    .delete(teamsController.deleteOne);

module.exports = router;