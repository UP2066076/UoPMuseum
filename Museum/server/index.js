import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import SiteMainUrl from "./routes/siteMain.js";
import ArtifactsUrl from "./routes/artifacts.js";
import QueryUrl from "./routes/query.js";
import AdminUrl from "./routes/user.js";

const __dirname = path.resolve();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));
dotenv.config();

let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//routes
app.use("/api/site/main", SiteMainUrl);
app.use("/api/artifacts/", ArtifactsUrl);
app.use("/api/query/", QueryUrl);
app.use("/api/admin/", AdminUrl);

//database
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Database connected");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//server
const server = app.listen(process.env.PORT || 5001, () => {
  console.log(`Server Connected on port ${process.env.PORT}`);
});
