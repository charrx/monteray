import { useState } from 'react';
import { IoArrowForwardSharp } from 'react-icons/io5';
import macDesktop from '../../assets/images/desktop.jpg';

interface Props {
	handleAppContext: () => void;
}

const LockScreen = ({ handleAppContext }: Props) => {
	const adminPassword = 'admin'; // This can be changed to whatever you want.
	const [password, setPassword] = useState('');

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPassword(value);
	};

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === adminPassword) {
			handleAppContext();
		}
	};

	return (
		<div className="w-full h-full flex flex-col gap-4 items-center justify-center bg-mac-lockscreen bg-center bg-no-repeat bg-cover overflow-hidden">
			<img
				className="w-40 h-40 rounded-full"
				src={macDesktop}
				alt="user icon"
			/>
			<h1 className="text-xl leading-7 text-white">Admin</h1>
			<form onSubmit={submit}>
				<div className="w-40 h-7 flex items-center justify-between backdrop-blur-md bg-white/40 rounded-2xl p-2.2">
					<input
						className="w-4/5 text-xs leading-5 border-none bg-transparent outline-none text-white p-2 placeholder:text-white/80"
						type="password"
						onChange={handleOnChange}
						placeholder="Enter Password"
					/>
					<div className="w-1/5 flex justify-end">
						<button
							className=" w-6 h-6 flex justify-center items-center text-sm border-2 border-solid border-white rounded-full text-white opacity-50"
							type="submit"
						>
							<IoArrowForwardSharp />
						</button>
					</div>
				</div>
			</form>
			<p className=" text-xs leading-4 text-white">
				Touch ID or Enter Password
			</p>
		</div>
	);
};

export default LockScreen;
