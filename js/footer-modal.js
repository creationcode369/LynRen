document.addEventListener('DOMContentLoaded', function () {
  const privacyLink = document.querySelector('.privacy-link');
  const termsLink = document.querySelector('.terms-link');
  const privacyPopup = document.getElementById('privacyPopup');
  const termsPopup = document.getElementById('termsPopup');
  const closePrivacyBtn = document.getElementById('closePrivacyBtn');
  const closeTermsBtn = document.getElementById('closeTermsBtn');

  console.log(privacyLink, termsLink, privacyPopup, termsPopup, closePrivacyBtn, closeTermsBtn); // Check element selection

  // Function to open Privacy & Policy pop-up modal
  privacyLink.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Privacy link clicked'); // Check if click event is triggered
    privacyPopup.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  });

  // Function to close Privacy & Policy pop-up modal
  closePrivacyBtn.addEventListener('click', function () {
    console.log('Close Privacy button clicked'); // Check if close button click event is triggered
    privacyPopup.classList.add('hidden');
    document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
  });

  // Function to open Terms & Conditions pop-up modal
  termsLink.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Terms link clicked'); // Check if click event is triggered
    termsPopup.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  });

  // Function to close Terms & Conditions pop-up modal
  closeTermsBtn.addEventListener('click', function () {
    console.log('Close Terms button clicked'); // Check if close button click event is triggered
    termsPopup.classList.add('hidden');
    document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
  });

  // Close modals if user clicks outside of them (optional)
  window.addEventListener('click', function (e) {
    if (e.target === privacyPopup) {
      console.log('Clicked outside Privacy modal'); // Check if click outside modal event is triggered
      privacyPopup.classList.add('hidden');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
    if (e.target === termsPopup) {
      console.log('Clicked outside Terms modal'); // Check if click outside modal event is triggered
      termsPopup.classList.add('hidden');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
});
