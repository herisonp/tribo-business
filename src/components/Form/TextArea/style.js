'use client'
import styled from 'styled-components'

export const TextArea = styled.textarea`
	width: ${(props) => (props.$fullWidth ? '100%' : '')};
	padding: 0.75rem 0.88rem;
	background: transparent;
	border: 1px solid var(--slate-700);
	color: var(--white);
	font-size: 1rem;
	font-weight: 400;
	border-radius: 4px;
	transition: all 0.2s ease-in;

	&::placeholder {
		color: var(--slate-400);
	}
	&:focus {
		border: 1px solid var(--blue-700);
	}
`
