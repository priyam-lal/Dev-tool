import { db } from "../client";
import { randomUUID } from "crypto";

export interface CreateDocumentInput {
    sourceType: "file" | "paste";
    filename: string;
    language?: string;
}

export async function createDocument(input: CreateDocumentInput) {
    const documentId = randomUUID();

    await db.query(
        `
        INSERT INTO documents (id, source_type, filename, language)
        VALUES ($1, $2, $3, $4)
        `,
        [documentId, input.sourceType, input.filename, input.language ?? null]
    );

    return documentId;
}