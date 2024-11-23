import Image from "next/image";

import { Header } from "@/appComponents";

const WelcomeToHiry = () => {
	return (
		<main className="px-10 py-20 h-dvh">
			<Header />
			<section className="flex flex-col justify-center items-center h-full min-h-gridMax">
				<h1 className="font-medium text-4xl leading-heading tracking-welcomeHeading">
					Welcome to Hiry 👋
				</h1>
				<p className="max-w-gridMax mt-2 mb-8 mx-auto text-center text-subheading leading-subheading tracking-subheading">
					You have successfully created your company’s account! What’s next?
				</p>
				<div className="flex gap-4">
					<button className="border border-noColor font-medium pb-6 rounded-2xl text-center text-xl tracking-subheading leading-heading hover:scale-95 transition ease-in-out duration-500">
						<Image alt="browse" src="/browse.png" width={326} height={172} />
						Browse freelancers
					</button>
					<button className="border border-noColor font-medium pb-6 rounded-2xl text-center text-xl tracking-subheading leading-heading hover:scale-95 transition ease-in-out duration-500">
						<Image alt="create" src="/create.png" width={326} height={172} />
						Create a job
					</button>
				</div>
			</section>
		</main>
	);
};

export default WelcomeToHiry;
