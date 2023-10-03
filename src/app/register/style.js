'use client'
import styled from 'styled-components'

export const RegisterMain = styled.section`
	width: 100%;
	min-height: 100vh;
	padding: 3rem 0;
	background-image: url('./bg-hero.svg');
	background-size: 180% 180%;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const RegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const HaveAccount = styled.p`
	font-size: 1rem;
	text-align: center;

	a {
		color: var(--blue-300);
	}
`
