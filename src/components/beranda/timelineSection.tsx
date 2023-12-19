import TimelineCard from "../ui/timelineCard";
import { aboutTimelineData } from "@/data/timeline/aboutTimeline";

function TimelineSection() {
  return (
    <TimelineCard
      title="Timeline Lomba"
      description="Perhatikan waktu dan tanggal perlombaan"
      timelines={aboutTimelineData}
    />
  );
}

export default TimelineSection;
