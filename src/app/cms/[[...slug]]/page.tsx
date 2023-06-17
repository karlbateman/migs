// Copyright © 2023 Karl Bateman. All Rights Reserved.
import ContentLayout from "@/components/ContentLayout";
import Navbar from "@/components/Navbar";
import { getPageByPath, getPagePaths } from "@/lib/cms";
import { get } from "lodash";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export interface PageProps {
	params: { slug: string };
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const slug = get(params, "slug", []) as string[];
	const path = slug.join("/");
	const page = await getPageByPath(path);
	if (!page) notFound();
	return {
		title: `${page.content.title} | Migs`,
	};
}

export async function generateStaticParams() {
	return getPagePaths();
}

export default async function Page({ params }: PageProps) {
	const slug = get(params, "slug", []) as string[];
	const path = slug.join("/");
	const page = await getPageByPath(path);
	if (!page) notFound();
	return (
		<>
			<main className="flex h-screen flex-col">
				<Navbar />
				<ContentLayout content={page.content} />
			</main>
		</>
	);
}
