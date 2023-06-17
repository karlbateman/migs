// Copyright © 2023 Karl Bateman. All Rights Reserved.
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "NextJS CMS Integration | Migs",
	description:
		"An example which showcases how to integrate NextJS with any CMS that provides a content API.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
