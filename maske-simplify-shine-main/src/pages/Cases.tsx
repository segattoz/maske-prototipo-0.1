import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cases = () => {
  const cases = [
    {
      company: "Barbearia De Castro's",
      industry: "Serviços",
      challenge: "Sistema de agendamento manual causava conflitos de horários e perda de clientes. Falta de histórico de atendimentos e dificuldade em gerenciar múltiplos barbeiros.",
      solution: "Implementamos um sistema completo de agendamento online integrado com WhatsApp, gestão de profissionais e histórico de clientes. Automações para lembretes e confirmações.",
      result: "Redução de 80% em conflitos de agendamento, aumento de 40% na retenção de clientes e economia de 15 horas semanais em tarefas administrativas.",
    },
    {
      company: "Transportadora Cocal",
      industry: "Logística",
      challenge: "Controle de frotas e rastreamento de entregas feitos manualmente em planilhas. Dificuldade em consolidar informações de múltiplos veículos e gerar relatórios precisos.",
      solution: "Desenvolvemos plataforma de gestão logística com rastreamento em tempo real, integração com APIs de geolocalização e painéis automáticos de performance operacional.",
      result: "Visibilidade em tempo real de 100% da frota, redução de 60% no tempo de geração de relatórios e melhoria de 35% na eficiência das rotas.",
    },
    {
      company: "Transportadora FACCHIN",
      industry: "Logística",
      challenge: "Processos de cotação e faturamento lentos e propensos a erros. Comunicação descentralizada com clientes causava retrabalho e insatisfação.",
      solution: "Criamos sistema integrado de cotação automática, gestão de documentos fiscais e portal do cliente. Integrações com sistemas contábeis e notificações automáticas.",
      result: "Tempo de cotação reduzido em 70%, eliminação de 90% dos erros de faturamento e aumento de 50% na satisfação dos clientes.",
    },
    {
      company: "Sierve Software",
      industry: "Tecnologia",
      challenge: "Empresa de software precisava otimizar processos internos de desenvolvimento e melhorar a comunicação entre equipes distribuídas.",
      solution: "Implementamos automações de CI/CD, integrações entre ferramentas de desenvolvimento e dashboards de acompanhamento de projetos em tempo real.",
      result: "Ciclos de desenvolvimento 45% mais rápidos, redução de 65% em bugs em produção e melhoria significativa na colaboração entre equipes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Cases de Sucesso</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conheça como ajudamos empresas a transformar seus processos e alcançar resultados extraordinários 
                através de automação e tecnologia
              </p>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cases.map((caseItem, index) => (
                <div 
                  key={index}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CaseCard {...caseItem} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="text-5xl font-bold mb-2">70%</div>
                <div className="text-muted-foreground">Redução Média de Tempo</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Seu Negócio Pode Ser o Próximo Case de Sucesso
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Vamos conversar sobre os desafios da sua empresa e criar uma solução personalizada 
                que gere resultados reais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a 
                    href="https://wa.me/5534998840339" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Enviar Mensagem</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
