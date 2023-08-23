const my_header = document.getElementById("my_header");
const my_button = document.getElementById("open-menu");
const my_menu = document.getElementById("my-menu")
const my_page = document.getElementById("page")
const body = document.body;


window.addEventListener( "scroll", headerScroll);

function headerScroll ()
{


    const scrollY = window.scrollY;
    if(body.style.overflow != "hidden")
    {
        
    if(scrollY != 0)
    {
        my_header.classList.add('scrolled')
        my_menu.classList.add('scrolled')
    }        
    else{
        
        my_header.classList.remove('scrolled')
        my_menu.classList.remove('scrolled')
    }
    }
}

function openMenu()
{
    if(!my_button.classList.contains("closed"))
    {
       closeMenu()
    }
    else{
    my_button.classList.remove("closed")
    my_button.classList.add("opened")
    my_menu.classList.remove('hidden')
    my_header.classList.add('scrolled')
    my_page.classList.add("hidden")
    body.style.backgroundColor = "#73287E";
    body.style.overflow = "hidden";
}
}

function closeMenu()
{
    my_button.classList.add("closed")
    my_button.classList.remove("opened")
    my_menu.classList.add('hidden')
    my_page.classList.remove("hidden")
    my_header.classList.remove('scrolled') 
    body.style.backgroundColor = "rgb(246,224,211)";
    body.style.overflow = "auto";
}

ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 300
  }).reveal(`
  #home, 
  #home .block, 
  #about-us,
  #about-us .col-1,
  #about-us .content,
  #about-us img,
  #what-we-do,
  #what-we-do .col-1,
  #what-we-do .content,
  #what-we-do .col-2,
  #what-we-do #cards,
  #what-we-do .card,
  #what-we-do img,
  #contact-us .col-1,
  #contact-us .content,
  #contact-us .col-2,
  #contact-us .infos,
  #contact-us img
  `)

