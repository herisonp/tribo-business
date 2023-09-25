'use client'
import styled from "styled-components"

export const ButtonStyle = styled.button`
  padding-inline: 2rem;
  padding-block: .75rem;
  color: var(--white);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  background-color: ${(props) => props.hasBackground ? 'var(--blue-700)' : 'transparent'} ;
  width: ${(props) => props.fullWidth ? '100%' : 'fit-content'};

  &:disabled{
    cursor: not-allowed;
    opacity: .7;
  }

  &:hover{
    background-color: var(--white);
    color: var(--blue-700);
    transition: all .2s ease-in;
  }
`