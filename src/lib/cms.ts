// Copyright © 2023 Karl Bateman. All Rights Reserved.
import { first } from "lodash";
import "server-only";

export interface Content {
	title: string;
	subtitle: string;
}

export interface Page {
	path: string;
	content: Content;
}

/**
 * Get all pages from the CMS.
 * @returns A collection of pages.
 */
export async function getPages() {
	return Promise.resolve([
		{
			path: "home",
			content: {
				title: "Welcome",
				subtitle:
					"An example which showcases how to integrate NextJS with any CMS that provides a content API.",
			},
		},
		{
			path: "features",
			content: {
				title: "Features",
				subtitle: "This would show a list of product features.",
			},
		},
		{
			// This page can be accessed by visiting '/features/headless' and demonstrates the use
			// of nested routes using a familiar URL path definition.
			path: "features/headless",
			content: {
				title: "Headless CMS",
				subtitle: "Use NextJS to easily integrate with a headless CMS.",
			},
		},
		{
			path: "about",
			content: {
				title: "About",
				subtitle:
					"An example page which would provide information about something.",
			},
		},
		{
			path: "contact",
			content: {
				title: "Contact",
				subtitle:
					"This would provide contact details, maybe even display a contact form.",
			},
		},
	]);
}

/**
 * Get all the URL path values from all pages in the CMS.
 * @returns An array of page URL paths.
 */
export async function getPagePaths() {
	const pages = await getPages();
	const paths = pages.map((page) => page.path);
	return Promise.resolve(paths);
}

/**
 * Get a page from the CMS which contains the given path.
 * @param path A unique URL path for a particular page.
 * @returns A page if found, otherwise undefined if the page cannot be found.
 */
export async function getPageByPath(path: string) {
	const pages = await getPages();
	return first(pages.filter((page) => page.path === path));
}
