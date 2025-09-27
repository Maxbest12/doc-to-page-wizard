import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Building2, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Building2 className="h-6 w-6" />,
      label: "Bedrijf",
      value: "MaximoDirect (ComOps)"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "E-mail",
      value: "info@maximodirect.nl",
      link: "mailto:info@maximodirect.nl"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Telefoon", 
      value: "+31 (0) [voorbeeldnummer]",
      link: "tel:+31000000000"
    }
  ];

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* CTA Header */}
          <div className="mb-16">
            <h2 className="mb-6">Zoekt u een praktijkgerichte IBM Maximo training die écht resultaat oplevert?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Neem vandaag nog contact met ons op voor meer informatie over onze trainingen 
              en hoe wij uw organisatie kunnen helpen met IBM Maximo.
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-corporate group"
              asChild
            >
              <a href="mailto:info@maximodirect.nl">
                Neem Contact Op
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary-foreground/20 rounded-full text-primary-foreground">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-primary-foreground">
                    {info.label}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-primary-foreground/80 font-medium">
                      {info.value}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;