
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Implementar o programa da Wellspring foi uma das melhores decisões que tomamos. Vimos uma redução significativa no absenteísmo e um aumento notável na satisfação dos funcionários.",
    author: "Ana Costa",
    role: "Diretora de RH",
    company: "TechSolutions Brasil"
  },
  {
    quote: "Os dados e insights que recebemos da plataforma nos permitiram tomar decisões baseadas em evidências para melhorar o bem-estar da nossa equipe. O retorno do investimento foi claro em poucos meses.",
    author: "Pedro Almeida",
    role: "CEO",
    company: "Inovação Digital"
  },
  {
    quote: "Nossos colaboradores valorizam muito o acesso a profissionais de saúde mental, especialmente com a facilidade da plataforma online. A qualidade dos especialistas é excepcional.",
    author: "Márcia Santos",
    role: "Gestora de Pessoas",
    company: "Grupo Construir"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">O Que Dizem Nossos Clientes</h2>
        <p className="section-subtitle">
          Veja como empresas já estão transformando a saúde mental de seus colaboradores com nossas soluções
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="wellspring-card animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-wellspring-300 mb-4" />
                <p className="italic text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-wellspring-100 text-wellspring-800">
                      {testimonial.author.split(' ').map(word => word[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
