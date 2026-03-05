console.log("about page loaded");
function aboutPage() {
    const webApp = document.querySelector('body');
    const main = document.createElement('main');

    // Secondary Navigation
    const secondaryNav = document.createElement('nav');
    secondaryNav.classList.add('secondary-nav');

    const sections = ['About', 'Mission & Vision', 'Team', 'Research & Development'];
    sections.forEach(section => {
        const navLink = document.createElement('a');
        navLink.href = `#/${section.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;
        navLink.textContent = section;
        navLink.classList.add('secondary-nav-link');
        secondaryNav.appendChild(navLink);
    });

    // About Section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Math Master';
    aboutSection.appendChild(aboutTitle);

    const educationeOnlineLink = document.createElement('a');
    educationeOnlineLink.href = 'https://educatione-online.com/';
    educationeOnlineLink.textContent = 'Educatione-Online';
    educationeOnlineLink.target = '_blank';

    const aboutText = document.createElement('p');
    aboutText.append(`Math Master is an online platform dedicated to helping everyone with their math skills.
    The platform is designed to practice and improve mathematical abilities through interactive lessons and personalized learning paths.
    The paths that are available are tailored to meet the needs of each individual learner, ensuring a comprehensive and effective learning experience.
    By using gamification, we optimize the learning experience.
    Math Master is a part of the online platform of `, educationeOnlineLink, `.`);
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

    const missionVisionArticle = document.createElement('div');
    missionVisionArticle.classList.add('mission-vision-article');

    const mission = document.createElement('article');
    mission.id = 'mission';
    mission.classList.add('feature');

    const missionTitle = document.createElement('h3');
    missionTitle.textContent = 'Mission';
    mission.appendChild(missionTitle);

    const missionText = document.createElement('p');
    missionText.textContent = `Our mission is to make math accessible and enjoyable for everyone, regardless of their background or skill level.
    We believe that with the right tools and support, anyone can become a math master.`;
    missionText.style.whiteSpace = "pre-line";
    mission.appendChild(missionText);

    const vision = document.createElement('article');
    vision.id = 'vision';
    vision.classList.add('feature');

    const visionTitle = document.createElement('h3');
    visionTitle.textContent = 'Vision';
    vision.appendChild(visionTitle);

    const visionText = document.createElement('p');
    visionText.textContent = `Our vision is to create a world where math is not just a subject, but a powerful tool that empowers individuals to solve problems, think critically, and achieve their goals.
    We believe that by fostering a love for math and providing high-quality educational resources, we can help people unlock their full potential and make a positive impact on the world.`;
    visionText.style.whiteSpace = "pre-line";
    vision.appendChild(visionText);

    missionVisionArticle.appendChild(mission);
    missionVisionArticle.appendChild(vision);
    missionVission.appendChild(missionVisionArticle);

    const team = document.createElement('section');
    team.id = 'team';

    const teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Our Team';
    team.appendChild(teamTitle);

    const teamText = document.createElement('p');
    teamText.textContent = `Our team consists of experienced educators, mathematicians, and technologists who are passionate about making math accessible and enjoyable for everyone.
    The developers in our team are dedicated to creating a user-friendly and engaging platform that helps learners of all ages and skill levels improve their math skills.`;
    teamText.style.whiteSpace = "pre-line";
    team.appendChild(teamText);

    const research = document.createElement('section');
    research.id = 'research';

    const researchTitle = document.createElement('h2');
    researchTitle.textContent = 'Research & Development';
    research.appendChild(researchTitle);

    const researchText = document.createElement('p');
    researchText.textContent = `We are committed to continuous research and development to ensure that our platform remains at the forefront of educational technology.
    We regularly update our content and features based on the latest research in education and user feedback, ensuring that our learners have access to the best possible learning experience.`;
    researchText.style.whiteSpace = "pre-line";
    research.appendChild(researchText);

    main.appendChild(secondaryNav);
    main.appendChild(aboutSection);
    main.appendChild(missionVission);
    main.appendChild(team);
    main.appendChild(research);

    webApp.appendChild(main);
}

export default aboutPage;