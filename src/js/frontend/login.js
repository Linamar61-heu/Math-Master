console.log('Login page loaded');

function loginPage() {
    const webApp = document.querySelector('body');
    const main = document.createElement('main');

    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');

    const loginTitle = document.createElement('h1');
    loginTitle.textContent = 'Login';
    loginContainer.appendChild(loginTitle);
    loginContainer.appendChild(document.createElement('br'));

    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');

    const usernameLabel = document.createElement('label');
    usernameLabel.classList.add('login-label');
    usernameLabel.textContent = 'Username:';
    loginForm.appendChild(usernameLabel);

    loginForm.appendChild(document.createElement('br'));
    
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Enter your username';
    usernameInput.classList.add('login-input');
    usernameInput.autocomplete = 'username';
    usernameInput.required = true;
    loginForm.appendChild(usernameInput);

    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(document.createElement('br'));

    const passwordLabel = document.createElement('label');
    passwordLabel.classList.add('login-label');
    passwordLabel.textContent = 'Password:';
    loginForm.appendChild(passwordLabel);

    loginForm.appendChild(document.createElement('br'));

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Enter your password';
    passwordInput.classList.add('login-input');
    passwordInput.required = true;
    loginForm.appendChild(passwordInput);

    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(document.createElement('br'));

    const loginButton = document.createElement('button');
    loginButton.type = 'submit';
    loginButton.textContent = 'Login';
    loginButton.classList.add('login-button');
    loginForm.appendChild(loginButton);

    loginContainer.appendChild(loginForm);

    main.appendChild(loginContainer);
    
    webApp.appendChild(main);
}

export default loginPage;