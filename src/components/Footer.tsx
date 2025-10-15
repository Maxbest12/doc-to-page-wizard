const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigationLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Trainingen",
    href: "#trainingen"
  }, {
    name: "Over ons",
    href: "#over-ons"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <footer className="hero-gradient text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">MaximoDirect</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-4">
                Een initiatief van ComOps voor praktijkgerichte IBM Maximo trainingen. 
                Altijd up-to-date en direct toepasbaar in uw dagelijkse werk.
              </p>
              <p className="text-sm text-primary-foreground/60">
                Speciaal ontwikkeld voor IBM Maximo EAM en Maximo Manage (MAS 9)
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigatie</h4>
              <nav className="space-y-3">
                {navigationLinks.map(link => <div key={link.name}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate block">
                      {link.name}
                    </a>
                  </div>)}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div>
                  <p className="font-medium">MaximoDirect | ComOps</p>
                </div>
                <div>
                  <a href="mailto:maximo@comops.nl" className="hover:text-primary-foreground transition-corporate">
                    maximo@comops.nl
                  </a>
                </div>
                <div>
                  <a href="tel:+31641451785" className="hover:text-primary-foreground transition-corporate">
                    +31 (0)641451785
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
                © {currentYear} MaximoDirect - ComOps. Alle rechten voorbehouden.
              </p>
              <p className="text-primary-foreground/60 text-sm">
                IBM Maximo EAM & Maximo Manage (MAS 9) Trainingen
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;