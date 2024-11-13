import Link from "next/link";

export interface LinkItem {
  href: string;
  text: string;
}

interface ExplanationBoxProps {
  title: string;
  text: string;
  links?: LinkItem[];
}

const ExplanationBox: React.FC<ExplanationBoxProps> = ({
  title,
  text,
  links,
}) => {
  return (
    <div className="bg-gray-800 dark:bg-gray-100 rounded-lg p-6 my-4 shadow-md">
      <div className="border-l-4 border-purple-500 dark:border-purple-600 pl-4">
        <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-600">
          {title}
        </h3>
        <p className="text-gray-200 dark:text-gray-800 mb-4">{text}</p>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-purple-400 dark:text-purple-600 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplanationBox;
