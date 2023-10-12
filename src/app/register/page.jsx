import { Box } from '@/components/Box'
import * as S from './style'
import { BoxTitle } from '@/components/Box/BoxTitle'
import { Emoji } from '@/components/Emoji'

import GaulesTwo from '../../../public/emojis/2.gif'
import GaulesSeven from '../../../public/emojis/7.gif'
import { BoxDescription } from '@/components/Box/BoxDescription'
import { FormRoot } from '@/components/Form/FormRoot'
import { FormLabel } from '@/components/Form/FormLabel'
import { Input } from '@/components/Form/Input'
import { Button } from '@/components/Button'
import { FormControl } from '@/components/Form/FormControl'
import Link from 'next/link'

export const metadata = {
	title: 'Cadastre-se | Tribo Business',
	description: 'Faça seu cadastro na Tribo Business',
}

export default function Register() {
	return (
		<>
			<S.RegisterMain>
				<S.RegisterContainer className="container">
					<Box>
						<BoxTitle>
							Faça aqui seu cadastro
							<Emoji
								src={GaulesTwo}
								alt="Emoji do Gaules dançando a cabecinha"
								size={28}
							/>
						</BoxTitle>
						<BoxDescription>
							Digite seus dados de cadastro para acessar a plataforma da{' '}
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
								Nome de usuário
								<FormControl>
									<span>tribobusiness.com/</span>
									<Input
										$fullWidth
										name="nick"
										type="text"
										placeholder="Usuário"
									/>
								</FormControl>
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
							<FormLabel>
								Confirme sua senha
								<Input
									$fullWidth
									name="password"
									type="password"
									placeholder="Confirme sua senha"
								/>
							</FormLabel>

							<Link href="/admin/account">
								<Button $hasBackground $fullWidth>
									<Emoji src={GaulesSeven} size={24} />
									Cadastrar
								</Button>
							</Link>
						</FormRoot>
						<S.HaveAccount>
							Já tem uma conta?{' '}
							<Link href="./login">Faça seu login agora.</Link>
						</S.HaveAccount>
					</Box>
				</S.RegisterContainer>
			</S.RegisterMain>
		</>
	)
}
