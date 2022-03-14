/////////////////////////////////////////////////
// Sticky navigation
/////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    const headerEl = document.querySelector(".sticky");
    const logoEl = document.querySelector(".logo");
    const logoStickyEl = document.querySelector(".logo-sticky");
    const navHomeEl = document.querySelector(".link-home");
    const navHowItWorksEl = document.querySelector(".link-how-it-works");
    const navAboutEl = document.querySelector(".link-about");
    const navBYDEl = document.querySelector(".link-byd");
    // below hero
    if (!ent.isIntersecting) {
      headerEl.style.height = "7rem";
      headerEl.style.backgroundColor = "#000";
      headerEl.style.boxShadow = "0 1.2rem 3.2rem rgba(0, 0, 0, 0.3)";
      logoEl.style.display = "none";
      logoStickyEl.style.display = "block";
    }
    // above hero
    if (ent.isIntersecting) {
      headerEl.style.height = "9rem";
      headerEl.style.backgroundColor = "rgba(0, 0, 0, 0)";
      headerEl.style.boxShadow = "none";
      logoEl.style.display = "block";
      logoStickyEl.style.display = "none";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
