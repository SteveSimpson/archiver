import { FileList } from "../file-list/file-list";
import type { Route } from "./+types/list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "File List" },
    { name: "description", content: "Browse archived files" },
  ];
}

export default function ListRoute() {
  return <FileList />;
}
