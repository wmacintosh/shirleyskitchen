import { ChefHat, BookOpen, Heart, Users, Settings, Plus, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/kitchen" },
  { icon: BookOpen, label: "All Recipes", path: "/kitchen/recipes" },
  { icon: Heart, label: "Favorites", path: "/kitchen/favorites" },
  { icon: Users, label: "Family", path: "/kitchen/family" },
  { icon: Settings, label: "Settings", path: "/kitchen/settings" },
];

const KitchenSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <NavLink to="/kitchen" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-sidebar-primary rounded-xl flex items-center justify-center shadow-glow-sky transition-transform group-hover:scale-105">
            <ChefHat className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold text-sidebar-accent-foreground">Shirley's</h1>
            <p className="text-xs text-sidebar-foreground -mt-0.5">Kitchen</p>
          </div>
        </NavLink>
      </div>

      {/* Add Recipe Button */}
      <div className="p-4">
        <Button variant="heritage" size="lg" className="w-full justify-start gap-2">
          <Plus className="w-5 h-5" />
          Add Recipe
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/kitchen"}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground",
                  "transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                activeClassName="sidebar-glow text-sidebar-accent-foreground"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Family Members */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground uppercase tracking-wider mb-3 px-2">
          Contributors
        </p>
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-xs font-semibold text-card ring-2 ring-sidebar-border">
            S
          </div>
          <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-xs font-semibold text-card ring-2 ring-sidebar-border">
            M
          </div>
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-semibold text-card ring-2 ring-sidebar-border">
            E
          </div>
          <button className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer quote */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground font-serif italic text-center leading-relaxed">
          "Cooking is love made visible"
        </p>
      </div>
    </aside>
  );
};

export default KitchenSidebar;
