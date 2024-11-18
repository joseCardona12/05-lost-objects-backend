import express,{ Express } from "express";
import { UtilApplication } from "./utils";
import cors from "cors";
import router from "./routes/route";
import "./config/container";

const app:Express = express();
app.use(express.json()); 
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use("/api", router);

UtilApplication.initServer(app);