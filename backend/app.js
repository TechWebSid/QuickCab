const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");

dotenv.config();

const cors = require("cors");
app.use(cors());

connectToDb();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/users" , userRoutes);


module.exports=app;