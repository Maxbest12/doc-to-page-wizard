import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users } from "lucide-react";

const IntroductionSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Asset Management",
      description: "Speciaal ontwikkeld voor IBM Maximo EAM en Maximo Manage (MAS 8) implementaties"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Direct Toepasbaar", 
      description: "Praktijkgerichte trainingen die u onmiddellijk kunt gebruiken in uw dagelijkse werk"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Voor Organisaties & Professionals",
      description: "Geschikt voor zowel teams als individuele professionals die Maximo willen leren"
    }
  ];

  return (
    <section id="introductie" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-primary">Introductie MaximoDirect</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                MaximoDirect is een initiatief van ComOps, speciaal ontwikkeld om organisaties en 
                professionals snel en effectief vertrouwd te maken met het werken in IBM Maximo EAM 
                en Maximo Manage (MAS 8). Het implementeren of beheren van een Enterprise Asset 
                Management (EAM) systeem kan een uitdaging zijn. Daarom bieden wij praktijkgerichte 
                trainingen die direct toepasbaar zijn in uw dagelijkse werk.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-corporate hover:shadow-xl transition-corporate border-border">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary-light rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="mb-4 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;