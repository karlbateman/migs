// Copyright © 2023 Karl Bateman. All Rights Reserved.
import { Content } from "@/lib/cms";

export default function ContentLayout({ content }: { content: Content }) {
	return (
		<>
			<div className="flex flex-grow justify-center p-5 py-10 md:p-16">
				<div className="flex grow flex-col justify-center text-center">
					<h1 className="text-6xl font-black text-neutral-900">
						{content.title}
					</h1>
					<p className="mt-5 text-xl text-neutral-500">{content.subtitle}</p>
				</div>
			</div>
		</>
	);
}
