import * as S from './style'

export function InputWithIcon({
	name,
	type,
	placeholder,
	iconLeft = '',
	iconRight = '',
	...props
}) {
	return (
		<S.ControlInputWithIcon>
			{iconLeft}
			<input
				{...props}
				name={name}
				id={name}
				type={type}
				placeholder={placeholder}
			/>
			{iconRight}
		</S.ControlInputWithIcon>
	)
}
