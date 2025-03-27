import mongoose from "mongoose";

const artifactsSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  family: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  section: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Artifacts", artifactsSchema);
