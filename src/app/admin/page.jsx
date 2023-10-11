'use client'
import { v4 as uuidv4 } from 'uuid'
import { Footer } from '@/components/Footer'
import * as S from './style'

import AvatarEmpresa from '../../../public/avatar.svg'
import Image from 'next/image'
import {
	CheckCircleIcon,
	PencilIcon,
	PlusIcon,
	TrashIcon,
} from '@heroicons/react/24/outline'
import LinkListInput from './components/LinkListInput'
import { useState } from 'react'
import { FormRoot } from '@/components/Form/FormRoot'
import { Switch } from '@/components/Form/Switch'
import NewLinkList from './components/NewLinkList'
import Link from 'next/link'

const LinksIniciais = [
	{
		id: '488ef681-3831-442b-8a75-b947981de125',
		title: 'Link inicial 1',
		url: 'https://instagram.com/herisonps',
		status: true,
	},
	{
		id: '5f282d36-75e8-4011-a602-b8bdbf503fa7',
		title: 'Link inicial 2',
		url: 'https://google.com',
		status: false,
	},
]

export default function Admin() {
	const [newLink, setNewLink] = useState(false)
	const [links, setLinks] = useState(LinksIniciais)
	const [title, setTitle] = useState('')
	const [url, setUrl] = useState('')

	function handleAddLink() {
		setNewLink(!newLink)
	}

	function handleSubmitNewLink(evt) {
		evt.preventDefault()
		const newId = uuidv4()
		const data = {
			id: newId,
			title: title,
			url: url,
			status: true,
		}

		setLinks([data, ...links])

		setNewLink(false)
		setUrl('')
		setTitle('')
	}

	function handleDeleteLink(id, evt) {
		evt.preventDefault()
		let newsLinks = links.filter((link) => {
			if (link.id !== id) {
				return link
			}
		})
		setLinks(newsLinks)
	}

	return (
		<>
			<S.AdminMain>
				<S.AdminContainer>
					<S.AdminHeader>
						<S.AdminAvatar>
							<Image
								className="CardAvatarImage"
								width={100}
								height={100}
								src={AvatarEmpresa}
								alt="Avatar da empresa"
							/>
							<S.ButtonAccount>
								<Link href="admin/account/">
									<PencilIcon width={24} />
								</Link>
							</S.ButtonAccount>
						</S.AdminAvatar>
						<S.AdminTitle>CS Brasileiro</S.AdminTitle>
						<S.AdminInfo>
							<S.AdminCategorie>delivery</S.AdminCategorie>
							<S.AdminNickTwitch href="#">csbr</S.AdminNickTwitch>
						</S.AdminInfo>
						<S.AdminDescription>
							Nosso delivery é especializado em qualquer coisa que você queira
							comer. E nossa maior qualidade é ENTREGAR, afinal de contas, somos
							o CS Brasileiro.
						</S.AdminDescription>

						<S.AdminAddress>
							Liquid, 5x1, Estamos na semi final - Inferno - B
						</S.AdminAddress>
					</S.AdminHeader>

					<S.AddLinkButton $hasBackground onClick={handleAddLink}>
						<S.AddLinkIcon>
							<PlusIcon height={24} />
						</S.AddLinkIcon>
						<span>Adicionar link</span>
					</S.AddLinkButton>

					<S.LinkList>
						{newLink && (
							<S.LinkListItem>
								<FormRoot onSubmit={handleSubmitNewLink}>
									<S.LinkListInputs>
										<S.LinkListTitle>
											<NewLinkList
												enableEdit={true}
												placeholder={'Digite o título do link'}
												id="title"
												value={title}
												onChange={(input) => {
													setTitle(input.target.value)
												}}
											/>
										</S.LinkListTitle>
										<S.LinkListURL>
											<NewLinkList
												enableEdit={true}
												placeholder={'cole seu link aqui'}
												id="url"
												value={url}
												onChange={(input) => {
													setUrl(input.target.value)
												}}
											/>
										</S.LinkListURL>
									</S.LinkListInputs>

									<S.LinkListControls as="button" type="submit">
										<CheckCircleIcon width={40} color="#1D4ED8" />
									</S.LinkListControls>
								</FormRoot>
							</S.LinkListItem>
						)}

						{links &&
							links.map((link) => (
								<S.LinkListItem key={link.id}>
									<S.LinkListInputs>
										<S.LinkListTitle>
											<LinkListInput
												id={`title-${link.id}`}
												value={link.title}
											/>
										</S.LinkListTitle>
										<S.LinkListURL>
											<LinkListInput id={`url-${link.id}`} value={link.url} />
										</S.LinkListURL>
									</S.LinkListInputs>
									<S.LinkListControls>
										<Switch
											name={`status-${link.id}`}
											isChecked={link.status}
										/>
										<TrashIcon
											onClick={(evt) => {
												handleDeleteLink(link.id, evt)
											}}
											width={20}
											color="#EF4444"
										/>
									</S.LinkListControls>
								</S.LinkListItem>
							))}
					</S.LinkList>
				</S.AdminContainer>
			</S.AdminMain>
			<Footer />
		</>
	)
}
