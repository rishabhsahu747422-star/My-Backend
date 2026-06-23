const { default: mongoose } = require("mongoose");

export let connectDb = async () => {
  await mongoose.connect("0.0.0.0/employee");
};
