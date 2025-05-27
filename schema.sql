-- Stores the unique file hash, name, size and extension
-- group is used to categorize files, e.g., 'images', 'documents', etc.
CREATE TABLE IF NOT EXISTS files (
    id SERIAL PRIMARY KEY,
    sha256 VARCHAR(64) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    path TEXT NOT NULL,
    thumbnail_path TEXT,
    extension VARCHAR(10) NOT NULL,
    source_drive VARCHAR(255) NOT NULL,
    group VARCHAR(20) NOT NULL,
    created_at TIMESTAMP,
    modified_at TIMESTAMP,
    size BIGINT NOT NULL,
);

-- Stores every file found so we can relate back to the first one
CREATE TABLE IF NOT EXISTS files_found (
    id SERIAL PRIMARY KEY,
    sha256 VARCHAR(64) NOT NULL,
    path as TEXT NOT NULL,
    name VARCHAR(255) NOT NULL,
    extension VARCHAR(10) NOT NULL,
    source_drive VARCHAR(255) NOT NULL,
    stat VARCHAR(255) NOT NULL,
    group VARCHAR(20) NOT NULL,
    accessed_at TIMESTAMP,
    modified_at TIMESTAMP,
    created_at TIMESTAMP,
);
