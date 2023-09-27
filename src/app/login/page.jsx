import Image from 'next/image'
import { Button } from '../../../components/Button'
import * as S from '../../../style/login'

import GaulesTwo from '../../../public/emojis/2.gif'

export default function Login() {
	return (
		<>
			<S.LoginMain>
				<S.LoginContainer className="container">
					<S.FormBox>
						<S.FormTitle>
							<span>
								<Image
									src={GaulesTwo}
									alt="Emoji do Gaules dançando a cabecinha"
									width={28}
									height={28}
								/>{' '}
							</span>
							Bem-vindo novamente
						</S.FormTitle>
						<S.FormDescription>
							Digite seus dados de login para acessar a plataforma da{' '}
							<strong>Tribo Business</strong>
						</S.FormDescription>
						<S.FormLogin>
							<S.FormInputGroup>
								<S.FormInputLabel htmlFor="name">E-mail</S.FormInputLabel>
								<S.FormInput
									id="name"
									type="email"
									placeholder="Digite seu email"
								/>
							</S.FormInputGroup>

							<S.FormInputGroup>
								<S.FormInputLabel htmlFor="senha">Senha</S.FormInputLabel>
								<S.FormInput
									id="senha"
									type="password"
									placeholder="Digite sua senha"
								/>
							</S.FormInputGroup>

							<Button $hasBackground $fullWidth>
								Entrar
							</Button>
						</S.FormLogin>
					</S.FormBox>
				</S.LoginContainer>
			</S.LoginMain>
		</>
	)
}
