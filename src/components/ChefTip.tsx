import { ChefHat, Lightbulb } from "lucide-react";

interface ChefTipProps {
  tip: string;
}

const ChefTip = ({ tip }: ChefTipProps) => {
  return (
    <div className="chef-tip-bg relative bg-gradient-to-r from-sky-50 to-card rounded-2xl p-6 ring-1 ring-sky-200/50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-heritage-amber/20 flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-heritage-amber" />
        </div>
        <h4 className="font-serif font-semibold text-foreground">Chef's Tip</h4>
      </div>
      
      {/* Tip content */}
      <p className="font-serif italic text-muted-foreground leading-relaxed pl-11">
        "{tip}"
      </p>
    </div>
  );
};

export default ChefTip;
