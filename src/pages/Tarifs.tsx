import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building2, Mail } from "lucide-react";

const Tarifs = () => {
  const plans = [
    {
      name: "Individuel",
      icon: Users,
      price: "1 890",
      description: "Pour les développeurs en formation autonome",
      features: [
        "Accès complet aux 9 modules",
        "Projet fil rouge guidé",
        "Support par email (48h)",
        "Certificat de réussite",
        "Accès plateforme 6 mois",
        "Mises à jour incluses",
      ],
      popular: false,
    },
    {
      name: "Entreprise",
      icon: Building2,
      price: "4 500",
      description: "Pour les équipes et organisations",
      priceDetail: "par participant",
      features: [
        "Tout du plan Individuel",
        "Formation sur site ou distanciel",
        "Support prioritaire 24h",
        "Coaching personnalisé",
        "Sessions Q&A privées",
        "Adaptation contenu métier",
        "Accès plateforme 12 mois",
        "Suivi post-formation 3 mois",
      ],
      popular: true,
    },
    {
      name: "Sur mesure",
      icon: Star,
      price: "Sur devis",
      description: "Formation adaptée à vos besoins spécifiques",
      features: [
        "Programme personnalisé",
        "Durée adaptable",
        "Formateur dédié",
        "Certification officielle",
        "Accompagnement projet réel",
        "Audit de code inclus",
      ],
      popular: false,
    },
  ];

  const entrepriseAdvantages = [
    "Prise en charge OPCO possible",
    "Éligible au CPF",
    "Devis sous 48h",
    "Facturation en plusieurs fois",
    "Convention de formation fournie",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-accent/10">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4" variant="secondary">Tarifs transparents</Badge>
          <h1 className="text-5xl font-bold mb-4">Investissez dans votre expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des formules adaptées à tous les profils, du développeur autonome à l'entreprise
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.name} 
                  className={`relative ${
                    plan.popular 
                      ? "border-primary shadow-2xl shadow-primary/20 scale-105" 
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white">Le plus populaire</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="text-center pb-6 border-b">
                      <div className="text-5xl font-bold text-primary">
                        {plan.price === "Sur devis" ? plan.price : `${plan.price}€`}
                      </div>
                      {plan.priceDetail && (
                        <p className="text-sm text-muted-foreground mt-2">{plan.priceDetail}</p>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.price === "Sur devis" ? "Demander un devis" : "Commencer"}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages entreprise */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Avantages pour les entreprises</h2>
            <p className="text-muted-foreground">Facilitez le financement de vos formations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {entrepriseAdvantages.map((advantage, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{advantage}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">La formation est-elle éligible au CPF ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui, notre formation Angular est éligible au Compte Personnel de Formation (CPF) 
                  et référencée sur Mon Compte Formation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Proposez-vous des facilités de paiement ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui, pour les particuliers nous proposons un paiement en 3 fois sans frais. 
                  Pour les entreprises, nous adaptons la facturation selon vos besoins.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Que comprend le certificat de réussite ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le certificat atteste de vos compétences Angular et détaille les modules réussis. 
                  Il est reconnu par de nombreuses entreprises du secteur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary-glow to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-6">
            Besoin d'informations complémentaires ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Notre équipe est disponible pour répondre à toutes vos questions
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Contacter un conseiller
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Tarifs;
