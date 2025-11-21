


//sidebar ========================================================================================================================
const bar = document.querySelector('.bar');
const barred = document.querySelector('.bar span')
const sidebar = document.querySelector('.aside');
const rotateLe = document.querySelector('.arrow-left')

bar.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
    barred.classList.toggle('change')
});

rotateLe.addEventListener('click', (e) => {
    e.stopPropagation()
    sidebar.classList.toggle('active')
    barred.classList.toggle('change')
})

document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !bar.contains(e.target)) {
        sidebar.classList.remove('active');
        barred.classList.toggle('change')
    }
});
//sidebar ========================================================================================================================