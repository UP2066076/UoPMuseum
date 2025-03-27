import mongoose from "mongoose";

const familyArtifactsSchema = new mongoose.Schema({
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
  artifacts: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("FamilyArtifacts", familyArtifactsSchema);
