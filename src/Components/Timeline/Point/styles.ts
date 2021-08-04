import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 10px;
`;

export const Ring = styled.div`
  width: 9px;
  height: 9px;
  background-color: transparent;
  border-radius: 100%;
  border: 2px solid black;
  position: relative;
  
  :hover {
    background-color: rgba(0,0,0,0.3);
  }
`;

export const LineWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:before {
    position: relative;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 70px;
  background-color: black;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const Icon = styled.img`
  width: 20px;
`;