import ExperimentWrapper from "@/components/ExperimentLayout";
import { CssAnimation } from "./CssAnimation";
import { getRouteInfo } from "@/config/routeUtils";

export default async function CssAnimationPage() {
  const pathname = "/gradient/css-animation";
  const { title, description } = getRouteInfo(pathname);
  return (
    <ExperimentWrapper title={title} description={description}>
      <CssAnimation />
    </ExperimentWrapper>
  );
}
