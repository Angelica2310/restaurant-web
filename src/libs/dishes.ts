export const dishes: Dish[] = [
  {
    id: 1,
    category: "starter",
    src: "/starter01.png",
  },
  {
    id: 2,
    category: "starter",
    src: "/starter02.png",
  },
  {
    id: 3,
    category: "main",
    src: "/main01.png",
  },
  {
    id: 4,
    category: "main",
    src: "/main02.png",
  },
  {
    id: 5,
    category: "main",
    src: "/main03.png",
  },
  {
    id: 6,
    category: "main",
    src: "/main04.png",
  },
  {
    id: 7,
    category: "veggie",
    src: "/veggie.png",
  },
  {
    id: 8,
    category: "drink",
    src: "/drink-menu.png",
  },
];

// Define type
type Dish = {
  id: number;
  category: string;
  src: string;
};

// I need a function that takes a 'slug' as an argument and compares that argument to the list of dishes to return the object im trying to find.
export function findByCategory(slug: string, dishes: Dish[]): Dish[] {
  const s = slug.toLowerCase().trim();
  return dishes.filter((dish) => dish.category.toLowerCase().trim() === s);
}
