'use client'
import Image from 'next/image'
import * as S from './style'

export function Emoji({ src, alt = '', size = 20 }) {
	return (
		<S.EmojiStyle>
			<Image src={src} width={size} height={size} alt={alt} />
		</S.EmojiStyle>
	)
}
