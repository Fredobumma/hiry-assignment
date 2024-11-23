const PageIntro = ({ onClick }: { onClick?: () => void }) => {
	return (
		<button
			type="submit"
			onClick={
				onClick
					? (e) => {
							e.preventDefault();
							onClick();
					  }
					: undefined
			}
			className="bg-secondary font-medium leading-button tracking-subheading p-3.5 rounded-button text-white w-full hover:bg-primary transition ease-in-out duration-500 !mt-10"
		>
			Continue
		</button>
	);
};

export default PageIntro;
