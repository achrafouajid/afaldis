const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
app.listen(port, () => console.log(`Server Running on port: ${port}`));
