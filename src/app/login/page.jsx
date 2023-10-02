import { Button } from '../../components/Button'
import * as S from '../../style/login'

import GaulesTwo from '../../../public/emojis/2.gif'
import GaulesSeven from '../../../public/emojis/7.gif'
import { Emoji } from '@/components/Emoji'
import { Box } from '@/components/Box'
import { BoxTitle } from '@/components/Box/BoxTitle'
import { BoxDescription } from '@/components/Box/BoxDescription'
import Link from 'next/link'
import { FormRoot } from '@/components/Form/FormRoot'
import { FormLabel } from '@/components/Form/FormLabel'
import { Input } from '@/components/Form/Input'

export default function Login() {
	return (
		<>
			<S.LoginMain>
				<S.LoginContainer className="container">
					<Box>
						<BoxTitle>
							Bem-vindo novamente
							<Emoji
								src={GaulesTwo}
								alt="Emoji do Gaules dançando a cabecinha"
								size={28}
							/>
						</BoxTitle>
						<BoxDescription>
							Digite seus dados de login para acessar a plataforma da{' '}
							<strong>Tribo Business</strong>
						</BoxDescription>

						<FormRoot>
							<FormLabel>
								E-mail
								<Input
									$fullWidth
									name="email"
									type="email"
									placeholder="Digite seu email"
								/>
							</FormLabel>

							<FormLabel>
								Senha
								<Input
									$fullWidth
									name="password"
									type="password"
									placeholder="Digite sua senha"
								/>
							</FormLabel>
							<Button $hasBackground $fullWidth>
								<Emoji src={GaulesSeven} size={24} />
								Entrar
							</Button>
						</FormRoot>

						<S.Register>
							Não tem uma conta?{' '}
							<Link href="./register">Cadastre-se agora.</Link>
						</S.Register>
					</Box>
				</S.LoginContainer>
			</S.LoginMain>
		</>
	)
}
