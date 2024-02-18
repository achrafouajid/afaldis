app.post("/send-email", async (req, res) => {
  const { name, company, email, qte, message } = req.body;

  try {
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      text: `
          Name: ${name}
          company: ${company}
          qte: ${qte}
          email: ${email}
          eessage: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not send email" });
  }
});
