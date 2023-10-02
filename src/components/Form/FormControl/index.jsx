import * as S from './style'

export function FormControl({ children, ...props }) {
	return <S.FormControl {...props}>{children}</S.FormControl>
}
