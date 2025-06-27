import jwt from "jsonwebtoken";
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (username === "admin@admin" && password === "password") {
    const token = jwt.sign({ id: username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.status(200).json({ success: true, message: "Login successful", token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}