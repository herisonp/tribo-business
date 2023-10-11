'use client'
import styled from 'styled-components'

export const ControlEdit = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`
export const Label = styled.label``

export const Input = styled.input`
	background-color: var(--slate-700-10);
	color: var(--white);
	font-size: inherit;
	padding: 0.8rem;
	border-radius: 8px;
	border: 1px solid transparent;
	outline: none;
	width: 300px;

	@media (max-width: 640px) {
		width: 180px;
	}

	&:focus {
		border: 1px solid var(--blue-300);
	}

	&::placeholder {
		color: var(--slate-400);
	}
`
export const Text = styled.span`
	&:hover {
		text-decoration: underline;
	}
`

export const ButtonEdit = styled.button`
	background-color: var(--slate-700-10);
	color: var(--white);
	padding: 0.5rem;
	border-radius: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;

	&:hover {
		background-color: var(--slate-700-30);
	}
`
