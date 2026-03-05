import homepage from './home.js';
import aboutPage from './about.js';

const routes = {
    '/': homepage,
    '/about': aboutPage,
    '/contact': () => {
        const div = document.createElement('div');
        div.innerHTML = `<h1>Contact Page</h1>`;
        return div;
    },
    '/login': () => {
        const div = document.createElement('div');
        div.innerHTML = `<h1>Login Page</h1>`;
        return div;
    },
    '/signup': () => {
        const div = document.createElement('div');
        div.innerHTML = `<h1>Sign Up Page</h1>`;
        return div;
    }
};

// Main render function
function render(path) {
    const app = document.querySelector('#app');

    if (!app) return;

    app.innerHTML = '';

    const route = routes[path] || routes['/'];
    const page = route();

    app.appendChild(page);
}

// Handle navigation without reload
function navigateTo(path) {
    history.pushState({}, '', path);
    render(path);
}

// Intercept link clicks
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link) return;

    const url = new URL(link.href);

    if (url.origin === location.origin) {
        e.preventDefault();
        navigateTo(url.pathname);
    }
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
    render(location.pathname);
});

// Initial load
window.addEventListener('DOMContentLoaded', () => {
    render(location.pathname);
});

export default navigateTo;