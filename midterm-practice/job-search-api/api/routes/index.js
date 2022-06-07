const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobs.controller");

router.use((req, res, next) => {
    console.log("\n" + req.method + " " + req.url);
    next();
});

router.route("/jobs/all").get(jobController.getAll);
router.route("/jobs/add").post(jobController.addOne);
router.route("/jobs/:jobId")
    .get(jobController.getOne)
    .delete(jobController.deleteOne)
    .put(jobController.fullUpdateOne)
    .patch(jobController.partialUpdateOne)
// router.route("/jobs/delete").delete(jobController.deleteOne);
// router.route("/jobs/update").put(jobController.updateOne);

module.exports = router;