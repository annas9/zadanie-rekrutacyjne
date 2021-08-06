import { SortedTimelineProps, TimelineProps } from './interfaces';

export const getYearFromData = (date: string): number => {
  return new Date(date).getFullYear();
}

export const sortTimelineByYear = (items: TimelineProps[]): SortedTimelineProps[] => {
  const data = [];
  const years = getAllYearsFromTimeline(items);

  for (const year of years) {
    data.push({
      year,
      items: getTimelineEventByYear(year, items),
    })
  }

  return data;
}

const getAllYearsFromTimeline = (items: TimelineProps[]): number[] => {
  const years: number[] = [];
  for (const item of items) {
    const year = getYearFromData(item.date);
    if (!years.includes(year)) {
      years.push(year);
    }
  }
  return years.sort();
}

const getTimelineEventByYear = (year: number, items: TimelineProps[]): TimelineProps[] => {
  return items.filter(item => getYearFromData(item.date) === year);
}
