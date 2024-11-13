import ExperimentWrapper from "@/components/ExperimentLayout";
import { CssAnimation } from "./CssAnimation";
import { getRouteInfo } from "@/config/routeUtils";
import ExplanationBox, { LinkItem } from "@/components/ExplanationBox";
import CodeExplanationBox, {
  CodeElement,
} from "@/components/CodeExplanationBox";

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
      <ExplanationBox title={explainTitle} text={text} links={links} />
      <CodeExplanationBox elements={codeElements} />
    </ExperimentWrapper>
  );
}

const codeElements: CodeElement[] = [
  {
    filePath: "app/gradient/css-animation/CssAnimation.tsx",
    extension: "tsx",
    content: `La classe \`gradient-anim\` est une classe CSS personnalisée qui crée un effet de dégradé animé.

\`\`\`tsx
import "./css-animation.css";

export const CssAnimation = () => {
  return (
    <div className="css-animation-wrapper">
      <div className="h-96 gradient-anim rounded-lg"></div>
    </div>
  );
};
\`\`\``,
  },
  {
    filePath: "app/gradient/css-animation/css-animation.css",
    extension: "css",
    content: `Le dégradé est créé avec \`linear-gradient\` qui définit une transition fluide entre plusieurs couleurs selon un angle de -45deg. La propriété \`background-size: 400% 400%\` crée un dégradé 4 fois plus grand que le conteneur dans les deux dimensions car le dégradé est en diagonale (-45deg). Si on augmentait uniquement la largeur, l'animation serait incomplète sur certains angles.

Les valeurs dans \`@keyframes\` représentent la position du dégradé : \`background-position: 0% 50%\` signifie que le dégradé est aligné à gauche (0%) et centré verticalement (50%). L'animation déplace donc le dégradé de gauche à droite puis revient à sa position initiale. Cette technique est légère et performante car elle n'utilise que du CSS natif.

\`\`\`css
.css-animation-wrapper .gradient-anim {
  animation: gradient 10s ease infinite;
  background: linear-gradient(-45deg, #52d7ee, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
\`\`\``,
  },
];
