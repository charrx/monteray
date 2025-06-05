interface Props {
	closeWindowHandler: () => void;
}

const ActionButtons = ({ closeWindowHandler }: Props) => {
	return (
		<div className="flex gap-2">
			<button
				className="w-3 h-3 rounded-full border border-solid border-black/10 box-border bg-windowBtnClose"
				onClick={closeWindowHandler}
				type="button"
			/>
			<button
				className="w-3 h-3 rounded-full border border-solid border-black/10 box-border bg-windowBtnMinimize"
				type="button"
			/>
			<button
				className="w-3 h-3 rounded-full border border-solid border-black/10 box-border bg-windowBtnMaximize"
				type="button"
			/>
		</div>
	);
};

export default ActionButtons;
