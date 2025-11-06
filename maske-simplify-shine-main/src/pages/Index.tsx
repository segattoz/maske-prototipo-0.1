import { Link } from "react-router-dom";
import { ArrowRight, Bot, Link2, Layout, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Bot,
      title: "Automações com IA",
      description: "Implementamos inteligência artificial para automatizar tarefas repetitivas e otimizar processos complexos.",
    },
    {
      icon: Link2,
      title: "Integrações entre Sistemas",
      description: "Conectamos diferentes plataformas e sistemas para criar fluxos de trabalho integrados e eficientes.",
    },
    {
      icon: Layout,
      title: "Plataformas Personalizadas",
      description: "Desenvolvemos sistemas sob medida que atendem exatamente às necessidades do seu negócio.",
    },
    {
      icon: Globe,
      title: "Sites e Landing Pages",
      description: "Criamos presença digital profissional com sites modernos e páginas de conversão otimizadas.",
    },
    {
      icon: BarChart3,
      title: "Painéis e Relatórios",
      description: "Transformamos dados em insights com dashboards automáticos e relatórios inteligentes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(28, 28, 28, 0.95) 0%, rgba(28, 28, 28, 0.85) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Automação e Inteligência que Simplificam o Dia a Dia das Empresas
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Transformamos processos manuais em fluxos automáticos com tecnologia de ponta e inteligência artificial.
              Mais eficiência, menos retrabalho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <a
                  href="https://wa.me/5534998840339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Fale com a Maske
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/services">Conheça Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Quem é a Maske?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos especialistas em automação e inteligência empresarial, focados em transformar a maneira
              como pequenas e médias empresas gerenciam seus processos. Com tecnologia de ponta e uma abordagem
              personalizada, criamos soluções que realmente fazem a diferença no dia a dia dos nossos clientes.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Conheça Nossa História
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">O Que Fazemos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em automação, integrações e desenvolvimento de sistemas personalizados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
            {services.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Entre em contato conosco e descubra como nossas soluções podem otimizar seus processos
              e impulsionar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a
                  href="https://wa.me/5534998840339"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: (34) 99884-0339
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-white hover:text-primary">
                <a href="mailto:maskeautomation@gmail.com">
                  E-mail: maskeautomation@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
