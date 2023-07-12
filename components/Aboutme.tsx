/* eslint-disable react/no-unescaped-entities */
import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        I believe that we are a work in progress "from cradle to grave". 
        Strong analytical skills coupled with emotional intelligence are my not-so-secret recipe to interact successfully with clients and colleagues. 
        I strongly believe in "buck stops here" approach to my work and I am good at getting things done. Among my friends I am described as a positive soul, 
        who knows how to listen and ready to tackle problem that you have!
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
