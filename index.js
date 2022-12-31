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

