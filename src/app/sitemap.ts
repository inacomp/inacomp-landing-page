import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return [
		{
			url: absoluteUrl("/"),
			lastModified,
			changeFrequency: "weekly",
			priority: 1,
			images: [absoluteUrl("/assets/inacomp/home/dua.png")],
		},
		{
			url: absoluteUrl("/competitive-programming"),
			lastModified,
			changeFrequency: "weekly",
			priority: 0.9,
			images: [absoluteUrl("/assets/booklet-cp.jpg")],
		},
		{
			url: absoluteUrl("/ui-ux-design"),
			lastModified,
			changeFrequency: "weekly",
			priority: 0.9,
			images: [absoluteUrl("/assets/logo-inacomp.png")],
		},
		// {
		// 	url: absoluteUrl("/cisco-networking"),
		// 	lastModified,
		// 	changeFrequency: "weekly",
		// 	priority: 0.9,
		// 	images: [absoluteUrl("/assets/booklet-cisco.jpg")],
		// },
	];
}
