import { Heart, Clock, Users, ChefHat } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <article
      onClick={onClick}
      className="group bg-card rounded-2xl shadow-card ring-1 ring-border/50 overflow-hidden cursor-pointer card-lift hover:shadow-card-hover"
    >
      {/* Top accent bar that expands on hover */}
      <div className="h-1 bg-primary transition-all duration-300 group-hover:h-2" />
      
      <div className="p-6">
        {/* Header with author and favorite */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Author avatar */}
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-card",
              recipe.author.color
            )}>
              {recipe.author.initials}
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Recipe by</p>
              <p className="text-sm font-medium text-foreground">{recipe.author.name}</p>
            </div>
          </div>
          
          {/* Favorite button */}
          <button
            onClick={handleFavoriteClick}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Heart 
              className={cn(
                "w-5 h-5 transition-all",
                isFavorite 
                  ? "fill-heritage-rose text-heritage-rose animate-pulse-heart" 
                  : "text-muted-foreground hover:text-heritage-rose"
              )} 
            />
          </button>
        </div>

        {/* Title and description */}
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {recipe.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{recipe.servings}</span>
          </div>
          <div className={cn(
            "ml-auto px-2 py-1 rounded-full text-xs font-medium",
            recipe.difficulty === "Easy" && "bg-green-100 text-green-700",
            recipe.difficulty === "Medium" && "bg-amber-100 text-amber-700",
            recipe.difficulty === "Hard" && "bg-red-100 text-red-700"
          )}>
            {recipe.difficulty}
          </div>
        </div>

        {/* Chef tip indicator */}
        {recipe.chefTip && (
          <div className="mt-4 flex items-center gap-2 text-xs text-heritage-amber">
            <ChefHat className="w-4 h-4" />
            <span className="font-serif italic">Chef's tip included</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default RecipeCard;
