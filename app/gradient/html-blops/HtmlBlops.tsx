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
          url="https://www.youtube.com/watch?v=aObTIjD0olA&t=1116s"
          title="lien 1"
        />
        <BlankLinks
          url="https://www.youtube.com/watch?v=Ml-B-W91gtw"
          title="lien 2"
        />
        <BlankLinks
          url="https://www.youtube.com/watch?v=qmRqgFbNprM&t=3138s"
          title="lien 3"
        />
      </LinksLayout>
    </>
  );
};
