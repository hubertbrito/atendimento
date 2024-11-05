var typed = new Typed(".multiple-text", {
    strings: ["template sob medida.",
        "notion para cursos.",
        "notion mentorias.",
        "tamplete ideal.", 
    
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


 // Toggle icon navbar

 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 
 menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
 };



// Scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
  
        // Select the correct link and add the 'active' class
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
      }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

  };
