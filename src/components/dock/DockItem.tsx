interface Props {
	icon: string;
	handleDockItem?: () => void;
}

const DockItem = ({ icon, handleDockItem }: Props) => {
	return (
		<div>
			<button
				className="flex self-center"
				onClick={handleDockItem}
				type="button"
			>
				<img className="w-10 h-10" src={icon} alt="icon" />
			</button>
		</div>
	);
};

export default DockItem;
