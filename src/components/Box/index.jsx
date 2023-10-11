import * as S from './style'

export function Box(props) {
	return <S.Box {...props}>{props.children}</S.Box>
}
