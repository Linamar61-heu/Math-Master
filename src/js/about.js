console.log("about page loaded");
function aboutPage() {
    const webApp = document.querySelector('body');
    const main = document.createElement('main');

    // About Section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Math Master';
    aboutSection.appendChild(aboutTitle);

    const aboutText = document.createElement('p');
    aboutText.textContent = `Math Master is an online platform dedicated to helping everyone with their math skills.
    The platform is designed to practice and improve mathematical abilities through interactive lessons and personalized learning paths.
    The paths that are available are tailored to meet the needs of each individual learner, ensuring a comprehensive and effective learning experience.
    By using gamification, we optimize the learning experience.
    Math Master is a part of the online platform of Educatione-Online.`;
    aboutText.style.whiteSpace = "pre-line";
    aboutSection.appendChild(aboutText);

    const missionVission = document.createElement('section');
    missionVission.id = 'mission-vision';

    const missionVisionTitle = document.createElement('h2');
    missionVisionTitle.textContent = 'Our Mission & Vision';
    missionVission.appendChild(missionVisionTitle);

    const missionVisionText = document.createElement('p');
    missionVisionText.textContent = `Learn about our princeples and goals. By learning about our mission and vision.`;
    missionVisionText.style.whiteSpace = "pre-line";
    missionVission.appendChild(missionVisionText);

    const missionTitle = document.createElement('h3');
    missionTitle.textContent = 'Mission';
    missionVission.appendChild(missionTitle);

    const visionTitle = document.createElement('h3');
    visionTitle.textContent = 'Vision';
    missionVission.appendChild(visionTitle);

    main.appendChild(aboutSection);
    main.appendChild(missionVission);
    
    webApp.appendChild(main);
}

export default aboutPage;