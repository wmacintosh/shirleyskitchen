import { BookOpen, Soup, Salad, Beef, Cake, Croissant } from "lucide-react";
import { Category } from "@/data/recipes";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Soup,
  Salad,
  Beef,
  Cake,
  Croissant,
};

interface CategoryCardProps {
  category: Category;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryCard = ({ category, isActive, onClick }: CategoryCardProps) => {
  const Icon = iconMap[category.icon] || BookOpen;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full p-6 rounded-2xl text-left transition-all duration-300",
        "bg-gradient-to-br ring-1 ring-border/50",
        category.gradient,
        isActive && "ring-2 ring-primary shadow-glow-sky",
        "hover:shadow-lg hover:-translate-y-1"
      )}
    >
      {/* Icon */}
      <div className="mb-4">
        <Icon className={cn(
          "w-10 h-10 transition-transform duration-300",
          "text-foreground/70 group-hover:text-primary",
          "group-hover:scale-110 group-hover:animate-float"
        )} />
      </div>

      {/* Text */}
      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
        {category.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {category.count} recipes
      </p>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary" />
      )}
    </button>
  );
};

export default CategoryCard;
