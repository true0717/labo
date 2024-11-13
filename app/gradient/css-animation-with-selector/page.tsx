import ExperimentWrapper from "@/components/ExperimentLayout";
import { CssAnimationWithSelector } from "./CssAnimationWithSelector";
import { getRouteInfo } from "@/config/routeUtils";
import ExplanationBox, { LinkItem } from "@/components/ExplanationBox";
import { BlankLinks } from "@/components/custom-ui/BlankLinks";
import LinksLayout from "@/components/LinksLayout";

export default async function CssAnimationWithSelectorPage() {
  const pathname = "/gradient/css-animation-with-selector";
  const { title, description } = getRouteInfo(pathname);
  return (
    <ExperimentWrapper
      title={title}
      description={description}
      className="bg-transparent shadow-none p-0"
    >
      <CssAnimationWithSelector />
      {/* <CustomSeparator /> */}
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
      <ExplanationBox title={explainTitle} text={text} links={links} />
      <ExplanationBox title={explainTitle2} text={text2} />
    </ExperimentWrapper>
  );
}

const explainTitle = "@Property Explanation";

const links: LinkItem[] = [
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
    text: "documentation MDN sur @property",
  },
];

const text =
  "Les dégradés (gradients) ont toujours été difficiles à animer en CSS. Mais cela a changé ! \n\n" +
  "Grâce à l'introduction de la règle `@property` en CSS, nous pouvons maintenant :\n\n" +
  "- Définir le type d'une variable CSS (propriété personnalisée)\n" +
  "- Spécifier qu'une variable est de type 'color'\n" +
  "- Animer cette variable d'une couleur à une autre\n\n" +
  "En utilisant cette variable dans un dégradé, celui-ci s'animera automatiquement entre les différentes couleurs ! 🎨\n\n" +
  "Pour plus d'informations, consultez la documentation MDN sur @property.";

const explainTitle2 = "Extra Animated Blob";

const text2 = `
L'animation des blobs utilise deux pseudo-éléments (::before et ::after) avec :

- Des gradients linéaires utilisant les variables CSS --color-a et --color-b
- Une animation @keyframes qui combine translation, rotation et scale
- Un effet de flou (blur) pour l'aspect "blob"
- Des durées d'animation différentes (8s et 10s) avec direction inverse pour le second blob

Pour plus de détails techniques, consultez le code source dans les liens ci-dessous.`;
