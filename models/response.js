const mongoose = require("mongoose");

const responseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    response: {
      type: Array,
      required: true,
    },

    agree: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Mongoose middleware for saving data: pre / post
responseSchema.pre("save", function (next) {
  console.log("before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});

responseSchema.post("save", function (doc, next) {
  console.log("After saving data");
  next();
});

// Instance methods
responseSchema.methods.logger = function () {
  console.log(`Data saved for ${this.name}`);
};

const Response = mongoose.model("Response", responseSchema);
module.exports = Response;
