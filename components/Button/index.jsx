'use client'
import * as S from './style'

export function Button(props){
  return (
    <S.ButtonStyle {...props}>
      { props.children }
    </S.ButtonStyle>
  )
}