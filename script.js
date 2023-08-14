const my_header = document.getElementById("my_header");

window.addEventListener( "scroll", headerScroll);


function headerScroll ()
{


    const scrollY = window.scrollY;
    if(scrollY != 0)
    
        my_header.classList.add('scrolled')
    else
        my_header.classList.remove('scrolled')
}

function openMenu()
{
    const my_button = document.getElementById("open-menu");
    const my_menu = document.getElementById("my-menu")
    const my_page = document.getElementById("page")
    if(!my_button.classList.contains("closed"))
    {
        my_button.classList.add("closed")
        my_menu.classList.add('hidden')
        my_header.classList.remove('scrolled')
        my_page.classList.remove("hidden")   
    }
    else{

        my_button.classList.remove("closed")
        my_menu.classList.remove('hidden')
        my_header.classList.add('scrolled')
        my_page.classList.add("hidden")
    }
}