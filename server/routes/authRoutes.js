import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/admin-login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { role: "admin", email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      success: true,
      token,
      user: { role: "admin", email },
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

export default router;