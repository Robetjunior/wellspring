
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, LineChart, Heart, Calendar, Shield } from "lucide-react";

const services = [
  {
    icon: <Brain className="h-8 w-8 text-wellspring-600" />,
    title: "Avaliação e Diagnóstico",
    description: "Mapeamento completo da saúde mental na sua empresa, identificando pontos críticos e oportunidades de melhoria."
  },
  {
    icon: <Users className="h-8 w-8 text-wellspring-600" />,
    title: "Suporte Psicológico",
    description: "Acesso facilitado a psicólogos e especialistas em saúde mental para seus colaboradores, com atendimento online e presencial."
  },
  {
    icon: <LineChart className="h-8 w-8 text-wellspring-600" />,
    title: "Análise de Dados",
    description: "Relatórios anônimos e agregados sobre a saúde mental da sua equipe, permitindo decisões baseadas em evidências."
  },
  {
    icon: <Heart className="h-8 w-8 text-wellspring-600" />,
    title: "Programas de Bem-Estar",
    description: "Workshops, palestras e atividades para promover a saúde mental, redução de estresse e melhoria da qualidade de vida."
  },
  {
    icon: <Calendar className="h-8 w-8 text-wellspring-600" />,
    title: "Treinamento para Líderes",
    description: "Capacitação para gestores identificarem e lidarem adequadamente com questões de saúde mental nas suas equipes."
  },
  {
    icon: <Shield className="h-8 w-8 text-wellspring-600" />,
    title: "Prevenção de Burnout",
    description: "Estratégias específicas para prevenir e gerenciar o esgotamento profissional em ambientes de alta pressão."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossas Soluções</h2>
        <p className="section-subtitle">
          Oferecemos um conjunto completo de serviços para transformar a saúde mental na sua empresa
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="wellspring-card border-t-4 border-t-wellspring-500 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
