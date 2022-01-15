
const toggle =  document.querySelector('.sidebar-toggle');
const sideToggle =  document.querySelector('.nav-toggle')
const sidebar =  document.querySelector('.sidebar');


toggle.addEventListener('click', () => {
   sidebar.classList.toggle('show-sidebar')
})

sideToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
 })