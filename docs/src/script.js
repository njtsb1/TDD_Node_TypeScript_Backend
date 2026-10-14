// Dicionário de Idiomas
const translations = {
    en: {
        apiOnline: "API Online",
        navGeneral: "GENERAL",
        navDashboard: "Dashboard",
        navPosts: "POSTS",
        navAllPosts: "All Posts",
        navDeletePost: "Delete Post",
        navTests: "TESTS",
        navRunTests: "Run Tests",
        navCoverage: "Coverage",
        navDocumentation: "DOCUMENTATION",
        navApiDocs: "API Docs",
        navExamples: "Examples",
        footerVersion: "Version 1.0.0",
        mainTitle: "Posts",
        mainSubtitle: "Manage and reference user-specific posts",
        tabAll: "All posts",
        tabDelete: "Delete post",
        btnTest: "Test endpoint",
        getDesc: "Returns all posts from a specific user.",
        deleteDesc: "Deletes a specific post from the system database.",
        titleParams: "Parameters",
        paramUserDesc: "User ID value",
        paramPostDesc: "Post ID value",
        titleReqExample: "Request Example",
        titleSuccessRes: "Success Response",
        titleErrorRes: "Error Response",
        btnCopy: "Copy",
        copied: "Copied!",
        footerCopyright: "© 2026 TDD Backend API",
        footerMade: "Developed by Nivaldo Beirão",
        footerTech: "using Node.js, TypeScript and TDD"
    },
    pt: {
        apiOnline: "API Online",
        navGeneral: "VISÃO GERAL",
        navDashboard: "Dashboard",
        navPosts: "POSTAGENS",
        navAllPosts: "Todas as postagens",
        navDeletePost: "Excluir postagem",
        navTests: "TESTES",
        navRunTests: "Executar testes",
        navCoverage: "Cobertura",
        navDocumentation: "DOCUMENTAÇÃO",
        navApiDocs: "API Docs",
        navExamples: "Exemplos",
        footerVersion: "Versão 1.0.0",
        mainTitle: "Postagens",
        mainSubtitle: "Gerencie e consulte as postagens dos usuários",
        tabAll: "Todas as postagens",
        tabDelete: "Excluir postagem",
        btnTest: "Testar endpoint",
        getDesc: "Retorna todas as postagens de um usuário específico.",
        deleteDesc: "Exclui uma postagem específica do banco de dados.",
        titleParams: "Parâmetros",
        paramUserDesc: "ID do usuário",
        paramPostDesc: "ID da postagem",
        titleReqExample: "Exemplo de requisição",
        titleSuccessRes: "Resposta de sucesso",
        titleErrorRes: "Resposta de erro",
        btnCopy: "Copiar",
        copied: "Copiado!",
        footerCopyright: "© 2026 TDD Backend API",
        footerMade: "Desenvolvido por Nivaldo Beirão",
        footerTech: "usando Node.js, TypeScript e TDD"
    },
    es: {
        apiOnline: "API en Línea",
        navGeneral: "VISIÓN GENERAL",
        navDashboard: "Dashboard",
        navPosts: "PUBLICACIONES",
        navAllPosts: "Todas las publicaciones",
        navDeletePost: "Eliminar publicación",
        navTests: "PRUEBAS",
        navRunTests: "Ejecutar pruebas",
        navCoverage: "Cobertura",
        navDocumentation: "DOCUMENTACIÓN",
        navApiDocs: "Documentos API",
        navExamples: "Ejemplos",
        footerVersion: "Versión 1.0.0",
        mainTitle: "Publicaciones",
        mainSubtitle: "Gestione y consulte las publicaciones de los usuarios",
        tabAll: "Todas las publicaciones",
        tabDelete: "Eliminar publicación",
        btnTest: "Probar endpoint",
        getDesc: "Devuelve todas las publicaciones de un usuario específico.",
        deleteDesc: "Elimina una publicación específica de la base de datos.",
        titleParams: "Parámetros",
        paramUserDesc: "ID del usuario",
        paramPostDesc: "ID de la publicación",
        titleReqExample: "Ejemplo de solicitud",
        titleSuccessRes: "Respuesta de éxito",
        titleErrorRes: "Respuesta de error",
        btnCopy: "Copiar",
        copied: "Copiado!",
        footerCopyright: "© 2026 TDD Backend API",
        footerMade: "Desarrollado por Nivaldo Beirão",
        footerTech: "usando Node.js, TypeScript y TDD"
    }
};

// Gerenciamento de Estado de Abas / Navegação
const tabs = document.querySelectorAll('.inner-tab');
const tabContents = document.querySelectorAll('.tab-content');
const sidebarLinks = document.querySelectorAll('.tab-link');

function switchTab(tabId) {
    tabContents.forEach(content => content.classList.remove('active-content'));
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    sidebarLinks.forEach(link => link.classList.remove('active-tab'));

    const targetContent = document.getElementById(tabId);
    if(targetContent) targetContent.classList.add('active-content');

    const correspondingTabs = document.querySelectorAll(`[data-tab="${tabId}"]`);
    correspondingTabs.forEach(elem => {
        if(elem.classList.contains('inner-tab')) {
            elem.classList.add('active');
            elem.setAttribute('aria-selected', 'true');
        } else {
            elem.classList.add('active-tab');
        }
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab(link.dataset.tab);
    });
});

// Gerenciamento de Idioma (Internacionalização i18n)
const langSelect = document.getElementById('lang-select');

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));

// Gerenciamento de Tema (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode', !isLight);
    
    // Altera o ícone Sol/Lua de acordo com o estado do tema
    if (isLight) {
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        themeIcon.className = 'fa-solid fa-sun';
    }
});

// Mecanismo de Cópia para a Área de Transferência
const copyButtons = document.querySelectorAll('.btn-copy');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const codeBlock = button.nextElementSibling.querySelector('code');
        if (codeBlock) {
            navigator.clipboard.writeText(codeBlock.textContent.trim()).then(() => {
                const currentLang = langSelect.value;
                const originalText = translations[currentLang].btnCopy;
                
                button.innerHTML = `<i class="fa-solid fa-check"></i> <span>${translations[currentLang].copied}</span>`;
                setTimeout(() => {
                    button.innerHTML = `<i class="fa-regular fa-copy"></i> <span>${originalText}</span>`;
                }, 2000);
            });
        }
    });
});

// Inicialização padrão
applyLanguage('en');
