import Blur from "../ui/blur";
import TimelineCard from "../ui/timelineCard";

interface ITimeline {
  title: string;
  description?: string;
  date: string;
}
interface Props {
  competitionName: string;
  timlines: ITimeline[];
}

function TimelineSection({ timlines, competitionName }: Props) {
  return (
    <TimelineCard
      title="Timeline"
      description={`Alur kegiatan ${competitionName.toLocaleLowerCase()}`}
      timelines={timlines}
    >
      <Blur className="w-[470px] h-[480px] -bottom-56 right-80 bg-[#004AAD]" />
    </TimelineCard>
  );
}

export default TimelineSection;
