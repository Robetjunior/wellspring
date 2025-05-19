
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    description: "Ideal para pequenas empresas que querem começar a investir na saúde mental.",
    features: [
      "Acesso à plataforma digital",
      "2 sessões de terapia online por mês",
      "Conteúdo psicoeducativo",
      "Relatórios trimestrais",
      "Suporte por e-mail"
    ],
    recommended: false,
    buttonText: "Começar agora"
  },
  {
    name: "Empresarial",
    description: "Perfeito para empresas de médio porte que buscam uma solução completa.",
    features: [
      "Tudo do plano Essencial",
      "4 sessões de terapia online por mês",
      "Workshops mensais de bem-estar",
      "Treinamento para líderes",
      "Diagnóstico personalizado",
      "Relatórios mensais",
      "Suporte prioritário"
    ],
    recommended: true,
    buttonText: "Contrate agora"
  },
  {
    name: "Corporativo",
    description: "Solução sob medida para grandes corporações com necessidades específicas.",
    features: [
      "Tudo do plano Empresarial",
      "Número ilimitado de sessões",
      "Profissionais dedicados",
      "Consultoria especializada",
      "Programas personalizados",
      "Integração com sistemas internos",
      "Gestor de conta exclusivo"
    ],
    recommended: false,
    buttonText: "Falar com consultor"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Planos e Preços</h2>
        <p className="section-subtitle">
          Soluções flexíveis que se adaptam ao tamanho e necessidades da sua empresa
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`wellspring-card h-full flex flex-col animate-fade-up ${plan.recommended ? 'border-wellspring-500 border-2 shadow-xl' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {plan.recommended && (
                <div className="bg-wellspring-500 text-white text-sm font-medium py-1 px-4 rounded-t-xl text-center">
                  Mais popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-wellspring-600 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={
                    plan.recommended 
                    ? "wellspring-button-primary w-full" 
                    : "wellspring-button-outline w-full"
                  }
                  onClick={() => window.location.href = '#contact'}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg">
            Precisa de uma solução específica para sua empresa?
          </p>
          <Button 
            className="wellspring-button-secondary mt-4" 
            onClick={() => window.location.href = '#contact'}
          >
            Entre em contato para um plano personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
