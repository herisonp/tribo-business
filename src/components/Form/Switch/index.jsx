import { useState } from 'react'
import * as S from './style'

export function Switch({ name, isChecked = true, ...props }) {
	const [checked, setChecked] = useState(isChecked)

	function hadleOnCheckedChange() {
		setChecked(!checked)
	}

	return (
		<>
			<S.SwitchRoot
				checked={checked}
				onCheckedChange={hadleOnCheckedChange}
				{...props}
				name={name}
			>
				<S.SwitchThumb />
			</S.SwitchRoot>
		</>
	)
}
