import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ModuleCard } from "@/components/ModuleCard";
import { ModuleDetail } from "@/components/ModuleDetail";
import { TrainingFeatures } from "@/components/TrainingFeatures";
import { TrainingInfo } from "@/components/TrainingInfo";
import { trainingModules, Module } from "@/data/trainingData";

const Index = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <TrainingFeatures />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {selectedModule ? (
            <ModuleDetail 
              module={selectedModule} 
              onBack={() => setSelectedModule(null)} 
            />
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Programme de formation
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  9 modules progressifs pour maîtriser Angular de A à Z
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {trainingModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    onClick={() => setSelectedModule(module)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <TrainingInfo />

      <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary-glow to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à devenir un expert Angular ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Rejoignez des centaines de développeurs qui ont transformé leur carrière grâce à cette formation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-lg shadow-xl transition-all text-lg">
              Commencer maintenant
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all text-lg">
              Contacter un formateur
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Formation Angular Professionnelle</h3>
            <p className="text-white/70">Excellence pédagogique et expertise technique</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Programme complet</a>
            <a href="#" className="hover:text-white transition-colors">Tarifs</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-white/60 text-sm">
            © 2025 Formation Angular. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
