import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Code, Briefcase, CheckCircle } from "lucide-react";

export const TrainingFeatures = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Contenu Premium",
      description: "92h de formation complète avec exercices, labs et quiz"
    },
    {
      icon: Code,
      title: "Projet Fil Rouge",
      description: "Application e-commerce complète pour votre portfolio"
    },
    {
      icon: Users,
      title: "Multi-formats",
      description: "Formation en ligne, présentiel ou hybrid selon vos besoins"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Certificat professionnel reconnu par l'industrie"
    },
    {
      icon: Briefcase,
      title: "Orienté Emploi",
      description: "Compétences alignées sur les besoins réels du marché"
    },
    {
      icon: CheckCircle,
      title: "Garantie Qualité",
      description: "Support continu et mises à jour régulières du contenu"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Une formation <span className="text-primary">complète</span> et <span className="text-accent">professionnelle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour devenir un développeur Angular confirmé
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-primary to-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
