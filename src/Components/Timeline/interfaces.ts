export interface TimelineProps {
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface SortedTimelineProps {
  year: number;
  items: TimelineProps[];
}
