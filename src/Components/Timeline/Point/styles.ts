import styled from 'styled-components';

interface TooltipProps {
  isOpen?: boolean;
  onClick?: any;
}

interface IconWrapperProps {
  ref?: any;
  onClick?: any;
}

export const Wrapper = styled.div`
  padding: 10px 10px;
`;

export const Ring = styled.div`
  width: 10px;
  height: 10px;
  background-color: transparent;
  border-radius: 100%;
  border: 2px solid #000;
  position: relative;
`;

export const LineWrapper = styled.div`
  position: absolute;
  top: 8px;
  padding: 0 24px;
  left: -21px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    transform: rotate(270deg);
    bottom: -58px;
    top: auto;
    left: 43px;
    padding: 0 0;
    width: 50px;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 70px;
  background-color: black;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  
  @media (max-width: 600px) {
    transform: rotate(90deg);
  }
`;

export const Tooltip = styled.span<TooltipProps>`
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  width: 130px;
  background-color: #808080;
  color: #fff;
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 140px;
  left: -56px;
  line-height: 1.2;

  @media (max-width: 600px) {
    top: 20px;
    left: -260px;
    bottom: auto;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  border-bottom: 1px solid #fff;
  margin-bottom: 2px;
`;

export const TooltipWrapper = styled.div`
  position: relative;
`;
