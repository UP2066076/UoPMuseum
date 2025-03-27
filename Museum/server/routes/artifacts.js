import express from "express";
import {
  createArtifacts,
  createFamilyArtifacts,
  deleteArtifacts,
  deleteFamilyArtifacts,
  editArtifacts,
  editFamilyArtifacts,
  getAllArtifacts,
  getAllFamilyArtifacts,
  getTotalSectionCount,
} from "../controllers/artifacts.js";

const router = express.Router();

router.post("/family/create", createFamilyArtifacts);
router.get("/family", getAllFamilyArtifacts);
router.post("/create", createArtifacts);
router.get("/", getAllArtifacts);
router.patch("/family/edit/:id", editFamilyArtifacts);
router.delete("/family/delete/:id", deleteFamilyArtifacts);
router.patch("/edit/:id", editArtifacts);
router.delete("/delete/:id", deleteArtifacts);
router.get("/get/section/count", getTotalSectionCount);

export default router;
