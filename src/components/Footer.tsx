
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inscrição realizada!",
        description: "Você foi inscrito na nossa newsletter.",
        duration: 5000,
      });
      
      // Reset form
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-wellspring-800 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="h-8 w-8 rounded-full bg-white"></span>
              <span className="font-bold text-xl">Wellspring</span>
            </div>
            <p className="mb-6 text-wellspring-100">
              Transformando a saúde mental no ambiente corporativo com soluções personalizadas e acessíveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-wellspring-700 hover:bg-wellspring-600 flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-wellspring-700 hover:bg-wellspring-600 flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-wellspring-700 hover:bg-wellspring-600 flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-wellspring-700 hover:bg-wellspring-600 flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-wellspring-100 hover:text-white transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#about" className="text-wellspring-100 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#process" className="text-wellspring-100 hover:text-white transition-colors">Como Funcionamos</a>
              </li>
              <li>
                <a href="#testimonials" className="text-wellspring-100 hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing" className="text-wellspring-100 hover:text-white transition-colors">Planos e Preços</a>
              </li>
              <li>
                <a href="#contact" className="text-wellspring-100 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a href="mailto:contato@wellspringcompass.com.br" className="text-wellspring-100 hover:text-white transition-colors">
                  contato@wellspringcompass.com.br
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+551199999999" className="text-wellspring-100 hover:text-white transition-colors">
                  +55 (11) 9999-9999
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <address className="not-italic text-wellspring-100">
                  Av. Paulista, 1000<br />
                  Bela Vista, São Paulo - SP
                </address>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="mb-4 text-wellspring-100">
              Receba novidades e conteúdo sobre saúde mental corporativa.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-l-lg rounded-r-none focus-visible:ring-wellspring-400"
                />
                <Button 
                  type="submit" 
                  className="bg-wellspring-600 hover:bg-wellspring-500 rounded-l-none flex items-center justify-center"
                  disabled={loading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-wellspring-200">
                Ao se inscrever, você concorda com nossa Política de Privacidade.
              </p>
            </form>
          </div>
        </div>
        
        <div className="py-6 border-t border-wellspring-700 text-center text-wellspring-200">
          <p>&copy; {new Date().getFullYear()} Wellspring Corporate Compass. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
