import { error } from "@sveltejs/kit";
import { slugify } from "$lib/index.js";
import dateIdeas from "$lib/data/dateIdeas.json";
import dateCategories from "$lib/data/dateCategories.json";

export function load({ params }) {
  let details = dateIdeas.find((d) => d.id == parseInt(params.id));
  let siblings = dateIdeas.filter((d) => d.category == details?.category);

  if (!details) {
    error(404, { message: "Date idea not found" });
  }

  return {
    date: {
      title: details.title,
      category: dateCategories.find(
        (c) => c.slug == slugify(details?.category),
      ),
      details: details,
      siblings: siblings,
    },
  };
}
