'use client'
import { FormRoot } from '@/components/Form/FormRoot'
import styled from 'styled-components'

export const AccountMain = styled.main`
	width: 100%;
	min-height: 100vh;
	padding-block: 6rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-image: url('/bg-hero.svg');
	background-size: 180% 180%;
	background-position: center;
`
export const AdminFormRoot = styled(FormRoot)`
	padding-top: 2rem;
	margin-top: 2rem;
	border-top: 1px solid var(--slate-700-10);
`
export const ButtonDeleteAccount = styled(AdminFormRoot)`
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		font-weight: regular;
		opacity: 0.4;
	}
`
