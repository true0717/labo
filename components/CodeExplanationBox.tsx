import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";
import FileIcon from "./svg/FileIcon";

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

export interface CodeElement {
  filePath: string;
  extension: FileExtension;
  content: string;
}

interface CodeExplanationBoxProps {
  elements: CodeElement[];
}

const CodeExplanationBox: React.FC<CodeExplanationBoxProps> = ({
  elements,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {elements.map((element, index) => (
        <div
          key={index}
          className="bg-gray-900 dark:bg-gray-100 rounded-lg p-6 shadow-md"
        >
          <div className="border-l-4 border-blue-500 dark:border-blue-600 pl-4 mb-6 last:mb-0">
            <div className="flex  items-center mb-3 gap-2">
              <FileIcon extension={element.extension} className="w-8 h-8 " />
              <div className="text-indigo-300 dark:text-indigo-400 text-xl font-semibold ">
                {element.filePath}
              </div>
            </div>
            <div className="prose prose-invert dark:prose-light max-w-none text-gray-200 dark:text-gray-800">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {element.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeExplanationBox;
