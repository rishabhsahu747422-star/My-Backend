import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  mobile: {
    type: String,
    minlength: [true, "minimun 10 digits are required"],
    mixlength: [true, "miximun 10 digits are required"],
  },
});

let empModel = mongoose.model("employe", empSchema);
export default empModel;
