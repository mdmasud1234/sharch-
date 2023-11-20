
let search_open_btn = document.querySelector('#search_open_btn')
let search_close_btn = document.querySelector('#search_close_btn')
let search_box = document.querySelector('#search')

search_open_btn.addEventListener('click',()=>{
    search_box.style.transform = 'scale(1)'
})

search_close_btn.addEventListener('click',()=>{
    search_box.style.transform = 'scale(0)'
})