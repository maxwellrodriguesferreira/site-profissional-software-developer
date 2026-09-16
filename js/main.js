/**
 * Portfólio Maxwell Rodrigues Ferreira - Scripts Interativos
 * Desenvolvedor de Software & Analista de Sistemas
 * Foco: Sites Modernos, Web Apps e Plataformas SaaS
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroConsole();
  initPortfolio();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
});

/* ==========================================================================
   1. NAVBAR & MENU MOBILE & SCROLL SPY
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('main-header');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav-panel');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('nav-scrolled');
    } else {
      header?.classList.remove('nav-scrolled');
    }

    const scrollPos = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('hidden');
      
      const icon = menuBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = mobileNav.classList.contains('hidden') ? 'menu' : 'close';
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        const icon = menuBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
      });
    });
  }
}

/* ==========================================================================
   2. HERO INTERACTIVE CODE CONSOLE
   ========================================================================== */
const heroCodeSnippets = {
  app: `
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">01</span><span><span class="syntax-keyword">import</span> React <span class="syntax-keyword">from</span> <span class="syntax-string">'react'</span>;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">02</span><span><span class="syntax-keyword">export default function</span> <span class="syntax-func">WebApp</span>() {</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">03</span><span class="pl-4"><span class="syntax-keyword">return</span> (</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">04</span><span class="pl-8">&lt;<span class="syntax-type">div</span> <span class="syntax-property">className</span>=<span class="syntax-string">"saas-dashboard"</span>&gt;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">05</span><span class="pl-12">&lt;<span class="syntax-type">Header</span> <span class="syntax-property">title</span>=<span class="syntax-string">"Sistema Web Sob Medida"</span> /&gt;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">06</span><span class="pl-12">&lt;<span class="syntax-type">Dashboard</span> <span class="syntax-property">responsive</span>=<span class="syntax-boolean">{true}</span> /&gt;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">07</span><span class="pl-8">&lt;/<span class="syntax-type">div</span>&gt;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">08</span><span class="pl-4">);</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">09</span><span>}</span></div>`,

  saas: `
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">01</span><span><span class="syntax-keyword">interface</span> <span class="syntax-type">SaaSPlan</span> {</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">02</span><span class="pl-4">tenant: <span class="syntax-type">string</span>;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">03</span><span class="pl-4">features: <span class="syntax-type">string</span>[];</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">04</span><span class="pl-4">isLive: <span class="syntax-boolean">true</span>;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">05</span><span>}</span></div>
<div class="flex items-start gap-3 mt-1"><span class="text-outline select-none opacity-40">06</span><span><span class="syntax-keyword">export const</span> <span class="syntax-func">createSaaS</span> = (config: <span class="syntax-type">SaaSPlan</span>) =&gt; ({</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">07</span><span class="pl-4">status: <span class="syntax-string">"Online e Pronto para Clientes"</span>,</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">08</span><span class="pl-4">ui: <span class="syntax-string">"Moderna e Responsiva"</span></span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">09</span><span>});</span></div>`,

  style: `
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">01</span><span><span class="syntax-comment">/* Design System &amp; Responsividade */</span></span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">02</span><span><span class="syntax-keyword">.web-app-container</span> {</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">03</span><span class="pl-4">display: <span class="syntax-type">grid</span>;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">04</span><span class="pl-4">grid-template-columns: <span class="syntax-string">repeat(auto-fit, minmax(280px, 1fr))</span>;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">05</span><span class="pl-4">gap: <span class="syntax-number">1.5rem</span>;</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">06</span><span class="pl-4">backdrop-filter: <span class="syntax-func">blur</span>(<span class="syntax-number">16px</span>);</span></div>
<div class="flex items-start gap-3"><span class="text-outline select-none opacity-40">07</span><span>}</span></div>`
};

function initHeroConsole() {
  const codeContent = document.getElementById('hero-code-content');
  const tabs = {
    app: document.getElementById('tab-app'),
    saas: document.getElementById('tab-saas'),
    style: document.getElementById('tab-style')
  };

  window.switchHeroTab = function(tabKey) {
    if (!codeContent || !heroCodeSnippets[tabKey]) return;

    Object.keys(tabs).forEach(key => {
      const btn = tabs[key];
      if (!btn) return;
      if (key === tabKey) {
        btn.className = 'px-2.5 py-1 rounded bg-surface-container-highest text-primary font-medium transition-colors';
      } else {
        btn.className = 'px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors';
      }
    });

    codeContent.style.opacity = '0';
    setTimeout(() => {
      codeContent.innerHTML = heroCodeSnippets[tabKey];
      codeContent.style.opacity = '1';
    }, 150);
  };
}

/* ==========================================================================
   3. PORTFOLIO DATA, FILTERS & MODAL
   ========================================================================== */
const projectDetailsData = {
  p1: {
    title: "Plataforma de Gestão SaaS",
    category: "SaaS & Gestão",
    badge: "Sistema Web / SaaS",
    description: "Sistema web moderno desenvolvido para gerenciamento de clientes, controle de pedidos/serviços e acompanhamento de fluxo de trabalho em tempo real.",
    challenge: "Organizar tarefas, pedidos e clientes em um único painel claro e fácil de usar em qualquer dispositivo.",
    solution: "Interface intuitiva, navegação fluida, banco de dados estruturado e painéis responsivos para facilitar o uso no dia a dia.",
    metrics: [
      { label: "Experiência", value: "100% Responsivo" },
      { label: "Design", value: "Moderno" },
      { label: "Disponibilidade", value: "Online" }
    ],
    techs: ["React", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"],
    ctaText: "Quero um sistema similar"
  },
  p2: {
    title: "Site Institucional & Landing Page de Alta Conversão",
    category: "Sites & Landing Pages",
    badge: "Web Design & Frontend",
    description: "Site profissional desenvolvido para apresentar produtos e serviços com visual de alto impacto, carregamento rápido e otimização para todos os tamanhos de tela.",
    challenge: "Criar uma presença online profissional que transmita credibilidade imediata e atraia clientes.",
    solution: "Estrutura visual limpa com temas escuro/moderno, botões de ação estratégicos para contato direto via WhatsApp e SEO otimizado.",
    metrics: [
      { label: "Design", value: "Premium" },
      { label: "Velocidade", value: "Rápida" },
      { label: "Adaptação", value: "Mobile & Desktop" }
    ],
    techs: ["HTML5", "CSS3 / Tailwind", "JavaScript", "SEO", "Design Responsivo"],
    ctaText: "Quero criar meu site"
  },
  p3: {
    title: "Aplicativo Web de Gestão Operacional",
    category: "Aplicativos Web",
    badge: "Web App Completo",
    description: "Aplicação web desenvolvida para controle de rotinas, cadastro de itens e acompanhamento de status em tempo real.",
    challenge: "Substituir controles manuais e planilhas por uma aplicação web rápida e segura.",
    solution: "Formulários inteligentes, filtros rápidos e visualização clara de tabelas e status operacionais.",
    metrics: [
      { label: "Usabilidade", value: "Simples & Prática" },
      { label: "Acesso", value: "Qualquer Navegador" },
      { label: "Controle", value: "Tempo Real" }
    ],
    techs: ["JavaScript / TypeScript", "React", "Node.js", "PostgreSQL", "CSS Moderno"],
    ctaText: "Desenvolver aplicativo web"
  },
  p4: {
    title: "Dashboard com Métricas & Relatórios",
    category: "Dashboards",
    badge: "Painel Administrativo",
    description: "Painel de controle com gráficos visuais, resumo de dados importantes e indicadores claros para tomada de decisões.",
    challenge: "Visualizar dados do negócio de forma rápida sem complicação ou excesso de informações dispersas.",
    solution: "Cards de métricas fáceis de ler, gráficos modernos e layout organizado por categorias.",
    metrics: [
      { label: "Visualização", value: "Gráficos Claros" },
      { label: "Métricas", value: "Organizadas" },
      { label: "Interface", value: "Clean" }
    ],
    techs: ["React", "Chart.js / Recharts", "TailwindCSS", "Node.js"],
    ctaText: "Criar painel para meu negócio"
  },
  p5: {
    title: "MVP Ágil para Lançamento de Ideias",
    category: "SaaS & Gestão",
    badge: "Produto Inicial (MVP)",
    description: "Desenvolvimento rápido da primeira versão funcional de um produto ou serviço para validação direta com o público.",
    challenge: "Tirar uma ideia do papel com agilidade e excelente custo-benefício.",
    solution: "Foco nas funcionalidades essenciais com design moderno e pronto para receber os primeiros usuários.",
    metrics: [
      { label: "Foco", value: "Essencial" },
      { label: "Entrega", value: "Ágil" },
      { label: "Resultado", value: "Pronto p/ Uso" }
    ],
    techs: ["Next.js / React", "TypeScript", "TailwindCSS", "Node.js"],
    ctaText: "Tirar minha ideia do papel"
  },
  p6: {
    title: "Portal Web Personalizado",
    category: "Aplicativos Web",
    badge: "Solução Sob Medida",
    description: "Website e aplicação web desenvolvidos sob medida de acordo com as necessidades específicas do cliente.",
    challenge: "Atender a requisitos específicos que modelos prontos de internet não conseguem suprir.",
    solution: "Desenvolvimento dedicado com código próprio, layout exclusivo e estrutura pensada para o projeto.",
    metrics: [
      { label: "Personalização", value: "100% Exclusivo" },
      { label: "Código", value: "Próprio e Limpo" },
      { label: "Suporte", value: "Dedicado" }
    ],
    techs: ["TypeScript", "React", "HTML5", "CSS3", "Node.js"],
    ctaText: "Solicitar projeto personalizado"
  }
};

function initPortfolio() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  window.filterPortfolio = function(category, clickedBtn) {
    filterBtns.forEach(btn => {
      btn.classList.remove('bg-primary-container', 'text-on-primary', 'shadow-[0_0_15px_rgba(14,165,233,0.3)]');
      btn.classList.add('bg-surface-container', 'text-on-surface-variant');
    });

    if (clickedBtn) {
      clickedBtn.classList.remove('bg-surface-container', 'text-on-surface-variant');
      clickedBtn.classList.add('bg-primary-container', 'text-on-primary', 'shadow-[0_0_15px_rgba(14,165,233,0.3)]');
    }

    items.forEach(item => {
      const itemCat = item.getAttribute('data-cat');
      if (category === 'all' || itemCat === category) {
        item.style.display = 'flex';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 200);
      }
    });
  };

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeModalBtn = document.getElementById('close-modal-btn');

  window.openProjectModal = function(projectId) {
    const data = projectDetailsData[projectId];
    if (!data || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="flex flex-col gap-space-lg">
        <div>
          <div class="flex items-center gap-space-xs mb-2">
            <span class="px-2.5 py-0.5 rounded-full bg-primary-container/20 border border-primary/30 text-primary text-[11px] font-code">${data.badge}</span>
            <span class="text-on-surface-variant text-body-sm">• ${data.category}</span>
          </div>
          <h3 class="font-headline text-2xl md:text-3xl text-on-surface font-bold">${data.title}</h3>
          <p class="font-body text-on-surface-variant text-body-md mt-2">${data.description}</p>
        </div>

        <div class="grid grid-cols-3 gap-space-sm p-space-md rounded-xl bg-surface-container-lowest/80 border border-border-subtle">
          ${data.metrics.map(m => `
            <div class="text-center">
              <span class="block font-headline text-lg md:text-xl font-bold text-primary">${m.value}</span>
              <span class="text-[11px] md:text-xs text-on-surface-variant uppercase tracking-wider">${m.label}</span>
            </div>
          `).join('')}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div class="p-space-md rounded-xl bg-surface-container-low/70 border border-outline-variant/30">
            <span class="flex items-center gap-1.5 font-headline font-semibold text-secondary mb-2">
              <span class="material-symbols-outlined text-[18px]">flag</span>
              O Objetivo
            </span>
            <p class="text-body-sm text-on-surface-variant leading-relaxed">${data.challenge}</p>
          </div>
          <div class="p-space-md rounded-xl bg-surface-container-low/70 border border-outline-variant/30">
            <span class="flex items-center gap-1.5 font-headline font-semibold text-primary mb-2">
              <span class="material-symbols-outlined text-[18px]">verified</span>
              O Que Foi Desenvolvido
            </span>
            <p class="text-body-sm text-on-surface-variant leading-relaxed">${data.solution}</p>
          </div>
        </div>

        <div>
          <span class="block font-label-md text-on-surface mb-2 font-medium">Tecnologias Utilizadas:</span>
          <div class="flex flex-wrap gap-2">
            ${data.techs.map(t => `
              <span class="px-3 py-1 rounded-lg bg-surface-container-high border border-border-subtle text-secondary font-code text-xs">${t}</span>
            `).join('')}
          </div>
        </div>

        <div class="pt-space-md border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <span class="text-body-sm text-on-surface-variant text-center sm:text-left">Quer desenvolver um projeto como este?</span>
          <a href="https://wa.me/5511990279590?text=Ol%C3%A1%20Maxwell!%20Vi%20o%20projeto%20${encodeURIComponent(data.title)}%20no%20seu%20site%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-xl bg-primary-container text-on-primary font-headline font-semibold text-sm hover:bg-secondary-container transition-all">
            <span>${data.ctaText}</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeModalBtn?.addEventListener('click', window.closeProjectModal);
  
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeProjectModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      window.closeProjectModal();
    }
  });
}

/* ==========================================================================
   4. CONTACT FORM VALIDATION & INTERACTION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const feedback = document.getElementById('form-feedback');
  const phoneInput = document.getElementById('contato-telefone');
  const directWhatsappBtn = document.getElementById('btn-send-whatsapp-direct');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      } else if (value.length > 0) {
        value = value.replace(/^(\d*)$/, '($1');
      }
      e.target.value = value;
    });
  }

  if (directWhatsappBtn && form) {
    directWhatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('contato-nome')?.value.trim() || 'Não informado';
      const email = document.getElementById('contato-email')?.value.trim() || 'Não informado';
      const subject = document.getElementById('contato-assunto')?.value || 'Projeto';
      const msg = document.getElementById('contato-mensagem')?.value.trim() || 'Gostaria de conversar sobre a criação de um site ou aplicativo web.';

      const formattedText = `Olá Maxwell!%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*E-mail:* ${encodeURIComponent(email)}%0A*Tipo de Projeto:* ${encodeURIComponent(subject)}%0A*Mensagem:* ${encodeURIComponent(msg)}`;
      window.open(`https://wa.me/5511990279590?text=${formattedText}`, '_blank');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="material-symbols-outlined animate-spin text-[20px]">sync</span>
          <span>Enviando solicitação...</span>
        `;
      }

      setTimeout(() => {
        if (submitBtn) submitBtn.classList.add('hidden');
        if (feedback) feedback.classList.remove('hidden');
        form.reset();
      }, 1000);
    });
  }
}

/* ==========================================================================
   5. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
      backToTopBtn.style.transform = 'translateY(0)';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.pointerEvents = 'none';
      backToTopBtn.style.transform = 'translateY(10px)';
    }
  }, { passive: true });
}

/* ==========================================================================
   6. SMOOTH SCROLL FOR ALL ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
