import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});

export default mongoose.model("Query", querySchema);
