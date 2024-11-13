import ExperimentWrapper from "@/components/ExperimentLayout";
import { CssAnimation } from "./CssAnimation";
import { getRouteInfo } from "@/config/routeUtils";
import ExplanationBox, { LinkItem } from "@/components/ExplanationBox";

export default async function CssAnimationPage() {
  const pathname = "/gradient/css-animation";
  const { title, description } = getRouteInfo(pathname);
  const explainTitle = "Animation de Dégradé CSS";
  const text = `Cette démonstration illustre comment créer une animation fluide de dégradé de couleurs en utilisant uniquement CSS. L'animation est réalisée grâce à la propriété background-image avec linear-gradient et l'animation CSS @keyframes. Cette technique est légère et performante car elle n'utilise que du CSS natif.

La clé est d'utiliser une grande image de dégradé qui se déplace en arrière-plan, créant ainsi l'illusion d'un changement de couleurs continu.`;

  const links: LinkItem[] = [
    {
      text: "MDN - Utilisation des dégradés CSS",
      href: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients",
    },
    {
      text: "MDN - Animations CSS",
      href: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations",
    },
    {
      text: "CSS-Tricks - Guide des Dégradés CSS",
      href: "https://css-tricks.com/css3-gradients/",
    },
  ];

  return (
    <ExperimentWrapper
      title={title}
      description={description}
      className="bg-transparent shadow-none p-0"
    >
      <CssAnimation />
      {/* <CustomSeparator /> */}
      <ExplanationBox title={explainTitle} text={text} links={links} />
    </ExperimentWrapper>
  );
}
