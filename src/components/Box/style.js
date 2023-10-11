'use client'
import styled from 'styled-components'

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: ${(props) => (props.$fullWidth ? '100%' : '28rem')};
	height: fit-content;
	padding: 3.5rem 2.5rem;
	background: var(--slate-950);
	border: 1px solid var(--slate-700);
	border-radius: 16px;
	align-items: center;
	gap: 1rem;
`
