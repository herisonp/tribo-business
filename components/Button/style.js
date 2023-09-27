'use client'
import styled from 'styled-components'

export const ButtonStyle = styled.button`
  padding-inline: 2rem;
  padding-block: 0.75rem;
  color: var(--white);
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '400')};
  font-size: 1rem;
  background-color: ${(props) =>
		props.$hasBackground ? 'var(--blue-700)' : 'transparent'};
  width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
  text-align: center;

  a {
    color: currentColor;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:hover {
    background-color: var(--white);
    color: var(--blue-700);
    transition: all 0.2s ease-in;
  }
`
