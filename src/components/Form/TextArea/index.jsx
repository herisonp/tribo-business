import * as S from './style'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export function TextArea({ name, type, placeholder, ...props }) {
	return (
		<S.TextArea
			{...props}
			className={inter.className}
			name={name}
			id={name}
			type={type}
			placeholder={placeholder}
		/>
	)
}
