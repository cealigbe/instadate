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

  return {
    category: {
      title: params.slug,
      subtitle: dateCategories.find((d) => d.slug == params.slug)?.subtitle,
      ideas: catIdeas,
    },
  };
}
