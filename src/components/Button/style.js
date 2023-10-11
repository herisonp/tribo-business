'use client'
import styled from 'styled-components'

export const ButtonStyle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem 2rem;
	color: var(--white);
	border-radius: 4px;
	cursor: pointer;
	font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '400')};
	font-size: 1rem;
	background-color: ${(props) =>
		props.$hasBackground
			? props.$background
				? props.$background
				: 'var(--blue-700)'
			: 'transparent'};
	width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
	text-align: center;
	transition: all 0.1s ease-in;

	a {
		color: currentColor;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}

	&:hover {
		background-color: var(--white);
		color: var(--blue-700);
	}
`
