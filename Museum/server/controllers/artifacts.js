import FamilyArtifactsModel from "../models/familyArtifacts.js";
import ArtifcatModel from "../models/artifacts.js";

export const createFamilyArtifacts = async (req, res) => {
  try {
    const { name, image, desc, artifacts } = req.body;

    const familyArtifact = new FamilyArtifactsModel({
      name,
      image,
      desc,
      artifacts,
    });
    const savedFamilyArtifact = await familyArtifact.save();
    res.status(200).json(savedFamilyArtifact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllFamilyArtifacts = async (req, res) => {
  try {
    const artifacts = await FamilyArtifactsModel.find();
    res.status(200).json(artifacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editFamilyArtifacts = async (req, res) => {
  try {
    const { id } = req.params;
    const artifact = await FamilyArtifactsModel.findById(id);
    if (artifact) {
      await artifact.updateOne(
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("Data updated");
    } else {
      res.status(404).json("No data present");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteFamilyArtifacts = async (req, res) => {
  try {
    const { id } = req.params;
    const artifact = await FamilyArtifactsModel.findById(id);
    if (artifact) {
      await FamilyArtifactsModel.findByIdAndDelete(id);
      res.status(200).json("Data deleted");
    } else {
      res.status(404).json("Noting to delete");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  try {
  } catch (err) {}
};

export const createArtifacts = async (req, res) => {
  try {
    const { name, image, desc, family, section, location } = req.body;

    const familyArtifact = new ArtifcatModel({
      name,
      image,
      desc,
      family,
      section: section - 1,
      location,
    });
    const savedFamilyArtifact = await familyArtifact.save();
    res.status(200).json(savedFamilyArtifact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllArtifacts = async (req, res) => {
  try {
    const { section } = req.query;
    if (!section) {
      const artifacts = await ArtifcatModel.find();
      res.status(200).json(artifacts);
    } else {
      const artifacts = await ArtifcatModel.find({ section: section });
      res.status(200).json(artifacts);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editArtifacts = async (req, res) => {
  try {
    const { id } = req.params;

    const artifact = await ArtifcatModel.findById(id);
    if (artifact) {
      await artifact.updateOne(
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("Data updated");
    } else {
      res.status(404).json("No data present");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteArtifacts = async (req, res) => {
  try {
    const { id } = req.params;
    const artifact = await ArtifcatModel.findById(id);
    if (artifact) {
      await ArtifcatModel.findByIdAndDelete(id);
      res.status(200).json("Data deleted");
    } else {
      res.status(404).json("Noting to delete");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTotalSectionCount = async (req, res) => {
  try {
    const artifacts = await ArtifcatModel.distinct("section");
    res.status(200).json(artifacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
