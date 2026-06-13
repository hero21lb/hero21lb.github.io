/* =========================================================
   TRADUCCIONES ES / EN
   ========================================================= */
const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_project: "Proyecto",
    nav_exp: "Experiencia",
    nav_work: "Forma de trabajo",
    nav_contact: "Contacto",

    eyebrow: "Desarrollador de software · Creador de productos",
    hero_title: "Construyo productos digitales que resuelven problemas reales.",
    hero_lead: `Desarrollo aplicaciones web, móviles y herramientas de automatización que solucionan problemas
      del mundo real. Mi trabajo abarca desde la arquitectura de backend y bases de datos hasta el
      diseño UX/UI, ayudando a convertir ideas en productos confiables, fáciles de usar y construidos
      para durar.`,
    btn_project: "Ver Stock al Toque",
    btn_contact: "Hablemos de tu proyecto",

    about_h2: "Sobre mí",
    about_p1: `Empecé como técnico químico, un oficio que me enseñó a pensar en procesos: entender un
          sistema completo antes de tocar una sola variable. Con el tiempo, esa forma de trabajar
          se trasladó al software — y terminó siendo lo que más disfruto hacer.`,
    about_p2: `Hoy diseño y desarrollo aplicaciones web y móviles de punta a punta: backend con
          <strong> Python (FastAPI)</strong> y <strong>PostgreSQL</strong>, además de trabajo en
          <strong> Kotlin</strong>, <strong>C#</strong>, <strong>Java</strong> y <strong>C++</strong>
          según lo que el proyecto necesite. También me ocupo del diseño UX/UI y del branding,
          porque creo que un buen producto no se separa de cómo se ve y se siente.`,
    about_p3: `Por fuera del código, trabajo con <strong>Blender</strong> para modelado 3D, experimento
          con <strong>IA local y automatización</strong>, y resuelvo problemas de hardware y
          software cuando hace falta. Vengo de la atención al cliente, así que sé escuchar lo que
          un usuario necesita aunque no sepa explicarlo con palabras técnicas.`,
    about_quote: `No busco hacer "lo último en tecnología" — busco que el sistema funcione, que la
          persona que lo usa lo entienda, y que siga funcionando dentro de dos años.`,

    project_h2: "Proyecto destacado",
    status_tag: "En producción",
    project_slogan: "Del cuaderno a tu celular.",
    project_summary: `Sistema de gestión de stock, proveedores, cuentas corrientes y precios pensado
            para comercios de barrio que hoy llevan todo a mano. Está en funcionamiento real y en
            proceso de comercialización.`,
    h_problem: "El problema",
    problem_p: `La mayoría de los comercios chicos manejan su negocio en papel: cuadernos, planillas
                sueltas o memoria. Esto genera precios desactualizados o inconsistentes, falta de
                control real sobre el stock, y cuentas corrientes (fiados, deudas de clientes) que
                se pierden o se olvidan. A esto se suma una mala gestión de pedidos y proveedores,
                con compras duplicadas o faltantes que se detectan tarde. Existen sistemas para
                resolver esto, pero suelen ser complejos, pensados para una PC de escritorio, y
                rara vez se adaptan a la forma de trabajar de cada local.`,
    h_solution: "La solución",
    solution_p: `Una plataforma web instalable como app (PWA), pensada para que alguien sin
                experiencia en software pueda tenerla funcionando en su celular en minutos.
                Funciona igual de bien desde un teléfono que desde una computadora, sin instalación
                compleja ni hardware adicional. Internamente está construida con un sistema de
                tenants: cada negocio tiene su propio espacio, y puedo activar o desactivar módulos
                según lo que ese comercio necesite — sin tener que mantener una versión distinta
                del sistema para cada cliente.`,
    h_stack: "Stack técnico",
    tech_list: `<li>FastAPI (Python) — API y lógica de negocio</li>
                <li>PostgreSQL — persistencia de datos</li>
                <li>HTML / CSS / JS — interfaz web</li>
                <li>Arquitectura pensada para escalar a múltiples usuarios y sucursales</li>`,
    h_status: "Estado actual",
    status_p: `Sistema funcional en uso real, con mejoras continuas basadas en feedback directo
                de quienes lo operan día a día. Próximo paso: empaquetarlo como producto para
                ofrecerlo a otros comercios.`,

    exp_h2: "Experiencia y habilidades",
    skills_dev_h: "Desarrollo",
    skills_dev_list: `<li>Python · FastAPI</li>
            <li>PostgreSQL / SQL</li>
            <li>Kotlin</li>
            <li>C#</li>
            <li>Java</li>
            <li>C++</li>
            <li>Desarrollo web (front + back)</li>
            <li>Desarrollo de apps móviles</li>
            <li>Unity</li>
            <li>Godot</li>`,
    skills_design_h: "Diseño y producto",
    skills_design_list: `<li>Diseño UX/UI</li>
            <li>Figma</li>
            <li>Branding e identidad visual</li>
            <li>Modelado 3D (Blender)</li>
            <li>Prototipado de productos digitales</li>`,
    skills_sys_h: "Sistemas y soporte",
    skills_sys_list: `<li>IA local y automatización</li>
            <li>Desarrollo de chatbots</li>
            <li>Reparación de hardware y software</li>
            <li>Atención al cliente y soporte técnico</li>`,
    skills_base_h: "Base técnica",
    skills_base_list: `<li>Técnico Químico</li>
            <li>Tecnicatura Universitaria en Programación — UTN (en curso)</li>
            <li>Pensamiento orientado a procesos y sistemas</li>
            <li>Resolución de problemas con criterio práctico</li>`,

    work_h2: "Forma de trabajo",
    work1_h: "Entender antes de construir",
    work1_p: `Antes de escribir una línea de código, dedico tiempo a entender el problema real:
              quién lo va a usar, qué oportunidades se presentan, y qué resultado concreto se busca.`,
    work2_h: "Avanzar en partes que se puedan ver y probar",
    work2_p: `Prefiero entregar versiones funcionales tempranas, aunque sean simples, para
              recibir feedback real y ajustar el rumbo antes de invertir tiempo en algo que
              no encaja.`,
    work3_h: "Documentar y dejar todo entendible",
    work3_p: `Un sistema que solo yo entiendo es un sistema frágil. Documento decisiones,
              estructuras y procesos para que el proyecto pueda crecer sin depender de una
              sola persona.`,
    work4_h: "Acompañar después de la entrega",
    work4_p: `El trabajo no termina cuando el sistema se sube a producción. Doy seguimiento,
              corrijo lo que aparece en el uso real y ajusto según las necesidades que surgen
              con el tiempo.`,

    contact_h2: "Contacto",
    contact_lead: `Si tenés un proyecto en mente, un sistema que necesita orden, o simplemente querés
          conversar sobre una idea — escribime. Respondo personalmente.`,
    contact_email_label: "Email",
    footer_text: "© 2026 — Desarrollado y diseñado a mano.",
    back_top: "Volver arriba ↑",
  },

  en: {
    nav_about: "About",
    nav_project: "Project",
    nav_exp: "Experience",
    nav_work: "How I work",
    nav_contact: "Contact",

    eyebrow: "Software developer · Digital product creator",
    hero_title: "I build digital products that solve real problems.",
    hero_lead: `I develop web applications, mobile apps and automation tools that solve real-world problems.
      My work spans from backend architecture and databases to UX/UI design, helping turn ideas into
      reliable products that are simple to use and built to last.`,
    btn_project: "View Stock al Toque",
    btn_contact: "Let's talk about your project",

    about_h2: "About me",
    about_p1: `I started out as a chemical technician — a trade that taught me to think in terms of
          processes: understanding the whole system before touching a single variable. Over time,
          that way of working carried over into software, and ended up being what I enjoy most.`,
    about_p2: `Today I design and develop web and mobile applications end to end: backend with
          <strong> Python (FastAPI)</strong> and <strong>PostgreSQL</strong>, plus work in
          <strong> Kotlin</strong>, <strong>C#</strong>, <strong>Java</strong> and <strong>C++</strong>
          depending on what the project needs. I also handle UX/UI design and branding, because I
          believe a good product can't be separated from how it looks and feels.`,
    about_p3: `Outside of code, I work with <strong>Blender</strong> for 3D modeling, experiment with
          <strong>local AI and automation</strong>, and solve hardware and software issues when needed.
          I come from a customer support background, so I know how to listen to what a user needs
          even when they can't put it into technical words.`,
    about_quote: `I don't aim to use "the latest technology" — I aim for the system to work, for the
          person using it to understand it, and for it to keep working two years from now.`,

    project_h2: "Featured project",
    status_tag: "In production",
    project_slogan: "From the notebook to your phone.",
    project_summary: `Inventory, supplier, running-tab and pricing management system built for small,
            neighborhood businesses that currently run everything by hand. It's currently running
            in real use and being brought to market.`,
    h_problem: "The problem",
    problem_p: `Most small businesses run on paper: notebooks, loose spreadsheets, or memory. This
                leads to outdated or inconsistent prices, no real control over stock, and running
                tabs (customer credit, debts) that get lost or forgotten. On top of that, supplier
                and order management tends to be messy, with duplicate purchases or shortages that
                get noticed too late. Tools to solve this exist, but they're often complex, built
                for a desktop PC, and rarely adapt to how each individual business actually works.`,
    h_solution: "The solution",
    solution_p: `A web platform installable as an app (PWA), designed so someone with no software
                experience can have it running on their phone within minutes. It works just as well
                from a phone as from a computer, with no complex setup or extra hardware required.
                Under the hood it's built on a multi-tenant system: each business gets its own
                space, and modules can be turned on or off depending on what that business needs —
                without maintaining a separate version of the system for every client.`,
    h_stack: "Tech stack",
    tech_list: `<li>FastAPI (Python) — API and business logic</li>
                <li>PostgreSQL — data persistence</li>
                <li>HTML / CSS / JS — web interface</li>
                <li>Architecture designed to scale to multiple users and branches</li>`,
    h_status: "Current status",
    status_p: `A fully functional system in real-world use, with continuous improvements based on
                direct feedback from the people who operate it daily. Next step: packaging it as a
                product to offer to other businesses.`,

    exp_h2: "Experience and skills",
    skills_dev_h: "Development",
    skills_dev_list: `<li>Python · FastAPI</li>
            <li>PostgreSQL / SQL</li>
            <li>Kotlin</li>
            <li>C#</li>
            <li>Java</li>
            <li>C++</li>
            <li>Web development (front + back)</li>
            <li>Mobile app development</li>
            <li>Unity</li>
            <li>Godot</li>`,
    skills_design_h: "Design and product",
    skills_design_list: `<li>UX/UI design</li>
            <li>Figma</li>
            <li>Branding and visual identity</li>
            <li>3D modeling (Blender)</li>
            <li>Digital product prototyping</li>`,
    skills_sys_h: "Systems and support",
    skills_sys_list: `<li>Local AI and automation</li>
            <li>Chatbot development</li>
            <li>Hardware and software repair</li>
            <li>Customer service and technical support</li>`,
    skills_base_h: "Foundation",
    skills_base_list: `<li>Chemical Technician</li>
            <li>University Degree in Programming — UTN (in progress)</li>
            <li>Process- and systems-oriented thinking</li>
            <li>Practical, pragmatic problem solving</li>`,

    work_h2: "How I work",
    work1_h: "Understand before building",
    work1_p: `Before writing a single line of code, I spend time understanding the real problem:
              who will use it, what opportunities exist, and what concrete outcome
              is needed.`,
    work2_h: "Move forward in parts that can be seen and tested",
    work2_p: `I prefer delivering working early versions, even simple ones, to get real feedback
              and adjust direction before investing time in something that doesn't fit.`,
    work3_h: "Document and keep everything understandable",
    work3_p: `A system that only I understand is a fragile system. I document decisions, structures
              and processes so the project can grow without depending on a single person.`,
    work4_h: "Stay involved after delivery",
    work4_p: `The work doesn't end when the system goes into production. I follow up, fix what comes
              up in real use, and make adjustments based on needs that arise over time.`,

    contact_h2: "Contact",
    contact_lead: `If you have a project in mind, a system that needs some order, or just want to
          talk through an idea — reach out. I reply personally.`,
    contact_email_label: "Email",
    footer_text: "© 2026 — Built and designed by hand.",
    back_top: "Back to top ↑",
  },
};

/* =========================================================
   LÓGICA DE CAMBIO DE IDIOMA
   ========================================================= */
(function () {
  const STORAGE_KEY = "site-lang";
  const toggleBtn = document.getElementById("lang-toggle");
  const htmlEl = document.documentElement;

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    htmlEl.setAttribute("lang", lang);
    toggleBtn.textContent = lang === "es" ? "EN" : "ES";
    toggleBtn.setAttribute(
      "aria-label",
      lang === "es" ? "Switch to English" : "Cambiar a español"
    );
    localStorage.setItem(STORAGE_KEY, lang);
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const initialLang = saved || "es";
  applyLanguage(initialLang);

  toggleBtn.addEventListener("click", () => {
    const current = htmlEl.getAttribute("lang") === "en" ? "en" : "es";
    const next = current === "es" ? "en" : "es";
    applyLanguage(next);
  });
})();
