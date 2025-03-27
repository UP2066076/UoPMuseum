import SiteMainModel from "../models/siteMain.js";

export const addSiteHeader = async (req, res) => {
  try {
    const { name, image, desc } = req.body;
    const siteHeader = new SiteMainModel({
      name,
      image,
      desc,
    });
    const savedSiteHeader = await siteHeader.save();
    res.status(200).json(savedSiteHeader);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editSiteHeader = async (req, res) => {
  try {
    const { id } = req.params;
    const siteHeader = await SiteMainModel.findById(id);
    if (siteHeader) {
      await siteHeader.updateOne(
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

export const getSideHeader = async (req, res) => {
  try {
    const siteHeader = await SiteMainModel.findOne();
    res.status(200).json(siteHeader);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
