CREATE TABLE
    documents (
        id UUID PRIMARY KEY,
        source_type TEXT NOT NULL,
        filename TEXT NOT NULL,
        language TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW ()
    );

CREATE TABLE
    chunks (
        id UUID PRIMARY KEY,
        document_id UUID NOT NULL REFERENCES documents (id) ON DELETE CASCADE,
        chunk_index INTEGER NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW ()
    )