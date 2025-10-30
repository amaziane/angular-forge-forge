import React from "react";
import { Navigation } from "@/components/Navigation";
import { trainingModules } from "@/data/trainingData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, BookOpen, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Programme = () => {
  const totalHours = trainingModules.reduce((sum, module) => sum + parseInt(module.duration), 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Programme Complet</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formation professionnelle Angular en 9 modules progressifs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">{totalHours}h</div>
                <p className="text-sm text-muted-foreground">de formation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">{trainingModules.length}</div>
                <p className="text-sm text-muted-foreground">modules</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">1</div>
                <p className="text-sm text-muted-foreground">projet fil rouge</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules détaillés */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Accordion type="single" collapsible className="space-y-4">
            {trainingModules.map((module) => (
              <AccordionItem key={module.id} value={`module-${module.id}`} className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {module.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{module.title}</h3>
                        <Badge variant={
                          module.difficulty === "Débutant" ? "secondary" :
                          module.difficulty === "Intermédiaire" ? "default" : "destructive"
                        }>
                          {module.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{module.subtitle}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </span>
                        <span>{module.topics.length} chapitres</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                  <div className="space-y-6">
                    {/* Topics */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Chapitres couverts
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {module.topics.map((topic, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Objectifs */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Objectifs pédagogiques
                      </h4>
                      <ul className="space-y-2">
                        {module.objectives.map((obj, index) => (
                          <li key={index} className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/30">
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exercices et Lab */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="bg-muted/50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Exercices pratiques</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{module.exercises} exercice{module.exercises > 1 ? 's' : ''} progressif{module.exercises > 1 ? 's' : ''}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Lab métier</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{module.labs} lab réaliste</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary-glow to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Télécharger le programme détaillé
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Recevez le syllabus complet avec les objectifs, exercices et ressources
          </p>
          <button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-lg shadow-xl transition-all text-lg">
            Télécharger le PDF
          </button>
        </div>
      </section>
    </div>
  );
};

export default Programme;
