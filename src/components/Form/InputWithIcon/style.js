'use client'
import styled from 'styled-components'

export const ControlInputWithIcon = styled.div`
	width: ${(props) => (props.$fullWidth ? '100%' : '')};
	padding-inline: 0.88rem;
	background: var(--slate-950);
	border: 1px solid var(--slate-700);
	color: var(--white);
	font-size: 1rem;
	font-weight: 400;
	border-radius: 4px;
	transition: all 0.2s ease-in;
	/* flex: 1; */
	display: flex;
	align-items: center;
	color: var(--blue-700);

	input {
		border: none;
		outline: none;
		box-shadow: none;
		height: 100%;
		width: 100%;
		background-color: transparent;
		color: var(--white);
		padding: 0.75rem 0.88rem;
	}

	input::placeholder {
		color: var(--slate-400);
	}
	&:has(input:focus) {
		border: 1px solid var(--blue-700);
	}
`
