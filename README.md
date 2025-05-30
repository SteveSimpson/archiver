# archiver

Scripts to create and backup a file &amp; photo archive from my random collection of drives

The goal of this is to create a a single *archive* copy and store all the references
and metadata in a database.

## Phases

### Phase 1

Create the Archive 

## Scripts

- archiver
  - loops through and copies files from source to target
  - stores all files in a sqlite db by sha256
- thumbnail
  - does the metadata manipulation around a binary that creates a thumbnail
  - find a
- sync
  - probably an rsync wrapper from source to target

## Config

These should be a simple YAML file that defines all the settings necessary. To create the default config run
`archiver --init`

### Dev notes

```sh
python3 -m venv .venv
source .venv/bin/activate

pip freeze > requirements.txt
pip install -r requirements.txt
```