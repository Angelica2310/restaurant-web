export const dishes = [
  {
    id: 1,
    category: "starter",
    src: "/starter01.jpg",
  },
  {
    id: 2,
    category: "starter",
    src: "/starter02.jpg",
  },
  {
    id: 3,
    category: "main",
    src: "/main01.jpg",
  },
  {
    id: 4,
    category: "main",
    src: "/main02.jpg",
  },
  {
    id: 5,
    category: "main",
    src: "/main03.jpg",
  },
  {
    id: 6,
    category: "main",
    src: "/main04.jpg",
  },
  {
    id: 7,
    category: "veggie",
    src: "/veggie.jpg",
  },
];

// I need a function that takes a 'slug' as an argument and compares that argument to the list of dishes to return the object im trying to find.
export function findBySlug(slug) {
  return dishes.find((dish) => dish.slug === slug);
}
