import * as S from './style'

import GaulesThree from '../../../public/emojis/3.gif'
import { Emoji } from '../Emoji'

export function Footer() {
	return (
		<S.Footer>
			<p>
				<Emoji src={GaulesThree} alt="" />
				<strong>A tribo ajuda a tribo.</strong> / Feito com 💜 pela mula
				herisonps
			</p>
		</S.Footer>
	)
}
