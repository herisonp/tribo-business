import { Footer } from '@/components/Footer'
import * as S from './style'
import Image from 'next/image'

import AvatarEmpresa from '../../../public/avatar.svg'

export default function Profile() {
	return (
		<>
			<S.ProfileMain>
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

					<S.ProfileLinks>
						<li>
							<S.ProfileLink
								href="https://instagram.com/herisonps"
								target="_blank"
								rel="noreferrer"
							>
								Instagram | @minhaempresa
							</S.ProfileLink>
						</li>
						<li>
							<S.ProfileLink
								href="https://instagram.com/herisonps"
								target="_blank"
								rel="noreferrer"
							>
								Instagram | @minhaempresa
							</S.ProfileLink>
						</li>
					</S.ProfileLinks>
				</S.ProfileContainer>
			</S.ProfileMain>
			<Footer />
		</>
	)
}
