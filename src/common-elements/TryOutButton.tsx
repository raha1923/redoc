import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

type ButtonProps = {
  active: boolean;
  onClick: () => void;
};

const Button = styled.button<ButtonProps>`
  transform: rotate(270deg);
  position: absolute;
  top: -20px;
  padding: 10px 10px 8px 11px;
  border: none;
  background: #7147e8;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.929em;
  outline: none;
  right: ${props => (props.active ? `-80px` : `-54px`)};
`;

type Props = {
  checked: boolean;
  onClick: () => void;
};

const TryOutButton = ({ checked, onClick }: Props) => {
  return (
    <Container>
      <Button active={checked} onClick={onClick}>
        {checked ? 'SAMPLE DATA' : 'TRY IT'}
      </Button>
    </Container>
  );
};

export default TryOutButton;
