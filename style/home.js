'use client'
import styled from "styled-components";

export const Button = styled.button`
  padding-inline: 2rem;
  padding-block: .75rem;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:disabled{
    cursor: not-allowed;
    opacity: .7;
  }
`;

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px #334155 solid;
  background-color: rgba(255, 255, 255, .02);
  backdrop-filter: blur(4px);
  position: fixed;
  left: 0;
  top: 0;
  padding: 1rem;

  .container{
    display: flex;
    justify-items: center;
  }

  .container img{
    flex: 1;
  }

  .container nav{
    display: flex;
    gap: .75rem;
  }

  .container nav a{
    color: white;
  }
`;

export const ButtonMenu = styled(Button)`
  background-color: ${(props) => props.background || 'transparent'} ;
`

export const Hero = styled.div`
  width: 100%;
  height: fit-content;
  padding-block: 10rem;
  background-color: var(--gray-950);
  background-image: url('/bg-hero.svg');
  background-size: 120%;
  background-position: center;

  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    gap: 3rem;
    text-align: center;
  }
`
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 34rem;
  margin: 0 auto;

  h2{
    font-size: 1.125rem;
    color: var(--yellow-600);
    text-transform: uppercase;
  }

  h1{
    font-size: 3rem;
    font-weight: 400;
  }

  p{
    font-size: 1.125rem;
    font-weight: normal;
    color: var(--blue-300);
    margin: 0 auto;
    width: 80%;
  }
`