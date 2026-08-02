'use strict';

/**
 * Portfólio — Marcus Vinicius
 *
 * Notas de segurança:
 * - Nenhuma chave de API, token ou segredo deve ser adicionado a este
 *   arquivo: ele roda 100% no navegador do visitante e qualquer valor
 *   aqui é público, mesmo "escondido" ou minificado.
 * - Conteúdo dinâmico é inserido via textContent/DOM (nunca innerHTML)
 *   para eliminar qualquer superfície de XSS. A única exceção é o
 *   dicionário TRANSLATIONS abaixo, que é usado com innerHTML — isso é
 *   seguro porque o conteúdo é 100% estático, escrito por nós, e nunca
 *   incorpora entrada do usuário ou de terceiros.
 */

(function () {
  const TRANSLATIONS = {
    pt: {
      'route-about': '/sobre', 'route-projects': '/projetos', 'route-education': '/formacao', 'route-certs': '/certificacoes',
      'status-pill': 'disponível',
      'hero-h1': 'Eu escrevo <span>APIs</span> que não caem.',
      'hero-sub': 'Desenvolvedor Back-End focado no ecossistema .NET — arquitetura em camadas, integrações robustas e código pensado para durar.',
      'btn-linkedin': 'Conectar no LinkedIn', 'btn-projects': 'Ver Projetos', 'btn-repo': 'Repositório',
      'about-tag': '// sobre_mim', 'about-h2': 'Sobre mim',
      'about-p1': 'Sou um profissional apaixonado por tecnologia, solucionador de problemas e arquiteto de sistemas eficientes. Formado em <strong>Análise e Desenvolvimento de Sistemas</strong> e atualmente cursando Ciência da Computação.',
      'about-p2': 'Minha especialidade é o ecossistema .NET. Tenho forte experiência no desenvolvimento de APIs RESTful utilizando C#, focando sempre em arquiteturas escaláveis, integração robusta com bancos de dados relacionais e na aplicação rigorosa de boas práticas e Clean Code.',
      'skill1-kicker': 'STACK_.NET', 'skill2-kicker': 'ARQUITETURA_&_API', 'skill4-kicker': 'FERRAMENTAS',
      'skill-arch': 'Arquitetura & API', 'skill-db': 'Banco de Dados', 'skill-tools': 'Ferramentas',
      'projects-tag': '// projetos', 'projects-h2': 'Projetos em destaque',
      'proj1-title': 'Lumi — RH com IA', 'proj1-desc': 'Sistema de recrutamento com avaliação automatizada de currículos, usando IA para medir a compatibilidade com a vaga.',
      'proj1-f1': 'Cadastro e autenticação segura de usuários', 'proj1-f2': 'Upload e parsing de currículos (PDF, Word, DOC)', 'proj1-f3': 'Análise por IA com percentual de "match"', 'proj1-f4': 'Armazenamento e relatórios por candidato',
      'proj2-desc': 'API de RH focada no controle de horas trabalhadas, ponto eletrônico e solicitações de ajuste.',
      'proj2-f1': 'Registro de entrada/saída de ponto', 'proj2-f2': 'Cálculo automatizado de banco de horas', 'proj2-f3': 'Workflow de solicitação e aprovação', 'proj2-f4': 'Endpoints otimizados e testados',
      'proj3-title': 'Plataforma de Artigos', 'proj3-desc': 'Aplicação front-end colaborativa para estudantes compartilharem artigos, tutoriais e tendências.',
      'proj3-f1': 'Interface fluída e 100% responsiva', 'proj3-f2': 'Categorização e busca dinâmica', 'proj3-f3': 'Consumo de APIs externas via Fetch',
      'edu-tag': '// changelog_academico', 'edu-h2': 'Trajetória acadêmica', 'tag-current': 'em andamento',
      'edu1-title': 'Bacharelado em Ciência da Computação', 'edu1-date': 'fev 2025 — dez 2026 (previsão)',
      'edu1-desc': 'Aprofundamento em algoritmos complexos, estrutura de dados, inteligência artificial e arquitetura de computadores.',
      'edu2-title': 'Análise e Desenvolvimento de Sistemas', 'edu2-date': 'fev 2022 — set 2024',
      'edu2-desc': 'Foco prático em engenharia de software, modelagem de banco de dados e desenvolvimento ágil web/backend.',
      'certs-tag': '// certificacoes', 'certs-h2': 'Certificações & cursos',
      'cert1': 'Programação Orientada a Objetos com C#', 'cert2': 'Linguagem Avançada C#', 'cert3': 'Web API ASP.NET Core Essencial (.NET 8)',
      'cert4': 'Testes Automáticos de Software', 'cert5': 'Postman: Do Zero ao Avançado', 'cert6': 'Mensageria com RabbitMQ',
      'contact-tag': '// contato', 'contact-h2': 'Vamos conversar?', 'contact-p': 'Aberto a oportunidades como desenvolvedor back-end .NET.',
      'footer-cmd': 'exit 0',
      heroJson: { name: 'Marcus Vinicius Gomes', role: 'Back-End Developer', stack: ['.NET', 'C#', 'ASP.NET Core'], location: 'São Paulo, BR', status: 'disponível_para_oportunidades' },
      boot: ['Restaurando pacotes NuGet...', 'Compilando solução...', 'Executando migrations...', 'Servidor ouvindo em :443', 'Pronto.']
    },
    en: {
      'route-about': '/about', 'route-projects': '/projects', 'route-education': '/education', 'route-certs': '/certifications',
      'status-pill': 'available',
      'hero-h1': "I write <span>APIs</span> that don't fall over.",
      'hero-sub': 'Back-End Developer focused on the .NET ecosystem — layered architecture, robust integrations, and code built to last.',
      'btn-linkedin': 'Connect on LinkedIn', 'btn-projects': 'View Projects', 'btn-repo': 'Repository',
      'about-tag': '// about_me', 'about-h2': 'About me',
      'about-p1': "I'm a technology-passionate professional, problem solver, and architect of efficient systems. Graduated in <strong>Systems Analysis and Development</strong> and currently studying Computer Science.",
      'about-p2': 'My specialty is the .NET ecosystem. I have strong experience building RESTful APIs with C#, always focusing on scalable architectures, robust integration with relational databases, and rigorous application of best practices and Clean Code.',
      'skill1-kicker': '.NET_STACK', 'skill2-kicker': 'ARCHITECTURE_&_API', 'skill4-kicker': 'TOOLING',
      'skill-arch': 'Architecture & API', 'skill-db': 'Database', 'skill-tools': 'Tools',
      'projects-tag': '// projects', 'projects-h2': 'Featured projects',
      'proj1-title': 'Lumi — AI HR', 'proj1-desc': 'Recruitment system with automated resume evaluation, using AI to measure job compatibility.',
      'proj1-f1': 'Secure user registration and authentication', 'proj1-f2': 'Resume upload and parsing (PDF, Word, DOC)', 'proj1-f3': 'AI analysis with a "match" percentage', 'proj1-f4': 'Structured storage and candidate reports',
      'proj2-desc': 'HR API focused on tracking worked hours, time clock records and adjustment requests.',
      'proj2-f1': 'Clock-in/clock-out tracking', 'proj2-f2': 'Automated time-bank calculation', 'proj2-f3': 'Request and approval workflow', 'proj2-f4': 'Optimized, tested endpoints',
      'proj3-title': 'Articles Platform', 'proj3-desc': 'Collaborative front-end app for students to share articles, tutorials and trends.',
      'proj3-f1': 'Fluid, fully responsive interface', 'proj3-f2': 'Dynamic categorization and search', 'proj3-f3': 'External API consumption via Fetch',
      'edu-tag': '// academic_changelog', 'edu-h2': 'Academic background', 'tag-current': 'in progress',
      'edu1-title': 'Bachelor of Computer Science', 'edu1-date': 'Feb 2025 — Dec 2026 (expected)',
      'edu1-desc': 'Deepening in complex algorithms, data structures, artificial intelligence and computer architecture.',
      'edu2-title': 'Systems Analysis and Development', 'edu2-date': 'Feb 2022 — Sep 2024',
      'edu2-desc': 'Practical focus on software engineering, database modeling and agile web/backend development.',
      'certs-tag': '// certifications', 'certs-h2': 'Certifications & courses',
      'cert1': 'Object-Oriented Programming with C#', 'cert2': 'Advanced C# Language', 'cert3': 'Essential ASP.NET Core Web API (.NET 8)',
      'cert4': 'Automated Software Testing', 'cert5': 'Postman: From Zero to Advanced', 'cert6': 'Messaging with RabbitMQ',
      'contact-tag': '// contact', 'contact-h2': "Let's talk?", 'contact-p': 'Open to opportunities as a .NET back-end developer.',
      'footer-cmd': 'exit 0',
      heroJson: { name: 'Marcus Vinicius Gomes', role: 'Back-End Developer', stack: ['.NET', 'C#', 'ASP.NET Core'], location: 'São Paulo, BR', status: 'open_to_opportunities' },
      boot: ['Restoring NuGet packages...', 'Building solution...', 'Running migrations...', 'Server listening on :443', 'Ready.']
    }
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentLang = 'pt';

  /**
   * Monta a resposta JSON do hero como nós de DOM reais (createElement +
   * textContent), nunca como string HTML — assim não existe caminho para
   * injeção mesmo que o conteúdo mude no futuro.
   */
  function buildJsonFragment(obj) {
    const frag = document.createDocumentFragment();
    frag.appendChild(document.createTextNode('{\n'));

    const keys = Object.keys(obj);
    keys.forEach((key, idx) => {
      frag.appendChild(document.createTextNode('  '));

      const keySpan = document.createElement('span');
      keySpan.className = 'k';
      keySpan.textContent = `"${key}"`;
      frag.appendChild(keySpan);

      frag.appendChild(document.createTextNode(': '));

      const value = obj[key];
      const valueSpan = document.createElement('span');
      valueSpan.className = 'v';
      valueSpan.textContent = Array.isArray(value)
        ? `[${value.map((v) => `"${v}"`).join(', ')}]`
        : `"${value}"`;
      frag.appendChild(valueSpan);

      frag.appendChild(document.createTextNode(idx < keys.length - 1 ? ',\n' : '\n'));
    });

    frag.appendChild(document.createTextNode('}'));
    return frag;
  }

  function plainJsonText(obj) {
    const lines = ['{'];
    const keys = Object.keys(obj);
    keys.forEach((key, idx) => {
      const value = obj[key];
      const valueStr = Array.isArray(value) ? `[${value.map((v) => `"${v}"`).join(', ')}]` : `"${value}"`;
      lines.push(`  "${key}": ${valueStr}${idx < keys.length - 1 ? ',' : ''}`);
    });
    lines.push('}');
    return lines.join('\n');
  }

  /** Efeito de "digitação" no hero; pula direto para o resultado final se o usuário preferir menos movimento. */
  function typeHeroJson(target, obj) {
    if (prefersReducedMotion) {
      target.textContent = '';
      target.appendChild(buildJsonFragment(obj));
      return;
    }

    const plain = plainJsonText(obj);
    let i = 0;
    target.textContent = '';

    const timer = setInterval(() => {
      target.textContent = plain.slice(0, i);
      i += 2;
      if (i > plain.length) {
        clearInterval(timer);
        target.textContent = '';
        target.appendChild(buildJsonFragment(obj));
      }
    }, 12);
  }

  /** data-i18n contém apenas markup estático e confiável — ver nota de segurança no topo do arquivo. */
  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    const langLabel = document.getElementById('current-lang-text');
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = TRANSLATIONS[lang][key];
      if (value) el.innerHTML = value;
    });

    const heroJson = document.getElementById('hero-json');
    if (heroJson) typeHeroJson(heroJson, TRANSLATIONS[lang].heroJson);
  }

  /** Monta o mailto: em runtime a partir de data-user/data-domain, em vez de deixá-lo pronto no HTML estático. */
  function wireObfuscatedEmail() {
    const link = document.getElementById('contact-email');
    if (!link) return;
    const user = link.dataset.user;
    const domain = link.dataset.domain;
    if (user && domain) link.href = `mailto:${user}@${domain}`;
  }

  function runPreloader() {
    const preloader = document.getElementById('preloader');
    const bar = document.getElementById('loader-bar');
    const pct = document.getElementById('loader-pct');
    const text = document.getElementById('loader-text');
    if (!preloader || !bar || !pct || !text) return;

    let progress = 0;
    const duration = prefersReducedMotion ? 300 : 1800;
    const step = 100 / (duration / 25);

    const timer = setInterval(() => {
      progress += step;
      const boot = TRANSLATIONS[currentLang].boot;
      if (progress > 20 && progress < 40) text.textContent = boot[1];
      else if (progress > 40 && progress < 65) text.textContent = boot[2];
      else if (progress > 65 && progress < 88) text.textContent = boot[3];
      else if (progress >= 95) text.textContent = boot[4];

      if (progress >= 100) {
        progress = 100;
        clearInterval(timer);
        preloader.classList.add('fade-out');
        document.body.classList.remove('loading');
      }
      bar.style.width = `${progress}%`;
      pct.textContent = `${Math.floor(progress)}%`;
    }, 25);
  }

  /** IntersectionObserver em vez de recalcular tudo a cada evento de scroll — mais barato e não bloqueia a thread principal. */
  function wireScrollReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add('active'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
  }

  function wireLangToggle() {
    const btn = document.getElementById('btn-lang');
    if (!btn) return;
    btn.addEventListener('click', () => applyLanguage(currentLang === 'pt' ? 'en' : 'pt'));
  }

  function wireMobileMenu() {
    const burger = document.getElementById('btn-burger');
    const menu = document.getElementById('mobile-menu');
    if (!burger || !menu) return;
    burger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    wireObfuscatedEmail();
    wireLangToggle();
    wireMobileMenu();
    wireScrollReveal();
    runPreloader();
  });
})();
