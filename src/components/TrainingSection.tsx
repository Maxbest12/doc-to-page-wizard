import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Users, Clock, CheckCircle, Timer } from "lucide-react";

const TrainingSection = () => {
  const trainings = [
    {
      title: "Maximo EAM",
      versions: "Versies 7.5 en 7.6",
      formats: ["E-learning", "Hybride training"],
      icon: <Monitor className="h-6 w-6" />,
      features: [
        "Flexibele online training",
        "Zelf uw tempo bepalen", 
        "6 maanden toegang",
        "Onbeperkt herhalen"
      ]
    },
    {
      title: "Maximo Manage", 
      versions: "MAS 9",
      formats: ["Klassikale trainingen"],
      icon: <Users className="h-6 w-6" />,
      features: [
        "Begeleid door ervaren trainers",
        "Interactieve sessies",
        "Praktische oefeningen",
        "Directe feedback"
      ]
    }
  ];

  const benefits = [
    "Praktijkgericht leren met direct resultaat",
    "Flexibele E-learning op eigen tempo", 
    "Altijd up-to-date met nieuwste versies",
    "Realistische praktijkvoorbeelden"
  ];

  return (
    <section id="trainingen" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-primary">Basistraining IBM Maximo</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Wilt u de basis van IBM Maximo onder de knie krijgen? Bij MaximoDirect kiest u zelf 
              de vorm die bij u past. Onze trainingen zijn kort, krachtig en gericht op het aanleren 
              van de fundamenten van Maximo.
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
            <h3 className="mb-8 text-primary">Waarom MaximoDirect?</h3>
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
              <h3 className="mb-4 text-primary">Praktijkgericht Leren</h3>
              <p className="text-muted-foreground leading-relaxed">
                Waar andere cursussen vaak theoretisch blijven, legt MaximoDirect de nadruk op 
                gebruiksgemak en toepasbaarheid. U werkt met realistische praktijkvoorbeelden 
                en oefeningen, zodat u de opgedane kennis direct kunt toepassen binnen uw organisatie.
              </p>
            </Card>

            <Card className="p-8 bg-card">
              <h3 className="mb-4 text-primary">Altijd Up-to-date</h3>
              <p className="text-muted-foreground leading-relaxed">
                IBM Maximo blijft zich ontwikkelen. Zodra er een nieuwe versie beschikbaar komt, 
                ontwikkelt MaximoDirect direct een bijpassende training. Zo blijft uw kennis 
                altijd actueel en bent u verzekerd van de nieuwste inzichten en functionaliteiten.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;