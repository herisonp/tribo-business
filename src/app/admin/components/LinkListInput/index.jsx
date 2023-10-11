'use client'

import { PencilIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import * as S from './style'

export default function LinkListInput({
	value = '',
	enableEdit = false,
	...props
}) {
	const [edit, setEdit] = useState(enableEdit)
	const [input, setInput] = useState(value)

	function handleEdit() {
		const isNotInputEmpty = input
		isNotInputEmpty ? setEdit(!edit) : setEdit(true)
	}

	return (
		<S.ControlEdit>
			{edit ? (
				<S.Label>
					<S.Input
						id="teste"
						value={input}
						onChange={(input) => {
							setInput(input.target.value)
						}}
						{...props}
						disabled={edit ? false : true}
					/>
				</S.Label>
			) : (
				<S.Text>{input}</S.Text>
			)}

			<S.ButtonEdit as="a" onClick={handleEdit}>
				<PencilIcon width={15} />
			</S.ButtonEdit>
		</S.ControlEdit>
	)
}
