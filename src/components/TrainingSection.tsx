import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Users, CheckCircle, Timer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrainingSection = () => {
  const { t } = useLanguage();
  
  const trainings = [
    {
      title: t("trainings.eam.title"),
      versions: t("trainings.eam.versions"),
      formats: [t("trainings.eam.format1"), t("trainings.eam.format2")],
      icon: <Monitor className="h-6 w-6" />,
      features: [
        t("trainings.eam.feature1"),
        t("trainings.eam.feature2"), 
        t("trainings.eam.feature3"),
        t("trainings.eam.feature4")
      ]
    },
    {
      title: t("trainings.manage.title"), 
      versions: t("trainings.manage.versions"),
      formats: [t("trainings.manage.format1")],
      icon: <Users className="h-6 w-6" />,
      features: [
        t("trainings.manage.feature1"),
        t("trainings.manage.feature2"),
        t("trainings.manage.feature3"),
        t("trainings.manage.feature4")
      ]
    }
  ];

  const benefits = [
    t("trainings.benefit1"),
    t("trainings.benefit2"), 
    t("trainings.benefit3"),
    t("trainings.benefit4")
  ];

  return (
    <section id="trainingen" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-primary">{t("trainings.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("trainings.subtitle")}
            </p>
          </div>

          {/* Training Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {trainings.map((training, index) => (
              <Card key={index} className="shadow-corporate hover:shadow-xl transition-corporate">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary-light rounded-lg text-primary">
                      {training.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{training.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{training.versions}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {training.formats.map((format) => (
                      <Badge key={format} variant="secondary">
                        {format}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {training.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="text-center mb-12">
            <h3 className="mb-8 text-primary">{t("trainings.why.title")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 border-primary/20">
                  <div className="flex items-start gap-3">
                    <Timer className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-card-foreground font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Description Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card">
              <h3 className="mb-4 text-primary">{t("trainings.practical.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("trainings.practical.description")}
              </p>
            </Card>

            <Card className="p-8 bg-card">
              <h3 className="mb-4 text-primary">{t("trainings.uptodate.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("trainings.uptodate.description")}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
