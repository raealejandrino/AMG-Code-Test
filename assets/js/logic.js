let sidebar = document.querySelector('.sidebar');
let btn = document.querySelector('#btn');

let currentScrollPosition = 0;
let scrollAmount = 320;


// const hScroll = document.querySelector("#statusCardRow");


// let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

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

const btnIconChange = () => {
    if (sidebar.classList.contains('open')) {
        btn.classList.replace('fa-chevron-right', 'fa-chevron-left');
    } else {
        btn.classList.replace('fa-chevron-left', 'fa-chevron-right');

    }
};