import Blur from "../ui/blur";
import TimelineCard from "../ui/timelineCard";
import { kdbiTimelineData } from "@/data/kdbiTimeline";

interface Props {
  timlines: typeof kdbiTimelineData;
}

function TimelineSection({ timlines }: Props) {
  return (
    <TimelineCard
      title="Timeline"
      description="Alur kegiatan kompetisi debat bahasa indonesia"
      timelines={timlines}
    >
      <Blur className="w-[470px] h-[480px] -bottom-56 right-80 bg-[#004AAD]" />
    </TimelineCard>
  );
}

export default TimelineSection;
