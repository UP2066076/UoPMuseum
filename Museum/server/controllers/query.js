import QueryModel from "../models/query.js";

export const createQuery = async (req, res) => {
  try {
    const { name, email, desc } = req.body;
    const queryModel = new QueryModel({
      name,
      email,
      desc,
    });
    const savedQueryModel = await queryModel.save();
    res.status(200).json(savedQueryModel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllQuery = async (req, res) => {
  try {
    const query = await QueryModel.find();
    res.status(200).json(query);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteQuery = async (req, res) => {
  try {
    await QueryModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
