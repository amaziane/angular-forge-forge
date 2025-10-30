import { Module } from "@/data/trainingData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, Clock, Target } from "lucide-react";

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
}

export const ModuleDetail = ({ module, onBack }: ModuleDetailProps) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-4 hover:bg-muted"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour aux modules
      </Button>

      <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg w-14 h-14 flex items-center justify-center font-bold text-2xl">
            {module.id}
          </div>
          <div>
            <Badge className="bg-white/20 text-white border-white/30 mb-2">
              {module.difficulty}
            </Badge>
            <div className="flex items-center text-white/90 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {module.duration}
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">{module.title}</h1>
        <p className="text-xl text-white/90">{module.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5 text-primary" />
              Objectifs pédagogiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {module.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
              Contenu pédagogique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm text-muted-foreground">PRATIQUE</h4>
              <div className="flex flex-wrap gap-2">
                {module.exercises > 0 && (
                  <Badge variant="secondary">
                    {module.exercises} exercices progressifs
                  </Badge>
                )}
                {module.labs > 0 && (
                  <Badge variant="secondary">
                    {module.labs} lab métier réaliste
                  </Badge>
                )}
                {module.quiz > 0 && (
                  <Badge variant="secondary">
                    Quiz de {module.quiz} questions
                  </Badge>
                )}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm text-muted-foreground">LIVRABLES</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ README pédagogique détaillé</li>
                <li>✓ Exemples de code commentés</li>
                <li>✓ Corrections dans /solutions</li>
                <li>✓ Mini-fiche mémo PDF</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sujets abordés en détail</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {module.topics.map((topic, index) => (
              <div 
                key={index}
                className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span className="font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button size="lg" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
          Commencer ce module
        </Button>
        <Button size="lg" variant="outline" className="flex-1">
          Télécharger le syllabus
        </Button>
      </div>
    </div>
  );
};
