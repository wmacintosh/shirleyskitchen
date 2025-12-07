import { Heart, Clock, Users, ChefHat, ArrowLeft, Printer, Share2 } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import ChefTip from "./ChefTip";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail = ({ recipe, onBack }: RecipeDetailProps) => {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to recipes
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Printer className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={cn(
              "w-4 h-4",
              isFavorite && "fill-heritage-rose text-heritage-rose"
            )} />
          </Button>
        </div>
      </div>

      {/* Title section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold text-card",
            recipe.author.color
          )}>
            {recipe.author.initials}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Recipe by</p>
            <p className="font-medium text-foreground">{recipe.author.name}</p>
          </div>
        </div>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
          {recipe.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {recipe.description}
        </p>
      </div>

      {/* Meta cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card rounded-xl p-4 ring-1 ring-border/50 text-center">
          <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
          <p className="text-xs text-muted-foreground mb-1">Prep Time</p>
          <p className="font-semibold text-foreground">{recipe.prepTime}</p>
        </div>
        <div className="bg-card rounded-xl p-4 ring-1 ring-border/50 text-center">
          <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
          <p className="text-xs text-muted-foreground mb-1">Cook Time</p>
          <p className="font-semibold text-foreground">{recipe.cookTime}</p>
        </div>
        <div className="bg-card rounded-xl p-4 ring-1 ring-border/50 text-center">
          <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
          <p className="text-xs text-muted-foreground mb-1">Servings</p>
          <p className="font-semibold text-foreground">{recipe.servings}</p>
        </div>
        <div className="bg-card rounded-xl p-4 ring-1 ring-border/50 text-center">
          <ChefHat className="w-5 h-5 mx-auto mb-2 text-primary" />
          <p className="text-xs text-muted-foreground mb-1">Difficulty</p>
          <p className={cn(
            "font-semibold",
            recipe.difficulty === "Easy" && "text-green-600",
            recipe.difficulty === "Medium" && "text-amber-600",
            recipe.difficulty === "Hard" && "text-red-600"
          )}>{recipe.difficulty}</p>
        </div>
      </div>

      {/* Chef's tip */}
      {recipe.chefTip && (
        <div className="mb-8">
          <ChefTip tip={recipe.chefTip} />
        </div>
      )}

      {/* Content grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="md:col-span-1">
          <div className="bg-card rounded-2xl p-6 ring-1 ring-border/50 sticky top-6">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-primary/30 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="md:col-span-2">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
            Instructions
          </h2>
          <ol className="space-y-6">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-muted-foreground pt-1 leading-relaxed">{instruction}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
