import { useMemo } from 'react';

export interface NextToComeEvent {
  startDate: string;
  startTime: 8 | 9 | 10 | 11;
  endDate: string;
  endTime: 17 | 18 | 19 | 20;
  name: string;
  url: string;
  isPassed?: boolean;
  isCanceled?: boolean;
}

export const useMultipleEventsCalendar = (events: NextToComeEvent[]) => {
  const nextToComeEvents = events
    .map((e) => {
      return {
        ...e,
        isPassed: new Date() >= new Date(e.startDate),
      };
    })
    .filter((e) => !e.isPassed)
    .filter((e) => !e.isCanceled)
    .sort((e1, e2) => (new Date(e1.startDate) >= new Date(e2.startDate) ? 1 : -1));

  const hasNextToComeMultipleEvents = useMemo(() => {
    return Array.isArray(nextToComeEvents) && nextToComeEvents.length > 0;
  }, [nextToComeEvents]);

  return { nextToComeEvents, hasNextToComeMultipleEvents };
};
