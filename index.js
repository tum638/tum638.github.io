import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";


    const viewIcon1 = document.getElementById("view-1-icon");
    const image1 = document.getElementById("project-1-image");
    const viewIcon2 = document.getElementById("view-2-icon");
    const image2 = document.getElementById("project-2-image");
    const viewIcon3 = document.getElementById("view-3-icon");
    const image3 = document.getElementById("project-3-image");
    const image4 = document.getElementById("project-4-image");
    const viewIcon4 = document.getElementById("view-4-icon");
    const image5 = document.getElementById("project-5-image");
    const viewIcon5 = document.getElementById("view-5-icon");
    const image6 = document.getElementById("project-6-image");
const viewIcon6 = document.getElementById("view-6-icon");
    const image7 = document.getElementById("project-7-image");
    const viewIcon7 = document.getElementById("view-7-icon");
    const images = document.querySelectorAll(".img-container");
    const githubLink = document.querySelector(".access-git-p");
    const githubDiv = document.querySelector(".access-git");
    const closeIcon = document.querySelector(".close-modal-icon");
    const getInTouchButton = document.querySelector(".get-in-touch-link")
const homeNavLink = document.querySelector(".home-nav-link-main");
const skillsNavLink = document.querySelector(".skills-nav-link-main");
const projectsNavLink = document.querySelector(".projects-nav-link-main");
const educationNavLink = document.querySelector(".education-nav-link-main");
const homeNavLinkBlack = document.querySelector(".home-nav-link");
const skillsNavLinkBlack = document.querySelector(".skills-nav-link");
const projectsNavLinkBlack = document.querySelector(".projects-nav-link");
const educationNavLinkBlack = document.querySelector(".education-nav-link");

const menu = document.querySelector(".menu")
const nav = document.querySelector('.main-nav')
const close = document.querySelector(".close");
const links = ["https://github.com/leemabhena/logahs-website",
"https://github.com/tum638/Library_Manager",
"https://github.com/tum638/web102_prework",
"https://github.com/tum638/AI-driven-tic-tac-toe",
"https://github.com/tum638/AI-driven-minesweeper",
    "https://github.com/tum638/ecommerce",
    "https://github.com/tum638/tumpersonal"
]
const descriptions = [`This is school website that provides important information
to students, parents and stuff such as news, announcements, schedules, calendars, resources and forms.
It also has a neat contact-us feature. We made the frontend using react and the backend API using django rest framework.
Thanks to Liberty for inviting me to be a collaborator in making this website!
                  `,
`This app helps librarians and library patrons manage and access the distribution of books to students.
The app allows the user to electronically manage the borrowing and returning of books. It has a neat feature that allows it 
to instantly capture all the information of a book (Its title, author, etc) by scanning the ISBN of the book. This is 
an efficient way of storing data for new books in the database. I developed the app with react and django REST framework.
`,
    "Sea Monster a hypothetical a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.",

"A pygame tic-tac-toe that uses the minimax-algorithm to generate optimum moves for the computer. Inspired by CS50-AI",
"A minesweeper pygame that uses concepts of knowledge and logic to suggest moves to the player.",
`An ecommerce site that allows users to bid for items, add items to a watchlist and do general buying and selling of products. I
created this app using django and django templates`,
    `This is a website I created to showcase my past projects, education, skills and experience. It's also a way through which anyone
    who is interested in my work can reach out to me. I created the website using HTML, CSS and javascript. Feel free to reach out!`
]

const modal = document.querySelector(".modal");
const blurpage = document.querySelector(".blur-page");
const fixedHeader = document.querySelector(".scroll")
const listItems = fixedHeader.querySelector("ul")
const scrollerHamburger = document.querySelector(".menu-scroll-container")


    

const submitButton = document.querySelector(".send-btn")
    
 
   
let visible = false;
const hideFixedHeader = () => {
    if (window.matchMedia("(min-width:680px)").matches) {
        scrollerHamburger.classList.add("hidden");
        listItems.classList.remove("hidden")
        fixedHeader.classList.remove("hidden");
    } else {
        scrollerHamburger.classList.remove('hidden');
        listItems.classList.add("hidden");
        fixedHeader.classList.add("hidden");

    }
}
hideFixedHeader();


window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
    scrollerHamburger.classList.remove("hidden")
    listItems.classList.remove("hidden");
    fixedHeader.classList.remove("hidden");
    } else if (window.scrollY <= 120) {
        scrollerHamburger.classList.add("hidden");
        listItems.classList.add("hidden");
       fixedHeader.classList.add("hidden");
} 
})


githubDiv.addEventListener("click", function () {
    modal.style.display = "none";
    blurpage.style.display = "none";
    visible = false;
} )
closeIcon.addEventListener("click", function () {
    modal.style.display = "none";
    blurpage.style.display = "none";
    visible = false;
}) 

menu.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
})
close.addEventListener("click", () => {
    nav.style.transform = "translateX(100%)";
})
scrollerHamburger.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
})
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
        sendEmail();
})
blurpage.addEventListener("click", function () {
    modal.style.display = "none";
    blurpage.style.display = "none";
    visible = false;
})

    
getInTouchButton.addEventListener("click", () => {
    scrollToSection("contactme");
})
homeNavLink.addEventListener("click", () => {
    scrollToSection("home");
});
skillsNavLink.addEventListener("click", () => {
    scrollToSection("skills");
});
projectsNavLink.addEventListener("click", () => {
    scrollToSection("projects");
});
educationNavLink.addEventListener("click", () => {
    scrollToSection("education");
});
homeNavLinkBlack.addEventListener("click", () => {
    scrollToSection("home");
});
skillsNavLinkBlack.addEventListener("click", () => {
    scrollToSection("skills");
});
projectsNavLinkBlack.addEventListener("click", () => {
    scrollToSection("projects");
});
educationNavLinkBlack.addEventListener("click", () => {
    scrollToSection("education");
});
images.forEach(image => {
    image.addEventListener("click", function() {

        let id = image.id

        let parentContainer = document.getElementById(id).parentNode;
        let projectHeader = parentContainer.querySelector("h3").innerHTML;

        modal.querySelector('h1').innerHTML = projectHeader;
        
        modal.querySelector('p').innerHTML = descriptions[id - 1];

        githubLink.href = links[id - 1];



        if (visible === false) {
            modal.style.display = "block";
            blurpage.style.display = "block";
            visible = true;
        }
    })
})

githubDiv.addEventListener("click", () => {
    let url = githubDiv.querySelector("a").href;
    window.open = url;
})
        


const scrollTracker = document.querySelector(".scroll-tracker");


const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})


scrollTracker.animate({
    transform: ['scaleX(0)', 'scaleX(1)'],

},
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
)

function scrollToSection(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'})

}
function sendEmail() {
    let userName = document.getElementById("user-name").value;
    let userEmail = document.getElementById("user-email").value;
    let userMessage = document.getElementById("user-message").value;
    const apiKey = 'B5179DE80628688F996DEB856B34B7997F6683E9D4BA3E60B8909E2B55C04A3291275789A79CB59E2F83F9E8BA741127';
    const email = "tum1@williams.edu";
    const from = "tanatswamanyakara638@gmail.com"
    const subject = `Portfolio email from ${userName}`;
    const body = `Hi Tanatswa!
    You have a new email on your Portfolio from ${userName}.

    The body of the email is:
    #######
      ${userMessage}
    #######
    The contacters email address is ${userEmail}
   
     `
    fetch("https://api.elasticemail.com/v2/email/send", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `apikey=${apiKey}&to=${email}&from=${from}&subject=${subject}&body=${body}`,
    })
        .then((response) => {
            if (response.ok) {
                alert("Your message was successfully sent!")
            }
            else {
                alert("Something went wrong, please try again later.")
            }
        }
            
         )
    document.getElementById("user-name").value = "";
    document.getElementById("user-email").value = "";
    document.getElementById("user-message").value = "";

     

}
function hideIcon1() { 
    viewIcon1.classList.add('hidden')   
}

   

function showIcon1() {
    viewIcon1.classList.remove('hidden');
}

function hideIcon2() { 
    viewIcon2.classList.add('hidden')   
}
function showIcon2() {
    viewIcon2.classList.remove('hidden');
}
function hideIcon3() { 
    viewIcon3.classList.add('hidden')   
}
function showIcon3() {
    viewIcon3.classList.remove('hidden');
}
function hideIcon4() {
    viewIcon4.classList.add('hidden');
}
function showIcon4() {
    viewIcon4.classList.remove('hidden');
}
function hideIcon5() {
    viewIcon5.classList.add('hidden');
}
function showIcon5() {
    viewIcon5.classList.remove('hidden');
}
function hideIcon6() {
    viewIcon6.classList.add('hidden');
}
function showIcon6() {
    viewIcon6.classList.remove('hidden');
}
function hideIcon7() {
    viewIcon7.classList.add('hidden');
}
function showIcon7() {
    viewIcon7.classList.remove('hidden');
}

image1.addEventListener("mouseleave", hideIcon1);
image1.addEventListener("mouseenter", showIcon1);
image2.addEventListener("mouseleave", hideIcon2);
image2.addEventListener("mouseenter", showIcon2);
image3.addEventListener("mouseleave", hideIcon3);
image3.addEventListener("mouseenter", showIcon3);
image4.addEventListener("mouseleave", hideIcon4);
image4.addEventListener("mouseenter", showIcon4);
image5.addEventListener("mouseleave", hideIcon5);
image5.addEventListener("mouseenter", showIcon5);
image6.addEventListener("mouseleave", hideIcon6);
image6.addEventListener("mouseenter", showIcon6);
image7.addEventListener("mouseleave", hideIcon7);
image7.addEventListener("mouseenter", showIcon7);


