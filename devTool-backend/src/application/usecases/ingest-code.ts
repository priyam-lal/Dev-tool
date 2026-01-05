import { chunkCode } from "../../domain/chunking/chunk-code";
const ingestCode = (content: string, options: {}) => {
    chunkCode(content, options);
}
export { ingestCode };