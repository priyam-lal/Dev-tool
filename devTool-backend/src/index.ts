import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { loadEnv } from "./config/env";
import { logger } from "./shared/logger";
import { healthRouter } from "./http/routes/health";
import { db } from "./infrastructure/db/client"


const env = loadEnv();

const app = express();
app.use(cors());
app.use(express.json());

db.query("SELECT 1").then(()=> console.log("DB connected")).catch(err => console.error("DB connection failed", err));


// Routes
app.use("/health", healthRouter);

// Global error handler

app.use((err: any, _req: any, res: any, _next: any) => {
    logger.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(env.port, () => {
    logger.info(`Server running on port ${env.port}`);
});