export interface Recipe {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    initials: string;
    color: string;
  };
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  isFavorite: boolean;
  imageUrl?: string;
  ingredients: string[];
  instructions: string[];
  chefTip?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  gradient: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Grandma Shirley's Apple Pie",
    description: "The original recipe passed down through generations. Flaky crust with perfectly spiced apples.",
    author: { name: "Shirley", initials: "S", color: "bg-rose-500" },
    category: "Desserts",
    prepTime: "45 min",
    cookTime: "1 hr",
    servings: 8,
    difficulty: "Medium",
    isFavorite: true,
    ingredients: [
      "6 cups thinly sliced apples",
      "3/4 cup sugar",
      "2 tbsp flour",
      "1 tsp cinnamon",
      "1/4 tsp nutmeg",
      "Double pie crust",
      "2 tbsp butter"
    ],
    instructions: [
      "Preheat oven to 425°F",
      "Mix apples with sugar, flour, and spices",
      "Line pie dish with bottom crust",
      "Fill with apple mixture and dot with butter",
      "Cover with top crust, seal edges, and cut vents",
      "Bake for 45-50 minutes until golden"
    ],
    chefTip: "Use a mix of Granny Smith and Honeycrisp apples for the perfect balance of tart and sweet."
  },
  {
    id: "2",
    title: "Sunday Pot Roast",
    description: "A hearty, fall-apart tender roast with root vegetables. Perfect for family gatherings.",
    author: { name: "Margaret", initials: "M", color: "bg-sky-500" },
    category: "Mains",
    prepTime: "30 min",
    cookTime: "3 hrs",
    servings: 6,
    difficulty: "Easy",
    isFavorite: false,
    ingredients: [
      "4 lb chuck roast",
      "6 carrots, chunked",
      "4 potatoes, quartered",
      "2 onions, quartered",
      "4 cups beef broth",
      "Fresh thyme and rosemary"
    ],
    instructions: [
      "Season and sear the roast on all sides",
      "Place vegetables in bottom of Dutch oven",
      "Add roast on top, pour in broth",
      "Cover and cook at 325°F for 3 hours",
      "Let rest 15 minutes before slicing"
    ],
    chefTip: "The secret is low and slow. Never rush a pot roast!"
  },
  {
    id: "3",
    title: "Creamy Tomato Soup",
    description: "Velvety smooth with a hint of basil. Pairs perfectly with grilled cheese sandwiches.",
    author: { name: "Shirley", initials: "S", color: "bg-rose-500" },
    category: "Soups",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4,
    difficulty: "Easy",
    isFavorite: true,
    ingredients: [
      "2 cans whole tomatoes",
      "1 cup heavy cream",
      "4 tbsp butter",
      "1 onion, diced",
      "3 cloves garlic",
      "Fresh basil leaves"
    ],
    instructions: [
      "Sauté onion and garlic in butter until soft",
      "Add tomatoes and simmer for 20 minutes",
      "Blend until smooth",
      "Stir in cream and fresh basil",
      "Season to taste"
    ]
  },
  {
    id: "4",
    title: "Buttermilk Biscuits",
    description: "Light, fluffy, and golden brown. The foundation of any good Southern breakfast.",
    author: { name: "Eleanor", initials: "E", color: "bg-amber-500" },
    category: "Breads",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 12,
    difficulty: "Medium",
    isFavorite: false,
    ingredients: [
      "2 cups all-purpose flour",
      "1 tbsp baking powder",
      "1 tsp salt",
      "6 tbsp cold butter",
      "3/4 cup buttermilk"
    ],
    instructions: [
      "Mix dry ingredients",
      "Cut in cold butter until pea-sized",
      "Add buttermilk, mix until just combined",
      "Pat out and cut rounds",
      "Bake at 450°F for 12-15 minutes"
    ],
    chefTip: "Keep everything cold! Cold butter is the secret to flaky biscuits."
  },
  {
    id: "5",
    title: "Classic Caesar Salad",
    description: "Crisp romaine with homemade dressing and garlic croutons. A timeless starter.",
    author: { name: "Margaret", initials: "M", color: "bg-sky-500" },
    category: "Salads",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: 4,
    difficulty: "Easy",
    isFavorite: false,
    ingredients: [
      "2 heads romaine lettuce",
      "1/2 cup olive oil",
      "2 cloves garlic",
      "1 egg yolk",
      "Parmesan cheese",
      "Homemade croutons"
    ],
    instructions: [
      "Whisk egg yolk, garlic, and anchovies",
      "Slowly drizzle in olive oil",
      "Add lemon juice and parmesan",
      "Toss with romaine",
      "Top with croutons"
    ]
  },
  {
    id: "6",
    title: "Chocolate Chip Cookies",
    description: "Crispy edges, chewy centers. The recipe that started many kitchen memories.",
    author: { name: "Shirley", initials: "S", color: "bg-rose-500" },
    category: "Desserts",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: 24,
    difficulty: "Easy",
    isFavorite: true,
    ingredients: [
      "2 1/4 cups flour",
      "1 cup butter, softened",
      "3/4 cup each sugar types",
      "2 eggs",
      "1 tsp vanilla",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Cream butter and sugars",
      "Beat in eggs and vanilla",
      "Mix in flour and salt",
      "Fold in chocolate chips",
      "Bake at 375°F for 10-12 minutes"
    ],
    chefTip: "Chill the dough for 24 hours for deeper flavor and better texture."
  }
];

export const categories: Category[] = [
  { id: "1", name: "All Recipes", icon: "BookOpen", count: 24, gradient: "from-stone-100 to-stone-200" },
  { id: "2", name: "Soups", icon: "Soup", count: 6, gradient: "from-orange-50 to-orange-100" },
  { id: "3", name: "Salads", icon: "Salad", count: 4, gradient: "from-green-50 to-green-100" },
  { id: "4", name: "Mains", icon: "Beef", count: 8, gradient: "from-red-50 to-red-100" },
  { id: "5", name: "Desserts", icon: "Cake", count: 5, gradient: "from-pink-50 to-pink-100" },
  { id: "6", name: "Breads", icon: "Croissant", count: 3, gradient: "from-amber-50 to-amber-100" },
];
