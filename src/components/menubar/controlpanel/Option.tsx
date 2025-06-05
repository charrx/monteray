import { useReducer } from 'react';
import CircularButton from './CircularButton';
import type { OptionType } from './OptionType';

export interface OptionProps {
	type: OptionType;
	name: string;
	activeText?: string;
	inactiveText?: string;
}

const Option = ({ type, name, activeText, inactiveText }: OptionProps) => {
	const [isActive, setIsActive] = useReducer((isActive) => !isActive, true);

	return (
		<div
			className="flex items-center gap-2"
			onClick={setIsActive}
			onKeyUp={setIsActive}
			onKeyDown={setIsActive}
		>
			<CircularButton type={type} isActive={isActive} />
			<div className="flex flex-col">
				<p className="text-xs font-bold">{name}</p>
				<p className="text-xxs">{isActive ? activeText : inactiveText}</p>
			</div>
		</div>
	);
};

export default Option;
