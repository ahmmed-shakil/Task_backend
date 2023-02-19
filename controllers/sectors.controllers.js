const Sector = require("../models/sectors");

module.exports.addSectors = async (req, res) => {
  try {
    const result = await Sector.insertMany([
      {
        label: "Manufacturing",
        value: 1,
        children: [
          {
            label: "Construction materials",
            value: 19,
          },
          {
            label: "Electronics and Optics",
            value: 18,
          },
          {
            label: "Food and Beverage",
            value: 6,
            children: [
              {
                label: "Bakery & confectionery products",
                value: 342,
              },
              {
                label: "Beverages",
                value: 43,
              },
              {
                label: "Fish & fish products",
                value: 42,
              },
              {
                label: "Meat & meat products",
                value: 40,
              },
              {
                label: "Milk & dairy products",
                value: 39,
              },
              {
                label: "Other",
                value: 437,
              },
              {
                label: "Sweets & snack food",
                value: 378,
              },
            ],
          },
          {
            label: "Furiture",
            value: 13,
            children: [
              {
                label: "Bathroom/sauna",
                value: 389,
              },
              {
                label: "Bedroom",
                value: 385,
              },
              {
                label: "Childrenâ€™s room",
                value: 390,
              },
              {
                label: "Kitchen",
                value: 98,
              },
              {
                label: "Living room",
                value: 101,
              },
              {
                label: "Office",
                value: 392,
              },
              {
                label: "Other (Furniture)",
                value: 394,
              },
              {
                label: "Outdoor",
                value: 341,
              },
              {
                label: "Project furniture",
                value: 99,
              },
            ],
          },
          {
            label: "Machinery",
            value: 12,
            children: [
              {
                label: "Machinery components",
                value: 94,
              },
              {
                label: "Machinery equipment / tools",
                value: 91,
              },
              {
                label: "Manufacture of machinery",
                value: 224,
              },
              {
                label: "Maritime",
                value: 97,
                children: [
                  {
                    label: "Aluminium and steel woekboats",
                    value: 271,
                  },
                  {
                    label: "Boat/Yacht building",
                    value: 269,
                  },
                  {
                    label: "Ship repair and conversion",
                    value: 230,
                  },
                ],
              },
              {
                label: "Metal structures",
                value: 93,
              },
              {
                label: "Other",
                value: 508,
              },
              {
                label: "Repair and maintainance service",
                value: 227,
              },
            ],
          },
          {
            label: "Metalworking",
            value: 11,
            children: [
              {
                label: "Construction f metal structures",
                value: 67,
              },
              {
                label: "Houses and buildings",
                value: 3242,
              },
              {
                label: "Metal products",
                value: 263,
              },
              {
                label: "Metal works",
                value: 267,
                children: [
                  {
                    label: "CNG-machining",
                    value: 542,
                  },
                  {
                    label: "Forgings, Fasteners",
                    value: 75,
                  },
                  {
                    label: "Gas, Plasma, Laser cutting",
                    value: 62,
                  },
                  {
                    label: "MIG, TIG, Aluminium welding",
                    value: 69,
                  },
                ],
              },
            ],
          },
          {
            label: "Plastic and rubber",
            value: 66,
            children: [
              {
                label: "Packaging",
                value: 9,
              },
              {
                label: "Plastic groups",
                value: 54,
              },
              {
                label: "Plastic processing technlogy",
                value: 556,
                children: [
                  {
                    label: "Blowing",
                    value: 559,
                  },
                  {
                    label: "Moulding",
                    value: 55,
                  },
                  {
                    label: "Plastics welding and processing",
                    value: 57,
                  },
                ],
              },
              {
                label: "Plastic profiles",
                value: 53,
              },
            ],
          },
          {
            label: "Printing",
            value: 560,
            children: [
              {
                label: "Advertisinge",
                value: 5,
              },
              {
                label: "Book/Periodicals printing",
                value: 148,
              },
              {
                label: "Labelling and packaging printing",
                value: 150,
              },
            ],
          },
          {
            label: "Textile and Clothing",
            value: 145,
            children: [
              {
                label: "Clothing",
                value: 7,
              },
              {
                label: "Textile",
                value: 44,
              },
            ],
          },
          {
            label: "Wood",
            value: 45,
            children: [
              {
                label: "Other (wood)",
                value: 8,
              },
              {
                label: "Wooden building materials",
                value: 337,
              },
              {
                label: "Wooden houses",
                value: 51,
              },
            ],
          },
        ],
      },
      {
        label: "Other",
        value: 3,
        children: [
          {
            label: "Creative industries",
            value: 37,
          },
          {
            label: "Energy technology",
            value: 29,
          },
          {
            label: "Environment",
            value: 33,
          },
        ],
      },
      {
        label: "Service",
        value: 2,
        children: [
          {
            label: "Business services",
            value: 91,
          },
          {
            label: "Engeeering",
            value: 25,
          },
          {
            label: "Information Technology and Telecommunication",
            value: 35,
            children: [
              {
                label: "Data processing, web portals, E-marketing",
                value: 28,
              },
              {
                label: "Data processing, Web portals, E-marketing",
                value: 581,
              },
              {
                label: "Programming, Hardware",
                value: 576,
              },
              {
                label: "Software, Hardware",
                value: 121,
              },
              {
                label: "Telecommunication",
                value: 122,
              },
            ],
          },
          {
            label: "Tourism",
            value: 22,
          },
          {
            label: "Translation services",
            value: 141,
          },
          {
            label: "Transport and Logistics",
            value: 21,
            children: [
              {
                label: "Air",
                value: 111,
              },
              {
                label: "Rail",
                value: 114,
              },
              {
                label: "Road",
                value: 112,
              },
              {
                label: "Water",
                value: 113,
              },
            ],
          },
        ],
      },
    ]);
    res.status(200).json({
      success: true,
      message: "Data saved successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.getData = async (req, res) => {
  try {
    const result = await Sector.find({});
    res.status(200).send({
      success: true,
      message: "Data found!",
      data: result,
    });
  } catch (err) {
    res.status(500).json("Server error");
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const result = await Sector.deleteMany({});
    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
    });
  } catch (err) {
    res.status(500).json("Failed t delte data!");
  }
};
