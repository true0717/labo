import "./html-blops.css";
import { BlankLinks } from "@/components/custom-ui/BlankLinks";
import LinksLayout from "@/components/LinksLayout";

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
      <LinksLayout>
        <BlankLinks
          url="https://www.youtube.com/watch?v=Ml-B-W91gtw"
          title="Youtube - WeCoded"
        />
        <BlankLinks
          url="https://www.youtube.com/watch?v=chBbP1Z6eEQ"
          title="Youtube - Codelnn"
        />
        <BlankLinks
          url="https://www.youtube.com/watch?v=liW6bDLnuuk"
          title="Youtube - OnlineTutorial"
        />
      </LinksLayout>
    </>
  );
};
