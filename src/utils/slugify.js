// Function to convert string to slug
export function slugify(text) {
  return text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}