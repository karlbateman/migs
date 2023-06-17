// Copyright © 2023 Karl Bateman. All Rights Reserved.
import Link from "next/link";

// It's important to note that the navigation elements would also be built
// from a CMS content type. We want to clearly separate the process of building
// each page from individual UI elements such as the primary navigation.
const navigation = [
	{
		display: "Home",
		href: "/",
	},
	{
		display: "Features",
		href: "/features",
	},
	{
		display: "About",
		href: "/about",
	},
	{
		display: "Contact",
		href: "/contact",
	},
];

export default function Navbar() {
	return (
		<>
			<div className="flex gap-5 py-5 bg-neutral-50 border-b border-neutral-300 justify-center shadow">
				{navigation.map((nav, key) => {
					return (
						<Link
							className="flex hover:text-blue-500 font-semibold transition block"
							key={key}
							href={nav.href}
						>
							{nav.display}
						</Link>
					);
				})}
			</div>
		</>
	);
}
