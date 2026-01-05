import { db } from "../client";
import { randomUUID } from "crypto";

interface ChunkRecord {
    documentId: string;
    index: number;
    content: string;
}

export async function insertChunks(chunks: ChunkRecord[]) {
    for(const chunk of chunks) {
        await db.query(
            `
            INSERT INTO chunks (id, document_id, chunk_index, content)
            VALUES ($1, $2, $3, $4)
            `,
            [
                randomUUID(),
                chunk.documentId,
                chunk.index,
                chunk.content
            ]
        );
    }
}