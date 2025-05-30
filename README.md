# archiver

Scripts to create and backup a file &amp; photo archive from my random collection of drives

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

These should be a simple YAML file that defines all the settings necessary

archiver.cfg
```yaml

source:
target:
backup:
sqlite:
image_types:
  - gif
  - jpg
  - jpeg
  - ...
other_types:
  - pdf
  - doc
  - docx
  - xls
  - xlsx
  - ...



```
