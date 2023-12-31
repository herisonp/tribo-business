'use client'
import styled from 'styled-components'
import { ControlInputWithIcon } from '@/components/Form/InputWithIcon/style'

export const Hero = styled.div`
	width: 100%;
	height: fit-content;
	padding-block: 10rem 7rem;
	background-color: var(--gray-950);
	background-image: url('/bg-hero.svg');
	background-repeat: no-repeat;
	background-size: 100% contain;
	background-position: center;

	.container {
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

	h2 {
		font-size: 1.125rem;
		color: var(--yellow-600);
		text-transform: uppercase;
	}

	h1 {
		font-size: 3rem;
		font-weight: 400;
	}

	p {
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
	max-width: 800px;

	${ControlInputWithIcon} {
		flex: 1;
	}

	@media (max-width: 640px) {
		flex-wrap: nowrap;
		flex-direction: column;
		> * {
			width: 100%;
		}
	}
`
export const ContentRoot = styled.section`
	background-color: var(--gray-950);
	padding-block: 4rem;

	> header {
		width: 100%;
		display: flex;
		flex: 1;
		align-items: center;
		margin-bottom: 2.5rem;
	}

	header h2 {
		font-size: 1.25rem;
		font-weight: 700;
		flex: 1;
	}

	header div.filter {
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

	transition: all 0.2s ease-in-out;

	&:hover {
		border: 1px solid var(--blue-700);
	}
`
export const Cards = styled.div`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	/* @media (min-width: 640px) {
    &:has(${CardRoot}:hover) ${CardRoot}:not(:hover){
      scale: 0.9;
      filter: brightness(.7) blur(2px);
    }
  } */
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

	img {
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
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	color: var(--yellow-800);
	p {
		text-align: left;
		color: var(--white);
	}
`

// botão flutuante para habilitar mapa
export const ButtonMap = styled.button`
	display: block;
	position: fixed;
	z-index: 999;
	bottom: 4rem;
	left: 50%;
	width: fit-content;
	transform: translate(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1rem 2rem;

	border-radius: 32px;
	background-color: var(--white);
	color: var(--blue-700);
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background-color: var(--blue-700);
		color: var(--white);
	}
`
