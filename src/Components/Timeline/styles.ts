import styled from 'styled-components';
import { IconWrapper, LineWrapper } from './Point/styles';

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 200px 30px;
  display: flex;
  justify-content: space-around;
`;

export const BoxWrapper = styled.div``;

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
  
  :hover {
    flex-grow: 2;
  }
  
  :nth-child(odd) {
    & > p {
      bottom: -30px;
    }

    & ${LineWrapper} {
      bottom: 5px;
      top: auto;
      flex-direction: column-reverse;
    }
  }
  
  :nth-child(even) {
    & > p {
      top: -30px;
    }
  }
  
  :nth-child(6n - 5) {
    background-color: #5C30E7;
      & > p {
        color: #5C30E7;
      }
      & ${IconWrapper} {
        background-color: #5C30E7;
      }
    
  }
  
  :nth-child(6n - 4) {
    background-color: #922AF2;
    & > p {
      color: #922AF2;
    }
    & ${IconWrapper} {
      background-color: #922AF2;
    }
  }

  :nth-child(6n - 3) {
    background-color: #8E3EFF;
    & > p {
      color: #8E3EFF;
    }
    & ${IconWrapper} {
      background-color: #8E3EFF;
    }
  }
  
  :nth-child(6n - 2) {
    background-color: #FF0EF9;
    & > p {
      color: #FF0EF9;
    }
    & ${IconWrapper} {
      background-color: #FF0EF9;
    }
  }
  :nth-child(6n - 1) {
    background-color: #E121FD;
    & > p {
      color: #E121FD;
    }
    & ${IconWrapper} {
      background-color: #E121FD;
    }
  }
  :nth-child(6n - 0) {
    background-color: #B72BFE;
    & > p {
      color: #B72BFE;
    }
    & ${IconWrapper} {
      background-color: #B72BFE;
    }
  }



`;

export const Date = styled.p`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 500;
`;
