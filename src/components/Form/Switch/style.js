'use client'
import styled from 'styled-components'
import * as Switch from '@radix-ui/react-switch'

export const SwitchRoot = styled(Switch.Root)`
	flex-shrink: 0;
	width: 42px;
	height: 25px;
	background-color: var(--red-500);
	border-radius: 9999px;
	position: relative;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	-webkit-tap-highlight-color: var(--blue-300);

	&:focus {
		box-shadow: 0 0 0 2px var(--blue-300);
	}
	&[data-state='checked'] {
		background-color: var(--blue-700);
	}
`
export const SwitchThumb = styled(Switch.Thumb)`
	display: block;
	width: 21px;
	height: 21px;
	background-color: white;
	border-radius: 9999px;
	box-shadow: 0 2px 2px var(--slate-700-10);
	transition: transform 100ms;
	transform: translateX(2px);
	will-change: transform;

	&[data-state='checked'] {
		transform: translateX(19px);
	}
`
