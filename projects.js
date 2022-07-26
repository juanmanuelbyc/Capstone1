const projects = [
   {
      id: 1,
      title: 'Tonic',
      info: {
         client: 'canopy',
         role: 'Back End Dev',
         year: 2015,
      },
      screenshot: 'images/desktop-version/project-1.png',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release`,
      skills: ['html', 'css', 'javascript'],
      liveLink: 'https://www.canopy.cr/tonic',
      sourceLink: 'https://www.canopy.cr/tonic'
   },
   {
      id: 2,
      title: 'Multi-Post Stories',
      info: {
         client: 'Facebook',
         role: 'Full Stack Dev',
         year: 2015,
      },
      screenshot: 'images/desktop-version/project-2.png',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release`,
      skills: ['html', 'css', 'Ruby on rails', 'javascript'],
      liveLink: 'https://www.facebook.com/',
      sourceLink: 'https://www.facebook.com/'
   },
   {
      id: 3,
      title: 'Facebook 360',
      info: {
         client: 'Facebook',
         role: 'Full Stack Dev',
         year: 2015,
      },
      screenshot: 'images/desktop-version/project-3.png',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release`,
      skills: ['html', 'css', 'Ruby on rails', 'javascript'],
      liveLink: 'https://www.facebook.com/',
      sourceLink: 'https://www.facebook.com/'
   },
   {
      id: 4,
      title: 'Uber Navigation',
      info: {
         client: 'Uber',
         role: 'Lead Developer',
         year: 2018,
      },
      screenshot: 'images/desktop-version/project-4.png',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release`,
      skills: ['html', 'css', 'javascript', 'Ruby on rails'],
      liveLink: 'https://www.uber.com/',
      sourceLink: 'https://www.uber.com/'
   }
]

document.querySelector('.portfolio-card').innerHTML = projects.map((project) =>
   `<div class="project-container">
      <div class="project-img-container">
         <a href="#" aria-label="Tonic Project">
            <img src="images/project/tonic-project.png" alt="tonic-project" class="project-img">
         </a>
      </div>
      <div class="about-project flex">
         <div class="project-title">
            <h2>${project.title}</h2>
         </div>
         <div class="project-info">
            <ul class="flex">
               <li class="client-name">${project.info.client}</li>
               <li class="counter"></li>
               <li class="role">${project.info.role}</li>
               <li class="counter"></li>
               <li class="year">${project.info.year}</li>
            </ul>
         </div>
         <div class="project-description">
            <p>${project.description}</p>
         </div>
         <div class="tags">
            <ul class="flex">
               <li>${project.skills[0]}</li>
               <li>${project.skills[1]}</li>
               <li>${project.skills[2]}</li>
            </ul>
         </div>
         <div class="btn-container">
            <button type="submit" class="view-btn" data-bs-toggle="modal" data-bs-target="#projectModal" onclick="viewProject(${project.id})">See Project</button>
         </div>
      </div>
   </div>`).join('');


document.getElementsByClassName('.view-btn').onclick = function () { viewProject(this.id) };

function viewProject(id) {
   projects.map((project) => {
      if (id == project.id) {
         document.querySelector('.project-content').innerHTML = `<div class="modal-header" id="modal-header">
            <div class="project-title">
               <h2 class="modal-title" id="title">${project.title}</h2>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body" id="modal-body">
            <div class="project-info">
               <ul class="flex">
                  <li class="client-name" id="clientName">${project.info.client}</li>
                  <li class="counter"></li>
                  <li class="role" id="role">${project.info.role}</li>
                  <li class="counter"></li>
                  <li class="year" id="year">${project.info.year}</li>
               </ul>
            </div>
            <div class="project-img-container modal-img-size">
               <a href="#" aria-label="Tonic Project">
                  <img src="${project.screenshot}" alt="tonic-project" id="project-img" class="project-img">
               </a>
            </div>
            <div class="project-description-container">
               <div class="project-description" id="description">
                  <p>${project.description}</p>
               </div>
               <div class="footer flex" id="footer">
                  <div class="tags">
                     <ul class="flex" id="technologies">
                        <li>${project.skills[0]}</li>
                        <li>${project.skills[1]}</li>
                        <li>${project.skills[2]}</li>
                     </ul>
                  </div>
                  <div class="btn-container">
                     <button type="submit" class="view-btn modal-view-btn" onclick="location.href = '${project.liveLink}'">
                        <span>See Live</span>
                        <span><i class="bi bi-box-arrow-up-right"></i></span>
                     </button>
                     <button type="submit" class="view-btn modal-view-btn" onclick="location.href = '${project.sourceLink}'">
                        <span>Source</span>
                        <span><i class="bi bi-github"></i></span>
                     </button>
                  </div>
               </div>
            </div>

         </div>`
      }
   }).join('');
}
