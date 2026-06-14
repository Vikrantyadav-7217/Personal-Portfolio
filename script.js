/*================ TYPING ANIMATION ================*/

const typed = new Typed(".typing", {

    strings: [
        "Software Engineer",
        "Full Stack Developer",
        "Web Developer",
       
    ],

    typeSpeed: 100,

    backSpeed: 60,

    backDelay: 1500,

    loop: true

});



/*================ DARK / LIGHT THEME ================*/

const themeIcon = document.getElementById("theme-icon");

themeIcon.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }

    else{

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    }

});



/*================ MOBILE MENU ================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



/*================ CLOSE MENU ON CLICK ================*/

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/*================ LOADER ================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});



/*================ CURSOR GLOW EFFECT ================*/

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX - 100 + "px";

    cursorGlow.style.top = e.clientY - 100 + "px";

});



/*================ SMOOTH SCROLL ================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior: "smooth"

        });

    });

});
/*================ ANIMATED COUNTERS ================*/

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        counter.innerText = "0";

        const target = +counter.getAttribute("data-target");

        const increment = target / 100;

        function updateCounter(){

            const current = +counter.innerText;

            if(current < target){

                counter.innerText = `${Math.ceil(current + increment)}`;

                setTimeout(updateCounter,20);

            }
            else{

                counter.innerText = target;

            }

        }

        updateCounter();

    });

};

startCounter();



/*================ SCROLL REVEAL ANIMATION ================*/

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

threshold:0.2

}

);


hiddenElements.forEach(el=>observer.observe(el));



/*================ SCROLL TO TOP BUTTON ================*/

const scrollTopBtn = document.querySelector(".scroll-top");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollTopBtn.style.opacity = "1";

        scrollTopBtn.style.pointerEvents = "auto";

    }

    else{

        scrollTopBtn.style.opacity = "0";

        scrollTopBtn.style.pointerEvents = "none";

    }

});


scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*================ STICKY NAVBAR EFFECT ================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 100){

        navbar.style.boxShadow =
        "0 8px 32px rgba(0,0,0,.3)";

        navbar.style.background =
        "rgba(255,255,255,.1)";

    }

    else{

        navbar.style.boxShadow = "none";

        navbar.style.background =
        "rgba(255,255,255,.08)";

    }

});



/*================ ACTIVE NAVIGATION LINK ================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let currentSection = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("active");

        }

    });

});



/*================ IMAGE PARALLAX EFFECT ================*/

const profileImage = document.querySelector(".image img");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    profileImage.style.transform =
    `translate(${x}px,${y}px)`;

});



/*================ BUTTON RIPPLE EFFECT ================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        let x = e.clientX - e.target.offsetLeft;

        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.style.left = `${x}px`;

        ripple.style.top = `${y}px`;

        ripple.classList.add("ripple");

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/*================ PARTICLES BACKGROUND ================*/

particlesJS("particles-js", {

    particles: {

        number: {

            value: 80,

            density: {

                enable: true,

                value_area: 800

            }

        },

        color: {

            value: "#ffffff"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.5

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#ffffff",

            opacity: 0.3,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "repulse"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        }

    },

    retina_detect: true

});


/*================ PROJECT FILTER BUTTONS ================*/

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});



/*================ 3D HOVER CARD EFFECT ================*/

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;

        let centerX = rect.width / 2;

        let centerY = rect.height / 2;

        let rotateX = (y - centerY) / 15;

        let rotateY = (centerX - x) / 15;

        card.style.transform =

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-15px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});



/*================ NAVBAR HIDE / SHOW ================*/

let lastScroll = 0;

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){

        navbar.style.top = "-100px";

    }

    else{

        navbar.style.top = "0";

    }

    lastScroll = currentScroll;

});



/*================ FADE IN PAGE =================*/

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "1s";

    document.body.style.opacity = "1";

});



/*================ RANDOM GLOW EFFECT ================*/

setInterval(() => {

    document.querySelectorAll(".card").forEach(card => {

        card.style.boxShadow =

        `0 0 ${
        Math.random()*30
        }px rgba(255,59,59,.5)`;

    });

},3000);



/*================ ACTIVE BUTTON HOVER =================*/

const allButtons = document.querySelectorAll(".btn");

allButtons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});



/*================ CONSOLE MESSAGE =================*/

console.log(

"%cWelcome To Vikrant Portfolio 🚀",

"color:red;font-size:25px;font-weight:bold"

);

console.log(

"%cDesigned By Vikrant Yadav",

"color:cyan;font-size:18px"

);

