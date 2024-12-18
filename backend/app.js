const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToDb = require("./db/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

dotenv.config();

const cors = require("cors");
app.use(cors({
    origin: '*', // Allow all origins for testing
    credentials: true
}));
app.use(cookieParser());

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/users", userRoutes);

module.exports = app;

app.use("/captains", captainRoutes);