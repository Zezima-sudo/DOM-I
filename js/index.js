const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//2a

const nav = document.querySelectorAll('a')

nav[0].textContent = 'Services'
nav[1].textContent = 'Product'
nav[2].textContent = 'Vision'
nav[3].textContent = 'Features'
nav[4].textContent = 'About'
nav[4].textContent = 'Contact'
nav[0].style.color = 'green'
nav[1].style.color = 'green'
nav[2].style.color = 'green'
nav[3].style.color = 'green'
nav[4].style.color = 'green'
nav[4].style.color = 'green'

nav[0].addEventListener('click', e => {
  nav.style.textContent = 'Changed text on click for stretch goal'
})

const newElement = document.createElement('a')

newElement.textContent = 'Our Portfolio'
newElement.style.color = 'green'

const parentElement = document.querySelector('nav')
parentElement.prepend(newElement)

const newElement2 = document.createElement('a')
newElement2.textContent = 'Risk Management'
newElement2.style.color = 'green'
parentElement.appendChild(newElement2)



let img = document.querySelector("#logo-img")
img.src = "https://github.com/Zezima-sudo/DOM-I/blob/main/img/logo.png?raw=true"

let img2 = document.querySelector("#cta-img")
img2.src = "https://github.com/Zezima-sudo/DOM-I/blob/main/img/header-img.png?raw=true"

let text = document.querySelector("h1")
text.textContent = 'Dom ' + 'Is ' + 'Awesome'

let button = document.querySelector('button')
button.textContent = 'Get Started'

// let body = document.querySelectorAll('.text-content')
// body[0].textContent = 'Features'
// body[1].textContent = 'About'
// body[2].textContent = 'Services'
// body[3].textContent = 'Product'
// body[4].textContent = 'Vision'

let img3 = document.querySelector('#middle-img')
img3.src = "https://github.com/Zezima-sudo/DOM-I/blob/main/img/mid-page-accent.jpg?raw=true"



const topContent = document.querySelectorAll('.top-content h4')

topContent[0].textContent = 'Features'
topContent[1].textContent = 'About'

const topContentP = document.querySelectorAll('.top-content p')
topContentP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topContentP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const bottomContent = document.querySelectorAll('.bottom-content h4')

bottomContent[0].textContent = 'Services'
bottomContent[1].textContent = 'Product'
bottomContent[2].textContent = 'Vision'

const bottomContentP = document.querySelectorAll('.bottom-content p')
bottomContentP[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."
bottomContentP[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContentP[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const contact = document.querySelector('.contact h4')
contact.textContent = 'Contact'


const contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = '123 Way 456 Street' + ' Somewhere USA'
contactP[1].textContent = '1(888)-8888'
contactP[2].textContent = "sales@greatidea.io"

const footer = document.querySelectorAll('footer p')

footer[0].textContent = 'Copyright Great Idea! 2018'




