'use client'
import { Footer } from '@/components/Footer'
import * as S from './style'

import AvatarEmpresa from '../../../public/avatar.svg'
import Image from 'next/image'
import {
	CheckBadgeIcon,
	PlusIcon,
	TrashIcon,
} from '@heroicons/react/24/outline'
import LinkListInput from './components/LinkListInput'

export default function Dashboard() {
	return (
		<>
			<S.DasboardMain>
				<S.DashboardContainer>
					<S.DashboardHeader>
						<S.DashboardAvatar>
							<Image
								className="CardAvatarImage"
								width={100}
								height={100}
								src={AvatarEmpresa}
								alt="Avatar da empresa"
							/>
						</S.DashboardAvatar>
						<S.DashboardTitle>CS Brasileiro</S.DashboardTitle>
						<S.DashboardInfo>
							<S.DashboardCategorie>delivery</S.DashboardCategorie>
							<S.DashboardNickTwitch href="#">csbr</S.DashboardNickTwitch>
						</S.DashboardInfo>
						<S.DashboardDescription>
							Nosso delivery é especializado em qualquer coisa que você queira
							comer. E nossa maior qualidade é ENTREGAR, afinal de contas, somos
							o CS Brasileiro.
						</S.DashboardDescription>

						<S.DashboardAddress>
							Liquid, 5x1, Estamos na semi final - Inferno - B
						</S.DashboardAddress>
					</S.DashboardHeader>

					<S.AddLinkButton $hasBackground>
						<S.AddLinkIcon>
							<PlusIcon height={24} />
						</S.AddLinkIcon>
						Adicionar link
					</S.AddLinkButton>

					<S.LinkList>
						<S.LinkListItem>
							<S.LinkListInputs>
								<S.LinkListTitle>
									<LinkListInput value={'Link inicial 1'} />
								</S.LinkListTitle>
								<S.LinkListURL>
									<LinkListInput value={'http://instagram.com/herisonps'} />
								</S.LinkListURL>
							</S.LinkListInputs>
							<S.LinkListControls>
								<CheckBadgeIcon width={25} color="green" />
								<TrashIcon width={20} color="red" />
							</S.LinkListControls>
						</S.LinkListItem>

						<S.LinkListItem>
							<S.LinkListInputs>
								<S.LinkListTitle>
									<LinkListInput value={'Link inicial 2'} />
								</S.LinkListTitle>
								<S.LinkListURL>
									<LinkListInput value={'http://instagram.com/herisonps'} />
								</S.LinkListURL>
							</S.LinkListInputs>
							<S.LinkListControls>
								<CheckBadgeIcon width={25} color="green" />
								<TrashIcon width={20} color="red" />
							</S.LinkListControls>
						</S.LinkListItem>

						<S.LinkListItem>
							<S.LinkListInputs>
								<S.LinkListTitle>
									<LinkListInput value={'Link inicial 3'} />
								</S.LinkListTitle>
								<S.LinkListURL>
									<LinkListInput value={'http://instagram.com/herisonps'} />
								</S.LinkListURL>
							</S.LinkListInputs>
							<S.LinkListControls>
								<CheckBadgeIcon width={25} color="green" />
								<TrashIcon width={20} color="red" />
							</S.LinkListControls>
						</S.LinkListItem>
					</S.LinkList>
				</S.DashboardContainer>
			</S.DasboardMain>
			<Footer />
		</>
	)
}
