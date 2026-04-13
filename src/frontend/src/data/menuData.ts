import type { MenuItem } from "@/types";

export type MenuCategory =
  | "coffee"
  | "tea"
  | "pastries"
  | "breakfast"
  | "desserts";

export const menuCategories: {
  id: MenuCategory;
  label: string;
  emoji: string;
}[] = [
  { id: "coffee", label: "Coffee", emoji: "☕" },
  { id: "tea", label: "Tea", emoji: "🍵" },
  { id: "pastries", label: "Pastries", emoji: "🥐" },
  { id: "breakfast", label: "Breakfast", emoji: "🍳" },
  { id: "desserts", label: "Desserts", emoji: "🍰" },
];

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "espresso",
    name: "Espresso",
    description: "A bold, concentrated shot with a rich crema.",
    price: "$3.50",
    category: "coffee",
    imageUrl:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Steamed milk and foam with our signature espresso.",
    price: "$4.50",
    category: "coffee",
    imageUrl:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80",
  },
  {
    id: "latte",
    name: "Latte",
    description: "Smooth espresso with creamy steamed milk.",
    price: "$5.00",
    category: "coffee",
    imageUrl:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=80",
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours, silky and refreshing.",
    price: "$5.50",
    category: "coffee",
    imageUrl:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description: "Ceremonial grade matcha with oat milk.",
    price: "$5.50",
    category: "coffee",
    imageUrl:
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80",
  },
  // Tea
  {
    id: "chai-latte",
    name: "Chai Latte",
    description: "Spiced black tea with warm steamed milk.",
    price: "$4.50",
    category: "tea",
    imageUrl:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
  },
  {
    id: "english-breakfast",
    name: "English Breakfast",
    description: "Classic black tea, robust and full-bodied.",
    price: "$3.00",
    category: "tea",
    imageUrl:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  },
  {
    id: "chamomile",
    name: "Chamomile",
    description: "Soothing herbal tea with honey.",
    price: "$3.00",
    category: "tea",
    imageUrl:
      "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=600&q=80",
  },
  {
    id: "earl-grey",
    name: "Earl Grey",
    description: "Delicate bergamot-infused black tea.",
    price: "$3.50",
    category: "tea",
    imageUrl:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&q=80",
  },
  // Pastries
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description: "Flaky, buttery, filled with almond cream.",
    price: "$3.75",
    category: "pastries",
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  },
  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    description: "Dark chocolate wrapped in golden pastry.",
    price: "$3.50",
    category: "pastries",
    imageUrl:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80",
  },
  {
    id: "blueberry-muffin",
    name: "Blueberry Muffin",
    description: "Bursting with fresh blueberries.",
    price: "$3.25",
    category: "pastries",
    imageUrl:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    description: "Soft dough with cinnamon sugar and cream cheese glaze.",
    price: "$4.00",
    category: "pastries",
    imageUrl:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
  },
  // Breakfast
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description: "Smashed avocado, poached egg, chili flakes on sourdough.",
    price: "$8.50",
    category: "breakfast",
    imageUrl:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80",
  },
  {
    id: "granola-bowl",
    name: "Granola Bowl",
    description: "Greek yogurt, seasonal fruits, house-made granola.",
    price: "$7.50",
    category: "breakfast",
    imageUrl:
      "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=600&q=80",
  },
  {
    id: "french-toast",
    name: "French Toast",
    description: "Brioche, maple syrup, fresh berries.",
    price: "$9.00",
    category: "breakfast",
    imageUrl:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
  },
  {
    id: "eggs-soldiers",
    name: "Eggs & Soldiers",
    description: "Soft-boiled eggs with buttered toast fingers.",
    price: "$7.00",
    category: "breakfast",
    imageUrl:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&q=80",
  },
  // Desserts
  {
    id: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    description: "Warm dark chocolate cake with a molten center.",
    price: "$7.50",
    category: "desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "New York style with a biscuit base.",
    price: "$6.50",
    category: "desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    description: "Classic Italian with espresso-soaked ladyfingers.",
    price: "$7.00",
    category: "desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
  },
  {
    id: "lemon-tart",
    name: "Lemon Tart",
    description: "Zesty lemon curd in a buttery pastry shell.",
    price: "$6.00",
    category: "desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80",
  },
];
