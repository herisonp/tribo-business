'use client'
import styled from "styled-components"

export const Button = styled.button`
  padding-inline: 2rem;
  padding-block: .75rem;
  color: var(--white);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  background-color: ${(props) => props.hasBackground ? 'var(--blue-700)' : 'transparent'} ;

  &:disabled{
    cursor: not-allowed;
    opacity: .7;
  }

  &:hover{
    filter: brightness(1.3);
    background-color: var(--white);
    color: var(--blue-700);
  }
`
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
export const Hero = styled.div`
  width: 100%;
  height: fit-content;
  padding-block: 10rem 7rem;
  background-color: var(--gray-950);
  background-image: url('/bg-hero.svg');
  background-repeat: no-repeat;
  background-size: 110% cover;
  background-position: center;

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
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
export const FormSearch = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  max-width: 50rem;

  @media (max-width: 640px) {
    button{
      width: 100%;
    }
  }
`
export const Input = styled.input`
  background-color: var(--slate-950);
  border: 1px solid var(--slate-700);
  padding: .75rem .75rem;
  color: var(--white);
  border-radius: 4px;
  outline: none;
  font-size: .875rem;
  flex: 1;

  &::placeholder{
    color: var(--slate-400);
  }
  &:focus{
    border: 1px solid var(--blue-700);
  }

  button{
    flex: 1;
  }  
`
export const ContentRoot = styled.section`
  background-color: var(--gray-950);
  padding-block: 4rem;

  > header{
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    margin-bottom: 2.5rem;
  }

  header h3{
    font-size: 1.25rem;
    font-weight: 700;
    flex: 1;
  }

  header div.filter{
    display: flex;
    gap: 1.5rem;
  }
`
export const CardRoot = styled.div`
  padding: 2.5rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background-color: var(--slate-900);
  border: 1px solid var(--slate-800);
  border-radius: 16px;

  transition: all .2s ease-in-out;
`
export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    &:has(${CardRoot}:hover) ${CardRoot}:not(:hover){
      scale: 0.9;
      filter: brightness(.7) blur(2px);
    }
  }
`
export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const CardHeaderCategorie = styled.span`
  font-size: 0.75rem;
  background-color: var(--yellow-800);
  padding: 0.25rem 0.38rem;
  border-radius: 999px;
`
export const CardHeaderNickTwitch = styled.a`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--blue-300);
`
export const CardAvatar = styled.div`
  border-radius: 9999px;
  overflow: hidden;
  width: 6rem;
  height: 6rem;

  img{
    width: 100%;
    object-fit: cover;
  }
`
export const CardText = styled.div`
  text-align: center;
`
export const CardTextTitle = styled.h3`
  color: var(--blue-300);
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`
export const CardTextDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
`
export const CardAdress = styled.div`
  text-align: center;
  font-size: 0.75rem;
`
export const CardButton = styled(Button)`
  width: 100%;
  margin-top: 2rem;
`
export const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid var(--slate-700);
  padding-block: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--gray-950);
  color: var(--blue-300);
  font-size: 0.75rem;
  text-align: center;
`



export const EmojiStyle = styled.span`
  
  vertical-align: baseline;
  margin: 0 .5rem;

  img{
    display: inline;
    font-size: 100%;
    vertical-align: baseline;
  }
`