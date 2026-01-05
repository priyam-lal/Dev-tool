export interface CodeChunk {
    index: number;
    content: string;
}

interface ChunkOptions {
    maxChars?: number;
    overlapChars?: number;
}

export function chunkCode(content: string, options: ChunkOptions = {}): CodeChunk[] {
    const maxChars = options.maxChars ?? 1200;
    const overlapChars = options.overlapChars ?? 200;

    if (!content.trim()) {
        return [];
    }

    const lines = content.split("\n");
    const chunks: CodeChunk[] = [];

    let buffer: string[] = [];
    let bufferlength = 0;
    let chunkIndex = 0;

    for (const line of lines) {
        buffer.push(line);
        bufferlength += line.length + 1;  // +1 for newline

        if (bufferlength >= maxChars) {
            const chunkContent = buffer.join("\n");

            chunks.push({
                index: chunkIndex++,
                content: chunkContent
            });

            // overlap handling
            const overlapText = chunkContent.slice(
                Math.max(0, chunkContent.length - overlapChars)
            );

            buffer = [overlapText];
            bufferlength = overlapText.length;
        }
    }

    if (buffer.length > 0) {
        chunks.push({
            index: chunkIndex,
            content: buffer.join("\n")
        });
    }

    return chunks;
}