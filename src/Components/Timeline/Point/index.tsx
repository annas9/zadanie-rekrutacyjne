import React from 'react';
import { Ring, Wrapper, Line, IconWrapper, LineWrapper, Icon } from './styles';
import { TimelineProps } from '../interfaces';

interface PointProps {
  event: TimelineProps;
}

const Point = ({ event }: PointProps) => {
  return (
    <Wrapper>
      <Ring>
        <LineWrapper>
          <Line />
          <IconWrapper>
            <Icon src={`${process.env.PUBLIC_URL}/images/${event.icon}`}/>
          </IconWrapper>
        </LineWrapper>
      </Ring>
    </Wrapper>
  );
};

export default Point;
