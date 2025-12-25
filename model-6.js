document.getElementById("Home").innerHTML = "Home";
document.getElementById("Gallery") .innerHTML = "Gallery";
document.getElementById("Models") .innerHTML = "Models";
document.getElementById("About") .innerHTML = "About";
document.getElementById("Contact") .innerHTML = "Contact";
document.getElementById("button-1") .innerHTML = "Login";
document.getElementById("title-2").innerHTML ="Available Colors";
document.getElementById("sub").innerHTML ="Find the perfect shade to complement your drive";
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
document.getElementById("title-head") .innerHTML = "Model: Maserati GranCabrio";
document.getElementById("7").innerHTML ="<span class='label'>Drive:</span> Rear‑wheel drive (RWD)";
document.getElementById("8").innerHTML ="<span class='label'>Transmission:</span> Automatic";
document.getElementById("9").innerHTML ="<span class='label'>Body Style:</span> 2-door coupe";
document.getElementById("10").innerHTML ="<span class='label'>Seating:</span> 2 passengers";
document.getElementById("11").innerHTML ="<span class='label'>Type:</span>  Mid‑engine supercar";
document.getElementById("12").innerHTML ="20,100,000 EGP";

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
const circles = document.querySelectorAll('.circle-box div');
const modelViewer = document.getElementById('carModel');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    const newSrc = circle.getAttribute('data-src');
    modelViewer.src = newSrc;
    circles.forEach(c => c.style.border = 'none');
    circle.style.border = '2px solid white';
  });
});