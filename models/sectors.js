const mongoose = require("mongoose");

const sectorSchena = mongoose.Schema(
  {
    label: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    value: {
      type: Number,
      required: true,
      min: [0, "Value can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          isInteger ? true : false;
        },
      },
      message: "Value must be an integer",
    },

    children: {
      type: Array,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Mongoose middleware for saving data: pre / post
sectorSchena.pre("save", function (next) {
  console.log("before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});

sectorSchena.post("save", function (doc, next) {
  console.log("After saving data");
  next();
});

// Instance methods
sectorSchena.methods.logger = function () {
  console.log(`Data saved for ${this.name}`);
};

const Sector = mongoose.model("Sectors", sectorSchena);
module.exports = Sector;
