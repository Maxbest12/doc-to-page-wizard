import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#waarom-maximodirect" },
    { name: t("nav.trainings"), href: "#trainingen" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const languages = [
    { code: "nl", name: "Nederlands" },
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "fr", name: "Français" },
    { code: "it", name: "Italiano" },
    { code: "es", name: "Español" },
    { code: "pl", name: "Polski" },
  ];

  return (
    <header className="hero-gradient text-primary-foreground shadow-corporate sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">MaximoDirect</div>
            <div className="hidden sm:block text-sm opacity-80">{t("company.subtitle")}</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:opacity-80 transition-corporate font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Selector */}
            <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
              <SelectTrigger className="w-[140px] bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <Languages className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground hover:bg-primary-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-muted/30 pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:opacity-80 transition-corporate font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-3 border-t border-primary-muted/30">
                <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
                  <SelectTrigger className="w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                    <Languages className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;