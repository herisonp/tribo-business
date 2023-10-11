import { Button } from '../Button'
import Link from 'next/link'

import * as S from './style'

import Image from 'next/image'
import Logo from '../../../public/logo-tribo-business.svg'

export function Header() {
	const isLoggedIn = true
	return (
		<S.Header>
			<div className="container">
				<Link href="/">
					<Image className="logo" src={Logo} width={166} height={27.8} alt="" />
				</Link>

				<nav>
					{!isLoggedIn ? (
						<>
							<Link href="/register">
								<Button as="div">Criar conta</Button>
							</Link>
							<Link className="link-mobile" href="/login">
								<Button className="button-mobile" as="div" $hasBackground>
									Entrar
								</Button>
							</Link>
						</>
					) : (
						<>
							<Link href="/csbr">
								<Button as="div">Ver perfil</Button>
							</Link>
							<Link className="link-mobile" href="/">
								<Button as="div" $hasBackground>
									Sair
								</Button>
							</Link>
						</>
					)}
				</nav>
			</div>
		</S.Header>
	)
}
