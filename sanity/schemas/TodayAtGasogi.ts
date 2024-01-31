import { defineField, defineType } from "sanity";

export default defineType({
	name: "Today_At_Gasogi",
	title: "Today_At_Gasogi",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "heroImage",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "heroVideo",
			title: "Video",
			type: "file",
			fields: [
				{
					name: "description",
					type: "string",
					title: "Description",
				},
			],
		}),

		defineField({
			name: "description",
			title: "Description",
			type: "string",
		}),
		defineField({
			name: "tag",
			title: "Tag",
			type: "string",
		}),
		defineField({
			name: "create_at",
			title: "Create at",
			type: "date",
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
		}),
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return {
				...selection,
				subtitle: author && `by ${author}`,
			};
		},
	},
});
