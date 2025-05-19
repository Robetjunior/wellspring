
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Bem-estar emocional: o motor da alta performance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-wellspring-100 opacity-90 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Transforme a saúde mental em sua empresa com soluções personalizadas e acessíveis para criar um ambiente de trabalho mais saudável e produtivo.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Button className="wellspring-button-primary" size="lg" onClick={() => window.location.href = '#contact'}>
                Fale com nossa equipe <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-white text-wellspring-700 hover:bg-wellspring-100 transition-all duration-300" size="lg" onClick={() => window.location.href = '#services'}>
                Conheça nossas soluções
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <div className="relative bg-wellspring-800/40 backdrop-blur-sm rounded-2xl p-6 border border-wellspring-600/50">
              <div className="absolute inset-0 bg-gradient-to-br from-wellspring-500/20 to-wellspring-700/20 rounded-2xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6">Impacto do bem-estar mental</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-wellspring-500/30 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-lg font-bold">+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Aumento de produtividade</h4>
                      <p className="text-wellspring-100">Funcionários com saúde mental adequada são 12% mais produtivos.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-wellspring-500/30 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-lg font-bold">-</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Redução do absenteísmo</h4>
                      <p className="text-wellspring-100">Diminuição de até 30% nos dias de ausência por problemas de saúde mental.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-wellspring-500/30 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-lg font-bold">+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Melhoria na retenção</h4>
                      <p className="text-wellspring-100">Empresas com boas práticas de saúde mental têm 21% menos rotatividade.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
