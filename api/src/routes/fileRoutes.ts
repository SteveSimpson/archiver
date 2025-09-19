import { Router, Request, Response } from "express";
import { File } from "../models/files";

const router = Router();

function unixTimestampToDate(unixTimestamp: number): Date {
  // Multiply by 1000 to convert seconds to milliseconds
  return new Date(unixTimestamp * 1000);
}

// hard code this for now
const files: File[] = [
    {
        id: 1, 
        sha256: "4e9cc5bbce2136140462d11c5fec6e6c1ed10602c2bca874dbb58e7b9be21092", 
        name: "audio", 
        extension: "wav", 
        group: "media", 
        createdAt: unixTimestampToDate(1752162388.46768), 
        modifiedAt: unixTimestampToDate(1752162381.24886), 
        archiveFullPath: "/var/archiver/archive/media/wav/4e9cc5bbce2136140462d11c5fec6e6c1ed10602c2bca874dbb58e7b9be21092.wav", 
        size: 3244, 
        thumbnailPath: ""
    },
    {
        id: 2,
        sha256: "fcd5c1d6e2348e5625ea82faaab8a1bcc943d45d57396b43b2ef015cb188e95a",
        name: "v0.7.0-0.dev.0.20250523013057-bbc2f4dd71ea",
        extension: "zip",
        group: "archives",
        createdAt: unixTimestampToDate(1755009012.10576),
        modifiedAt: unixTimestampToDate(1755009011.99371),
        archiveFullPath: "/var/archiver/archive/archives/zip/fcd5c1d6e2348e5625ea82faaab8a1bcc943d45d57396b43b2ef015cb188e95a.zip",
        size: 1054071,
        thumbnailPath: ""
    },
    {
        id: 3,
        sha256: "c8fed1950db52dc2e2682be963d564657a1d151898cedbd0f4b822828a899dc5",
        name: "v0.6.1",
        extension: "zip",
        group: "archives",
        createdAt: unixTimestampToDate(1755009022.37776),
        modifiedAt: unixTimestampToDate(1755009022.3444),
        archiveFullPath: "/var/archiver/archive/archives/zip/c8fed1950db52dc2e2682be963d564657a1d151898cedbd0f4b822828a899dc5.zip",
        size: 975692,
        thumbnailPath: ""
    },
    {
        id: 4,
        sha256: "66d5c9612657a62b37cfc72efde3330921a9908becc616be5e12739c1ff3965a",
        name: "v0.8.0",
        extension: "zip",
        group: "archives",
        createdAt: unixTimestampToDate(1755009012.53241),
        modifiedAt: unixTimestampToDate(1755009012.39104),
        archiveFullPath: "/var/archiver/archive/archives/zip/66d5c9612657a62b37cfc72efde3330921a9908becc616be5e12739c1ff3965a.zip",
        size: 126350,
        thumbnailPath: ""
    },
    {
        id: 5,
        sha256: "5f2c3f53bfadabad9522412f2ea52412f3629f11753877db975f8e23dc21555f",
        name: "v2.6.0",
        extension: "zip",
        group: "archives",
        createdAt: unixTimestampToDate(1755009012.11803),
        modifiedAt: unixTimestampToDate(1755009011.97325),
        archiveFullPath: "/var/archiver/archive/archives/zip/5f2c3f53bfadabad9522412f2ea52412f3629f11753877db975f8e23dc21555f.zip",
        size: 34425,
        thumbnailPath: ""
    }
]


// Get all files
router.get("/files", (req: Request, res: Response) => {
    const { group, extension } = req.query;
    console.log(req.query)
    let filteredFiles = [...files];

    if (group) {
        filteredFiles = filteredFiles.filter(f => f.group === group);
    }
    if (extension) {
        filteredFiles = filteredFiles.filter(f => f.extension === extension);
    }
    res.json(filteredFiles);
});

router.get("/files/count", (req: Request, res: Response) => {
    res.json({count: files.length});
});

// Get a file by ID
router.get("/files/:id", (req: Request, res: Response) => {
  const fileId = parseInt(req.params.id as string);
  const file = files.find(f => f.id === fileId);
  if (file) {
    res.json(file);
  } else {
    res.status(404).json({ message: "File not found" });
  }
});



export default router;
