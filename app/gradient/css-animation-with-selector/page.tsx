import ExperimentWrapper from "@/components/ExperimentLayout";
import { CssAnimationWithSelector } from "./CssAnimationWithSelector";
import { getRouteInfo } from "@/config/routeUtils";
import ExplanationBox, { LinkItem } from "@/components/ExplanationBox";
import CustomSeparator from "@/components/custom-ui/CustomSeparator";
import { BlankLinks } from "@/components/custom-ui/BlankLinks";
import LinksLayout from "@/components/LinksLayout";

export default async function CssAnimationWithSelectorPage() {
  const pathname = "/gradient/css-animation-with-selector";
  const { title, description } = getRouteInfo(pathname);
  return (
    <ExperimentWrapper title={title} description={description}>
      <CssAnimationWithSelector />
      <CustomSeparator />
      <ExplanationBox title={explainTitle} text={text} links={links} />
      <ExplanationBox title={explainTitle2} text={text2} links={links2} />
      <LinksLayout>
        <BlankLinks
          url="https://www.youtube.com/watch?v=aObTIjD0olA"
          title="Youtube - Frontend FYI"
        />
        <BlankLinks
          url="https://www.frontend.fyi/v/animated-gradients-with-css"
          title="Code & Demo - Frontend FYI"
        />
      </LinksLayout>
    </ExperimentWrapper>
  );
}

const explainTitle = "@Property Explanation";

const links: LinkItem[] = [
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
    text: "@property at Mdn",
  },
];

const text =
  "Gradients are one of those things that you can not animate in CSS. Until NOW. With the introduction of the @ property rule in CSS, you can define the type of a css variable (css custom property). And defining a specific variable as being a color, now gives you the ability to animate a variable from one color to another. And if you then use that variable inside a gradient, that gradient will also animate from one color to another!<br> https://developer.mozilla.org/en-US/docs/Web/CSS/@property";

const explainTitle2 = "Extra Animated Blob";

const links2: LinkItem[] = [
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
    text: "@property at Mdn",
  },
];

// peux tu expliquer comment l'animation des blobs en after et beffore est faite en t'appuyant sur le code css.
const text2 = `Dans cet exemple, nous créons une animation complexe de blobs utilisant les pseudo-éléments ::before et ::after. Voici comment ça fonctionne :

1. Les blobs sont créés en utilisant des gradients linéaires qui utilisent nos variables CSS personnalisées --color-a et --color-b définies avec @property.

2. L'animation 'blob' est définie avec @keyframes et contrôle :
   - La translation (déplacement)
   - La rotation (jusqu'à 90 degrés)
   - La mise à l'échelle (scale)

3. Les pseudo-éléments ::before et ::after créent deux blobs distincts :
   - Positionnés de manière absolue avec des dimensions et positions différentes
   - Utilisant filter: blur(50px) pour créer l'effet flou
   - Animés avec des durées différentes (8s et 10s)
   - Le second blob est animé en reverse pour créer un effet plus dynamique

4. Les cubic-bezier sont utilisés pour donner un effet d'accélération et de décélération naturel à l'animation.

L'ensemble crée un effet fluide et organique avec des blobs qui se déplacent de manière indépendante.

Pour une implémentation complète incluant le code Tailwind et plus de détails techniques, je vous invite à consulter le code source et la démonstration sur Frontend FYI, ainsi que la vidéo YouTube explicative disponible dans les liens ci-dessous.`;
