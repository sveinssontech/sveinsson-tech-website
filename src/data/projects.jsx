import BouncyButton from "../buttons/BouncyButton";

const handleOpenTab = () => {
  window.open('https://github.com/sveinssontech/CubeTuber/releases/tag/0.1.0', '_blank', 'noopener,noreferrer');
};


export const projects = [
  {
    id: "project-1",
    title: "Cube Tuber",
    description:
      "A VTuber like project, made to accept a static FBX model and do basic animations.",
    content: 
    (
      <div>
        <BouncyButton onClick={handleOpenTab}>
          Download
        </BouncyButton>
      </div>
    ),
  },
  {
    id: "project-2",
    title: "Party Game Framwork",
    description:
      "A local party game maker, using a windows machine to host, and phones to play.",
    content: <p>In development</p>,
  },
  {
    id: "project-3",
    title: "More to Come",
    description: "More projects in development.",
    content: <p>Stay tuned!</p>,
  },
];
