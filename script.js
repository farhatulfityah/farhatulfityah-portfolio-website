// <!-- Role Script -->

const roles = ["Data Analyst!", "Data Scientist!", "Researcher!", "Engineer!"];
let currentIndex = 0;
const typingText = document.querySelector(".typing-text");

function changeRole() {

  typingText.classList.add("flip");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % roles.length;
    typingText.textContent = roles[currentIndex];
    typingText.classList.remove("flip");
  }, 600); 
}

typingText.textContent = roles[0];

setInterval(changeRole, 3500);

  //<!-- NavBar Script -->
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .right a");
const brand = document.querySelector(".left a");

function updateActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });

  if (current === "home" || scrollY < 100) {
    brand.classList.add("active");
  } else {
    brand.classList.remove("active");
  }
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


//<!--Recommendation Script-->
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.recommendation-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;

// Generate dots dynamically
slideItems.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(i) {
  index = (i + slideItems.length) % slideItems.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

//<!--Back To Top Script-->
  let backToTop = document.getElementById("backToTop");
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };
 
  backToTop.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

//<!-- Pop Up Modal Projects Script -->
  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const modalId = btn.closest('.project-card').dataset.modal;
      document.getElementById(modalId).style.display = 'flex';
    });
  });

  // Close modal
  document.querySelectorAll('.modal .close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  // Close modal on background click
  window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });



//<!--Contact effect Script-->
  const contactSection = document.querySelector('.contact-section');
  window.addEventListener('scroll', () => {
    const sectionTop = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      contactSection.classList.add('show');
    }
  });


