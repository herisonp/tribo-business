import { Button } from '../Button'
import Link from 'next/link'

import * as S from './style'

import Image from 'next/image'
import Logo from '../../../public/logo-tribo-business.svg'

export function Header() {
	return (
		<S.Header>
			<div className="container">
				<Link href="/">
					<Image
						className="logo"
						src={Logo}
						width={180}
						height={'auto'}
						alt=""
					/>
				</Link>

				<nav>
					<Link href="/register">
						<Button as="div">Criar conta</Button>
					</Link>
					<Link href="/login">
						<Button as="div" $hasBackground>
							Entrar
						</Button>
					</Link>
				</nav>
			</div>
		</S.Header>
	)
}
