document.getElementById("Home").innerHTML = "Home";
document.getElementById("Gallery") .innerHTML = "Gallery";
document.getElementById("Models") .innerHTML = "Models";
document.getElementById("About") .innerHTML = "About";
document.getElementById("Contact") .innerHTML = "Contact";
document.getElementById("button-1") .innerHTML = "Login";
document.getElementById("hero-text") .innerHTML = "Mercedes";
document.getElementById("gallery-title") .innerHTML = "Gallery"
document.getElementById("title-1") .innerHTML = "The Mercedes Gallery"
document.getElementById("button-2") .innerHTML = "Explore More";
document.getElementById("models-title") .innerHTML = "Models";
document.getElementById("button-3") .innerHTML = "Electric";
document.getElementById("button-4") .innerHTML = "Luxury";
document.getElementById("tiguan") .innerHTML = "Volkswagen Tiguan";
document.getElementById("bmw") .innerHTML = "BMW 8";
document.getElementById("mini") .innerHTML = "Mini Cooper";
document.getElementById("fe") .innerHTML = "Ferrari F8";
document.getElementById("ma") .innerHTML = "Maserati GranCabrio";
document.getElementById("audi") .innerHTML = "Audi SQ8";
document.getElementById("mer") .innerHTML = "Mercedes-Benz";
document.getElementById("po") .innerHTML = "Porsche";
document.getElementById("ex") .innerHTML = "Explore Models";
document.getElementById("last-title") .innerHTML = "About SilverStar Motors";
document.getElementById("last-sub") .innerHTML = "Explore high-end cars like never before. At SilverStar Motors, every model is interactive, immersive and crafted to perfection";
document.getElementById("button-6") .innerHTML = "Explore for more";
document.getElementById("label-address").innerHTML = "Address:";
document.getElementById("address-text").innerHTML = "52 Aurora Drive, Skyline District";
document.getElementById("label-city").innerHTML = "Magnolia City, Nevada, USA";
document.getElementById("label-email").innerHTML = "Email:";
document.getElementById("email-text").innerHTML = "support@silverstarmotors.com";
document.getElementById("label-phone").innerHTML = "Phone:";
document.getElementById("phone-text").innerHTML = "+1-800-442-9090";
document.getElementById("footer-bottom-text").innerHTML = "© 2025 SilverStar Motors. All rights reserved";
document.getElementById("footer-center-title").innerHTML = "SilverStar Motors";
document.getElementById("nav-home").innerHTML = "Home";
document.getElementById("nav-gallery").innerHTML = "Gallery";
document.getElementById("nav-models").innerHTML = "Models";
document.getElementById("nav-about").innerHTML = "About";
document.getElementById("nav-contact").innerHTML = "Contact";
document.getElementById("subscribe-title").innerHTML = "Subscribe";
document.getElementById("subscribe-description").innerHTML = "Stay updated with the latest car releases, luxury updates, and exclusive offers from SilverStar Motors";
document.getElementById("subscribe-email-input").placeholder = "Enter your email";
document.getElementById("subscribe-button").innerHTML = "Submit";


const scrollBtn = document.createElement('div');
scrollBtn.innerHTML = '↑';
scrollBtn.classList.add('scroll');

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});