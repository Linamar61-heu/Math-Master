console.log("homepage loaded");
function homepage() {
    const webApp = document.querySelector('body');
    const main = document.createElement('main');

    // Intro Section with sign-up call to action
    const intro = document.createElement('section');
    intro.id = 'intro';

    const introTitle = document.createElement('h1');
    introTitle.textContent = 'Math Master!';
    intro.appendChild(introTitle);

    const introText = document.createElement('p');
    introText.textContent = 'Sharpen your math skills with fun and engaging games. Whether you\'re a beginner or a pro, there\'s something for everyone!';
    intro.appendChild(introText);

    const signUpButton = document.createElement('button');
    signUpButton.classList.add('signup');
    signUpButton.textContent = 'Sign Up';
    intro.appendChild(signUpButton);

    // Features Section
    const features = document.createElement('section');
    features.id = 'features';

    const interactiveLessons = document.createElement('article');
    interactiveLessons.classList.add('feature');

    const interactiveLessonsTitle = document.createElement('h2');
    interactiveLessonsTitle.textContent = 'Interactive Lessons';
    interactiveLessons.appendChild(interactiveLessonsTitle);

    const interactiveLessonsText = document.createElement('p');
    interactiveLessonsText.textContent = 'Learn math concepts through interactive lessons that make learning fun and easy to understand.';
    interactiveLessons.appendChild(interactiveLessonsText);

    const interactiveLessonsList = document.createElement('ul');
    const interactiveLessonsItems = [
        'Step-by-step explanations',
        'Visual aids and animations',
        'Practice problems with instant feedback'
    ];

    interactiveLessonsItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        interactiveLessonsList.appendChild(listItem);
    });
    interactiveLessons.appendChild(interactiveLessonsList);

    const personalizedLearing = document.createElement('article');
    personalizedLearing.classList.add('feature');

    const personalizedLearingTitle = document.createElement('h2');
    personalizedLearingTitle.textContent = 'Personalized Learning';
    personalizedLearing.appendChild(personalizedLearingTitle);

    const personalizedLearingText = document.createElement('p');
    personalizedLearingText.textContent = 'Our learning algorithm adapts to your skill level, providing personalized content and challenges to help you improve at your own pace.';
    personalizedLearing.appendChild(personalizedLearingText);

    const personalizedLearingList = document.createElement('ul');
    const personalizedLearingItems = [
        'Adaptive learning paths',
        'Progress tracking and analytics',
        'Customizable learning goals'
    ];

    personalizedLearingItems.forEach(item => {
        const listItem2 = document.createElement('li');
        listItem2.textContent = item;
        personalizedLearingList.appendChild(listItem2);
    });
    personalizedLearing.appendChild(personalizedLearingList);

    const CommunitySupport = document.createElement('article');
    CommunitySupport.classList.add('feature');

    const CommunitySupportTitle = document.createElement('h2');
    CommunitySupportTitle.textContent = 'Community Support';
    CommunitySupport.appendChild(CommunitySupportTitle);

    const CommunitySupportText = document.createElement('p');
    CommunitySupportText.textContent = 'Join a vibrant community of learners and educators. Share your progress, ask questions, and collaborate with others to enhance your learning experience.';
    CommunitySupport.appendChild(CommunitySupportText);

    const CommunitySupportList = document.createElement('ul');
    const CommunitySupportItems = [
        'Discussion forums',
        'Live Q&A sessions',
        'Peer-to-peer support'
    ];

    CommunitySupportItems.forEach(item => {
        const listItem3 = document.createElement('li');
        listItem3.textContent = item;
        CommunitySupportList.appendChild(listItem3);
    });
    CommunitySupport.appendChild(CommunitySupportList);

    features.appendChild(interactiveLessons);
    features.appendChild(personalizedLearing);
    features.appendChild(CommunitySupport);

    main.appendChild(intro);
    main.appendChild(features);
    
    webApp.appendChild(main);  
}

export default homepage;