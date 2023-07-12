import { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  date?: string;
  icon: ReactNode;
}

const ExperienceCard = ({ title, subTitle, date, icon }: Props) => {
  return (
    <div className="flex direction-row items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>
        <p className="text-base tracking-wide text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
