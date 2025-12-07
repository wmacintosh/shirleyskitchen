import { useState } from "react";
import { Search, Filter } from "lucide-react";
import KitchenSidebar from "@/components/KitchenSidebar";
import RecipeCard from "@/components/RecipeCard";
import CategoryCard from "@/components/CategoryCard";
import RecipeDetail from "@/components/RecipeDetail";
import { recipes, categories, Recipe } from "@/data/recipes";
import { Button } from "@/components/ui/button";

const Kitchen = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeCategory, setActiveCategory] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === "1") return matchesSearch;
    
    const categoryName = categories.find((c) => c.id === activeCategory)?.name;
    return matchesSearch && recipe.category === categoryName;
  });

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-background flex">
        <KitchenSidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <RecipeDetail 
              recipe={selectedRecipe} 
              onBack={() => setSelectedRecipe(null)} 
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      <KitchenSidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="font-serif text-3xl font-bold text-foreground">Welcome Back</h1>
                <p className="text-muted-foreground">What shall we cook today?</p>
              </div>
              
              {/* Search */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2.5 w-64 bg-card border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
                <Button variant="outline" size="icon" className="rounded-xl">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto p-6 space-y-8">
          {/* Categories */}
          <section className="animate-fade-in">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-4">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </section>

          {/* Featured / Favorites */}
          <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                {activeCategory === "1" ? "All Recipes" : categories.find((c) => c.id === activeCategory)?.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? "s" : ""}
              </p>
            </div>
            
            {filteredRecipes.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => setSelectedRecipe(recipe)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground font-serif italic">
                  No recipes found. Try a different search or category.
                </p>
              </div>
            )}
          </section>

          {/* Quote footer */}
          <footer className="text-center py-8 border-t border-border">
            <p className="font-serif italic text-muted-foreground">
              "The secret ingredient is always love" — Shirley
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Kitchen;
