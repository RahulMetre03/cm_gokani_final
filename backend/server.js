import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

dotenv.config();
const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(express.json());

console.log(process.env.MAIL_USER);
console.log(process.env.MAIL_PASS);


/* ---------- MAIL TRANSPORT ---------- */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

/* ---------- ROUTE ---------- */
app.post("/api/send-mail", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: subject,
      text: message,
      replyTo: email
    });

    res.status(200).json({ success: true });

  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ success: false });
  }
});

/* ---------- START SERVER ---------- */
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
