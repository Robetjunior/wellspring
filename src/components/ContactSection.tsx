
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MailIcon, PhoneIcon, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos prontos para ajudar sua empresa a transformar a saúde mental dos seus colaboradores
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-wellspring-50 rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-wellspring-100 flex items-center justify-center mr-4">
                  <MailIcon className="h-5 w-5 text-wellspring-700" />
                </div>
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <a href="mailto:contato@wellspringcompass.com.br" className="text-wellspring-600 hover:underline">
                    contato@wellspringcompass.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-wellspring-100 flex items-center justify-center mr-4">
                  <PhoneIcon className="h-5 w-5 text-wellspring-700" />
                </div>
                <div>
                  <p className="font-medium text-lg">Telefone</p>
                  <a href="tel:+551199999999" className="text-wellspring-600 hover:underline">
                    +55 (11) 9999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-wellspring-100 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-wellspring-700" />
                </div>
                <div>
                  <p className="font-medium text-lg">Endereço</p>
                  <address className="not-italic">
                    Av. Paulista, 1000<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP 01310-100
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Horário de Atendimento</h4>
              <p className="mb-2">Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome completo *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Empresa *</label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Nome da empresa"
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem *</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Como podemos ajudar sua empresa?"
                  className="rounded-lg min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="wellspring-button-primary"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
