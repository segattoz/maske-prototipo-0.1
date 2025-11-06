import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Maske</h3>
            <p className="text-sm text-primary-foreground/80 max-w-md">
              Automação e Inteligência que Simplificam o Dia a Dia das Empresas.
              Transformamos processos complexos em soluções eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5534998840339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  <Phone size={16} />
                  <span>(34) 99884-0339</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:maskeautomation@gmail.com"
                  className="flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  <Mail size={16} />
                  <span>maskeautomation@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/maske.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  <Instagram size={16} />
                  <span>@maske.ai</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Maske. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Desenvolvido com tecnologia e dedicação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
