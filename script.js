const menuBtn = document.querySelector('.menu-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const menuOption = document.querySelectorAll('.option');
const closeBtn = document.querySelector('.close-icon');

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