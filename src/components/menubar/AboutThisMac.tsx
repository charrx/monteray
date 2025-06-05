import { useRef } from 'react';
import Draggable from 'react-draggable';
import lockscreen from '../../assets/images/lockscreen.jpg';
import ActionButtons from '../ActionButtons';

interface Props {
	closeWindowHandler: () => void;
}

const AboutThisMac = ({ closeWindowHandler }: Props) => {
	//   If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
	//   Unfortunately, in order for <Draggable> to work properly, we need raw access
	//   to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`.
	const nodeRef = useRef(null);
	return (
		<Draggable nodeRef={nodeRef}>
			<div
				className="w-[36rem] h-80 bg-windowBackground border border-solid border-black/12 rounded-xl shadow-lg"
				ref={nodeRef}
			>
				<div className="w-full h-10 flex items-center bg-white pl-3 rounded-t-xl shadow-sm ">
					<ActionButtons closeWindowHandler={closeWindowHandler} />
				</div>
				<div className="flex w-full h-[calc(100%-2.5rem)] items-center">
					<div className="flex w-1/2 justify-center">
						<img
							className="w-36 h-36 rounded-full border-8 border-solid border-white shadow-lg"
							src={lockscreen}
							alt="monteray logo"
						/>
					</div>
					<div className="w-1/2 flex flex-col gap-3">
						<div className="flex flex-col">
							<p className="h-fit text-2xl font-light">
								<span className="font-semibold">macOS</span> Monteray
							</p>
							<p className=" text-xs capitalize">version 1.0.0</p>
						</div>
						<div className="text-xs">
							<p className="flex gap-3">
								<span className="font-semibold">
									MacBook Pro (14-inch, 2021)
								</span>
							</p>
							<p className="flex gap-3">
								<span className="font-semibold">Chip</span> Apple M1 Pro
							</p>
							<p className="flex gap-3">
								<span className="font-semibold">Memory</span> 16 GB
							</p>
							<p className="flex gap-3">
								<span className="font-semibold">Serial Number</span> 0000000000
							</p>
						</div>
					</div>
				</div>
			</div>
		</Draggable>
	);
};

export default AboutThisMac;
