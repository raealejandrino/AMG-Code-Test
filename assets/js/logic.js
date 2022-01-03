let sidebar = document.querySelector('.sidebar');
let btn = document.querySelector('#btn');
let expandBtn = document.querySelector('.seeAllBtn');


let currentScrollPosition = 0;
let scrollAmount = 320;


const scrollHorizontally = (val, rowElement) => {
    const sCont = document.querySelector("#" + rowElement);
    currentScrollPosition += (val * scrollAmount);

    if (currentScrollPosition > 0) {
        currentScrollPosition = 0;
    }

    
    sCont.style.left = currentScrollPosition + "px";
}

btn.addEventListener("click", () => {
    sidebar.classList.toggle('open');
    btnIconChange();
});

expandBtn.addEventListener("click", () => {
    console.log(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0]);
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].classList.toggle('expand');
});

const btnIconChange = () => {
    if (sidebar.classList.contains('open')) {
        btn.classList.replace('fa-chevron-right', 'fa-chevron-left');
    } else {
        btn.classList.replace('fa-chevron-left', 'fa-chevron-right');

    }
};