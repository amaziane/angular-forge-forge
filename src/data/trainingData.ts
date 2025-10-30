export interface Module {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  topics: string[];
  objectives: string[];
  exercises: number;
  labs: number;
  quiz: number;
}

export const trainingModules: Module[] = [
  {
    id: 1,
    title: "Fundamentals Angular",
    subtitle: "Les bases essentielles pour démarrer",
    duration: "8h",
    difficulty: "Débutant",
    topics: [
      "Angular CLI & Setup",
      "Components & Templates",
      "Data Binding (Interpolation, Property, Event)",
      "Directives structurelles (ngIf, ngFor, ngSwitch)",
      "Communication @Input / @Output",
      "Lifecycle Hooks"
    ],
    objectives: [
      "Créer et structurer un projet Angular",
      "Maîtriser la communication entre composants",
      "Comprendre le cycle de vie des composants",
      "Utiliser les directives essentielles"
    ],
    exercises: 3,
    labs: 1,
    quiz: 10
  },
  {
    id: 2,
    title: "Services, DI & HttpClient",
    subtitle: "Architecture et communication serveur",
    duration: "10h",
    difficulty: "Intermédiaire",
    topics: [
      "Dependency Injection approfondie",
      "Services stateful et stateless",
      "HttpClient : GET, POST, PUT, DELETE",
      "Interceptors HTTP",
      "Gestion d'erreurs & retry logic",
      "Environnements et configuration"
    ],
    objectives: [
      "Maîtriser l'injection de dépendances",
      "Consommer des API REST efficacement",
      "Implémenter des interceptors",
      "Gérer les erreurs réseau professionnellement"
    ],
    exercises: 3,
    labs: 1,
    quiz: 10
  },
  {
    id: 3,
    title: "Routing & Navigation",
    subtitle: "Navigation avancée et sécurisation",
    duration: "8h",
    difficulty: "Intermédiaire",
    topics: [
      "Routes statiques et dynamiques",
      "Route parameters & query params",
      "Guards : CanActivate, CanDeactivate",
      "Lazy Loading Modules",
      "Preloading Strategies",
      "Route resolvers"
    ],
    objectives: [
      "Créer une navigation multi-pages fluide",
      "Sécuriser les routes avec Guards",
      "Optimiser les performances avec Lazy Loading",
      "Maîtriser les stratégies de préchargement"
    ],
    exercises: 3,
    labs: 1,
    quiz: 10
  },
  {
    id: 4,
    title: "TypeScript Avancé",
    subtitle: "Types professionnels pour Angular",
    duration: "6h",
    difficulty: "Intermédiaire",
    topics: [
      "Generics avancés",
      "Utility Types (Partial, Pick, Omit)",
      "Type Narrowing & Guards",
      "keyof & Mapped Types",
      "Decorators personnalisés",
      "Types conditionnels"
    ],
    objectives: [
      "Écrire du code type-safe",
      "Créer des types réutilisables",
      "Comprendre les decorators Angular",
      "Utiliser les utility types efficacement"
    ],
    exercises: 3,
    labs: 1,
    quiz: 10
  },
  {
    id: 5,
    title: "RxJS Mastery",
    subtitle: "Programmation réactive professionnelle",
    duration: "12h",
    difficulty: "Avancé",
    topics: [
      "Observables vs Promises",
      "Subject, BehaviorSubject, ReplaySubject",
      "Operators : pipe, map, filter, tap",
      "switchMap, mergeMap, concatMap, exhaustMap",
      "Gestion d'états asynchrones",
      "Error handling & retry strategies",
      "Memory leaks prevention"
    ],
    objectives: [
      "Maîtriser la programmation réactive",
      "Choisir le bon operator pour chaque cas",
      "Gérer les états complexes avec RxJS",
      "Éviter les fuites mémoire"
    ],
    exercises: 3,
    labs: 1,
    quiz: 10
  },
  {
    id: 6,
    title: "State Management (NgRx)",
    subtitle: "Architecture d'état à l'échelle",
    duration: "10h",
    difficulty: "Avancé",
    topics: [
      "Store, State & Immutability",
      "Actions & Action Creators",
      "Reducers & Pure Functions",
      "Selectors & Memoization",
      "Effects & Side Effects",
      "DevTools & Debugging",
      "Architecture Feature-based"
    ],
    objectives: [
      "Implémenter NgRx dans une app complexe",
      "Gérer l'état de manière prévisible",
      "Optimiser avec selectors memoïsés",
      "Débugger efficacement le state"
    ],
    exercises: 3,
    labs: 1,
    quiz: 10
  },
  {
    id: 7,
    title: "Angular Moderne : Signals & Performance",
    subtitle: "Nouvelle génération réactive + optimisation",
    duration: "12h",
    difficulty: "Avancé",
    topics: [
      "🎯 Angular Signals (17+) : primitives réactives",
      "Computed values & Effects",
      "Signal-based Components",
      "Migration RxJS → Signals",
      "Change Detection Strategy (OnPush vs Default)",
      "Standalone Components & Architecture moderne",
      "TrackBy functions & optimisations listes",
      "Code splitting & Lazy Loading avancé",
      "Performance profiling (Chrome DevTools)",
      "Design Patterns Angular (Facade, Adapter, Observer)"
    ],
    objectives: [
      "Maîtriser les Signals et la réactivité moderne",
      "Optimiser drastiquement les performances",
      "Appliquer les design patterns Angular professionnels",
      "Migrer du code legacy vers les standards modernes"
    ],
    exercises: 4,
    labs: 1,
    quiz: 12
  },
  {
    id: 8,
    title: "Testing Angular",
    subtitle: "Tests unitaires et d'intégration",
    duration: "8h",
    difficulty: "Intermédiaire",
    topics: [
      "Jasmine & Karma setup",
      "TestBed & Component testing",
      "Testing Services & HttpClient",
      "Mocks, Spies & Stubs",
      "Testing Observables",
      "Testing Guards & Pipes",
      "Code coverage"
    ],
    objectives: [
      "Écrire des tests unitaires robustes",
      "Tester les composants isolés",
      "Mocker les dépendances efficacement",
      "Atteindre une bonne couverture de code"
    ],
    exercises: 3,
    labs: 1,
    quiz: 10
  },
  {
    id: 9,
    title: "Projet Fil Rouge",
    subtitle: "Application e-commerce complète",
    duration: "20h",
    difficulty: "Avancé",
    topics: [
      "Architecture multi-modules",
      "Authentification complète",
      "Gestion panier avec NgRx",
      "Liste & détail produits",
      "Appels API REST",
      "Interceptors authentification",
      "Guards de protection",
      "Loading states & Error handling",
      "Tests unitaires",
      "Performance optimization"
    ],
    objectives: [
      "Construire une app production-ready",
      "Appliquer toutes les bonnes pratiques",
      "Démontrer la maîtrise d'Angular",
      "Créer un portfolio professionnel"
    ],
    exercises: 0,
    labs: 1,
    quiz: 0
  }
];

export const trainingInfo = {
  title: "Formation Angular Professionnelle",
  subtitle: "De débutant à développeur Angular confirmé",
  duration: "94 heures",
  level: "Débutant à Avancé",
  format: "En ligne & Présentiel",
  prerequisites: [
    "Bases JavaScript/TypeScript",
    "Notions HTML/CSS",
    "Git basique"
  ],
  targetAudience: [
    "Écoles & Bootcamps",
    "Développeurs front juniors",
    "Étudiants BTS / BUT / Master",
    "Reconversion professionnelle"
  ],
  skills: [
    "Construire des applications Angular maintenables avec Angular 17+",
    "Maîtriser les Signals et la réactivité moderne",
    "Utiliser RxJS professionnellement",
    "Appliquer les design patterns Angular (Facade, Observer, Adapter)",
    "Architecturer des modules scalables avec Standalone Components",
    "Optimiser les performances (Change Detection, Lazy Loading)",
    "Maîtriser la Dependency Injection avancée",
    "Tester le code efficacement",
    "Consommer des API REST avec HttpClient et Interceptors"
  ]
};
