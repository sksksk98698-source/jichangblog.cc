import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [];

export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
