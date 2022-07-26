const menuBtn = document.querySelector('.menu-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const menuOption = document.querySelectorAll('.menu-option li');
const closeBtn = document.querySelector('.close-icon');
const contactForm = document.getElementById('conatct-form');

function closeNav() {
   menuOverlay.style.cssText = `width: 0%; display: none;`;
}

   if (menuBtn) {
      menuBtn.addEventListener('click', () => {
         
         menuOverlay.style.cssText = `width: 100%; display: flex;`;
         document.body.style.overflow = 'hidden';  
      })
   }
   if (menuOption) {
      menuOption.forEach(element => {
         element.addEventListener('click', () => {
            document.body.style.overflow = 'auto';
            closeNav();
         })
      });
   }
   if (closeBtn) {
      closeBtn.addEventListener('click', () => {
         document.body.style.overflow = 'auto';
         closeNav();
      })
   }


contactForm.addEventListener('click', function () {
   const email = contactForm.elements['email'].value;
   const error = document.querySelector('.error');
   if (email !== email.toLowerCase()) {
      error.style.cssText = `visibility: visible; opacity: 1`;
      error.innerHTML = 'Please enter email in lowercase'
   } else {
      error.style.cssText = `visibility: hidden; opacity: 0`;
   }
})
