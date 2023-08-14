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
        
        my_header.classList.add('scrolled')
    else
        my_header.classList.remove('scrolled')
    
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
