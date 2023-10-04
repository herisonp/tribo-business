'use client'
import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const SelectTrigger = styled(Select.SelectTrigger)`
	all: unset;
	background-color: transparent;
	border: 1px solid var(--slate-700);
	color: var(--blue-300);
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	padding: 0.3rem 1rem;
	font-size: 0.8rem;
	line-height: 1;
	height: 2.2rem;
	width: 11.5rem;
	gap: 0.3rem;

	&:focus {
		border: 1px solid var(--blue-700);
	}
	&[data-placeholder] {
		color: var(--slate-400);
	}
`

export const SelectIcon = styled(Select.Icon)``

export const SelectContent = styled(Select.Content)`
	background-color: var(--slate-950-80);
	border: 1px solid var(--slate-700);
	backdrop-filter: blur(4px);
	overflow: hidden;
	border-radius: 6px;
	box-shadow:
		0px 10px 38px -10px rgba(22, 23, 24, 0.35),
		0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const SelectViewport = styled(Select.Viewport)`
	padding: 5px;
`

export const StyledItem = styled(Select.Item)`
	font-size: 0.8rem;
	line-height: 1;
	color: var(--violet-11);
	border-radius: 3px;
	display: flex;
	align-items: center;
	height: 1.5rem;
	padding: 1.2rem 2.2rem 1.2rem 1.5rem;
	position: relative;
	user-select: none;
	&[data-highlighted] {
		outline: none;
		background-color: var(--white);
		color: var(--slate-700);
	}
`

export const SelectLabel = styled(Select.Label)`
	padding: 0 25px;
	font-size: 12px;
	line-height: 25px;
	color: var(--slate-700);
`

export const SelectSeparator = styled(Select.Separator)`
	height: 1px;
	background-color: var(--white);
	margin: 5px;
`

export const StyledItemIndicator = styled(Select.ItemIndicator)`
	position: absolute;
	left: 0;
	width: 25px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`

export const SelectScrollUpButton = styled(Select.ScrollUpButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	background-color: transparent;
	color: var(--white);
	cursor: default;
`

export const SelectScrollDownButton = styled(Select.ScrollDownButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	background-color: transparent;
	color: var(--white);
	cursor: default;
`
