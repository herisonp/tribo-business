'use client'
import styled from "styled-components"

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