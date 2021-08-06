import styled from 'styled-components';
import { IconWrapper, LineWrapper, Tooltip } from './Point/styles';

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 250px 30px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 30px 0;
    min-height: 1024px;
  }
`;

export const Date = styled.p`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 500;
  
  @media (max-width: 600px) {
    transform: rotate(90deg);
  }
`;

export const Box = styled.div`
  height: 30px;
  width: 80px;
  background-color: red;
  margin: auto 2px;
  transition: flex-grow 1s;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  flex-grow: 1;

  @media (max-width: 600px) {
    width: 30px;
    height: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    align-items: center;
    margin: 2px auto;
  }
  
  :hover {
    flex-grow: 2;
    }
  
  :nth-child(odd) {
    & > ${Date} {
      bottom: -30px;

      @media (max-width: 600px) {
        bottom: auto;
        left: 50px;
      }
    }

    & ${LineWrapper} {
      bottom: 8px;
      top: auto;
      flex-direction: column-reverse;
     
      @media (max-width: 600px) {
        bottom: -55px;
        top: auto;
        left: -130px;
      }
    }
  }
  
  :nth-child(even) {
    & > ${Date} {
      top: -30px;

      @media (max-width: 600px) {
        bottom: 42%;
        top: auto;
        right: 50px;
      }
    }

    & ${Tooltip} {
      top: 140px;
      bottom: auto;
      left: -64px;

      @media (max-width: 600px) {
        top: 38px;
        left: -86px;
      }
      
      ::after {
        bottom: 100%;
        top: auto;
      }
    }
  }
  
  :nth-child(6n - 5) {
    background-color: #5C30E7;
      & > ${Date} {
        color: #5C30E7;
      }
      & ${IconWrapper} {
        background-color: #5C30E7;
      }
  }
  
  :nth-child(6n - 4) {
    background-color: #922AF2;
    & > ${Date} {
      color: #922AF2;
    }
    & ${IconWrapper} {
      background-color: #922AF2;
    }
  }

  :nth-child(6n - 3) {
    background-color: #8E3EFF;
    & > ${Date} {
      color: #8E3EFF;
    }
    & ${IconWrapper} {
      background-color: #8E3EFF;
    }
  }
  
  :nth-child(6n - 2) {
    background-color: #FF0EF9;
    & > ${Date} {
      color: #FF0EF9;
    }
    & ${IconWrapper} {
      background-color: #FF0EF9;
    }
  }
  
  :nth-child(6n - 1) {
    background-color: #E121FD;
    & > ${Date} {
      color: #E121FD;
    }
    & ${IconWrapper} {
      background-color: #E121FD;
    }
  }
  
  :nth-child(6n - 0) {
    background-color: #B72BFE;
    & > ${Date} {
      color: #B72BFE;
    }
    & ${IconWrapper} {
      background-color: #B72BFE;
    }
  }
`;
