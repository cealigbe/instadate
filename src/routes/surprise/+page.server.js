import { slugify } from "$lib/index.js";
import dateIdeas from "$lib/data/dateIdeas.json";
import dateCategories from "$lib/data/dateCategories.json";

export function load() {
  let index = Math.floor(Math.random() * dateIdeas.length);
  let details = dateIdeas[index];

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
