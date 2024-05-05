document.addEventListener('DOMContentLoaded', function () {
   const openModalBtn = document.getElementById('openModalBtn');
   const closeModalBtn = document.getElementById('closeModalBtn');
   const modal = document.getElementById('calendlyModal');

   openModalBtn.addEventListener('click', function () {
       modal.style.display = 'flex'; // Display the modal
   });

   closeModalBtn.addEventListener('click', function () {
       modal.style.display = 'none'; // Hide the modal
   });

   // Close modal when clicking outside the modal content
   window.addEventListener('click', function (event) {
       if (event.target === modal) {
           modal.style.display = 'none';
       }
   });
});