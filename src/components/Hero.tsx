import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cloud.jpg";
import logoWit from "@/assets/logo_wit.png";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="mb-8 flex justify-center">
            <img 
              src={logoWit} 
              alt="MaximoDirect Logo" 
              className="h-24 md:h-32 w-auto"
            />
          </div>
          
          <h1 className="mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-corporate group"
              asChild
            >
              <a href="#trainingen">
                {t("hero.cta.trainings")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-corporate"
              asChild
            >
              <a href="#contact">{t("hero.cta.contact")}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
