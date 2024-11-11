import ExperimentWrapper from "@/components/ExperimentLayout";
import { HtmlBlops } from "./HtmlBlops";
import { getRouteInfo } from "@/config/routeUtils";

export default function HtmlBlopsPage() {
  const pathname = "/gradient/html-blops";
  const { title, description } = getRouteInfo(pathname);
  return (
    <ExperimentWrapper title={title} description={description}>
      <HtmlBlops />
    </ExperimentWrapper>
  );
}
