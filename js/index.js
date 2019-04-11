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
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "mainContent": {
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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav and Banner Content 

let menu = document.querySelectorAll('a')
menu[0].textContent = siteContent.nav["nav-item-1"]
menu[1].textContent = siteContent.nav["nav-item-2"]
menu[2].textContent = siteContent.nav["nav-item-3"]
menu[3].textContent = siteContent.nav["nav-item-4"]
menu[4].textContent = siteContent.nav["nav-item-5"]
menu[5].textContent = siteContent.nav["nav-item-6"]

let head = document.querySelector('h1')
head.textContent = siteContent.cta['h1']

let bannerLogo = document.querySelector('#cta-img');
bannerLogo.setAttribute('src', siteContent['cta']['img-src'])

let button = document.querySelector('button')
button.textContent = siteContent.cta['button']

//Middle Content 

let midContentHeaders = document.querySelectorAll('h4')
midContentHeaders[0].textContent = siteContent.mainContent['features-h4']
midContentHeaders[1].textContent = siteContent.mainContent['about-h4']
midContentHeaders[2].textContent = siteContent.mainContent['services-h4']
midContentHeaders[3].textContent = siteContent.mainContent['product-h4']
midContentHeaders[4].textContent = siteContent.mainContent['vision-h4']

let midContentText = document.querySelectorAll('.text-content p')
midContentText[0].textContent = siteContent.mainContent['features-content']
midContentText[1].textContent = siteContent.mainContent['about-content']
midContentText[2].textContent = siteContent.mainContent['services-content']
midContentText[3].textContent = siteContent.mainContent['product-content']
midContentText[4].textContent = siteContent.mainContent['vision-content']

let midImg = document.querySelector('#middle-img')
midImg.setAttribute('src', siteContent ['mainContent']['middle-img-src'])


//Bottom Section (Contact)

let contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent.contact['contact-h4']

let contactContent = document.querySelectorAll('.contact p')
contactContent[0].textContent = siteContent.contact['address']
contactContent[1].textContent = siteContent.contact['phone']
contactContent[2].textContent = siteContent.contact['email']

//Footer 
let foot = document.querySelector('footer')
foot.textContent = siteContent.footer.copyright


//Change Nav to green text 

menu.forEach(function (anchor){
  anchor.style.color = 'green'
})