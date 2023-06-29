function updateProfileInfo(profileData) {
  const header = document.querySelector('.header');

  header.innerHTML = `
    <img src="${profileData.photo}" alt="${profileData.name}" class="photo">
    <h1 class="title">Olá, <br> ${profileData.name}</h1>
    <div class="information">
      <p class="job">${profileData.job}</p>
      <p class="location">${profileData.location}</p>
      <p class="phone"><a href="tel:${profileData.phone}">${profileData.phone}</a></p>
      <p class="email"><a href="mailto:${profileData.email}">${profileData.email}</a></p>
    </div>
  `;
}

function updateHardSkills(profileData) {
  const hardSkills = document.querySelector('.hard-skills ul');
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) => `
      <li><img src=${skill.logo} alt=${skill.name} title=${skill.name}/></li>
    `,
    )
    .join('');
}

function updateSoftSkills(profileData) {
  const softSkills = document.querySelector('.soft-skills ul');
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join('');
}

function updateLanguages(profileData) {
  const languages = document.querySelector('.languages');
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join('');
}

function updateProjects(profileData) {
  const projects = document.querySelector('.projects');
  projects.innerHTML = profileData.portfolio
    .map(
      (project) =>
        `
        <li>
          <h3 ${project.github ? 'class="title"' : ''}>${project.name}</h3>
          <a href="${project.url}" target="_blank">${project.url}</a>
        </li>
      `,
    )
    .join('');
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.querySelector(
    '.professional-experience',
  );

  console.log(professionalExperience);

  professionalExperience.innerHTML = profileData.professionalExperience
    .map(
      (professionalExperience) => `
    <li>
      <h3 class="title">${professionalExperience.name}</h3>
      <p class="period">${professionalExperience.period}</p>
      <p>${professionalExperience.description}</p>
    </li>
  `,
    )
    .join('');
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updateProjects(profileData);
  updateProfessionalExperience(profileData);
})();
