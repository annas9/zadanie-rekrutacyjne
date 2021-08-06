import styled from 'styled-components';
import { RefObject } from 'react';

interface TooltipProps {
  isOpen?: boolean;
  onClick?: () => void;
}

interface IconWrapperProps {
  ref?: RefObject<HTMLInputElement>;
  onClick?: () => void;
}

export const Wrapper = styled.div`
  padding: 10px 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Ring = styled.div`
  width: 10px;
  height: 10px;
  background-color: transparent;
  border-radius: 100%;
  border: 2px solid #000;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Box = styled.div`
  width: 100%;
  position: relative;
`;

export const LineWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    transform: rotate(270deg);
    bottom: -56px;
    top: auto;
    left: 49px;
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
  
  :hover {
    animation: pulse-blue 2s infinite;  
  }
  
  
  @keyframes pulse-blue {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(135, 144, 148, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(135, 144, 148, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(135, 144, 148, 0);
    }
  }
`;

export const Icon = styled.img`
  width: 20px;
  
  @media (max-width: 600px) {
    transform: rotate(90deg);
  }
`;

export const Tooltip = styled.div<TooltipProps>`
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
  left: -64px;
  line-height: 1.2;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  ${({ isOpen }) => isOpen && `animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`};

  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @media (max-width: 600px) {
    top: 38px;
    left: -205px;
    bottom: auto;
    font-size: 14px;
    width: 172px;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  border-bottom: 1px solid #fff;
  margin-bottom: 2px;
  font-size: 12px;
`;

export const TooltipWrapper = styled.div`
  position: relative;
  font-size: 10px;
`;
