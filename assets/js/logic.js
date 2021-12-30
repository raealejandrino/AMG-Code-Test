let sidebar = document.querySelector('.sidebar');
let btn = document.querySelector('#btn');

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