# archiver
Scripts to create and backup a file &amp; photo archive from my random collection of drives

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



### Dev notes

```sh
pip freeze > requirements.txt
pip install -r requirements.txt
```