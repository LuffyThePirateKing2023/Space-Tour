
const navLinkIds = ['navHome', 'navDestination', 'navCrew', 'navTechnology'];
const navLinkIdsMobile = ['navHomeMobile', 'navDestinationMobile', 'navCrewMobile', 'navTechnologyMobile'];
const sectionIds = ['home', 'destination', 'Crew', 'technology'];

const navLinks = navLinkIds.map(id => document.getElementById(id));
const navLinksMobile = navLinkIdsMobile.map(id => document.getElementById(id));
const sections = sectionIds.map(id => document.getElementById(id));

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    sections.forEach((section, i) => {
      section.classList.toggle('hidden', i !== index);
    });
  });
});
navLinksMobile.forEach((link, index) => {
  link.addEventListener('click', () => {
    sections.forEach((section, i) => {
      section.classList.toggle('hidden', i !== index);
    });
  });
});

const DestinationNavItems = ['moon', 'mars', 'europa', 'titan'].map(id => document.getElementById(id)); //Destination content navbar id mapping
const destinationcontentIcon = document.getElementById('destinationcontentIcon');
const contentItems = ['moonContent', 'marsContent', 'europaContent', 'titanContent'].map(id => document.getElementById(id));//destination content body id mapping


function handleNavigationClick(index, backgroundImage) {
    event.preventDefault();
    contentItems.forEach(content => content.classList.add('hidden'));
    contentItems[index].classList.remove('hidden');
    destinationcontentIcon.style.backgroundImage = `url('./assets/destination/${backgroundImage}.jpg')`;

    DestinationNavItems.forEach(item => item.classList.remove('active'));
    DestinationNavItems[index].classList.add('active');
}
DestinationNavItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        const backgrounds = ['moon', 'mars', 'europa', 'titan'];
        handleNavigationClick(index, backgrounds[index]);
    });
});

const crewLinks = ['commanderLink', 'specialistLink', 'pilotLink', 'engineerLink'].map(id => document.getElementById(id)); //array content for crew navigation bar
const crewContents = ['crewComander', 'MissionSpecialist', 'pilot', 'engineer'].map(id => document.getElementById(id));//array content for crew contents
const crewImage = document.getElementById('crewImage');
const crewImageUrl = ['./assets/crew/commander.jpg', './assets/crew/specialist.jpg', './assets/crew/pilot.jpg', './assets/crew/engineer.jpg'];

function handleCrewClick(index){
    event.preventDefault();
    crewContents.forEach(content=> content.classList.add('hidden'));
    crewContents[index].classList.remove('hidden');
    crewImage.style.backgroundImage = `url('${crewImageUrl[index]}')`;
    
    crewLinks.forEach(crewbtn => crewbtn.classList.remove('visits'));
    crewLinks[index].classList.add('visits');
}
crewLinks.forEach((crewbtn, index) => {
    crewbtn.addEventListener('click', () => handleCrewClick(index));
});

const btns = ['button1', 'button2', 'button3'].map(id => document.getElementById(id));
const techContent = ['tech-content1', 'tech-content2', 'tech-content3'].map(id => document.getElementById(id));
const techImage = document.getElementById('technologypicture');
const imageUrls = [
  './assets/technology/vehicle.jpg',
  './assets/technology/spaceport.jpg',
  './assets/technology/capsule.jpg'
];

function handleButtonClick(index) {
  event.preventDefault();
  techContent.forEach(content => content.classList.add('hidden'));
  techContent[index].classList.remove('hidden');
  techImage.style.backgroundImage = `url('${imageUrls[index]}')`;

  btns.forEach(btn => btn.classList.remove('active'));
  btns[index].classList.add('active');
}

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => handleButtonClick(index));
});





const menuIcon = document.getElementById('menuIcon');
const navigationIcon = document.getElementById('homeNavMobile');

menuIcon.addEventListener('click', () => {
  if (navigationIcon.style.display === 'none') {
    navigationIcon.style.display = 'block';
    menuIcon.src = "./assets/shared/icon-close.png";
  } else {
    navigationIcon.style.display = 'none';
    menuIcon.src = "./assets/shared/icon-hamburger.png";
  }
});

document.addEventListener('click', (event) => {
  const navigationHandler = navigationIcon.contains(event.target);
  const menuIconHandler = event.target === menuIcon;

  if (!navigationHandler && !menuIconHandler) {
    navigationIcon.style.display = 'none';
    menuIcon.src = "./assets/shared/icon-hamburger.png";
  }
});

navigationIcon.addEventListener('click', (event) => {
  if (event.target.tagName.toLowerCase() === 'a') {
    navigationIcon.style.display = 'none';
    menuIcon.src = "./assets/shared/icon-hamburger.png";
  }
});

