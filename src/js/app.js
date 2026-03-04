/*

*/

import homepage from './home.js';
import aboutPage from './about.js';

const webapp = document.querySelector('body');

function header() {
    const header = document.createElement('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const logoLink = document.createElement('a');
    logoLink.href = '/';
    logo.appendChild(logoLink);
    
    const logoImg = document.createElement('img');
    logoImg.src = './src/images/MathMasterLogo.png';
    logoImg.alt = 'Math Master Logo';
    logoLink.appendChild(logoImg);

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const navLinks = [
        { name: 'About', href: '/about', pathname: '/about' },
        { name: 'Contact', href: '/contact', pathname: '/contact' }
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
        { name: 'Login', href: '/login', class: 'login' },
        { name: 'Sign Up', href: '/signup', class: 'signup' }
    ];
    
    loginLink.forEach(link => {
        const authLink = document.createElement('a');
        authLink.href = link.href;
        authLink.textContent = link.name;
        authLink.classList.add(link.class);
        authLinks.appendChild(authLink);
    });

    header.appendChild(logo);
    header.appendChild(nav);
    header.appendChild(authLinks);

    webapp.appendChild(header);
}

function footer() {
    const footer = document.createElement('footer');

    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');

    const footerContact = document.createElement('div');
    footerContact.classList.add('footer-contact');

    const contactHeading = document.createElement('h4');
    contactHeading.textContent = 'Contact Us';

    footerContact.appendChild(contactHeading);

    const emailParagraph = document.createElement('p');
    const emailText = document.createTextNode('Email: ');
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:educatione-online@info.nl';
    emailLink.textContent = 'educatione-online@info.nl';
    emailParagraph.append(emailText, emailLink);
    footerContact.appendChild(emailParagraph);

    const phoneParagraph = document.createElement('p');
    const phoneText = document.createTextNode('Phone: ');
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+1234567890';
    phoneLink.textContent = '+1 (234) 567-890';
    phoneParagraph.append(phoneText, phoneLink);
    footerContact.appendChild(phoneParagraph);

    const footerSocial = document.createElement('div');
    footerSocial.classList.add('footer-social');

    const socialHeading = document.createElement('h4');
    socialHeading.textContent = 'Follow Us';

    footerSocial.appendChild(socialHeading);

    const socialLinks = [
        { url: "https://facebook.com", 
            svg: `
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41
            c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.21.19
            2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61
            1.54v1.85H16.3l-.4 2.88h-2.33v6.99A10
            10 0 0022 12z"/>
            </svg>`
        },
        {
            url: "https://instagram.com",
            svg: `
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 
            2.24 5 5 5h10c2.76 0 5-2.24 
            5-5V7c0-2.76-2.24-5-5-5H7zm5 
            5a5 5 0 110 10 5 5 0 010-10zm6.5-1.25a1.25 
            1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
            </svg>`
        },
        {
            url: "https://linkedin.com",
            svg: `
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 
            2.49 6 1.11 6 0 4.88 0 
            3.5 0 2.12 1.11 1 2.49 
            1c1.38 0 2.49 1.12 2.49 
            2.5zM0 8h5v16H0V8zm7.5 
            0H12v2.2h.1c.6-1.1 
            2.1-2.2 4.3-2.2 4.6 
            0 5.5 3 5.5 6.9V24h-5v-7.5
            c0-1.8 0-4.1-2.5-4.1s-2.9 
            2-2.9 4V24h-5V8z"/>
            </svg>`
        }
    ];

    socialLinks.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.innerHTML = social.svg;
        link.target = "_blank";
        link.classList.add('social-link');
        footerSocial.appendChild(link);
    });

    const footerMenu = document.createElement('div');
    footerMenu.classList.add('menu');

    const menuHeading = document.createElement('h4');
    menuHeading.textContent = 'Quick Links';
    footerMenu.appendChild(menuHeading);

    const menuLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    menuLinks.forEach(link => {
        const menuLink = document.createElement('a');
        menuLink.href = link.href;
        menuLink.textContent = link.name;
        footerMenu.appendChild(menuLink);
    });
    
    footerContent.appendChild(footerContact);
    footerContent.appendChild(footerSocial);
    footerContent.appendChild(footerMenu);

    const copyright = document.createElement('p');
    copyright.textContent = '© 2026 Educatione-Online. All rights reserved.';

    footer.appendChild(footerContent);
    footer.appendChild(copyright);

    webapp.appendChild(footer);
}

header();
aboutPage();
footer();