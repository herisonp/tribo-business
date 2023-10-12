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
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Switch } from '@/components/Form/Switch'

export default function Account() {
	return (
		<S.AccountMain>
			<S.AccountContainer>
				<Box $fullWidth>
					<S.AdminLinkBack>
						<Link href="/admin/">
							<ArrowLeftIcon width={20} />
							<span>voltar</span>
						</Link>
					</S.AdminLinkBack>

					<BoxTitle>Minha conta</BoxTitle>
					<BoxDescription>Edite suas informações</BoxDescription>

					<FormRoot>
						<S.AccountEditAvatar>
							<S.AccountAvatar>
								<Image src="/avatar.svg" width={80} height={80} />
							</S.AccountAvatar>
							<S.AccountFormLabel>
								Troque seu avatar:
								<Input type="file" />
							</S.AccountFormLabel>
						</S.AccountEditAvatar>
						<Input type="text" placeholder="Seu nome" />
						<Input type="email" placeholder="Seu email" />
						<Input type="text" placeholder="Seu nick da Twich" />
						<span>Informações da empresa:</span>
						<FormControl>
							<Input $fullWidth type="text" placeholder="Nome da empresa" />
							<FormSelect />
						</FormControl>
						<TextArea placeholder="Descrição da empresa" />
						<span>Endereço</span>
						<FormControl>
							<Input
								$fullWidth
								style={{ width: '70%' }}
								placeholder="Rua"
								type="text"
							/>
							<Input style={{ width: '30%' }} placeholder="Nº" type="number" />
						</FormControl>
						<FormControl>
							<Input $fullWidth placeholder="Complemento" type="text" />
							<Input $fullWidth placeholder="Bairro" type="text" />
							<Input $fullWidth placeholder="CEP" type="text" />
						</FormControl>
						<FormControl>
							<Input $fullWidth placeholder="Cidade" type="text" />
							<Input $fullWidth placeholder="Estado" type="text" />
						</FormControl>
						<FormLabel>
							<FormControl>
								<Switch name="isDigital" isChecked={false} />
								Minha empresa é digital e não se restringe a minha região.
							</FormControl>
						</FormLabel>
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
						<h3>Deseja excluir sua conta?</h3>
						<Button $hasBackground $background="var(--red-500)" $fullWidth>
							Excluir conta
						</Button>
						<p>Esta ação não é reversível.</p>
					</S.ButtonDeleteAccount>
				</Box>
			</S.AccountContainer>
		</S.AccountMain>
	)
}
