const express = require("express");
const router = express.Router();
const sectorController = require("../controllers/sectors.controllers");

// router.route("/update").patch(sectorController.update);
// router
//   .route("/submit")
//   .post(sectorController.submit)
//   .get(sectorController.getFormData);

router
  .route("/")
  .post(sectorController.addSectors)
  .get(sectorController.getData)
  .delete(sectorController.deleteAll);

module.exports = router;
