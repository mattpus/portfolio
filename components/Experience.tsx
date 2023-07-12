import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="ING Investments"
          subTitle="Mobile Engineer - React Native | iOS | Java "
          date="2022 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Calco"
          subTitle="IT Masterclass Professional 2022"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Converge"
          subTitle="Account Manager 2020 - 2021"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Ebonit Saxophone Quartet"
          subTitle="Professional Musician 2013 - 2020"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
