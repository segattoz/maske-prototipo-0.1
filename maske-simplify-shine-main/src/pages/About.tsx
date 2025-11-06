import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Zap, Users, Target } from "lucide-react";

const About = () => {
  const differentials = [
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Entregamos soluções funcionais em tempo recorde, sem comprometer a qualidade.",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada solução é desenvolvida pensando em gerar ROI e melhorias mensuráveis.",
    },
    {
      icon: Users,
      title: "Suporte Humanizado",
      description: "Atendimento próximo e personalizado, sempre disponível para ajudar.",
    },
  ];

  const technologies = [
    "N8N - Automação de Workflows",
    "Supabase - Backend & Database",
    "Inteligência Artificial",
    "APIs & Integrações",
    "React & TypeScript",
    "Python & Node.js",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Sobre a Maske</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transformamos complexidade em simplicidade através de automação inteligente
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none animate-fade-up">
                <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A Maske nasceu da visão de Matheus, um desenvolvedor e entusiasta de automação que percebeu 
                  o potencial transformador da tecnologia para pequenas e médias empresas. Após anos trabalhando 
                  com tecnologia, ficou claro que muitas empresas gastavam tempo e recursos valiosos em tarefas 
                  manuais que poderiam ser automatizadas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fundada em 2023, a Maske começou com a missão de democratizar o acesso à automação inteligente. 
                  Nosso foco está em criar soluções práticas e eficientes que realmente resolvem problemas do 
                  dia a dia empresarial, sem a complexidade e custos proibitivos de grandes consultorias.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hoje, atendemos empresas de diversos segmentos, sempre com o mesmo compromisso: entregar 
                  tecnologia que funciona, com implementação rápida e suporte de qualidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                O que nos torna únicos no mercado de automação empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {differentials.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tecnologias que Utilizamos</h2>
                <p className="text-lg text-muted-foreground">
                  Trabalhamos com as melhores ferramentas do mercado para garantir soluções robustas e escaláveis
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up">
                {technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-card border border-border rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Fundador</h2>
              <div className="bg-card border border-border rounded-xl p-8 shadow-card max-w-2xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">M</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Matheus</h3>
                <p className="text-muted-foreground mb-4">Fundador & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvedor full-stack especializado em automações e inteligência artificial. 
                  Com vasta experiência em transformação digital, lidera a Maske com foco em criar 
                  soluções tecnológicas que realmente fazem diferença para as empresas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Vamos Trabalhar Juntos?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Entre em contato e descubra como podemos ajudar sua empresa a crescer com tecnologia.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Fale com a Maske</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
