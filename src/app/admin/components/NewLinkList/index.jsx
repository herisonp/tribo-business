'use client'

import { PencilIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import * as S from './style'

export default function NewLinkList({
	value = '',
	enableEdit = false,
	id,
	...props
}) {
	const [edit, setEdit] = useState(enableEdit)

	function handleEdit() {
		const isNotInputEmpty = value
		isNotInputEmpty ? setEdit(!edit) : setEdit(true)
	}

	return (
		<S.ControlEdit>
			{edit ? (
				<S.Label>
					<S.Input
						id={id}
						name={id}
						value={value}
						{...props}
						disabled={edit ? false : true}
					/>
				</S.Label>
			) : (
				<S.Text>{value}</S.Text>
			)}

			<S.ButtonEdit type="button" onClick={handleEdit}>
				<PencilIcon width={15} />
			</S.ButtonEdit>
		</S.ControlEdit>
	)
}
