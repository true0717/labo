import ExperimentWrapper from "@/components/ExperimentLayout";
import { CssAnimationWithSelector } from "./CssAnimationWithSelector";
import { getRouteInfo } from "@/config/routeUtils";
import ExplanationBox, { LinkItem } from "@/components/ExplanationBox";
import { BlankLinks } from "@/components/custom-ui/BlankLinks";
import LinksLayout from "@/components/LinksLayout";
import CodeExplanationBox, {
  CodeElement,
} from "@/components/CodeExplanationBox";

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
      <CodeExplanationBox elements={codeElements} />
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

Pour plus de détails techniques, consultez le code source dans les liens ci-dessous.

`;

const codeElements: CodeElement[] = [
  {
    filePath:
      "app/gradient/css-animation-with-selector/CssAnimationWithSelector.tsx",
    extension: "tsx",
    content: `Ce composant crée une interface interactive pour exprimer son humeur avec des animations de couleurs et de formes.
  
  La logique principale repose sur :
  - Un enum \`Feeling\` qui définit 3 états d'humeur (Sad, Neutral, Happy)
  - Des mappings de couleurs et de labels pour chaque état
  - Un slider qui permet de naviguer entre ces états
  - L'utilisation de variables CSS (\`--color-a\`, \`--color-b\`, \`--color-c\`) pour animer les transitions entre les couleurs
  
  Le composant utilise \`useRef\` pour accéder directement au DOM et mettre à jour les propriétés CSS, permettant ainsi des transitions fluides entre les différents états d'humeur.
  
  \`\`\`tsx
  "use client";
  
  import { useEffect, useRef, useState } from "react";
  import "./css-animation-with-selector.css";
  
  enum Feeling {
    Sad = 1,
    Neutral = 2,
    Happy = 3,
  }
  
  const feelingColorMap = {
    [Feeling.Sad]: ["#394e7a", "#8e9ac7", "#4ee"],
    [Feeling.Neutral]: ["#22d", "#c8f8ff", "#6d2"],
    [Feeling.Happy]: ["#39f", "#f4e54d", "#fa3"],
  };
  
  export const CssAnimationWithSelector = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [feeling, setFeeling] = useState<Feeling>(Feeling.Neutral);
  
    useEffect(() => {
      if (!wrapperRef.current) return;
      const [a, b, c] = feelingColorMap[feeling];
      wrapperRef.current.style.setProperty("--color-a", a);
      wrapperRef.current.style.setProperty("--color-b", b);
      wrapperRef.current.style.setProperty("--color-c", c);
    }, [feeling]);
  
    return (
      <div className="css-animation-with-selector-wrapper">
        <div ref={wrapperRef} className="blobclass">
          <input
            className="range"
            onChange={(e) => setFeeling(e.target.value as unknown as Feeling)}
            type="range"
            min={1}
            max={3}
            step={1}
            value={feeling}
          />
        </div>
      </div>
    );
  };
  \`\`\``,
  },
  {
    filePath:
      "app/gradient/css-animation-with-selector/css-animation-with-selector.css",
    extension: "css",
    content: `Ce fichier CSS gère deux aspects principaux :
  
  1. Les \`@property\` permettent d'animer les transitions de couleurs du dégradé :
     - Trois propriétés (\`--color-a\`, \`--color-b\`, \`--color-c\`) sont définies comme type \`<color>\`
     - Le type \`<color>\` permet une interpolation fluide entre les couleurs lors des changements
     - Ces couleurs sont utilisées dans les dégradés des blobs
  
  2. Les blobs sont créés avec des pseudo-éléments et des animations complexes :
     - Deux blobs (\`::before\` et \`::after\`) se superposent avec des dégradés différents
     - \`filter: blur()\` crée l'effet "blob" organique
     - Les animations combinent translation, rotation et échelle
     - Des durées différentes (8s/10s) créent un mouvement asynchrone entre les blobs
  
  \`\`\`css
  @property --color-a {
    syntax: "<color>";
    inherits: true;
    initial-value: transparent;
  }
  @property --color-b {
    syntax: "<color>";
    inherits: true;
    initial-value: transparent;
  }
  @property --color-c {
    syntax: "<color>";
    inherits: true;
    initial-value: transparent;
  }
  
  .blobclass {
    position: relative;
    min-height: 400px;
    overflow: hidden;
  }
  
  .blobclass::before,
  .blobclass::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    filter: blur(100px);
  }
  
  .blobclass::before {
    background: linear-gradient(var(--color-a), var(--color-b));
    animation: blob1 8s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  
  .blobclass::after {
    background: linear-gradient(var(--color-b), var(--color-c));
    animation: blob2 10s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045) reverse;
  }
  
  @keyframes blob1 {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(100px, -50px) scale(1.2); }
    66% { transform: translate(-50px, 100px) scale(0.8); }
    100% { transform: translate(0, 0) scale(1); }
  }
  
  @keyframes blob2 {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-100px, 50px) scale(0.8); }
    66% { transform: translate(50px, -100px) scale(1.2); }
    100% { transform: translate(0, 0) scale(1); }
  }
  \`\`\``,
  },
];
