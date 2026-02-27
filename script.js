// Mobile nav toggle
const nav = document.querySelector(".nav");
const navToggle = document.getElementById("navToggle");
navToggle?.addEventListener("click", () => nav.classList.toggle("open"));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple “fake submit” handling (replace with real form endpoints later)
function hookForm(id) {
  const form = document.getElementById(id);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks — received. (Hook this form to Formspree / Google Form when ready.)");
    form.reset();
  });
}
hookForm("companyForm");
hookForm("talentForm");
hookForm("waitlistForm");
hookForm("waitlistForm2");
