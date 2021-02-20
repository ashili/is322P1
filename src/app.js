// navigation animation
const navSlide = () => {

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.6}s`
            }
        })

        burger.classList.toggle('toggle');
    });
}

// card animation
const cards = document.querySelectorAll(".card img");
const cardContainers = document.querySelectorAll(".card-container");

cardContainers.forEach((element, index) => {
    //animate image on mouse over
    element.addEventListener('mouseover', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 4;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        cards[index].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    })
    // back to normal position when mouse leaves
    element.addEventListener('mouseleave', () => {
        cards[index].style.transform = `rotateY(0deg) rotateX(0deg)`;
    })
})

navSlide();
