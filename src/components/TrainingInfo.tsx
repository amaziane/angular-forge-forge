import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trainingInfo } from "@/data/trainingData";
import { Target, Users, CheckCircle2, BookCheck } from "lucide-react";

export const TrainingInfo = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Informations sur la formation</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="secondary" className="text-base py-2 px-4">
              {trainingInfo.duration}
            </Badge>
            <Badge variant="secondary" className="text-base py-2 px-4">
              {trainingInfo.level}
            </Badge>
            <Badge variant="secondary" className="text-base py-2 px-4">
              {trainingInfo.format}
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookCheck className="mr-2 h-5 w-5 text-primary" />
                Prérequis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {trainingInfo.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-accent" />
                Public cible
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {trainingInfo.targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Compétences acquises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {trainingInfo.skills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
