import LinkButton from "../projects/LinkButton";

export const projects = [
  {
    id: "project-1",
    title: "Cube Tuber",
    description:
      "A VTuber like project, made to accept a static FBX model and do basic animations.",
    content: <LinkButton link={"https://github.com/sveinssontech/cube-tuber-download/releases/tag/0.1.0"} buttonText={"Download"}/>,
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
