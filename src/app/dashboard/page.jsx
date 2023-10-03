import { Footer } from '@/components/Footer'
import * as S from './style'

export const metadata = {
	title: 'Dashboard | Tribo Business',
	description: 'Configure as informações de sua empresa',
}

export default function Dashboard() {
	return (
		<>
			<S.DasboardMain>Dashboard</S.DasboardMain>
			<Footer />
		</>
	)
}
