import { Button } from "@/components/ui/button";
import { BookOpen, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tartanBg from "@/assets/macintosh-tartan.jpg";
import crestImg from "@/assets/macintosh-crest.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${tartanBg})` }}
    >
      {/* Glass card container */}
      <div className="relative max-w-lg w-full animate-scale-in">
        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-card rounded-full shadow-xl flex items-center justify-center animate-float">
          <Heart className="w-6 h-6 text-heritage-rose" />
        </div>
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-card rounded-full shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        
        {/* Main card */}
        <div className="bg-card/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center ring-1 ring-border/50">
          {/* Clan crest */}
          <img 
            src={crestImg} 
            alt="MacIntosh Clan Crest" 
            className="w-36 h-auto mx-auto mb-6 drop-shadow-lg"
          />

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
            Shirley's Kitchen
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <span className="text-muted-foreground text-sm font-serif italic">Est. 1952</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8 font-sans leading-relaxed">
            A collection of treasured family recipes, passed down through generations. 
            <span className="block mt-2 font-serif italic text-foreground/80">
              "Good food is made with love and shared with family."
            </span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-foreground">24</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Recipes</p>
            </div>
            <div className="text-center border-x border-border">
              <p className="text-2xl font-serif font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Generations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-foreground">72</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Years</p>
            </div>
          </div>

          {/* Enter button */}
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => navigate("/kitchen")}
            className="w-full group"
          >
            <span>Enter the Kitchen</span>
          </Button>

          {/* Footer note */}
          <p className="mt-6 text-xs text-muted-foreground font-serif italic">
            "The fondest memories are made when gathered around the table"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
