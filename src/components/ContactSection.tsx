import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Building2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <Building2 className="h-6 w-6" />,
      label: t("contact.company.label"),
      value: t("contact.company.value")
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: t("contact.email.label"),
      value: "maximo@comops.nl",
      link: "mailto:maximo@comops.nl"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: t("contact.phone.label"), 
      value: "+31 (0)641451785",
      link: "tel:+31641451785"
    }
  ];

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* CTA Header */}
          <div className="mb-16">
            <h2 className="mb-6">{t("contact.title")}</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("contact.description")}
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-corporate group"
              asChild
            >
              <a href="mailto:maximo@comops.nl">
                {t("contact.cta")}
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
                    <a 
                      href="https://www.comops.nl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate font-medium"
                    >
                      {info.value}
                    </a>
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
