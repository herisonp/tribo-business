import { Header } from '@/components/Header'
import StyledComponentsRegistry from '../../lib/registry'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Tribo Business',
	description: 'Encontre um empreendedor mula perto de você.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<Header />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
