'use client'
import styled from 'styled-components'

export const Header = styled.header`
	width: 100%;
	border-bottom: 1px #334155 solid;
	background-color: rgba(255, 255, 255, 0.02);
	backdrop-filter: blur(4px);
	position: fixed;
	left: 0;
	top: 0;
	padding: 1rem 0;
	z-index: 999;
	display: flex;
	align-items: center;

	.container {
		display: flex;
		align-items: center;
	}

	.container .logo {
		width: 8rem;
	}

	.container nav {
		display: flex;
		flex: 1;
		justify-content: end;
		gap: 0.75rem;
	}

	@media (max-width: 640px) {
		// mobile
		.container nav a {
			display: none;
		}
		.container nav a.link-mobile {
			display: block;
		}
	}
`
