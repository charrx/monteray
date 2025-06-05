import { useReducer } from 'react';
import Brightness from '../icons/Brightness';
import ScreenMirroring from '../icons/ScreenMirroring';
import CircularButton from './CircularButton';
import Option, { type OptionProps } from './Option';
import { OptionType } from './OptionType';

const OptionsList: OptionProps[] = [
	{
		type: OptionType.WIFI,
		name: 'Wi-Fi',
		activeText: 'ForTheAlliance',
		inactiveText: 'Off',
	},
	{
		type: OptionType.BLUETOOTH,
		name: 'Bluetooth',
		activeText: 'On',
		inactiveText: 'Off',
	},
	{
		type: OptionType.AIRDROP,
		name: 'AirDrop',
		activeText: 'Contacts Only',
		inactiveText: 'Off',
	},
];

const ControlPanel = () => {
	const [isDarkMode, setIsDarkMode] = useReducer(
		(isDarkMode: boolean) => !isDarkMode,
		false,
	);

	return (
		<div className="flex w-72 h-40 p-2 my-2 text-xs border border-solid border-black/20 bg-white/50 rounded-2xl absolute top-6 right-2 gap-2">
			<div className="flex flex-col justify-between w-1/2 border border-solid border-black/10 rounded-xl p-2 bg-white/40">
				{OptionsList.map((option) => {
					return (
						<div key={option.type}>
							<Option {...option} />
						</div>
					);
				})}
			</div>
			<div className="flex flex-col justify-between w-1/2">
				<div
					className="flex justify-start items-center h-1/2 gap-2 border border-solid border-black/10 rounded-xl p-2 bg-white/40"
					onClick={setIsDarkMode}
					onKeyUp={setIsDarkMode}
					onKeyDown={setIsDarkMode}
				>
					<CircularButton type={OptionType.DARKMODE} isActive={!isDarkMode} />
					<p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
				</div>
				<div className="flex h-1/2 gap-2">
					<div className="flex flex-col justify-between text-center w-1/2  border border-solid border-black/10 rounded-xl p-2 bg-white/40">
						<div className="flex justify-center items-center">
							<Brightness />
						</div>
						<p className="text-xxs">Keyboard Brightness</p>
					</div>
					<div className="flex flex-col justify-between text-center w-1/2 border border-solid border-black/10 rounded-xl p-2 bg-white/40">
						<div className="flex justify-center items-center">
							<ScreenMirroring />
						</div>
						<p className="text-xxs">Screen Mirroring</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ControlPanel;
