import Link from "next/link";
import { Button } from "@/components/ui/button";
type BlankLinksProps = {
  url: string;
  title: string;
};

export const BlankLinks = ({ url, title }: BlankLinksProps) => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button variant="outline">{title}</Button>
    </Link>
  );
};
