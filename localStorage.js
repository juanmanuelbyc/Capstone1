const contactInfo = document.getElementById('conatct-form');

const contactDetails = {
   fullname: String,
   email: String,
   message: String,
}

window.onload = () => {
   const contactData = JSON.parse(localStorage.getItem('contactDetails'));

   //populate the local storage information into the contact form
   if (contactData) {
      document.getElementById('fullname').value = contactData.fullname;
      document.getElementById('email').value = contactData.email;
      document.getElementById('message').value = contactData.message;
   }

}

contactInfo.onchange = function () {
   contactDetails.fullname = document.getElementById('fullname').value;
   contactDetails.email = document.getElementById('email').value;
   contactDetails.message = document.getElementById('message').value;

   //set the local storage data with the upddated contact form
   localStorage.setItem('contactDetails', JSON.stringify(contactDetails));
}
