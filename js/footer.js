document.addEventListener("DOMContentLoaded", function() {
  const privacyLink = document.getElementById("privacy-link");
  const termsLink = document.getElementById("terms-link");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const closeModalButton = document.getElementById("close-modal");

  function openModal(content) {
      modalContent.innerHTML = content;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  function closeModal() {
      modal.style.display = "none";
      modalContent.innerHTML = ""; // Clear modal content
      document.body.style.overflow = "auto"; // Enable scrolling
  }

  privacyLink.addEventListener("click", function(event) {
      event.preventDefault();
      const privacyPolicyText = `
          <h2 class="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p>This is your privacy policy text. Replace this with your actual privacy policy content.</p>
      `;
      openModal(privacyPolicyText);
  });

  termsLink.addEventListener("click", function(event) {
      event.preventDefault();
      const termsConditionsText = `
          <h2 class="text-2xl font-bold mb-4">Terms and Conditions</h2>
          <p>These are your terms and conditions. Replace this with your actual terms and conditions content.</p>
      `;
      openModal(termsConditionsText);
  });

  closeModalButton.addEventListener("click", function() {
      closeModal();
  });

  modal.addEventListener("click", function(event) {
      if (event.target === modal) {
          closeModal();
      }
  });

  document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
          closeModal();
      }
  });
});