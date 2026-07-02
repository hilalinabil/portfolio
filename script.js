/**
 * ==========================================================================
 * PORTFOLIO DATA OBJECT
 * The entire website dynamically renders from this configuration object.
 * To update the portfolio details, modify this object.
 * ==========================================================================
 */
const categoryTranslations = {
    en: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        cloud: "Cloud",
        devops: "DevOps",
        tools: "Tools"
    },
    fr: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Bases de données",
        cloud: "Cloud",
        devops: "DevOps",
        tools: "Outils"
    }
};

const skillsData = [
    { name: "Java & Spring Boot 3", category: "Backend", level: 90, icon: "server" },
    { name: "Spring Security & JWT", category: "Backend", level: 88, icon: "lock" },
    { name: "Node.js & Express.js", category: "Backend", level: 85, icon: "cpu" },
    { name: "PHP & Symfony 7", category: "Backend", level: 80, icon: "globe" },
    { name: "Python (FastAPI / ML)", category: "Backend", level: 82, icon: "terminal" },
    { name: "C++ (OOP Foundations)", category: "Backend", level: 80, icon: "code" },
    { name: "React.js", category: "Frontend", level: 85, icon: "code" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 90, icon: "code-2" },
    { name: "HTML5 & CSS3", category: "Frontend", level: 92, icon: "layers" },
    { name: "Bootstrap / Tailwind CSS", category: "Frontend", level: 88, icon: "palette" },
    { name: "PyQt5 (Desktop GUI)", category: "Frontend", level: 80, icon: "monitor" },
    { name: "MongoDB (NoSQL)", category: "Database", level: 85, icon: "database" },
    { name: "MySQL & PostgreSQL", category: "Database", level: 84, icon: "database" },
    { name: "Hibernate ORM / JPA", category: "Database", level: 88, icon: "layers" },
    { name: "REST APIs & Web Services", category: "Cloud", level: 90, icon: "shuffle" },
    { name: "Docker Containerization", category: "DevOps", level: 80, icon: "box" },
    { name: "Nginx Reverse Proxy", category: "DevOps", level: 75, icon: "shuffle" },
    { name: "Unix & Bash Shell", category: "DevOps", level: 82, icon: "terminal" },
    { name: "Git & GitHub", category: "Tools", level: 90, icon: "git-branch" },
    { name: "Maven / Composer / npm", category: "Tools", level: 85, icon: "package" },
    { name: "Insomnia / Postman", category: "Tools", level: 88, icon: "check-circle" }
];

const portfolioData = {
    en: {
        fullName: "Nabil Hilali",
        title: "Software Engineer",
        email: "hilali.nabil.pro@gmail.com",
        phone: "+212 649 348 337",
        github: "https://github.com/hilalinabil",
        linkedin: "https://linkedin.com/in/hilali-nabil-127639355",
        location: "Casablanca, Morocco",
        bio: "Software engineering student at EMSI Casablanca, specializing in full-stack web architectures, secure enterprise backend systems, and intelligent algorithm design. Experienced with Java/Spring Boot, Node.js, PHP/Symfony, and Python/Q-Learning optimization solvers.",
        stats: [
            { value: "2", label: "Internships Completed" },
            { value: "16", label: "Projects Completed" },
            { value: "30+", label: "Tech Stack Tools" },
            { value: "5", label: "Certifications" }
        ],
        skills: skillsData,
        projects: [
            {
                title: "GIS Fiber Optic Network Management",
                category: "Full Stack",
                description: "A secure, role-based live geographic topology platform and analytical dashboard for managing enterprise telecom infrastructure.",
                technologies: ["Spring Boot 3", "MongoDB", "React.js", "Leaflet", "Tailwind CSS 4", "Docker"],
                features: [
                    "GIS mapping using Leaflet & OpenStreetMap for real-time SVG status-glow nodes",
                    "Stateful RBAC security layer using Spring Security and JSON Web Tokens (JWT)",
                    "Live network analytics dashboard using Recharts for utilization and capacity distribution",
                    "Persistent administrative audit log for field activities and fiber cuts"
                ],
                github: "https://github.com/hilalinabil/telecom_application",
                demo: "#",
                image: "assets/project1.png"
            },
            {
                title: "Clean Architecture E-Commerce Core",
                category: "Backend",
                description: "A highly decoupled and scalable DDD e-commerce platform core built using Hexagonal Architecture patterns.",
                technologies: ["Java", "Spring Boot 3", "Spring Security", "Spring Data JPA", "MySQL", "Hibernate"],
                features: [
                    "Domain-Driven Design with 10 pure Java domain entities completely decoupled from frameworks",
                    "Swappable database adapter layer supporting seamless switching between MySQL and H2",
                    "Dual-segmented JWT filter chains separating Admin and Client API routes",
                    "Non-blocking asynchronous email notification pipelines running on Spring task execution pools"
                ],
                github: "https://github.com/hilalinabil/realPrjt_backend",
                demo: "#",
                image: "assets/project2.png"
            },
            {
                title: "AI-Powered Freelance Marketplace",
                category: "Full Stack",
                description: "A microservices-backed freelance matching platform with glassmorphic UI and real-time AI skill alignment service.",
                technologies: ["Spring Boot 3", "Spring Security", "MySQL", "FastAPI", "Python", "Thymeleaf", "Bootstrap 5"],
                features: [
                    "FastAPI Python microservice for semantic skill matching with Jaccard similarity fallback in Java",
                    "Aesthetically premium glassmorphic dark-theme UI built using server-side Thymeleaf templates",
                    "Dual SecurityFilterChains isolating standard user workflows from administrative panels",
                    "Automated database seeding of 24 core technology skills and 8 categories at server startup"
                ],
                github: "https://github.com/hilalinabil/freelance_Plat",
                demo: "#",
                image: "assets/project3.png"
            },
            {
                title: "Hexagonal Invoice Management Engine",
                category: "Backend",
                description: "A modular, clean-architecture enterprise billing engine enforcing strict domain boundaries and transaction safety.",
                technologies: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "H2 Database", "Hibernate", "Lombok"],
                features: [
                    "Hexagonal (Ports & Adapters) Architecture completely isolating core domain from frameworks",
                    "High-precision billing engine utilizing BigDecimal rounding configurations to eliminate float errors",
                    "Stateless JWT authentication enforcing custom roles (ROLE_ADMIN vs. ROLE_USER)",
                    "Exposed CRUD and patch endpoints tracking invoice lifecycle states (Pending, Paid, Rejected)"
                ],
                github: "https://github.com/hilalinabil/invoice_management",
                demo: "#",
                image: "assets/project4.png"
            },
            {
                title: "AI-Powered Task Management API",
                category: "Backend",
                description: "A task management REST API integrated with OpenAI GPT-4o-mini to provide intelligent priority analysis and chat guidance.",
                technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "OpenAI API", "JWT", "bcrypt"],
                features: [
                    "OpenAI GPT-4o-mini integration for productivity insights and customized recommendations",
                    "Context-aware AI chat assistant with role prompting for task organization advice",
                    "Secure JWT-based bearer authentication with 7-day expiration and 10-round bcrypt hashing",
                    "Full CRUD task management with user-specific data isolation and status/priority filtering"
                ],
                github: "https://github.com/hilalinabil/task_manager_AI",
                demo: "#",
                image: "assets/project5.png"
            },
            {
                title: "Intelligent Warehouse Route Optimizer",
                category: "Full Stack",
                description: "An industrial-grade warehouse management system featuring PyQt5 GUI and Q-learning pathfinding optimization.",
                technologies: ["Python 3", "PyQt5", "Q-Learning", "SQLite", "MongoDB", "Pandas"],
                features: [
                    "Q-Learning reinforcement learning algorithm to optimize picker routes and minimize travel distance",
                    "Multi-threaded background worker threads (QThread) to ensure non-blocking UI rendering",
                    "Multi-database connection support (SQLite, MongoDB, MySQL, PostgreSQL) using factory pattern",
                    "Excel data import/export pipeline for batch shipments, products, and order histories"
                ],
                github: "https://github.com/hilalinabil/stage",
                demo: "#",
                image: "assets/project6.png"
            },
            {
                title: "Hospital Management Desktop App",
                category: "Full Stack",
                description: "A medical records desktop application using JavaFX and Hibernate ORM for relational mapping.",
                technologies: ["Java", "JavaFX", "Hibernate ORM", "JPA", "MySQL", "Lombok"],
                features: [
                    "Complex domain model with 6 JPA entities establishing bidirectional relationships and cascade operations",
                    "Treatments mapping utilizing EAGER fetch strategy and unique constraints on clinical records",
                    "Modular service layer interfaces with custom AppException handling and data validation helpers",
                    "Lombok annotations integrated to eliminate boilerplate code and reduce codebase footprint"
                ],
                github: "https://github.com/hilalinabil/Javafx",
                demo: "#",
                image: "assets/project7.png"
            },
            {
                title: "Real-Time Chat App Backend",
                category: "Backend",
                description: "A WebSocket-enabled messaging backend supporting bidirectional message broadcasting and user-specific rooms.",
                technologies: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "Mongoose", "JWT", "Zod"],
                features: [
                    "Socket.IO integration for sub-millisecond event-driven bidirectional message transmissions",
                    "Input data validation and sanitization using Zod schemas to protect backend APIs",
                    "Secure REST API endpoints with JWT bearer validation and 1-hour expiration limits",
                    "Abstracted service layer with placeholders for Firebase push and AWS S3 storage integrations"
                ],
                github: "https://github.com/hilalinabil/chat_backend",
                demo: "#",
                image: "assets/project8.png"
            },
            {
                title: "Interactive Mermaid Diagram Viewer",
                category: "Frontend",
                description: "A technical documentation viewer featuring Mermaid.js rendering engine and dark-theme aesthetics.",
                technologies: ["JavaScript (ES6+)", "Mermaid.js", "HTML5", "CSS3", "Intersection Observer API"],
                features: [
                    "Renders 7 UML diagrams (class, sequence, state, ER, etc.) with responsive fullscreen modal toggle",
                    "Intersection Observer API for lazy-loading SVG rendering to improve initial page load speed",
                    "Premium dark-themed user interface driven by custom CSS variables and transition effects",
                    "Keyboard event listeners (Escape key) and click-outside listeners for accessibility"
                ],
                github: "https://github.com/hilalinabil/Diagrams_repo",
                demo: "#",
                image: "assets/project9.png"
            },
            {
                title: "E-Commerce REST API Core",
                category: "Backend",
                description: "A modular Node.js/MongoDB backend service managing user authentication, product catalogs, shopping carts, and checkout orders.",
                technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
                features: [
                    "Modular architecture separating auth, product catalogs, shopping carts, and order placing",
                    "Role-based authorization middleware restricting product adjustments and order status audits to Admins",
                    "Dynamic shopping cart mechanics linking products using Mongoose population and references",
                    "Automated checkout order processing compiling total values using JS reduce functions"
                ],
                github: "https://github.com/hilalinabil/E-commerce",
                demo: "#",
                image: "assets/project10.png"
            },
            {
                title: "React Task Manager",
                category: "Frontend",
                description: "An interactive, client-side task tracking dashboard with persistent state sync and analytics visualizations.",
                technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "localStorage API"],
                features: [
                    "Local storage synchronization using React hooks (useState, useEffect) for session persistence",
                    "Statistics analytics tracking total, completed, and active count updates dynamically",
                    "Inline text editing with keyboard events (Enter key to submit, Escape to close)",
                    "Mobile-responsive grid adapting card structures from 3 columns to 1 seamlessly"
                ],
                github: "https://github.com/hilalinabil/frontend_task_manager",
                demo: "#",
                image: "assets/project11.png"
            },
            {
                title: "Symfony Product Management App",
                category: "Full Stack",
                description: "A full-stack MVC application built using PHP 8.2 and Symfony 7 framework for inventory administration.",
                technologies: ["PHP 8.2", "Symfony 7.2", "Doctrine ORM", "Twig", "MySQL", "Composer"],
                features: [
                    "Twig templates providing server-side HTML rendering linked to Symfony Form components",
                    "RESTful attributes-based routing with built-in CSRF token security validation",
                    "Doctrine migrations bundle tracking structural adjustments to the database tables",
                    "Doctrine Entity repositories optimizing standard SQL search queries"
                ],
                github: "https://github.com/hilalinabil/Prodprjt",
                demo: "#",
                image: "assets/project12.png"
            },
            {
                title: "Spring Boot Task Manager",
                category: "Backend",
                description: "A multi-layered task management API using Spring Boot and JPA relational mappings.",
                technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "Lombok", "Maven"],
                features: [
                    "Service layer abstraction isolating business rules from standard controller routers",
                    "One-to-many database mappings with cascade deletion structures",
                    "Immutable Java records representing clean DTOs (Data Transfer Objects) for decoupling API layer",
                    "Automated LocalDateTime timestamp generation and UUID identification"
                ],
                github: "https://github.com/hilalinabil/Spring_prjt",
                demo: "#",
                image: "assets/project13.png"
            },
            {
                title: "Object-Oriented Banking System",
                category: "Backend",
                description: "A local C++ application implementing hierarchical account architectures and core bank transactions.",
                technologies: ["C++", "Visual Studio", "OOP Principles"],
                features: [
                    "Hierarchical class structure utilizing inheritance and polymorphism for 3 account tiers",
                    "Deposit, withdrawal, and balance modifications checking input validation conditions",
                    "Centralized AccountHandler class managing CRUD behaviors and random account identification",
                    "Special interest rate calculations applied dynamically to premium accounts"
                ],
                github: "https://github.com/hilalinabil/OOP_BANK",
                demo: "#",
                image: "assets/project14.png"
            },
            {
                title: "Node.js RESTful CRUD API",
                category: "Backend",
                description: "A simple, clean-code RESTful API demonstrating MVC architecture patterns with Express and MongoDB.",
                technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "dotenv"],
                features: [
                    "MVC architecture pattern cleanly separating routing controllers and database schemas",
                    "Insomnia verified REST endpoints supporting full user lifecycle operations",
                    "CORS middleware configurations enabling smooth cross-origin client connections",
                    "Mongoose models tracking registration times automatically"
                ],
                github: "https://github.com/hilalinabil/crud_api",
                demo: "#",
                image: "assets/project15.png"
            },
        
        ],
        experiences: [
            {
                position: "Prompt Engineer (Freelance)",
                company: "Self-Employed / Remote",
                duration: "Oct 2024 - Jan 2025",
                description: "Designed, engineered, and evaluated high-fidelity prompt architectures and system instructions to elicit structured JSON payloads from Large Language Models (LLMs).",
                achievements: [
                    "Engineered highly structured, production-grade prompts using advanced methodologies (Few-Shot, Chain-of-Thought, and role-based constraints) to consistently yield high-value, deterministic LLM outputs.",
                    "Designed and validated complex JSON schema specifications for model inputs/outputs, establishing seamless parsing pipelines and minimizing runtime deserialization errors.",
                    "Conducted rigorous qualitative and quantitative evaluations of model responses, establishing benchmark parameters to significantly reduce hallucination rates and output latency.",
                    "Optimized token consumption and context window allocation through prompt chaining, system prompt tuning, and structured formatting."
                ]
            },
            {
                position: "Software Engineering Intern",
                company: "Entreprise de Transport",
                duration: "Jul 2025 - Sep 2025",
                description: "Developed an intelligent desktop application for warehouse management and route optimization to reduce logistics costs.",
                achievements: [
                    "Designed and implemented a PyQt5 desktop dashboard supporting SQLite, MongoDB, MySQL, and PostgreSQL databases using the factory design pattern.",
                    "Integrated Q-Learning reinforcement learning algorithms for automated warehouse route optimization, reducing picker travel distance.",
                    "Implemented background worker threads using QThread to ensure a non-blocking, responsive GUI during intensive calculations."
                ]
            },
            {
                position: "Engineering Intern",
                company: "Office National de l'Électricité et de l'Eau Potable (ONEE)",
                duration: "Jul 2023 - Sep 2023",
                description: "Observed core industrial practices and contributed to database design for energy production analytics.",
                achievements: [
                    "Contributed to the design and implementation of a database system to track and analyze national average energy production metrics.",
                    "Assisted in data collection, cleaning, and preprocessing to support strategic decision-making in the energy sector.",
                    "Gained hands-on experience with industrial operations, workflow scheduling, and data analysis."
                ]
            }
        ],
        education: [
            {
                degree: "Diplôme d'Ingénieur en Informatique et Génie Logiciel",
                university: "École Marocaine des Sciences de l'Ingénieur (EMSI), Casablanca",
                duration: "2024 - Present",
                coursework: ["Software Engineering", "Full-Stack Development", "Databases & ORM", "Clean Architecture", "Systems Design"]
            },
            {
                degree: "Génie Systèmes Énergétiques",
                university: "École Nationale Supérieure d'Arts et Métiers (ENSAM), Rabat",
                duration: "2022 - 2024",
                coursework: ["Systems Engineering", "Mathematical Modeling", "Thermodynamics", "Numerical Analysis", "Control Systems"]
            },
            {
                degree: "Classes Préparatoires aux Grandes Écoles (CPGE) - PSI",
                university: "Lycée Mohammed V, Casablanca",
                duration: "2019 - 2022",
                coursework: ["Advanced Mathematics", "Physics & Chemistry", "Engineering Sciences", "Computer Science Foundations"]
            },
            {
                degree: "Baccalauréat en Sciences Mathématiques-A",
                university: "Lycée JAFAAR EL FASSI EL FIHRI, Casablanca",
                duration: "2019",
                coursework: ["Advanced Mathematics", "Physics & Chemistry", "French & English"]
            }
        ],
        certifications: [
            {
                title: "Python for Data Science, AI & Development",
                issuer: "IBM (Coursera)",
                date: "Dec 2023",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_python_ds_ibm"
            },
            {
                title: "Interactivity with JavaScript",
                issuer: "University of Michigan (Coursera)",
                date: "Jan 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_js_interactivity_michigan"
            },
            {
                title: "The Unix Workbench",
                issuer: "Johns Hopkins University (Coursera)",
                date: "Jan 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_unix_workbench_jhu"
            },
            {
                title: "Introduction à la programmation orientée objet (en C++)",
                issuer: "EPFL (Coursera)",
                date: "Jan 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_cpp_oop_epfl"
            },
            {
                title: "Introduction to Big Data",
                issuer: "University of California San Diego (Coursera)",
                date: "Jun 2026",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_intro_big_data_ucsd"
            }
        ]
    },
    fr: {
        fullName: "Nabil Hilali",
        title: "Ingénieur Logiciel",
        email: "hilali.nabil.pro@gmail.com",
        phone: "+212 649 348 337",
        github: "https://github.com/hilalinabil",
        linkedin: "https://linkedin.com/in/hilali-nabil-127639355",
        location: "Casablanca, Maroc",
        bio: "Étudiant en ingénierie logicielle à l'EMSI Casablanca, spécialisé dans les architectures web full-stack, les systèmes backend d'entreprise sécurisés et la conception d'algorithmes intelligents. Expérimenté avec Java/Spring Boot, Node.js, PHP/Symfony et les solveurs d'optimisation Python/Q-Learning.",
        stats: [
            { value: "2", label: "Stages réalisés" },
            { value: "16", label: "Projets finalisés" },
            { value: "30+", label: "Outils maîtrisés" },
            { value: "5", label: "Certifications obtenues" }
        ],
        skills: skillsData,
        projects: [
            {
                title: "Gestion de Réseau de Fibre Optique SIG",
                category: "Full Stack",
                description: "Une plateforme sécurisée de topologie géographique en temps réel avec contrôle d'accès basé sur les rôles et tableau de bord analytique pour la gestion des infrastructures télécom.",
                technologies: ["Spring Boot 3", "MongoDB", "React.js", "Leaflet", "Tailwind CSS 4", "Docker"],
                features: [
                    "Cartographie SIG utilisant Leaflet et OpenStreetMap avec des nœuds lumineux SVG en temps réel",
                    "Couche de sécurité RBAC à base d'états avec Spring Security et JSON Web Tokens (JWT)",
                    "Tableau de bord d'analyse réseau en temps réel utilisant Recharts pour le suivi de l'utilisation et de la capacité",
                    "Journal d'audit administratif persistant pour le suivi des activités de terrain et des coupures de fibre"
                ],
                github: "https://github.com/hilalinabil/telecom_application",
                demo: "#",
                image: "assets/project1.png"
            },
            {
                title: "Cœur E-Commerce en Architecture Propre",
                category: "Backend",
                description: "Un cœur de plateforme e-commerce hautement découplé et évolutif basé sur le DDD et l'architecture hexagonale.",
                technologies: ["Java", "Spring Boot 3", "Spring Security", "Spring Data JPA", "MySQL", "Hibernate"],
                features: [
                    "Conception guidée par le domaine (DDD) avec 10 entités de domaine Java pures découplées des frameworks",
                    "Adaptateur de base de données interchangeable permettant de basculer entre MySQL et H2 sans friction",
                    "Chaînes de filtres JWT doublement segmentées séparant les routes API Admin et Client",
                    "Pipelines de notifications par e-mail asynchrones non bloquants basés sur des pools d'exécution Spring"
                ],
                github: "https://github.com/hilalinabil/realPrjt_backend",
                demo: "#",
                image: "assets/project2.png"
            },
            {
                title: "Plateforme de Freelance Assistée par IA",
                category: "Full Stack",
                description: "Une plateforme de mise en relation de freelances avec interface glassmorphic et service d'alignement de compétences par IA.",
                technologies: ["Spring Boot 3", "Spring Security", "MySQL", "FastAPI", "Python", "Thymeleaf", "Bootstrap 5"],
                features: [
                    "Microservice Python FastAPI pour l'alignement sémantique des compétences avec repli Java (indice de Jaccard)",
                    "Interface sombre glassmorphic haut de gamme conçue avec des templates Thymeleaf",
                    "Chaînes de filtres de sécurité doubles isolant les workflows utilisateurs des panneaux d'administration",
                    "Initialisation automatique de la base de données avec 24 compétences clés et 8 catégories au démarrage"
                ],
                github: "https://github.com/hilalinabil/freelance_Plat",
                demo: "#",
                image: "assets/project3.png"
            },
            {
                title: "Moteur de Facturation Hexagonal",
                category: "Backend",
                description: "Un moteur de facturation d'entreprise modulaire en architecture propre garantissant des frontières de domaine strictes et des transactions sécurisées.",
                technologies: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "H2 Database", "Hibernate", "Lombok"],
                features: [
                    "Architecture hexagonale (Ports et Adaptateurs) isolant entièrement le domaine des frameworks",
                    "Calcul de facturation haute précision via BigDecimal pour éliminer les erreurs d'arrondi sur les flottants",
                    "Authentification JWT sans état avec rôles personnalisés (ROLE_ADMIN vs ROLE_USER)",
                    "Endpoints CRUD et PATCH exposés pour le suivi des états du cycle de vie des factures"
                ],
                github: "https://github.com/hilalinabil/invoice_management",
                demo: "#",
                image: "assets/project4.png"
            },
            {
                title: "API de Gestion de Tâches par IA",
                category: "Backend",
                description: "Une API REST de gestion de tâches intégrée avec OpenAI GPT-4o-mini pour l'analyse intelligente des priorités et l'aide à la planification.",
                technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "OpenAI API", "JWT", "bcrypt"],
                features: [
                    "Intégration d'OpenAI GPT-4o-mini pour des conseils de productivité et des recommandations personnalisées",
                    "Assistant de chat IA contextuel avec invites de rôle pour l'aide à l'organisation des tâches",
                    "Authentification par jeton porteur JWT sécurisée (expiration 7 jours) et hachage bcrypt (10 passes)",
                    "Gestion complète des tâches (CRUD) avec isolation des données utilisateur et filtrage par statut/priorité"
                ],
                github: "https://github.com/hilalinabil/task_manager_AI",
                demo: "#",
                image: "assets/project5.png"
            },
            {
                title: "Optimisateur Intelligent de Trajets d'Entrepôt",
                category: "Full Stack",
                description: "Un système de gestion d'entrepôt industriel avec interface PyQt5 et optimisation des chemins par Q-learning.",
                technologies: ["Python 3", "PyQt5", "Q-Learning", "SQLite", "MongoDB", "Pandas"],
                features: [
                    "Algorithme d'apprentissage par renforcement Q-Learning pour optimiser les trajets et minimiser les distances",
                    "Fils d'exécution en arrière-plan (QThread) pour garantir un rendu fluide et non bloquant de l'interface",
                    "Support multi-bases de données (SQLite, MongoDB, MySQL, PostgreSQL) via le pattern Factory",
                    "Pipeline d'import/export Excel pour le traitement par lots des expéditions, produits et historiques"
                ],
                github: "https://github.com/hilalinabil/stage",
                demo: "#",
                image: "assets/project6.png"
            },
            {
                title: "Application de Gestion Hospitalière",
                category: "Full Stack",
                description: "Une application de bureau pour les dossiers médicaux utilisant JavaFX et Hibernate ORM pour le mapping relationnel.",
                technologies: ["Java", "JavaFX", "Hibernate ORM", "JPA", "MySQL", "Lombok"],
                features: [
                    "Modèle de domaine complexe avec 6 entités JPA établissant des relations bidirectionnelles et des opérations en cascade",
                    "Mise en correspondance des traitements avec stratégie d'extraction EAGER et contraintes d'unicité",
                    "Interfaces de couche de service modulaires avec gestion des exceptions personnalisées et validation de données",
                    "Intégration des annotations Lombok pour éliminer le code standard et alléger la base de code"
                ],
                github: "https://github.com/hilalinabil/Javafx",
                demo: "#",
                image: "assets/project7.png"
            },
            {
                title: "Backend d'Application de Chat Temps Réel",
                category: "Backend",
                description: "Un backend de messagerie par WebSockets prenant en charge la diffusion bidirectionnelle des messages et les salons.",
                technologies: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "Mongoose", "JWT", "Zod"],
                features: [
                    "Intégration de Socket.IO pour des transmissions de messages bidirectionnelles en moins d'une milliseconde",
                    "Validation et désinfection des entrées de données à l'aide de schémas Zod pour sécuriser les API",
                    "Endpoints d'API REST sécurisés avec validation de jeton JWT et limite d'expiration d'une heure",
                    "Couche de service abstraite avec des intégrations prévues pour le stockage S3 et les notifications Firebase"
                ],
                github: "https://github.com/hilalinabil/chat_backend",
                demo: "#",
                image: "assets/project8.png"
            },
            {
                title: "Visualiseur Interactif de Diagrammes Mermaid",
                category: "Frontend",
                description: "Un visualiseur de documentation technique intégrant le moteur Mermaid.js dans une interface sombre soignée.",
                technologies: ["JavaScript (ES6+)", "Mermaid.js", "HTML5", "CSS3", "Intersection Observer API"],
                features: [
                    "Renders 7 UML diagrams (class, sequence, state, ER, etc.) with responsive fullscreen modal toggle",
                    "API Intersection Observer pour le lazy-loading du rendu SVG afin d'accélérer le chargement initial",
                    "Interface utilisateur sombre premium animée par des variables CSS personnalisées et des transitions fluides",
                    "Écouteurs d'événements clavier (touche Échap) et clics extérieurs pour une accessibilité optimale"
                ],
                github: "https://github.com/hilalinabil/Diagrams_repo",
                demo: "#",
                image: "assets/project9.png"
            },
            {
                title: "API REST Core pour E-Commerce",
                category: "Backend",
                description: "Un service backend modulaire Node.js/MongoDB backend service gérant l'authentification, le catalogue de produits, le panier d'achat et les commandes.",
                technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
                features: [
                    "Architecture modulaire séparant l'authentification, le catalogue, le panier et la passation de commandes",
                    "Middleware d'autorisation basé sur les rôles limitant la modification de produits et l'audit des commandes aux admins",
                    "Mécanique de panier d'achat dynamique reliant les produits via la population et les références Mongoose",
                    "Traitement automatisé des commandes de paiement compilant les valeurs totales avec la fonction reduce() de JS"
                ],
                github: "https://github.com/hilalinabil/E-commerce",
                demo: "#",
                image: "assets/project10.png"
            },
            {
                title: "Gestionnaire de Tâches React",
                category: "Frontend",
                description: "Un tableau de bord interactif de suivi de tâches côté client avec persistance de l'état local et graphiques d'analyse.",
                technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "localStorage API"],
                features: [
                    "Synchronisation avec le stockage local (localStorage) via les hooks React pour persister les sessions",
                    "Analyse des statistiques avec suivi dynamique des tâches totales, complétées et actives",
                    "Édition de texte en ligne avec gestion des événements clavier (Entrée pour valider, Échap pour annuler)",
                    "Grille adaptative mobile ajustant l'affichage des cartes de 3 colonnes à 1 colonne de manière fluide"
                ],
                github: "https://github.com/hilalinabil/frontend_task_manager",
                demo: "#",
                image: "assets/project11.png"
            },
            {
                title: "Application de Gestion de Produits Symfony",
                category: "Full Stack",
                description: "Une application MVC full-stack construite avec PHP 8.2 et Symfony 7 pour la gestion d'inventaire.",
                technologies: ["PHP 8.2", "Symfony 7.2", "Doctrine ORM", "Twig", "MySQL", "Composer"],
                features: [
                    "Templates Twig fournissant un rendu HTML côté serveur lié aux composants Symfony Form",
                    "Routage RESTful basé sur les attributs avec validation de sécurité par jeton CSRF intégrée",
                    "Doctrine migrations bundle pour suivre les ajustements structurels des tables de la base de données",
                    "Repositories d'entités Doctrine optimisant les requêtes de recherche SQL standards"
                ],
                github: "https://github.com/hilalinabil/Prodprjt",
                demo: "#",
                image: "assets/project12.png"
            },
            {
                title: "Gestionnaire de Tâches Spring Boot",
                category: "Backend",
                description: "Une API de gestion de tâches multi-couches utilisant Spring Boot et les mappings relationnels JPA.",
                technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "Lombok", "Maven"],
                features: [
                    "Abstraction de la couche de service isolant les règles métier des contrôleurs d'API",
                    "Mappings de base de données Un-à-Plusieurs avec des structures de suppression en cascade",
                    "Records Java immuables représentant des DTO propres pour découpler la couche API",
                    "Génération automatique d'horodatages LocalDateTime et identification par UUID"
                ],
                github: "https://github.com/hilalinabil/Spring_prjt",
                demo: "#",
                image: "assets/project13.png"
            },
            {
                title: "Système Bancaire Orienté Objet",
                category: "Backend",
                description: "Une application C++ locale implémentant une architecture de comptes hiérarchique et les transactions bancaires de base.",
                technologies: ["C++", "Visual Studio", "OOP Principles"],
                features: [
                    "Structure de classes hiérarchique avec héritage et polymorphisme pour 3 niveaux de comptes",
                    "Opérations de dépôt, retrait et modification de solde avec vérification des entrées",
                    "Classe AccountHandler centralisée gérant le cycle de vie des comptes et la génération d'identifiants",
                    "Calculs de taux d'intérêt spéciaux appliqués dynamiquement aux comptes premium"
                ],
               github: "https://github.com/hilalinabil/OOP_BANK",
                demo: "#",
                image: "assets/project14.png"
            },
            {
                title: "API CRUD RESTful Node.js",
                category: "Backend",
                description: "Une API RESTful simple démontrant les patterns MVC avec Express and MongoDB.",
                technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "dotenv"],
                features: [
                    "Pattern d'architecture MVC séparant clairement les contrôleurs et les schémas de base de données",
                    "Points d'accès REST vérifiés avec Insomnia prenant en charge le cycle de vie complet des utilisateurs",
                    "Configuration du middleware CORS pour permettre des connexions client multi-origines fluides",
                    "Modèles Mongoose enregistrant automatiquement l'heure d'inscription"
                ],
                github: "https://github.com/hilalinabil/crud_api",
                demo: "#",
                image: "assets/project15.png"
            }
        ],
        experiences: [
            {
                position: "Ingénieur Prompt (Freelance)",
                company: "Indépendant / À distance",
                duration: "Oct 2024 - Janv 2025",
                description: "Conception, structuration et évaluation d'architectures de prompts et d'instructions système complexes pour générer des données structurées au format JSON via des modèles de langage (LLM).",
                achievements: [
                    "Création de prompts de production hautement structurés en appliquant des techniques avancées (Few-Shot learning, Chain-of-Thought, contraintes système) pour garantir des sorties déterministes et de haute qualité.",
                    "Définition et validation de schémas JSON stricts pour les entrées et sorties des modèles, assurant l'intégrité des données et éliminant les erreurs de parsing en production.",
                    "Évaluation rigoureuse des réponses des modèles à travers l'analyse de métriques de performance, réduisant de manière significative le taux d'hallucinations et la latence.",
                    "Optimisation de la consommation de tokens et de la fenêtre de contexte grâce à l'enchaînement de prompts (prompt chaining) et au réglage fin des instructions système."
                ]
            },
            {
                position: "Stagiaire en Ingénierie Logicielle",
                company: "Entreprise de Transport",
                duration: "Juil 2025 - Sept 2025",
                description: "Développement d'une application de bureau intelligente pour la gestion d'entrepôt et l'optimisation des trajets afin de réduire les coûts logistiques.",
                achievements: [
                    "Conception et implémentation d'un tableau de bord de bureau PyQt5 supportant SQLite, MongoDB, MySQL et PostgreSQL via le pattern Factory.",
                    "Intégration d'algorithmes d'apprentissage par renforcement Q-Learning pour l'optimisation des trajets, réduisant la distance parcourue.",
                    "Mise en œuvre de threads de travail en arrière-plan avec QThread pour assurer une interface graphique réactive lors de calculs lourds."
                ]
            },
            {
                position: "Stagiaire Ingénieur",
                company: "Office National de l'Électricité et de l'Eau Potable (ONEE)",
                duration: "Juil 2023 - Sept 2023",
                description: "Observation des pratiques industrielles clés et contribution à la conception de bases de données pour l'analyse de la production d'énergie.",
                achievements: [
                    "Contribution à la conception et à la mise en œuvre d'un système de base de données pour suivre et analyser les indicateurs de production d'énergie.",
                    "Assistance dans la collecte, le nettoyage et le prétraitement des données pour soutenir la prise de décision stratégique.",
                    "Acquisition d'une expérience pratique des opérations industrielles, de la planification des flux et de l'analyse des données."
                ]
            }
        ],
        education: [
            {
                degree: "Diplôme d'Ingénieur en Informatique et Génie Logiciel",
                university: "École Marocaine des Sciences de l'Ingénieur (EMSI), Casablanca",
                duration: "2024 - Présent",
                coursework: ["Génie Logiciel", "Développement Full-Stack", "Bases de Données & ORM", "Architecture Propre", "Conception Système"]
            },
            {
                degree: "Génie Systèmes Énergétiques",
                university: "École Nationale Supérieure d'Arts et Métiers (ENSAM), Rabat",
                duration: "2022 - 2024",
                coursework: ["Ingénierie des Systèmes", "Modélisation Mathématique", "Thermodynamique", "Analyse Numérique", "Systèmes de Contrôle"]
            },
            {
                degree: "Classes Préparatoires aux Grandes Écoles (CPGE) - PSI",
                university: "Lycée Mohammed V, Casablanca",
                duration: "2019 - 2022",
                coursework: ["Mathématiques Approfondies", "Physique & Chimie", "Sciences de l'Ingénieur", "Bases de l'Informatique"]
            },
            {
                degree: "Baccalauréat en Sciences Mathématiques-A",
                university: "Lycée JAFAAR EL FASSI EL FIHRI, Casablanca",
                duration: "2019",
                coursework: ["Mathématiques Approfondies", "Physique & Chimie", "Français & Anglais"]
            }
        ],
        certifications: [
            {
                title: "Python pour la Science des Données, l'IA et le Développement",
                issuer: "IBM (Coursera)",
                date: "Déc 2023",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_python_ds_ibm"
            },
            {
                title: "Interactivité avec JavaScript",
                issuer: "University of Michigan (Coursera)",
                date: "Jan 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_js_interactivity_michigan"
            },
            {
                title: "L'atelier de travail Unix (The Unix Workbench)",
                issuer: "Johns Hopkins University (Coursera)",
                date: "Jan 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_unix_workbench_jhu"
            },
            {
                title: "Introduction à la programmation orientée objet (en C++)",
                issuer: "EPFL (Coursera)",
                date: "Jan 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_cpp_oop_epfl"
            },
            {
                title: "Introduction au Big Data",
                issuer: "University of California San Diego (Coursera)",
                date: "Juin 2026",
                link: "https://www.coursera.org/account/accomplishments/verify/cert_intro_big_data_ucsd"
            }
        ]
    }
};

const uiTranslations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-experience": "Experience",
        "nav-projects": "Projects",
        "nav-education": "Education",
        "nav-certifications": "Certifications",
        "nav-achievements": "Achievements",
        "nav-contact": "Contact",
        "hero-availability": "Available for Select Opportunities",
        "hero-greeting": "Hello, I'm",
        "hero-contact-btn": "Contact Me",
        "hero-projects-btn": "View Projects",
        "about-title": "About Me",
        "about-subtitle": "Biography & Core Competency Metrics",
        "about-lead": "Who I am & What I do",
        "about-bio-secondary": "Currently studying Informatique et Génie Logiciel at EMSI Casablanca, I have completed two software engineering internships where I designed database architectures and implemented Q-learning optimization solvers. I am passionate about applying clean code principles, Hexagonal Architecture, and Domain-Driven Design to build robust enterprise-grade applications.",
        "skills-title": "My Skills",
        "skills-subtitle": "Core technical stack categorized by domain expertise",
        "skills-tab-all": "All Skills",
        "skills-tab-frontend": "Frontend",
        "skills-tab-backend": "Backend",
        "skills-tab-database": "Database",
        "skills-tab-cloud": "Cloud",
        "skills-tab-devops": "DevOps",
        "skills-tab-tools": "Tools",
        "experience-title": "Professional Experience",
        "experience-subtitle": "My professional career path and key contributions",
        "projects-title": "Featured Projects",
        "projects-subtitle": "A curated collection of my recent software and open-source work",
        "projects-filter-all": "All",
        "projects-filter-frontend": "Frontend",
        "projects-filter-backend": "Backend",
        "projects-filter-fullstack": "Full Stack",
        "education-title": "Education",
        "education-subtitle": "Academic foundations and credentials",
        "certifications-title": "Certifications",
        "certifications-subtitle": "Professional credentials and specializations",
        "achievements-title": "Achievements",
        "achievements-subtitle": "Awards, hackathons, and global highlights",
        "contact-title": "Contact Me",
        "contact-subtitle": "Let's discuss new projects, collaboration, or select positions",
        "contact-connect": "Let's Connect",
        "contact-desc": "Feel free to reach out. I will respond within 24 business hours to discuss your engineering goals or project scope.",
        "contact-email-label": "Email",
        "contact-phone-label": "Phone",
        "contact-location-label": "Location",
        "contact-social-label": "Find me on",
        "contact-success-title": "Message Sent Successfully!",
        "contact-success-desc": "Thank you. Your message has been transmitted and I will review it shortly.",
        "form-label-name": "Full Name",
        "form-placeholder-name": "Sarah Jenkins",
        "form-error-name": "Please provide your full name.",
        "form-label-email": "Email Address",
        "form-placeholder-email": "sarah@company.com",
        "form-error-email": "Please provide a valid email address.",
        "form-label-subject": "Subject",
        "form-placeholder-subject": "Select Project Discussion",
        "form-error-subject": "Please enter a message subject.",
        "form-label-message": "Message",
        "form-placeholder-message": "Hi Nabil, I'd love to chat about...",
        "form-error-message": "Please write a message content.",
        "form-submit-btn": "Send Message",
        "footer-rights": "All Rights Reserved."
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-skills": "Compétences",
        "nav-experience": "Expérience",
        "nav-projects": "Projets",
        "nav-education": "Éducation",
        "nav-certifications": "Certifications",
        "nav-achievements": "Distinctions",
        "nav-contact": "Contact",
        "hero-availability": "Disponible pour de nouvelles opportunités",
        "hero-greeting": "Bonjour, je suis",
        "hero-contact-btn": "Contactez-moi",
        "hero-projects-btn": "Voir mes projets",
        "about-title": "À propos de moi",
        "about-subtitle": "Biographie et indicateurs de compétences clés",
        "about-lead": "Qui je suis et ce que je fais",
        "about-bio-secondary": "Actuellement étudiant en Informatique et Génie Logiciel à l'EMSI Casablanca, j'ai réalisé deux stages en ingénierie logicielle où j'ai conçu des architectures de bases de données et implémenté des solveurs d'optimisation par Q-learning. Je suis passionné par l'application des principes de code propre, de l'architecture hexagonale et de la conception guidée par le domaine (DDD) pour concevoir des applications d'entreprise robustes.",
        "skills-title": "Mes compétences",
        "skills-subtitle": "Stack technique principale catégorisée par domaine d'expertise",
        "skills-tab-all": "Toutes",
        "skills-tab-frontend": "Frontend",
        "skills-tab-backend": "Backend",
        "skills-tab-database": "Bases de données",
        "skills-tab-cloud": "Cloud",
        "skills-tab-devops": "DevOps",
        "skills-tab-tools": "Outils",
        "experience-title": "Expérience professionnelle",
        "experience-subtitle": "Mon parcours professionnel et mes contributions clés",
        "projects-title": "Projets vedettes",
        "projects-subtitle": "Une sélection de mes travaux logiciels récents et open-source",
        "projects-filter-all": "Tout",
        "projects-filter-frontend": "Frontend",
        "projects-filter-backend": "Backend",
        "projects-filter-fullstack": "Full Stack",
        "education-title": "Éducation",
        "education-subtitle": "Parcours académique et diplômes",
        "certifications-title": "Certifications",
        "certifications-subtitle": "Titres professionnels et spécialisations",
        "achievements-title": "Distinctions",
        "achievements-subtitle": "Prix, hackathons et faits marquants",
        "contact-title": "Contactez-moi",
        "contact-subtitle": "Discutons de nouveaux projets, collaborations ou opportunités de poste",
        "contact-connect": "Connectons-nous",
        "contact-desc": "N'hésitez pas à me contacter. Je vous répondrai sous 24 heures pour discuter de vos objectifs d'ingénierie ou de la portée de votre projet.",
        "contact-email-label": "E-mail",
        "contact-phone-label": "Téléphone",
        "contact-location-label": "Localisation",
        "contact-social-label": "Retrouvez-moi sur",
        "contact-success-title": "Message envoyé avec succès !",
        "contact-success-desc": "Merci. Votre message a été transmis et je l'examinerai sous peu.",
        "form-label-name": "Nom complet",
        "form-placeholder-name": "Sarah Jenkins",
        "form-error-name": "Veuillez fournir votre nom complet.",
        "form-label-email": "Adresse e-mail",
        "form-placeholder-email": "sarah@entreprise.com",
        "form-error-email": "Veuillez fournir une adresse e-mail valide.",
        "form-label-subject": "Objet",
        "form-placeholder-subject": "Sujet de discussion du projet",
        "form-error-subject": "Veuillez saisir l'objet de votre message.",
        "form-label-message": "Message",
        "form-placeholder-message": "Bonjour Nabil, j'aimerais discuter de...",
        "form-error-message": "Veuillez rédiger le contenu de votre message.",
        "form-submit-btn": "Envoyer le message",
        "footer-rights": "Tous droits réservés."
    }
};

let currentLang = localStorage.getItem("portfolio-lang") || "en";

/**
 * ==========================================================================
 * APPLICATION LOGIC & DYNAMIC RENDERING
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // Initialize UI Interactions
    initParticlesBackground();
    initThemeSwitcher();
    initMobileNavigation();
    initHeaderScrollSpy();
    initScrollReveal();
    initSkillsFilter();
    initProjectsFilter();
    initTestimonialsSlider();
    initContactFormValidation();

    // Initialize Language Switcher listeners
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            if (lang !== currentLang) {
                switchLanguage(lang);
            }
        });
    });

    // Bootstraps language on load
    switchLanguage(currentLang);
});

function translateUI(lang) {
    // Translate elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (uiTranslations[lang] && uiTranslations[lang][key]) {
            el.innerHTML = uiTranslations[lang][key];
        }
    });

    // Translate input placeholders with data-i18n-placeholder attribute
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (uiTranslations[lang] && uiTranslations[lang][key]) {
            el.placeholder = uiTranslations[lang][key];
        }
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.setAttribute("lang", lang);

    // Render data structures
    renderPortfolioInfo();
    renderStats();
    renderSkills();
    renderTimeline();
    renderProjects();
    renderEducation();
    renderCertifications();
    renderAchievements();

    // Translate static UI elements
    translateUI(lang);

    // Update active class on segmented control switcher buttons
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Re-initialize Lucide icons on newly rendered dynamic content
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Apply current tab filters to the newly rendered items
    applyCurrentFilters();
}

function applyCurrentFilters() {
    // Skills filter apply
    const activeSkillTab = document.querySelector(".skills-tab-btn.active");
    if (activeSkillTab) {
        const filter = activeSkillTab.getAttribute("data-category");
        const skillCards = document.querySelectorAll(".skill-card");
        skillCards.forEach(card => {
            const category = card.getAttribute("data-skill-category");
            if (filter === "all" || filter === category) {
                card.style.display = "flex";
                card.style.opacity = "1";
                card.style.transform = "translateY(0) scale(1)";
            } else {
                card.style.display = "none";
                card.style.opacity = "0";
                card.style.transform = "translateY(15px) scale(0.95)";
            }
        });
    }

    // Projects filter apply
    const activeProjectFilter = document.querySelector(".project-filter-btn.active");
    if (activeProjectFilter) {
        const filterValue = activeProjectFilter.getAttribute("data-filter");
        const projectCards = document.querySelectorAll(".project-card");
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute("data-project-category");
            if (filterValue === "all" || filterValue === cardCategory) {
                card.style.display = "flex";
                card.style.opacity = "1";
                card.style.transform = "translateY(0) scale(1)";
            } else {
                card.style.display = "none";
                card.style.opacity = "0";
                card.style.transform = "translateY(15px) scale(0.95)";
            }
        });
    }
}

/**
 * --------------------------------------------------------------------------
 * RENDER METADATA & PROFILE TEXTS
 * --------------------------------------------------------------------------
 */
function renderPortfolioInfo() {
    const data = portfolioData[currentLang];

    // Dynamic text injections
    document.title = `${data.fullName} | ${data.title}`;

    // Set meta tag details dynamically if elements exist
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.content = data.bio;

    // Header/Hero elements
    const heroName = document.getElementById("hero-name");
    const heroTitle = document.getElementById("hero-title");
    const heroBio = document.getElementById("hero-bio");

    if (heroName) heroName.textContent = data.fullName;
    if (heroTitle) heroTitle.textContent = data.title;
    if (heroBio) heroBio.textContent = data.bio;

    // About/Bio
    const aboutBio = document.getElementById("about-bio");
    if (aboutBio) aboutBio.textContent = data.bio;

    // Contact Panel info
    const contactEmail = document.getElementById("contact-email");
    const contactPhone = document.getElementById("contact-phone");
    const contactLocation = document.getElementById("contact-location");
    const contactGithub = document.getElementById("contact-github");
    const contactLinkedin = document.getElementById("contact-linkedin");

    if (contactEmail) {
        contactEmail.textContent = data.email;
        contactEmail.href = `mailto:${data.email}`;
    }
    if (contactPhone) {
        contactPhone.textContent = data.phone;
        contactPhone.href = `tel:${data.phone.replace(/[^+\d]/g, '')}`;
    }
    if (contactLocation) contactLocation.textContent = data.location;
    if (contactGithub) contactGithub.href = data.github;
    if (contactLinkedin) contactLinkedin.href = data.linkedin;

    // Footer
    const footerName = document.getElementById("footer-name");
    const footerYear = document.getElementById("footer-year");
    const footerGithub = document.getElementById("footer-github");
    const footerLinkedin = document.getElementById("footer-linkedin");

    if (footerName) footerName.textContent = data.fullName;
    if (footerYear) footerYear.textContent = new Date().getFullYear();
    if (footerGithub) footerGithub.href = data.github;
    if (footerLinkedin) footerLinkedin.href = data.linkedin;
}

/**
 * --------------------------------------------------------------------------
 * RENDER METRIC CARDS
 * --------------------------------------------------------------------------
 */
function renderStats() {
    const container = document.getElementById("stats-container");
    if (!container) return;

    const data = portfolioData[currentLang];
    container.innerHTML = data.stats.map(stat => `
        <div class="stat-card">
            <div class="stat-value gradient-text">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join("");
}

/**
 * --------------------------------------------------------------------------
 * RENDER SKILLS SECTION
 * --------------------------------------------------------------------------
 */
function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    const data = portfolioData[currentLang];
    container.innerHTML = data.skills.map(skill => {
        const catKey = skill.category.toLowerCase();
        const displayCategory = categoryTranslations[currentLang][catKey] || skill.category;
        const displayProficiency = currentLang === 'fr' ? 'Maîtrise' : 'Proficiency';

        return `
            <div class="skill-card" data-skill-category="${skill.category.toLowerCase()}">
                <div class="skill-card-header">
                    <div class="skill-icon-wrapper">
                        <i data-lucide="${skill.icon || 'code-2'}"></i>
                    </div>
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-category">${displayCategory}</div>
                </div>
                <div class="skill-level-row">
                    <span>${displayProficiency}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-bar-outer">
                    <div class="skill-bar-inner" data-level="${skill.level}"></div>
                </div>
            </div>
        `;
    }).join("");
}

/**
 * --------------------------------------------------------------------------
 * RENDER TIMELINE (EXPERIENCE)
 * --------------------------------------------------------------------------
 */
function renderTimeline() {
    const container = document.getElementById("experience-timeline");
    if (!container) return;

    const data = portfolioData[currentLang];
    container.innerHTML = data.experiences.map((exp, index) => {
        const achievementsList = exp.achievements.map(ach => `<li>${ach}</li>`).join("");

        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-header">
                        <div class="timeline-title-row">
                            <h4 class="timeline-role">${exp.position}</h4>
                            <span class="timeline-company">${exp.company}</span>
                        </div>
                        <span class="timeline-date">${exp.duration}</span>
                    </div>
                    <p class="timeline-desc">${exp.description}</p>
                    <ul class="timeline-achievements">
                        ${achievementsList}
                    </ul>
                </div>
            </div>
        `;
    }).join("");
}

/**
 * --------------------------------------------------------------------------
 * RENDER FEATURED PROJECTS
 * --------------------------------------------------------------------------
 */
function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    const data = portfolioData[currentLang];
    const projCatTranslations = {
        en: { "Full Stack": "Full Stack", "Backend": "Backend", "Frontend": "Frontend" },
        fr: { "Full Stack": "Full Stack", "Backend": "Backend", "Frontend": "Frontend" }
    };

    container.innerHTML = data.projects.map(proj => {
        const tags = proj.technologies.map(tag => `<span class="tech-tag">${tag}</span>`).join("");
        const features = proj.features.map(f => `
            <li>
                <i data-lucide="check" class="icon-sm"></i>
                <span>${f}</span>
            </li>
        `).join("");

        const filterCategory = proj.category.toLowerCase().replace(/\s+/g, '');
        const displayProjCat = projCatTranslations[currentLang][proj.category] || proj.category;
        const liveDemoLabel = currentLang === 'fr' ? 'Démo Live' : 'Live Demo';

        return `
            <div class="project-card" data-project-category="${filterCategory}">
                <div class="project-image-container">
                    <span class="badge badge-glow project-category-badge">${displayProjCat}</span>
                    <img src="${proj.image}" alt="${proj.title}" class="project-img">
                </div>
                <div class="project-info">
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-desc">${proj.description}</p>
                    
                    <ul class="project-features-list">
                        ${features}
                    </ul>
                    
                    <div class="project-tech-tags">
                        ${tags}
                    </div>
                    
                    <div class="project-actions">
                        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

/**
 * --------------------------------------------------------------------------
 * RENDER ACADEMIC DETAILS
 * --------------------------------------------------------------------------
 */
function renderEducation() {
    const container = document.getElementById("education-container");
    if (!container) return;

    const data = portfolioData[currentLang];
    container.innerHTML = data.education.map(edu => {
        const courses = edu.coursework.map(c => `<span class="course-tag">${c}</span>`).join("");
        const courseworkTitle = currentLang === 'fr' ? 'Matières clés' : 'Key Coursework';

        return `
            <div class="education-card">
                <div class="edu-header">
                    <div>
                        <h3 class="edu-title">${edu.degree}</h3>
                        <div class="edu-university">${edu.university}</div>
                    </div>
                    <span class="edu-year">${edu.duration}</span>
                </div>
                <div class="edu-coursework-title">${courseworkTitle}</div>
                <div class="edu-coursework-list">
                    ${courses}
                </div>
            </div>
        `;
    }).join("");
}

/**
 * --------------------------------------------------------------------------
 * RENDER CERTIFICATION CARDS
 * --------------------------------------------------------------------------
 */
function renderCertifications() {
    const container = document.getElementById("certifications-container");
    if (!container) return;

    const data = portfolioData[currentLang];
    container.innerHTML = data.certifications.map(cert => {
        const dateLabel = currentLang === 'fr' ? 'Délivré :' : 'Issued:';
        const verifyLabel = currentLang === 'fr' ? 'Vérifier le diplôme' : 'Verify Credential';

        return `
            <div class="cert-card">
                <h3 class="cert-title">${cert.title}</h3>
                <div class="cert-issuer">${cert.issuer}</div>
                <div class="cert-date">${dateLabel} ${cert.date}</div>
                <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="cert-link">
                    <span>${verifyLabel}</span>
                    <i data-lucide="external-link" class="icon-xs"></i>
                </a>
            </div>
        `;
    }).join("");
}

/**
 * --------------------------------------------------------------------------
 * RENDER METRIC/ACHIEVEMENT CARDS
 * --------------------------------------------------------------------------
 */
function renderAchievements() {
    const container = document.getElementById("achievements-container");
    if (!container) return;

    const data = portfolioData[currentLang];
    container.innerHTML = data.achievements.map(ach => `
        <div class="achievement-card">
            <span class="achievement-badge">${ach.category}</span>
            <h3 class="achievement-title">${ach.title}</h3>
            <div class="achievement-detail">${ach.detail}</div>
            <p class="achievement-desc">${ach.description}</p>
        </div>
    `).join("");
}

/**
 * --------------------------------------------------------------------------
 * RENDER TESTIMONIAL SLIDES
 * --------------------------------------------------------------------------
 */
function renderTestimonials() {
    const container = document.getElementById("testimonial-slider");
    if (!container) return;

    const data = portfolioData[currentLang];
    if (!data.testimonials) return;

    container.innerHTML = data.testimonials.map((test, index) => `
        <div class="testimonial-slide ${index === 0 ? 'active' : ''}">
            <div class="testimonial-quote-icon">“</div>
            <p class="testimonial-text">${test.text}</p>
            <div class="testimonial-author">
                <div class="testimonial-author-name">${test.name}</div>
                <div class="testimonial-author-meta">${test.position} at ${test.company}</div>
            </div>
        </div>
    `).join("");
}

/**
 * --------------------------------------------------------------------------
 * CANVASPARTICLE BACKGROUND GENERATION
 * Creates interactive glowing particles linked by proximity grids.
 * --------------------------------------------------------------------------
 */
function initParticlesBackground() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId = null;

    // Mouse coordinates
    let mouse = { x: null, y: null, radius: 120 };

    // Scale canvas to display dimensions
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }

    class Particle {
        constructor(x, y, vx, vy, radius, color) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.radius = radius;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            // Keep speed boundaries
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.vx = -this.vx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.vy = -this.vy;
            }

            // Standard physics movement
            this.x += this.vx;
            this.y += this.vy;

            // Interactive attraction to cursor
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    // Pull particle slightly towards cursor
                    this.x += dx * 0.015;
                    this.y += dy * 0.015;
                }
            }

            this.draw();
        }
    }

    function initParticles() {
        particles = [];
        // Calculate density based on viewport area
        const area = canvas.width * canvas.height;
        const numberOfParticles = Math.min(Math.floor(area / 16000), 80);

        // Match theme accents (electric blue, cyan, slate)
        const isDark = document.documentElement.classList.contains("dark-theme");
        const particleColor = isDark ? "rgba(59, 130, 246, 0.25)" : "rgba(37, 99, 235, 0.12)";

        for (let i = 0; i < numberOfParticles; i++) {
            let radius = Math.random() * 2 + 1;
            let x = Math.random() * (canvas.width - radius * 2) + radius;
            let y = Math.random() * (canvas.height - radius * 2) + radius;
            let vx = (Math.random() - 0.5) * 0.4;
            let vy = (Math.random() - 0.5) * 0.4;

            particles.push(new Particle(x, y, vx, vy, radius, particleColor));
        }
    }

    // Connect particles near each other with lines
    function connectParticles() {
        const isDark = document.documentElement.classList.contains("dark-theme");
        const lineColor = isDark ? "59, 130, 246" : "37, 99, 235";
        const maxDist = 140;

        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    // Set opacity based on distance proximity
                    let opacity = (1 - (dist / maxDist)) * 0.15;
                    ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
        }
        connectParticles();

        animationId = requestAnimationFrame(animate);
    }

    // Set boundaries
    window.addEventListener("resize", resizeCanvas);

    // Hover listeners
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Theme changes updates color settings
    document.getElementById("theme-toggle")?.addEventListener("click", () => {
        setTimeout(initParticles, 150); // Small timeout to wait for theme class swap
    });

    resizeCanvas();
    animate();
}

/**
 * --------------------------------------------------------------------------
 * DARK/LIGHT MODE SWITCHER
 * --------------------------------------------------------------------------
 */
function initThemeSwitcher() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.classList.contains("dark-theme");
        if (isDark) {
            document.documentElement.classList.remove("dark-theme");
            localStorage.setItem("portfolio-theme", "light");
        } else {
            document.documentElement.classList.add("dark-theme");
            localStorage.setItem("portfolio-theme", "dark");
        }
    });
}

/**
 * --------------------------------------------------------------------------
 * MOBILE HAMBURGER NAVIGATION
 * --------------------------------------------------------------------------
 */
function initMobileNavigation() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("mobile-nav-menu");

    if (!menuBtn || !navMenu) return;

    // Toggle menu
    menuBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.contains("open");
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when links are clicked
    const mobileLinks = navMenu.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Close on window resize (if tablet expands to desktop)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && navMenu.classList.contains("open")) {
            closeMenu();
        }
    });

    function openMenu() {
        menuBtn.classList.add("active");
        navMenu.classList.add("open");
        menuBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    function closeMenu() {
        menuBtn.classList.remove("active");
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = ""; // Re-enable scroll
    }
}

/**
 * --------------------------------------------------------------------------
 * SCROLLSPY NAVIGATION & SCROLL GLOWS
 * --------------------------------------------------------------------------
 */
function initHeaderScrollSpy() {
    const header = document.querySelector(".glass-header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Add scroll border/shadow when scrolled down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = "var(--shadow-md)";
            header.style.borderBottomColor = "var(--border-medium)";
        } else {
            header.style.boxShadow = "none";
            header.style.borderBottomColor = "var(--border-light)";
        }
    });

    // Scrollspy navigation highlight
    const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -65% 0px", // Trigger when section occupies center window
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${activeId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

/**
 * --------------------------------------------------------------------------
 * SCROLL REVEAL & SKILLS PERCENT BAR ANIMATIONS
 * --------------------------------------------------------------------------
 */
function initScrollReveal() {
    const revealSections = document.querySelectorAll(".scroll-reveal-section");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                // If it is the skills section, animate the level bars inside
                if (entry.target.getAttribute("id") === "skills") {
                    animateSkillsBars();
                }

                observer.unobserve(entry.target); // Reveal once
            }
        });
    }, {
        root: null,
        threshold: 0.12 // Reveal slightly after entering screen
    });

    revealSections.forEach(sec => revealObserver.observe(sec));

    function animateSkillsBars() {
        const bars = document.querySelectorAll(".skill-bar-inner");
        bars.forEach(bar => {
            const level = bar.getAttribute("data-level");
            bar.style.width = `${level}%`;
        });
    }
}

function initSkillsFilter() {
    const tabBtns = document.querySelectorAll(".skills-tab-btn");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Swap active class
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-category");
            const skillCards = document.querySelectorAll(".skill-card");

            skillCards.forEach(card => {
                const category = card.getAttribute("data-skill-category");

                if (filter === "all" || filter === category) {
                    card.style.display = "flex";
                    // Brief timeout to trigger slide fade in effect
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0) scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "translateY(15px) scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300); // Sync with CSS transition
                }
            });
        });
    });
}

function initProjectsFilter() {
    const filterBtns = document.querySelectorAll(".project-filter-btn");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Active swap
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");
            const projectCards = document.querySelectorAll(".project-card");

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-project-category");

                if (filterValue === "all" || filterValue === cardCategory) {
                    card.style.display = "flex";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0) scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "translateY(15px) scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });
}

/**
 * --------------------------------------------------------------------------
 * TESTIMONIAL SLIDER IMPLEMENTATION (TOUCH & CONTROLS)
 * --------------------------------------------------------------------------
 */
function initTestimonialsSlider() {
    const slides = document.querySelectorAll(".testimonial-slide");
    const dotsContainer = document.getElementById("slider-dots");
    const prevBtn = document.getElementById("prev-testimonial");
    const nextBtn = document.getElementById("next-testimonial");

    if (slides.length === 0 || !dotsContainer) return;

    let currentIdx = 0;
    let autoPlayInterval = null;

    // Create Navigation Dots
    dotsContainer.innerHTML = Array.from({ length: slides.length }).map((_, i) => `
        <button class="slider-dot ${i === 0 ? 'active' : ''}" data-slide-index="${i}" aria-label="Go to testimonial slide ${i + 1}"></button>
    `).join("");

    const dots = dotsContainer.querySelectorAll(".slider-dot");

    function goToSlide(index) {
        // Wrap index around constraints
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        currentIdx = index;

        // Toggle active slides
        slides.forEach((slide, idx) => {
            slide.classList.toggle("active", idx === currentIdx);
        });

        // Toggle active dot classes
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === currentIdx);
        });
    }

    function nextSlide() {
        goToSlide(currentIdx + 1);
    }

    function prevSlide() {
        goToSlide(currentIdx - 1);
    }

    // Button Events
    nextBtn?.addEventListener("click", () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn?.addEventListener("click", () => {
        prevSlide();
        resetAutoPlay();
    });

    // Dot Events
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.getAttribute("data-slide-index"));
            goToSlide(index);
            resetAutoPlay();
        });
    });

    // Auto Play loop
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Pause on hover
    const wrapper = document.querySelector(".testimonial-slider-wrapper");
    wrapper?.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
    wrapper?.addEventListener("mouseleave", startAutoPlay);

    // Touch Swipe Event Support
    let startX = 0;
    wrapper?.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    wrapper?.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        let deltaX = endX - startX;

        if (Math.abs(deltaX) > 50) { // Swipe threshold
            if (deltaX > 0) {
                prevSlide(); // Swipe right -> previous
            } else {
                nextSlide(); // Swipe left -> next
            }
            resetAutoPlay();
        }
    }, { passive: true });

    startAutoPlay();
}

/**
 * --------------------------------------------------------------------------
 * CONTACT FORM VALIDATION & SUCCESS FEEDBACK STATES
 * --------------------------------------------------------------------------
 */
function initContactFormValidation() {
    const form = document.getElementById("contact-form");
    const successBanner = document.getElementById("form-success-banner");

    if (!form || !successBanner) return;

    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;

        // 1. Validate name
        if (nameInput.value.trim() === "") {
            invalidateField(nameInput);
            isValid = false;
        } else {
            validateField(nameInput);
        }

        // 2. Validate email structure
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            invalidateField(emailInput);
            isValid = false;
        } else {
            validateField(emailInput);
        }

        // 3. Validate subject
        if (subjectInput.value.trim() === "") {
            invalidateField(subjectInput);
            isValid = false;
        } else {
            validateField(subjectInput);
        }

        // 4. Validate message
        if (messageInput.value.trim() === "") {
            invalidateField(messageInput);
            isValid = false;
        } else {
            validateField(messageInput);
        }

        // If form valid, mock submission success feedback
        if (isValid) {
            // Disable button, show loading animation
            const submitBtn = document.getElementById("submit-btn");
            const btnSpan = submitBtn.querySelector("span");
            const btnIcon = submitBtn.querySelector("i");

            if (submitBtn) {
                submitBtn.disabled = true;
                if (btnSpan) btnSpan.textContent = currentLang === "fr" ? "Envoi en cours..." : "Sending...";
            }

            // Simulate server network request delay
            setTimeout(() => {
                // Hide form content and show success state
                form.style.display = "none";
                successBanner.style.display = "flex";
                successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                // Reset inputs
                form.reset();

                // Re-enable form visibility after 6 seconds
                setTimeout(() => {
                    successBanner.style.display = "none";
                    form.style.display = "block";
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        if (btnSpan) btnSpan.textContent = uiTranslations[currentLang]["form-submit-btn"];
                    }
                }, 6000);

            }, 1200);
        }
    });

    // Helper functions to manage border styles on input nodes
    function invalidateField(inputElement) {
        const group = inputElement.closest(".form-control-group");
        if (group) group.classList.add("invalid");
    }

    function validateField(inputElement) {
        const group = inputElement.closest(".form-control-group");
        if (group) group.classList.remove("invalid");
    }

    // Input listeners to reset error highlights on focus typing
    const inputs = [nameInput, emailInput, subjectInput, messageInput];
    inputs.forEach(input => {
        input.addEventListener("input", () => validateField(input));
    });
}
