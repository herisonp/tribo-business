'use client'
import styled from 'styled-components'

export const ProfileMain = styled.main`
	width: 100%;
	min-height: 100vh;
	padding: 6rem 1rem;
	background-image: url('./bg-hero.svg');
	background-size: 180% 180%;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ProfileContainer = styled.section`
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const ProfileHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ProfileAvatar = styled.div`
	width: 160px;
	height: 160px;
	border-radius: 9999px;
	overflow: hidden;
	margin-bottom: 2rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const ProfileTitle = styled.h1`
	font-size: 1.5rem;
	color: var(--blue-300);
	margin-bottom: 0.5rem;
`

export const ProfileInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	font-size: 0.75rem;
`

export const ProfileCategorie = styled.span`
	padding: 0.2rem 0.5rem;
	background-color: var(--yellow-800);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 32px;
`

export const ProfileNickTwitch = styled.a`
	color: var(--blue-300);
	font-weight: 700;
`

export const ProfileDescription = styled.p`
	text-align: center;
	font-size: 1rem;
	margin-top: 1rem;
`

export const ProfileAddress = styled.div`
	font-weight: 700;
	margin-top: 1rem;
	text-align: center;
	font-size: 0.75rem;
	color: var(--yellow-600);
`

export const ProfileLinks = styled.ul`
	width: 100%;
	height: fit-content;
	list-style: none;
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	li {
		width: 100%;
	}
`

export const ProfileLink = styled.a`
	display: block;
	width: 100%;
	padding-block: 1.5rem;
	font-size: 1.2rem;
	background-color: var(--slate-700-10);
	color: var(--white);
	text-align: center;
	border-radius: 16px;
	border: 1px solid var(--slate-700);
	transition: all 0.2s ease;

	&:hover {
		border: 1px solid var(--blue-300);
		background-color: var(--slate-700-30);
	}
`
