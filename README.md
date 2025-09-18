# archiver

Scripts to create and backup a file &amp; photo archive from my random collection of drives

The goal of this is to create a a single *archive* copy and store all the references
and metadata in a database.

## Quick Start

### Run the script locally to collect files

#### Download the Source and Setup the Environment

Make sure you have Python greater than 3.10

```sh
git clone git@github.com:SteveSimpson/archiver.git
cd archiver
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Create the base configuration file: `bin/archiver --init`

Edit the cocnfiguration file, `~/.archiver/config.yaml` in your favorate editor.

Re-execute `bin/archiver --init` to create the directory structure.





## Phases

The first part is a simple script to get the data, the latter would be a service to work with what was collected

1. Create the archive
2. Add a way to merge data from 2 different sources
3. View files 
4. Make a way to rename / sort
5. Classify Files / Mark files to delete / skip

## Mounting Disks

Mount all disks under /mnt/souce like

```sh
mkdir Windows
mkdir DATA
mkdir System
mount -o uid=1000,gid=1000,ro /dev/sdd1 /mnt/source/System
mount -o uid=1000,gid=1000,ro /dev/sdd2 /mnt/source/Windows
mount -o uid=1000,gid=1000,ro /dev/sdd5 /mnt/source/DATA
```

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