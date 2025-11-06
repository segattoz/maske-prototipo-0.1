import { Bot, Link2, Layout, Globe, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Automações com IA",
      description: "Implementamos soluções de inteligência artificial que automatizam tarefas repetitivas, reduzem erros humanos e aceleram processos. Nossa expertise inclui chatbots inteligentes, análise preditiva e processamento automático de documentos.",
      examples: [
        "Chatbots para atendimento ao cliente 24/7",
        "Análise automática de documentos e extratos",
        "Triagem inteligente de e-mails e mensagens",
        "Previsão de demanda e otimização de estoque",
      ],
    },
    {
      icon: Link2,
      title: "Integrações entre Sistemas",
      description: "Conectamos diferentes plataformas e sistemas para criar um ecossistema tecnológico integrado. Eliminamos retrabalho e garantimos que seus dados fluam automaticamente entre todas as ferramentas que você usa.",
      examples: [
        "Integração de CRM com ferramentas de marketing",
        "Conexão entre sistemas de gestão e e-commerce",
        "Sincronização automática de dados financeiros",
        "Unificação de canais de comunicação",
      ],
    },
    {
      icon: Layout,
      title: "Plataformas e Sistemas Personalizados",
      description: "Desenvolvemos sistemas sob medida que atendem exatamente às necessidades específicas do seu negócio. Desde ERPs customizados até aplicações web complexas, criamos soluções escaláveis e robustas.",
      examples: [
        "Sistemas de gestão empresarial (ERP)",
        "Plataformas de e-learning e treinamento",
        "Aplicações para gestão de projetos",
        "Sistemas de controle e rastreamento",
      ],
    },
    {
      icon: Globe,
      title: "Sites e Landing Pages",
      description: "Criamos presença digital profissional com sites modernos, responsivos e otimizados para conversão. Cada projeto é desenvolvido pensando na experiência do usuário e nos seus objetivos de negócio.",
      examples: [
        "Sites institucionais corporativos",
        "Landing pages de alta conversão",
        "Portfólios e páginas de serviços",
        "Sites com integração de CRM e automações",
      ],
    },
    {
      icon: BarChart3,
      title: "Painéis e Relatórios Automáticos",
      description: "Transformamos seus dados em insights acionáveis com dashboards interativos e relatórios automáticos. Visualize métricas importantes em tempo real e tome decisões baseadas em dados concretos.",
      examples: [
        "Dashboards executivos em tempo real",
        "Relatórios automáticos de vendas e performance",
        "Análise de indicadores operacionais (KPIs)",
        "Visualização de dados e business intelligence",
      ],
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Nossos Serviços</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Soluções completas em automação, integrações e desenvolvimento de sistemas para transformar 
                a forma como sua empresa opera
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-8 shadow-card">
                      <h3 className="text-xl font-semibold mb-4">Exemplos de Aplicação</h3>
                      <ul className="space-y-3">
                        {service.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {index < services.length - 1 && (
                    <div className="mt-20 border-t border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Vamos Conversar Sobre Seu Projeto?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Entre em contato para discutir como nossas soluções podem se adaptar às necessidades 
                específicas do seu negócio.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
