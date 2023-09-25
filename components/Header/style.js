'use client'
import styled from "styled-components"
import Link from "next/link"

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px #334155 solid;
  background-color: rgba(255, 255, 255, .02);
  backdrop-filter: blur(4px);
  position: fixed;
  left: 0;
  top: 0;
  padding: 1rem;
  z-index: 999;

  .container{
    display: flex;
    align-items: center;
  }

  .container .logo{
    width: 8rem;
  }

  .container nav{
    display: flex;
    flex: 1;
    justify-content: end;
    gap: .75rem;
  }

  @media (max-width: 640px) { // mobile
    .container nav{
      display: none;
    }
  }
`
export const ButtonHead = styled(Link)`
  padding: .75rem 1rem;
  background: ${(props) => props.hasBackground ? 'var(--blue-700)' : 'transparent'};
  color: var(--white);
  border-radius: 4px;
  font-weight: 400;
  font-size: 1rem;

  &:hover{
    background: var(--white);
    color: var(--blue-700);
    transition: all .2s ease-in;
  }
`