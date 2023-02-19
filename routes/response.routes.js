const express = require("express");
const router = express.Router();
const responseController = require("../controllers/response.controller");

router
  .route("/")
  .post(responseController.postResponse)
  .get(responseController.getResponse);

router
  .route("/:id")
  .patch(responseController.updateResponseById)
  .get(responseController.getResponseById);
//   .delete(productConroller.deleteResponseById);

module.exports = router;
