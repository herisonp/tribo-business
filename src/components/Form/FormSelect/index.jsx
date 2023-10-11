'use client'
import * as Select from '@radix-ui/react-select'
import * as S from './style'

import {
	ChevronDownIcon,
	ChevronUpIcon,
	CheckIcon,
} from '@heroicons/react/24/outline'

export function FormSelect() {
	return (
		<Select.Root>
			<S.SelectTrigger aria-label="Categorias">
				<Select.Value placeholder="Todas as categorias" />
				<S.SelectIcon asChild>
					<ChevronDownIcon width={20} />
				</S.SelectIcon>
			</S.SelectTrigger>
			<Select.Portal>
				<S.SelectContent>
					<S.SelectScrollUpButton asChild>
						<ChevronUpIcon width={20} />
					</S.SelectScrollUpButton>
					<S.SelectViewport>
						<Select.Group>
							<SelectItem value="all">Todas as categorias</SelectItem>
							<SelectItem value="banana">Delivery</SelectItem>
							<SelectItem value="blueberry">Mecanica</SelectItem>
							<SelectItem value="grapes">Advogado</SelectItem>
							<SelectItem value="pineapple">Padaria</SelectItem>
						</Select.Group>
					</S.SelectViewport>
					<S.SelectScrollDownButton asChild>
						<ChevronDownIcon width={20} />
					</S.SelectScrollDownButton>
				</S.SelectContent>
			</Select.Portal>
		</Select.Root>
	)
}

function SelectItem({ children, className, ...props }) {
	return (
		<S.StyledItem className={className} {...props}>
			<Select.ItemText>{children}</Select.ItemText>
			<S.StyledItemIndicator className="SelectItemIndicator">
				<CheckIcon width={16} />
			</S.StyledItemIndicator>
		</S.StyledItem>
	)
}
