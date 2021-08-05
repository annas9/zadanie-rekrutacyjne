import React, { useRef, useState } from 'react';
import { Ring, Wrapper, Line, IconWrapper, LineWrapper, Icon, Tooltip, TooltipWrapper, Title } from './styles';
import { TimelineProps } from '../interfaces';
import { useOnClickOutside } from '../../../utils';

interface PointProps {
  event: TimelineProps;
}

const Point = ({ event }: PointProps) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <Wrapper>
      <Ring>
        <LineWrapper>
          <Line />
            <IconWrapper ref={ref} onClick={handleIsOpen}>
              <Icon src={`${process.env.PUBLIC_URL}/images/${event.icon}`}/>
            </IconWrapper>
        </LineWrapper>
        <TooltipWrapper>
          <Tooltip
            isOpen={isOpen}>
            <Title>{event.title}</Title>
            {event.description}
          </Tooltip>
        </TooltipWrapper>
      </Ring>
    </Wrapper>
  );
};

export default Point;
