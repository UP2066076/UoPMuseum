import bcrypt from "bcryptjs";
import AdminModel from "../models/user.js";

export const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const oldUser = await AdminModel.findOne({ email });

    if (!oldUser)
      return res.json({ status: 404, message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.json({ status: 400, message: "Invalid credentials" });

    res.json({ status: 200, data: oldUser });
  } catch (err) {
    res.json({ status: 500, message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);
  try {
    const oldUser = await AdminModel.findOne({ email });

    if (oldUser)
      return res.json({ status: 400, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const data = await AdminModel.create({
      email,
      password: hashedPassword,
    });
    return res.json({ status: 201, data });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong" });
  }
};
