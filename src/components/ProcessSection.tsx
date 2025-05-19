
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Realizamos uma avaliação completa da saúde mental na sua empresa através de questionários anônimos e entrevistas.",
    details: [
      "Mapeamento do nível de estresse da equipe",
      "Identificação de fatores de risco",
      "Análise de indicadores existentes"
    ]
  },
  {
    number: "02",
    title: "Plano Personalizado",
    description: "Desenvolvemos uma estratégia sob medida para atender às necessidades específicas da sua empresa.",
    details: [
      "Seleção de serviços adequados ao seu perfil",
      "Definição de metas e indicadores",
      "Cronograma de implementação"
    ]
  },
  {
    number: "03",
    title: "Implementação",
    description: "Colocamos em prática os programas e serviços de saúde mental de forma gradual e estruturada.",
    details: [
      "Treinamento para líderes e gestores",
      "Acesso à plataforma para os colaboradores",
      "Início dos atendimentos e programas"
    ]
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Monitoramos os resultados e ajustamos as estratégias para garantir a melhoria contínua.",
    details: [
      "Relatórios periódicos de utilização",
      "Pesquisas de satisfação e impacto",
      "Reuniões de alinhamento com gestores"
    ]
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-wellspring-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Como Funcionamos</h2>
        <p className="section-subtitle">
          Nosso processo é estruturado para garantir resultados efetivos na saúde mental dos seus colaboradores
        </p>
        
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Arrow connecting steps (only between items) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-16 z-10">
                  <ArrowRight className="text-wellspring-300 h-8 w-8" />
                </div>
              )}
              
              {/* Step card */}
              <div className="wellspring-card relative h-full">
                <div className="bg-wellspring-600 text-white text-lg font-bold h-10 w-10 rounded-full flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-wellspring-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
