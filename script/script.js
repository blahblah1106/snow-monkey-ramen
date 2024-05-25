// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            

    function validateForm() {
        const peopleInput = document.getElementById('people-242');
        const peopleValue = parseInt(peopleInput.value, 10);
    
        if (peopleValue < 1 || peopleValue > 6) {
            alert("Please enter a number of people between 1 and 6.");
            return false;
        }
    
        const timeInput = document.getElementById('time-242');
        const timeValue = timeInput.value;
        const timeMin = "11:30";
        const timeMax = "20:30";
    
        if (timeValue < timeMin || timeValue > timeMax) {
            alert("Please choose a time between 11:30 and 20:30.");
            return false;
        }
    
        return true;
    }
    



    