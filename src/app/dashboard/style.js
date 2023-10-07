'use client'
import { ButtonStyle } from '@/components/Button/style'
import styled from 'styled-components'

export const DasboardMain = styled.main`
	width: 100%;
	min-height: 100vh;
	padding: 6rem 1rem;
	background-image: url('./bg-hero.svg');
	background-size: 180% 180%;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`
export const DashboardContainer = styled.section`
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const DashboardHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const DashboardAvatar = styled.div`
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
export const DashboardTitle = styled.h1`
	font-size: 1.5rem;
	color: var(--blue-300);
	margin-bottom: 0.5rem;
`
export const DashboardInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	font-size: 0.75rem;
`
export const DashboardCategorie = styled.span`
	padding: 0.2rem 0.5rem;
	background-color: var(--yellow-800);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 32px;
`
export const DashboardNickTwitch = styled.a`
	color: var(--blue-300);
	font-weight: 700;
`
export const DashboardDescription = styled.p`
	text-align: center;
	font-size: 1rem;
	margin-top: 1rem;
`
export const DashboardAddress = styled.div`
	font-weight: 700;
	margin-top: 1rem;
	text-align: center;
	font-size: 0.75rem;
	color: var(--yellow-600);
`

export const AddLinkButton = styled(ButtonStyle)`
	margin-top: 2rem;
`
export const AddLinkIcon = styled.div`
	margin-right: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LinkList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	margin-top: 3rem;
	list-style: none;
`
export const LinkListItem = styled.li`
	padding: 2rem;
	background-color: var(--slate-950-70);
	border: 1px solid var(--slate-700);
	border-radius: 16px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	transition: all 0.2s ease;

	&:hover {
		border-color: var(--blue-700);
	}

	@media (max-width: 640px) {
		padding: 1rem;
	}
`
export const LinkListInputs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`
export const LinkListTitle = styled.div`
	* {
		font-size: 1rem;
		font-weight: 700;
	}
`
export const LinkListURL = styled.div`
	* {
		font-size: 0.75rem;
		font-weight: 400;
	}
`

export const LinkListControls = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;

	> * {
		cursor: pointer;
	}
`
