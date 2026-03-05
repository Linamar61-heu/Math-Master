function header() {
    const header = document.createElement('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const logoLink = document.createElement('a');
    logoLink.href = '#/';
    logo.appendChild(logoLink);
    
    const logoImg = document.createElement('img');
    logoImg.src = './src/images/MathMasterLogo.png';
    logoImg.alt = 'Math Master Logo';
    logoLink.appendChild(logoImg);

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const navLinks = [
        { name: 'About', href: '#/about', pathname: '/about' },
        { name: 'Contact', href: '#/contact', pathname: '/contact' }
    ];

    navLinks.forEach(link => {
        const navLink = document.createElement('a');
        navLink.href = link.href;
        navLink.textContent = link.name;
        navLink.pathname = link.pathname;
        nav.appendChild(navLink);
    });

    const authLinks = document.createElement('div');
    authLinks.classList.add('auth');

    const loginLink = [
        { name: 'Login', href: '#/login', class: 'login', pathname: '/login' },
        { name: 'Sign Up', href: '#/signup', class: 'signup', pathname: '/signup' }
    ];
    
    loginLink.forEach(link => {
        const authLink = document.createElement('a');
        authLink.href = link.href;
        authLink.textContent = link.name;
        authLink.classList.add(link.class);
        authLink.pathname = link.pathname;
        authLinks.appendChild(authLink);
    });

    header.appendChild(logo);
    header.appendChild(nav);
    header.appendChild(authLinks);

    webapp.appendChild(header);
}

export default header;