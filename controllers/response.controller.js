const Response = require("../models/response");

exports.postResponse = async (req, res) => {
  try {
    const result = await Response.create(req.body);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Response saved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json("Could't save response");
  }
};

exports.getResponse = async (req, res) => {
  try {
    const result = await Response.find({});
    res.status(200).json({
      success: true,
      message: "Responses found!",
      data: result,
    });
  } catch (err) {
    res.status(500).json("Error occured!");
  }
};

exports.updateResponseById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Response.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: response,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
      message: "update failed",
    });
  }
};

exports.getResponseById = async (req, res) => {
  try {
    console.log("hitted");
    const { id } = req.params;
    const response = await Response.findById(id);
    res.status(200).json({
      success: true,
      message: "Response found",
      data: response,
    });
  } catch (err) {
    res.status(500).json("Response not found");
  }
};
