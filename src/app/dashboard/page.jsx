import { Footer } from '@/components/Footer'
import * as S from './style'

import AvatarEmpresa from '../../../public/avatar.svg'
import Image from 'next/image'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline'

export const metadata = {
	title: 'Dashboard | Tribo Business',
	description: 'Configure as informações de sua empresa',
}

export default function Dashboard() {
	return (
		<>
			<S.DasboardMain>
				<S.ProfileContainer>
					<S.ProfileHeader>
						<S.ProfileAvatar>
							<Image
								className="CardAvatarImage"
								width={100}
								height={100}
								src={AvatarEmpresa}
								alt="Avatar da empresa"
							/>
						</S.ProfileAvatar>
						<S.ProfileTitle>CS Brasileiro</S.ProfileTitle>
						<S.ProfileInfo>
							<S.ProfileCategorie>delivery</S.ProfileCategorie>
							<S.ProfileNickTwitch href="#">csbr</S.ProfileNickTwitch>
						</S.ProfileInfo>
						<S.ProfileDescription>
							Nosso delivery é especializado em qualquer coisa que você queira
							comer. E nossa maior qualidade é ENTREGAR, afinal de contas, somos
							o CS Brasileiro.
						</S.ProfileDescription>

						<S.ProfileAddress>
							Liquid, 5x1, Estamos na semi final - Inferno - B
						</S.ProfileAddress>
					</S.ProfileHeader>

					<S.AddLinkButton $hasBackground>
						<S.AddLinkIcon>
							<PlusIcon height={24} />
						</S.AddLinkIcon>
						Adicionar link
					</S.AddLinkButton>

					<S.LinkList>
						<S.LinkListItem>
							<S.LinkListInputs>
								<S.LinkListInput>
									<S.LinkListTitle value="Instagram | @minhaempresa" />
									<S.LinkListEdit>
										<PencilIcon height={20} />
									</S.LinkListEdit>
								</S.LinkListInput>

								<S.LinkListInput>
									<S.LinkListURL value="http://instagram.com/minhaempresa" />
									<S.LinkListEdit>
										<PencilIcon height={20} />
									</S.LinkListEdit>
								</S.LinkListInput>
							</S.LinkListInputs>

							<S.LinkListControls>controles</S.LinkListControls>
						</S.LinkListItem>
					</S.LinkList>
				</S.ProfileContainer>
			</S.DasboardMain>
			<Footer />
		</>
	)
}
