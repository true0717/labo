import React from "react";
import Image from "next/image";

type FileExtension =
  | "ts"
  | "tsx"
  | "js"
  | "jsx"
  | "vsc"
  | "md"
  | "mdx"
  | "json"
  | "html"
  | "css"
  | "config";

interface FileIconProps {
  extension: FileExtension;
  className?: string;
}

const FileIcon: React.FC<FileIconProps> = ({ extension, className = "" }) => {
  return (
    <Image
      src={`/logo/${extension}.svg`}
      alt={`${extension} file`}
      width={24}
      height={24}
      className={className}
    />
  );
};

export default FileIcon;
