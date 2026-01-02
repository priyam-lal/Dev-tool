import { Router } from "express";
import { ingestCode } from "../../application/usecases/ingest-code";

export const ingestRouter = Router();

ingestRouter.post("/ingest", (req, res) => {
    
});