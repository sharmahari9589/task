import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";

dotenv.config();

const app = express();

app.use(cors());  
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(compression())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is healthy"
    });
});


app.all("*", (req, res) => {
    res.status(404).json({
        message: "No route found"
    });
});

export default app;
