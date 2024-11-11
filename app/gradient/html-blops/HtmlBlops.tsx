import Link from "next/link";
import "./html-blops.css";
import { Button } from "@/components/ui/button";

export const HtmlBlops = () => {
  return (
    <>
      <div className="html-blops-wrapper">
        <div className="h-[800px] gradient-anim relative overflow-hidden rounded-lg">
          <div className="blop1"></div>
          <div className="blop2"></div>
          <div className="blop3"></div>
        </div>
      </div>
      <div className="flex gap-2 p-4">
        <Link
          href="https://www.youtube.com/watch?v=aObTIjD0olA&t=1116s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">lien 1</Button>
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=Ml-B-W91gtw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">lien 2</Button>
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=qmRqgFbNprM&t=3138s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">lien 3</Button>
        </Link>
      </div>
    </>
  );
};
