import { type SchemaTypeDefinition } from "sanity";

import TodayAtGasogi from "@/sanity/schemas/TodayAtGasogi";
import experience from "./schemas/experience";
import social from "./schemas/social";
import project from "./schemas/project";
import skill from "./schemas/skill";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		TodayAtGasogi,
		experience,
		social,
		project,
		skill,
	],
};
