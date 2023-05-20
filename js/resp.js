burgerbtn = document.querySelector('.burgerbtn')
navbar = document.querySelector('.navbar')
search = document.querySelector('.search')
navlist = document.querySelector('.navlist')


burgerbtn.addEventListener('click',()=>{
navbar.classList.toggle('navheight')
search.classList.toggle('visibility')
navlist.classList.toggle('visibility')
})

