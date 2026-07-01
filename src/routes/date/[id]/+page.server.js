import { slugify } from "$lib/index.js";
import dateIdeas from "$lib/data/dateIdeas.json";
import dateCategories from "$lib/data/dateCategories.json";

export function load({ params }) {
  let details = dateIdeas.find((d) => d.id == parseInt(params.id));

  return {
    date: {
      title: details.title,
      category: dateCategories.find(
        (c) => c.slug == slugify(details?.category),
      ),
      details: details,
    },
  };
}
