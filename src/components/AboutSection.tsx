
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Celma Ramalho",
    role: "CEO & Fundadora",
    bio: "Psicóloga com mais de 15 anos de experiência em saúde mental corporativa, especializada em gestão de equipes de alto desempenho.",
    image: ""
  },
  {
    name: "Filipe Teixeira",
    role: "CTO",
    bio: "Engenheiro de software com foco em tecnologias para saúde mental e bem-estar, responsável pela plataforma digital da Wellspring.",
    image: ""
  },
  {
    name: "Rodrigo Ramos",
    role: "Diretor de Operações",
    bio: "Especialista em gestão de pessoas com extensa experiência no desenvolvimento de programas de bem-estar corporativo.",
    image: ""
  },
  {
    name: "Lucas Matos",
    role: "Diretor Clínico",
    bio: "Psiquiatra com especialização em estresse e burnout no ambiente de trabalho, lidera a equipe de profissionais de saúde mental.",
    image: ""
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Quem Somos</h2>
        <p className="section-subtitle">
          Nossa equipe de especialistas em saúde mental, tecnologia e gestão está comprometida em transformar o bem-estar nas empresas
        </p>
        
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Nossa Missão</h3>
              <p className="text-lg mb-6">
                Empoderar empresas com soluções acessíveis e personalizadas de saúde mental, promovendo um ambiente de trabalho mais saudável, produtivo e engajador para seus colaboradores.
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Nossa Visão</h3>
              <p className="text-lg mb-6">
                Ser a principal plataforma de saúde mental para empresas no Brasil, transformando a cultura organizacional e promovendo o bem-estar de milhões de colaboradores.
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Nossos Valores</h3>
              <ul className="grid grid-cols-2 gap-4 text-lg mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-wellspring-500 mr-2"></span>
                  Empatia
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-wellspring-500 mr-2"></span>
                  Acessibilidade
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-wellspring-500 mr-2"></span>
                  Inovação
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-wellspring-500 mr-2"></span>
                  Confidencialidade
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-wellspring-500 mr-2"></span>
                  Qualidade
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-wellspring-500 mr-2"></span>
                  Impacto Social
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 bg-wellspring-50 rounded-2xl p-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-wellspring-100 border-4 border-white"></div>
                <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-moss-100 border-4 border-white"></div>
                <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-medium mb-4">Por que a Wellspring?</h4>
                  <p className="mb-4">
                    "Wellspring" significa fonte de água, simbolizando o bem-estar fundamental que queremos trazer para as empresas. Somos uma fonte constante de renovação para a saúde mental no ambiente corporativo.
                  </p>
                  <p className="font-medium text-wellspring-700">
                    Colaboradores saudáveis, empresas de sucesso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-3xl font-bold mb-12 text-center">Nossa Equipe</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <Avatar className="h-32 w-32 mb-4">
                {member.image ? (
                  <AvatarImage src={member.image} alt={member.name} />
                ) : (
                  <AvatarFallback className="bg-wellspring-100 text-wellspring-800 text-2xl">
                    {member.name.split(' ').map(word => word[0]).join('')}
                  </AvatarFallback>
                )}
              </Avatar>
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-wellspring-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
