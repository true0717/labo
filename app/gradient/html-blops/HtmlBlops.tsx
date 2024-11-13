import CodeExplanationBox, {
  CodeElement,
} from "@/components/CodeExplanationBox";
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
      <CodeExplanationBox elements={codeElements} />
    </>
  );
};

const codeElements: CodeElement[] = [
  {
    filePath: "app/gradient/html-blops/HtmlBlops.tsx",
    extension: "tsx",
    content: `Ce composant crée une animation de blobs en utilisant uniquement des éléments HTML et CSS. Contrairement aux exemples précédents qui utilisaient des pseudo-éléments, ici chaque blob est un \`div\` distinct.
  
  Cette approche permet plus de contrôle sur chaque blob individuellement, mais nécessite plus de markup HTML. Les animations sont définies dans le fichier CSS associé.
  
  \`\`\`tsx
  import "./html-blops.css";
  
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
      </>
    );
  };
  \`\`\``,
  },
  {
    filePath: "app/gradient/html-blops/html-blops.css",
    extension: "css",
    content: `Ce fichier CSS combine deux types d'animations :
  
  1. Une animation de dégradé de fond (\`.gradient-anim\`) qui fait défiler un dégradé à 4 couleurs en diagonale (-45deg)
  2. Trois blobs animés qui se déplacent avec des motifs différents
  
  Les blobs utilisent des dégradés complexes avec \`radial-gradient\` et \`linear-gradient\` combinés via \`background-blend-mode\`. Le \`filter: blur()\` crée l'effet organique.
  
  \`\`\`css
  .html-blops-wrapper .gradient-anim {
    animation: gradient 10s ease infinite;
    background: linear-gradient(-45deg, #52d7ee, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
  }
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .blop1,
  .blop2,
  .blop3 {
    position: absolute;
    width: 440px;
    height: 440px;
    border-radius: 15rem;
    filter: blur(50px);
  }
  
  .blop1 {
    left: 20%;
    top: 30%;
    background: radial-gradient(
        63.62% 69.52% at 100% 0%,
        rgba(247, 214, 98, 0.8) 0%,
        rgba(247, 214, 98, 0.168) 100%
      ),
      linear-gradient(208.42deg, #f0422a 7.46%, rgba(240, 88, 42, 0.18) 42.58%),
      radial-gradient(
        114.51% 122.83% at 0% -15.36%,
        #e74f6a 0%,
        rgba(231, 79, 106, 0.22) 66.72%
      );
    background-blend-mode: normal, normal, normal;
    animation: blop1 25s ease-in-out infinite;
  }
  
  .blop2 {
    left: 45%;
    top: 20%;
    background: radial-gradient(
        109.15% 148.57% at 4.46% 98.44%,
        #1b3180 0%,
        rgba(27, 49, 128, 0) 100%
      ),
      linear-gradient(141.57deg, #4eadeb 19.08%, rgba(78, 173, 235, 0) 98.72%);
    background-blend-mode: multiply, normal;
    animation: blop2 20s ease-in-out infinite;
  }
  
  .blop3 {
    left: 60%;
    top: 40%;
    background: linear-gradient(
      333.95deg,
      rgba(83, 208, 236, 0.85) -7.76%,
      rgba(83, 208, 236, 0.204) 19.67%
    );
    animation: blop3 30s ease-in-out infinite;
  }
  
  @keyframes blop1 {
    0% { transform: translate(0, 0); }
    10% { transform: translate(30px, -50px); }
    20% { transform: translate(-50px, 40px); }
    30% { transform: translate(40px, 60px); }
    40% { transform: translate(-35px, -60px); }
    50% { transform: translate(30px, 50px); }
    60% { transform: translate(-40px, -40px); }
    70% { transform: translate(35px, 60px); }
    80% { transform: translate(-30px, -50px); }
    90% { transform: translate(40px, 40px); }
    100% { transform: translate(0, 0); }
  }
  
  @keyframes blop2 {
    0% { transform: translate(0, 0); }
    20% { transform: translate(-40px, 50px); }
    40% { transform: translate(50px, -30px); }
    60% { transform: translate(-30px, -40px); }
    80% { transform: translate(40px, 50px); }
    100% { transform: translate(0, 0); }
  }
  
  @keyframes blop3 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(50px, -40px); }
    50% { transform: translate(-30px, 50px); }
    75% { transform: translate(40px, -50px); }
    100% { transform: translate(0, 0); }
  }
  \`\`\``,
  },
];
