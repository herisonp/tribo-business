'use client'
import { useEffect, useState } from 'react'
import * as S from './style'
import Link from 'next/link'
import { Emoji } from '@/components/Emoji'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'

import Image from 'next/image'
import AvatarEmpresa from '../../../public/avatar.svg'
import GaulesFive from '../../../public/emojis/5.gif'
import GaulesEleven from '../../../public/emojis/11.gif'

import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { InputWithIcon } from '@/components/Form/InputWithIcon'
import { Input } from '@/components/Form/Input'

const empresas = {
	nomeEmpresa: 'Nome da empresa',
	categoria: 'categoria',
	descricao:
		'Ai, aqui vai ter uma breve descrição. Nela, o empreendedor, tem que dizer com poucas palavras qual é o seu negócio',
	endereco: 'Rua do Abalo, 777, Vila Que Ota - Curitiba - PR',
	nicktwitch: 'nicktwitch',
}

export default function Home() {
	const [loopEmpresas, setLoopEmpresas] = useState([empresas])

	function criaUmLoopDeEmpresas() {
		for (let index = 0; index < 5; index++) {
			setLoopEmpresas((state) => [...state, empresas])
		}
	}

	useEffect(() => {
		criaUmLoopDeEmpresas()
	}, [])

	return (
		<>
			<S.Hero>
				<div className="container">
					<S.HeroContainer>
						<h2>
							<Emoji src={GaulesFive} alt="" size={22} />
							Do chat, para o chat
						</h2>
						<h1>
							Encontre um <strong>business</strong> ou divulgue o seu, chat.
						</h1>
						<p>
							Um lugar para uma mula que quer comprar para outra que quer
							vender.
							<Emoji src={GaulesEleven} alt="" size={22} />
						</p>
					</S.HeroContainer>

					<S.FormSearch>
						<InputWithIcon
							placeholder="Pesquise por nome"
							type="text"
							iconLeft={<MagnifyingGlassIcon height={24} />}
						/>
						<InputWithIcon
							placeholder="Pesquise uma cidade ou endereço"
							type="text"
							iconLeft={<MapPinIcon height={24} />}
						/>
						<Button type="submit" $hasBackground>
							Buscar agora
						</Button>
					</S.FormSearch>
				</div>
			</S.Hero>

			<S.ContentRoot>
				<header className="container">
					<h2>Os princiais negócios</h2>
					<div className="filter">
						<Input type="text" placeholder="Todas categorias" />
					</div>
				</header>

				<S.Cards className="container">
					{loopEmpresas.map((empresa, index) => (
						<S.CardRoot key={empresa.nomeEmpresa + index}>
							<S.CardHeader>
								<S.CardHeaderCategorie>
									{empresa.categoria}
								</S.CardHeaderCategorie>

								<S.CardHeaderNickTwitch href="#">
									{empresa.nicktwitch}
								</S.CardHeaderNickTwitch>
							</S.CardHeader>

							<S.CardAvatar>
								<Image
									className="CardAvatarImage"
									width={100}
									height={100}
									src={AvatarEmpresa}
									alt="Avatar da empresa"
								/>
							</S.CardAvatar>

							<S.CardText>
								<S.CardTextTitle>{empresa.nomeEmpresa}</S.CardTextTitle>
								<S.CardTextDescription>
									{empresa.descricao}
								</S.CardTextDescription>
							</S.CardText>

							<S.CardAdress>
								<MapPinIcon width={24} />
								<p>{empresa.endereco}</p>
							</S.CardAdress>

							<Link href="/csbr" style={{ width: '100%' }}>
								<Button as="div" $fullWidth $hasBackground>
									Ver empresa
								</Button>
							</Link>
						</S.CardRoot>
					))}
				</S.Cards>
			</S.ContentRoot>

			<Footer />
		</>
	)
}
