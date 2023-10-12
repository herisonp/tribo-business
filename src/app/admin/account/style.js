'use client'
import { FormLabel } from '@/components/Form/FormLabel'
import { FormRoot } from '@/components/Form/FormRoot'
import styled from 'styled-components'

export const AccountMain = styled.main`
	width: 100%;
	min-height: 100vh;
	padding: 6rem 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-image: url('/bg-hero.svg');
	background-size: 180% 180%;
	background-position: center;
`
export const AccountContainer = styled.section`
	width: 100%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const AdminLinkBack = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	a {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 0.4rem;
		font-size: 1rem;
		color: var(--blue-700);
	}
`

export const AccountEditAvatar = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`

export const AccountAvatar = styled.div`
	position: relative;
	width: 120px;
	height: 120px;
	flex-shrink: 0;

	img {
		width: 100%;
		height: 100%;
		border-radius: 999px;
		overflow: hidden;
		object-fit: fill;
	}
`

export const AccountFormLabel = styled(FormLabel)`
	flex-shrink: 1;
	width: 100%;
	input {
		width: 100%;
	}
`

export const AdminFormRoot = styled(FormRoot)`
	padding-top: 2rem;
	margin-top: 2rem;
	border-top: 1px solid var(--slate-700-10);
`
export const ButtonDeleteAccount = styled(AdminFormRoot)`
	display: flex;
	justify-content: center;
	align-items: flex-start;

	p {
		font-weight: regular;
		opacity: 0.4;
		text-align: center;
		align-self: center;
	}
`
