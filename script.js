  // Sistema de Dicionário (Traduções)
        const translations = {
            "pt": {
                "nav-home": "Início",
                "nav-about": "Sobre",
                "nav-projects": "Projetos",
                "nav-education": "Formação",
                "nav-certs": "Certificações",
                "hero-role": "> Desenvolvedor <span>Back-End</span> _",
                "btn-linkedin": "<i class=\"fab fa-linkedin\"></i> Conectar no LinkedIn",
                "btn-projects": "<i class=\"fas fa-code\"></i> Ver Projetos",
                "about-title": "<span>01.</span> Sobre Mim",
                "about-p1": "Sou um profissional apaixonado por tecnologia, solucionador de problemas e arquiteto de sistemas eficientes. Formado em <strong>Análise e Desenvolvimento de Sistemas</strong> e atualmente cursando o 7º semestre de <strong>Ciência da Computação</strong>.",
                "about-p2": "Minha especialidade é o ecossistema .NET. Tenho forte experiência no desenvolvimento de APIs RESTful utilizando C#, focando sempre em arquiteturas escaláveis (como arquitetura em camadas), integração robusta com bancos de dados relacionais e na aplicação rigorosa de boas práticas de desenvolvimento e Clean Code.",
                "skill-arch": "Arquitetura & API",
                "skill-db": "Banco de Dados",
                "skill-tools": "Ferramentas",
                "projects-title": "<span>02.</span> Projetos em Destaque",
                "proj1-title": "Lumi - RH com IA",
                "proj1-desc": "Sistema robusto de recrutamento com avaliação automatizada de currículos, utilizando Inteligência Artificial para análise profunda de compatibilidade com vagas.",
                "proj1-f1": "Cadastro completo e autenticação segura de usuários.",
                "proj1-f2": "Upload e parsing de currículos (PDF, Word, DOC).",
                "proj1-f3": "Análise automática (IA) gerando percentual de \"Match\".",
                "proj1-f4": "Armazenamento estruturado e relatórios por candidato.",
                "btn-repo": "<i class=\"fab fa-github\"></i> Repositório",
                "btn-repo-2": "<i class=\"fab fa-github\"></i> Repositório",
                "btn-repo-3": "<i class=\"fab fa-github\"></i> Repositório",
                "proj2-desc": "API completa para gestão de Recursos Humanos, focada no controle preciso de horas trabalhadas, ponto eletrônico e gerenciamento de solicitações de ajuste.",
                "proj2-f1": "Sistema de registro de entrada/saída de ponto.",
                "proj2-f2": "Cálculo automatizado de banco de horas.",
                "proj2-f3": "Workflow para solicitação e aprovação de ajustes.",
                "proj2-f4": "Endpoints otimizados e testados.",
                "proj3-title": "Plataforma de Artigos",
                "proj3-desc": "Aplicação Front-End colaborativa destinada a estudantes de tecnologia para compartilhamento de artigos, tutoriais e tendências de mercado.",
                "proj3-f1": "Interface fluída, moderna e 100% responsiva.",
                "proj3-f2": "Sistema dinâmico de categorização e busca.",
                "proj3-f3": "Consumo de APIs externas via Fetch API.",
                "edu-title": "<span>03.</span> Trajetória Acadêmica",
                "edu1-date": "Fev 2025 — Dez 2026 (Previsão)",
                "edu1-title": "Bacharelado em Ciência da Computação",
                "edu-uni1": "Universidade Nove de Julho",
                "edu1-desc": "Aprofundamento em algoritmos complexos, estrutura de dados, inteligência artificial e arquitetura de computadores.",
                "edu2-date": "Fev 2022 — Set 2024",
                "edu2-title": "Análise e Desenvolvimento de Sistemas",
                "edu-uni2": "Universidade Nove de Julho",
                "edu2-desc": "Foco prático em engenharia de software, modelagem de banco de dados e desenvolvimento ágil de aplicações web e backend.",
                "certs-title": "Certificações & Cursos",
                "cert1": "Programação Orientada a Objetos com C#",
                "cert2": "Linguagem Avançada C#",
                "cert3": "Web API ASP.NET Core Essencial (.NET 8)",
                "cert4": "Testes Automáticos de Software",
                "cert5": "Postman: Do Zero ao Avançado",
                "cert6": "Mensageria com RabbitMQ",
                "footer-made": "> Desenvolvido com <i class=\"fas fa-heart\" style=\"color: var(--primary);\"></i> e código limpo.",
                "footer-rights": "&copy; 2026 Marcus Vinicius Gomes Pereira. Todos os direitos reservados."
            },
            "en": {
                "nav-home": "Home",
                "nav-about": "About",
                "nav-projects": "Projects",
                "nav-education": "Education",
                "nav-certs": "Certifications",
                "hero-role": "> <span>Back-End</span> Developer _",
                "btn-linkedin": "<i class=\"fab fa-linkedin\"></i> Connect on LinkedIn",
                "btn-projects": "<i class=\"fas fa-code\"></i> View Projects",
                "about-title": "<span>01.</span> About Me",
                "about-p1": "I am a technology-passionate professional, problem solver, and architect of efficient systems. Graduated in <strong>Systems Analysis and Development</strong> and currently in the 7th semester of <strong>Computer Science</strong>.",
                "about-p2": "My specialty is the .NET ecosystem. I have strong experience developing RESTful APIs using C#, always focusing on scalable architectures (like N-tier architecture), robust integration with relational databases, and rigorous application of best development practices and Clean Code.",
                "skill-arch": "Architecture & API",
                "skill-db": "Database",
                "skill-tools": "Tools",
                "projects-title": "<span>02.</span> Featured Projects",
                "proj1-title": "Lumi - AI HR",
                "proj1-desc": "Robust recruitment system with automated resume evaluation, using Artificial Intelligence for deep analysis of job compatibility.",
                "proj1-f1": "Complete registration and secure user authentication.",
                "proj1-f2": "Upload and parsing of resumes (PDF, Word, DOC).",
                "proj1-f3": "Automatic analysis (AI) generating \"Match\" percentage.",
                "proj1-f4": "Structured storage and candidate reports.",
                "btn-repo": "<i class=\"fab fa-github\"></i> Repository",
                "btn-repo-2": "<i class=\"fab fa-github\"></i> Repository",
                "btn-repo-3": "<i class=\"fab fa-github\"></i> Repository",
                "proj2-desc": "Comprehensive API for Human Resources management, focused on precise control of worked hours, electronic time tracking, and adjustment requests management.",
                "proj2-f1": "Time-in/time-out tracking system.",
                "proj2-f2": "Automated calculation of time banks.",
                "proj2-f3": "Workflow for requesting and approving adjustments.",
                "proj2-f4": "Optimized and tested endpoints.",
                "proj3-title": "Articles Platform",
                "proj3-desc": "Collaborative Front-End application aimed at technology students for sharing articles, tutorials, and market trends.",
                "proj3-f1": "Fluid, modern, and 100% responsive interface.",
                "proj3-f2": "Dynamic categorization and search system.",
                "proj3-f3": "Consumption of external APIs via Fetch API.",
                "edu-title": "<span>03.</span> Academic Background",
                "edu1-date": "Feb 2025 — Dec 2026 (Expected)",
                "edu1-title": "Bachelor of Computer Science",
                "edu-uni1": "Nove de Julho University",
                "edu1-desc": "Deepening in complex algorithms, data structures, artificial intelligence, and computer architecture.",
                "edu2-date": "Feb 2022 — Sep 2024",
                "edu2-title": "Systems Analysis and Development",
                "edu-uni2": "Nove de Julho University",
                "edu2-desc": "Practical focus on software engineering, database modeling, and agile development of web and backend applications.",
                "certs-title": "Certifications & Courses",
                "cert1": "Object-Oriented Programming with C#",
                "cert2": "Advanced C# Language",
                "cert3": "Essential ASP.NET Core Web API (.NET 8)",
                "cert4": "Automated Software Testing",
                "cert5": "Postman: From Zero to Advanced",
                "cert6": "Messaging with RabbitMQ",
                "footer-made": "> Developed with <i class=\"fas fa-heart\" style=\"color: var(--primary);\"></i> and clean code.",
                "footer-rights": "&copy; 2026 Marcus Vinicius Gomes Pereira. All rights reserved."
            }
        };

        const preloaderPhrases = {
            "pt": [
                "Iniciando ambiente .NET...",
                "Resolvendo dependências NuGet...",
                "Conectando ao SQL Server...",
                "Compilando lógica de negócio...",
                "Sistema pronto e online."
            ],
            "en": [
                "Starting .NET environment...",
                "Resolving NuGet dependencies...",
                "Connecting to SQL Server...",
                "Compiling business logic...",
                "System ready and online."
            ]
        };

        // Verifica o idioma salvo no navegador ou define o padrão como PT
        let currentLang = localStorage.getItem('lang') || 'pt';

        // Função para aplicar os textos de acordo com o idioma
        function applyLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('lang', lang);
            
            // Atualiza o botão
            const langText = document.getElementById('current-lang-text');
            if(langText) langText.innerText = lang.toUpperCase();

            // Atualiza todos os elementos com data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        // DOMContentLoaded
        document.addEventListener("DOMContentLoaded", () => {
            
            // Inicializa a tradução imediatamente
            applyLanguage(currentLang);

            // Listener do botão de troca de idioma
            const btnLang = document.getElementById('btn-lang');
            if(btnLang) {
                btnLang.addEventListener('click', () => {
                    const newLang = currentLang === 'pt' ? 'en' : 'pt';
                    applyLanguage(newLang);
                });
            }

            /**
             * 1. PRELOADER
             */
            try {
                const preloader = document.getElementById('preloader');
                const loaderBar = document.getElementById('loader-bar');
                const loaderPercentage = document.getElementById('loader-percentage');
                const loaderText = document.getElementById('loader-text');

                let progress = 0;
                const duration = 3000;
                const interval = 30;
                const step = 100 / (duration / interval);
                let isLoaded = false;

                function finishLoading() {
                    if (isLoaded) return;
                    isLoaded = true;
                    preloader.classList.add('fade-out');
                    document.body.classList.remove('loading');
                    setTimeout(() => {
                        if(preloader) preloader.style.display = 'none';
                    }, 800);
                }

                const loadingTimer = setInterval(() => {
                    progress += step;
                    
                    if (loaderText) {
                        const phrasesArray = preloaderPhrases[currentLang];
                        if (progress > 20 && progress < 40) loaderText.innerText = phrasesArray[1];
                        else if (progress > 40 && progress < 70) loaderText.innerText = phrasesArray[2];
                        else if (progress > 70 && progress < 90) loaderText.innerText = phrasesArray[3];
                        else if (progress >= 95) loaderText.innerText = phrasesArray[4];
                    }

                    if (progress >= 100) {
                        progress = 100;
                        clearInterval(loadingTimer);
                        finishLoading();
                    }
                    
                    if (loaderBar) loaderBar.style.width = `${progress}%`;
                    if (loaderPercentage) loaderPercentage.innerText = `${Math.floor(progress)}%`;
                }, interval);

                setTimeout(() => {
                    clearInterval(loadingTimer);
                    finishLoading();
                }, 5000);

            } catch (error) {
                console.error("Erro no Preloader:", error);
                document.getElementById('preloader').style.display = 'none';
                document.body.classList.remove('loading');
            }

            /**
             * 2. EFEITO DE BRILHO NOS CARDS
             */
            try {
                const sectionProjetos = document.getElementById("projetos");
                if (sectionProjetos) {
                    sectionProjetos.onmousemove = (e) => {
                        const cards = document.getElementsByClassName("project-card");
                        for (const card of cards) {
                            const rect = card.getBoundingClientRect();
                            card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                            card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                        }
                    };
                }
            } catch (error) {
                console.error("Erro nos Cards:", error);
            }

            /**
             * 3. REVEAL SCROLL
             */
            try {
                const reveal = () => {
                    document.querySelectorAll('.reveal').forEach(el => {
                        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
                    });
                };
                window.addEventListener('scroll', reveal);
                reveal(); // Chama na primeira vez
            } catch (error) {
                console.error("Erro no Reveal:", error);
            }

            /**
             * 4. CANVAS PARTÍCULAS
             */
            try {
                const canvas = document.getElementById("bg-canvas");
                if (canvas) {
                    const ctx = canvas.getContext("2d");
                    let width, height, particles = [];
                    const TWO_PI = Math.PI * 2;

                    function initParticles() {
                        width = canvas.width = window.innerWidth;
                        height = canvas.height = window.innerHeight;
                        particles = [];
                        
                        const count = Math.min(Math.floor((width * height) / 12000), 80); 
                        for(let i = 0; i < count; i++) {
                            particles.push({
                                x: Math.random() * width, 
                                y: Math.random() * height,
                                vx: (Math.random() - 0.5) * 0.6, 
                                vy: (Math.random() - 0.5) * 0.6, 
                                r: Math.random() * 1.5 + 0.5 
                            });
                        }
                    }

                    function animateParticles() {
                        ctx.clearRect(0, 0, width, height);
                        
                        for(let i = 0; i < particles.length; i++) {
                            let p = particles[i];
                            p.x += p.vx; 
                            p.y += p.vy;

                            if(p.x < 0 || p.x > width) p.vx *= -1; 
                            if(p.y < 0 || p.y > height) p.vy *= -1;

                            ctx.beginPath(); 
                            ctx.fillStyle = "rgba(99, 102, 241, 0.7)";
                            ctx.arc(p.x, p.y, p.r, 0, TWO_PI); 
                            ctx.fill();

                            for(let j = i + 1; j < particles.length; j++) {
                                let p2 = particles[j];
                                let dx = p.x - p2.x;
                                let dy = p.y - p2.y;
                                let distSq = dx * dx + dy * dy;

                                if(distSq < 15000) { 
                                    ctx.beginPath();
                                    ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distSq / 15000})`;
                                    ctx.lineWidth = 0.8;
                                    ctx.moveTo(p.x, p.y);
                                    ctx.lineTo(p2.x, p2.y);
                                    ctx.stroke();
                                }
                            }
                        }
                        requestAnimationFrame(animateParticles);
                    }

                    let resizeTimeout;
                    window.addEventListener('resize', () => {
                        clearTimeout(resizeTimeout);
                        resizeTimeout = setTimeout(initParticles, 200);
                    });

                    initParticles();
                    animateParticles();
                }
            } catch (error) {
                console.error("Erro no Canvas:", error);
            }
        });