import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Code, FileQuestion, Beaker } from "lucide-react";
import { Module } from "@/data/trainingData";

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

export const ModuleCard = ({ module, onClick }: ModuleCardProps) => {
  const difficultyColors = {
    Débutant: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    Intermédiaire: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    Avancé: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
  };

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">
              {module.id}
            </div>
            <Badge className={difficultyColors[module.difficulty]}>
              {module.difficulty}
            </Badge>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {module.duration}
          </div>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {module.title}
        </CardTitle>
        <CardDescription className="text-base">
          {module.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-primary" />
              Sujets abordés
            </h4>
            <div className="flex flex-wrap gap-2">
              {module.topics.slice(0, 3).map((topic, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
              {module.topics.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{module.topics.length - 3} autres
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex gap-4 text-sm text-muted-foreground pt-2 border-t">
            {module.exercises > 0 && (
              <div className="flex items-center">
                <Code className="h-4 w-4 mr-1 text-accent" />
                {module.exercises} exercices
              </div>
            )}
            {module.labs > 0 && (
              <div className="flex items-center">
                <Beaker className="h-4 w-4 mr-1 text-primary" />
                {module.labs} lab
              </div>
            )}
            {module.quiz > 0 && (
              <div className="flex items-center">
                <FileQuestion className="h-4 w-4 mr-1 text-accent" />
                {module.quiz} questions
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
