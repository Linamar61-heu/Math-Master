console.log("contact page loaded");

function contactPage() {
    const webApp = document.querySelector('body');
    const main = document.createElement('main');

    const contactSection = document.createElement('section');
    contactSection.id = 'contact';

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contactSection.appendChild(contactTitle);

    const contactText = document.createElement('p');
    contactText.textContent = `Have questions, feedback, or just want to say hello? We would love to hear from you! 
    Please feel free to reach out to us through any of the following methods:`;
    contactText.style.whiteSpace = "pre-line";
    contactSection.appendChild(contactText);

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset();
    });

    webApp.appendChild(contactSection);
}

export default contactPage;