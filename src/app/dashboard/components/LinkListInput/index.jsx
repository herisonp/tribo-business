'use client'

import { PencilIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import * as S from './style'

export default function LinkListInput({ value, ...props }) {
	const [input, setInput] = useState(value)
	const [edit, setEdit] = useState(false)

	function handleEdit() {
		if (edit) {
			setEdit(false)
		} else {
			setEdit(true)
		}
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

			<S.ButtonEdit onClick={() => handleEdit()}>
				<PencilIcon width={15} />
			</S.ButtonEdit>
		</S.ControlEdit>
	)
}
