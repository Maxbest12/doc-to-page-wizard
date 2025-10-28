import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const IntroductionSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t("intro.feature1.title"),
      description: t("intro.feature1.description")
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: t("intro.feature2.title"), 
      description: t("intro.feature2.description")
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t("intro.feature3.title"),
      description: t("intro.feature3.description")
    }
  ];

  return (
    <section id="waarom-maximodirect" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-primary">{t("intro.title")}</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                {t("intro.description")}
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
