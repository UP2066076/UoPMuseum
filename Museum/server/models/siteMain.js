import mongoose from "mongoose";

const siteMainSchema = new mongoose.Schema({
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
});

export default mongoose.model("SiteMain", siteMainSchema);
