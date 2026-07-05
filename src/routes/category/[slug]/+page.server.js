import { error } from "@sveltejs/kit";
import dateIdeas from "$lib/data/dateIdeas.json";
import dateCategories from "$lib/data/dateCategories.json";
import { slugify } from "$lib";

export function load({ params }) {
  let catIdeas = [];

  for (let idea of dateIdeas) {
    if (slugify(idea.category) === params.slug.toLowerCase()) {
      catIdeas = [...catIdeas, idea];
    }
  }

  if (catIdeas.length === 0) {
    error(404, { message: "Date category not found" });
  }

  return {
    category: {
      title: params.slug,
      subtitle: dateCategories.find((d) => d.slug == params.slug)?.subtitle,
      ideas: catIdeas,
    },
  };
}
