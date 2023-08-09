const my_header = document.getElementById("my_header");
window.addEventListener( "scroll", () => 
{

    const scrollY = window.scrollY;
    if(scrollY != 0)
    
        my_header.classList.add('scrolled')
    else
        my_header.classList.remove('scrolled')
});


