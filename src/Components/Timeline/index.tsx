import React, { useEffect, useState } from 'react';
import { Box, Wrapper, Date } from './styles';
import { timelineData } from './structures';
import { SortedTimelineProps } from './interfaces';
import { sortTimelineByYear } from './utils';
import Point from './Point';

const Timeline = () => {
  const [events, setEvents] = useState<SortedTimelineProps[]>([]);

  useEffect(() => {
    const sortedData = sortTimelineByYear(timelineData);
    setEvents(sortedData);
  }, []);

  return (
    <Wrapper>
      {events.map(event => (
        <Box>
          <Date>{event.year}</Date>
          {event.items.map(item => (
            <Point event={item} />
          ))}
        </Box>
        )
      )}
    </Wrapper>
  );
};

export default Timeline;
