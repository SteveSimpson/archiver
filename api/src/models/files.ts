export interface File {
  id: number;
  sha256: string;
  name: string;
  extension: string;
  group: string;
  createdAt: Date;
  modifiedAt: Date;
  archiveFullPath: string;
  size: number;
  thumbnailPath: string;
}

