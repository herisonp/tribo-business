import * as S from './style'

export function Input({ name, type, placeholder, ...props }) {
	return (
		<S.Input
			{...props}
			name={name}
			id={name}
			type={type}
			placeholder={placeholder}
		/>
	)
}
