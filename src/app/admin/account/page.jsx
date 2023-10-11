import { Button } from '@/components/Button'
import * as S from './style'
import { Box } from '@/components/Box'
import { BoxTitle } from '@/components/Box/BoxTitle'
import { BoxDescription } from '@/components/Box/BoxDescription'
import { FormRoot } from '@/components/Form/FormRoot'
import { Input } from '@/components/Form/Input'
import { FormControl } from '@/components/Form/FormControl'
import Image from 'next/image'
import { FormLabel } from '@/components/Form/FormLabel'
import { FormSelect } from '@/components/Form/FormSelect'
import { TextArea } from '@/components/Form/TextArea'

export default function Account() {
	return (
		<S.AccountMain>
			<section className="container">
				<Box $fullWidth>
					<BoxTitle>Minha conta</BoxTitle>
					<BoxDescription>Edite suas informações</BoxDescription>

					<FormRoot>
						<FormControl>
							<Image src="/avatar.svg" width={80} height={80} />
							<input type="file" />
						</FormControl>
						<Input type="text" placeholder="Seu nome" />
						<Input type="email" placeholder="Seu email" />
						<Input type="text" placeholder="Seu nick da Twich" />
						<span>Informações da empresa:</span>
						<Input type="text" placeholder="Nome da empresa" />
						<TextArea placeholder="Descrição da empresa" />
						<FormSelect />
						<Button type="submit" $hasBackground $fullWidth>
							Salvar alterações
						</Button>
					</FormRoot>
					<S.AdminFormRoot>
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
						<Button type="submit" $hasBackground $fullWidth>
							Alterar usuário
						</Button>
					</S.AdminFormRoot>

					<S.AdminFormRoot>
						<h3>Altere sua senha:</h3>
						<Input type="password" placeholder="Nova senha" />
						<Input type="password" placeholder="Confirme a nova senha" />
						<Button type="submit" $hasBackground $fullWidth>
							Alterar senha
						</Button>
					</S.AdminFormRoot>
					<S.ButtonDeleteAccount>
						<Button $hasBackground $background="var(--red-500)" $fullWidth>
							Excluir conta
						</Button>
						<p>Esta ação não é reversível.</p>
					</S.ButtonDeleteAccount>
				</Box>
			</section>
		</S.AccountMain>
	)
}
