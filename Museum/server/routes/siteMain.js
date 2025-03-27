import express from "express";
import {
  addSiteHeader,
  editSiteHeader,
  getSideHeader,
} from "../controllers/siteMain.js";

const router = express.Router();

router.post("/add/header", addSiteHeader);
router.patch("/edit/header/:id", editSiteHeader);
router.get("/", getSideHeader);

export default router;
