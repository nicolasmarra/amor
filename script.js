:root
{
  /*our colors */

  --primary-color: #73287E;
  --second-color : rgb(246,224,211);
  --text-color: #DE8552;


  --base-font-size: 62.5%;

}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html
{
  
  font-size: var(--base-font-size);
}

html, body{

  width: 100%;
  height: 100%;
}

body {

  background-color: var(--second-color);

  font-family: 'DM Sans';
  text-align: center;

  width: min(45rem, 100%);
  margin-inline: auto;
  /*padding-inline: 2.4rem;*/

}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}
header
{
  padding-block: 1.2rem; 
  margin-inline: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  gap: 25rem;


  position: fixed;
  top: 0;
  
  width: min(45rem, 100%);
  
  z-index: 100;
  background-color: rgb(246,224,211);
}

header.scrolled
{
  background-color: var(--primary-color);  
}

header.scrolled img#logo
{
  content: url('assets/logo_amor_white.png');
}

header button img.opened#open-menu
{
  content: url('assets/icon_close_menu.svg');

}

header.scrolled img#open-menu
{
  content: url('assets/icon_open_menu_white.svg');
}

button 
{
  text-decoration: none;
  border: none;
  background-color: transparent;
}

header button{
  padding: 0.26rem 0.26rem;
  cursor: pointer;
}


/* --------- NAVIGATION ------------ */


nav
{
  background-color: var(--primary-color);
  height: 100vh;
  padding-block : 25rem;
}

nav ul
{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

nav a 
{
  font-family: 'Inter';
  font-weight: 600;
  font-size: 1.8rem;
  color: white;
}

nav .social-network
{
  margin-block: 10rem;
}

nav .social-network ul 
{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

nav.hidden
{
  display: none;
}

div#page.hidden
{
  display: none;
}


/* --------- HOME ------------ */


section#home
{
  position: relative;
  max-height: 100%;
  height: 62rem;

  background: url('assets/photo_home.png');
  background-size: cover;
  background-position: 50%;
  margin-bottom: 10rem;
}


section#home #block
{

  background-color: var(--primary-color);
  color: #fff;
  opacity: 0.9;

  width: 100%;

  padding-block: 1.5rem;
  margin-block: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  height: 18rem;

  position: absolute;
  top: 55%;
  left: 50%;

  transform: translate(-50%, -50%);
  text-align: center;

}

section#home #block h2
{
    font-family: 'Alfa Slab One';
    font-size: 3.2rem;
}

section#home #block h4
{
  font-family: 'Inter';
  font-size: 1rem;
}

/* --------- ABOUT US ------------ */

section#about-us
{
  background-color: #fff;
}


section .wrapper
{
  padding-block: 5rem;
  padding-inline: 2.5rem;

}


section .col-1
{
  text-align: left;
  margin-bottom: 3rem;
}

section .wrapper h3
{
  color: var(--primary-color);
  font-family: 'Inter';
  font-size: 2rem;

  margin-bottom: 1.5rem;
}

section .wrapper h2
{
  font-size: 2.4rem;

  font-weight: 700;

  margin-bottom: 1.5rem;
}

section p
{
  text-align: justify;
  font-family:'Inter';


  font-size: 1.2rem;

}

section .col-2 img
{
  max-width: 100%;
}

/* --------- WHAT WE DO ------------ */


section #cards
{
  font-family: 'DM Sans';

  margin-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

section .card
{
  background-color: #fff;
  padding-block: 2rem;
  padding-inline: 1rem;
  width: 100%;
  margin-inline: auto;

  border: 0.8px solid var(--text-color);
  border-radius: 0.8rem;
}

section .card img
{
  max-width: 4rem;
  max-height: 2rem;
}

section .card .main
{
  display: grid;
  grid-template-columns: auto 1fr;
  margin-inline: 3rem;  
}

section .card h5
{
  font-size: 1rem;  
  color: var(--text-color);
  font-weight: 500;
}

section .card h5 span
{
  font-weight: bold;
}


/* --------- ACTIVITIES ------------ */

section#activities 
{
  background-color: rgba(222, 133, 82, 0.25);
}

/* --------- CONTACT-US ------------ */

section#contact-us
{
  background-color: #fff;

}

section#contact-us p
{
  font-size: 2.1rem;
}

section#contact-us p span
{
  color: var(--primary-color);
}

section#contact-us .infos
{
  padding-block: 1rem;
  
}

section#contact-us .infos img
{
  max-width: 2rem;
  max-height: 2rem;
}

section#contact-us .infos ul
{
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

section#contact-us .infos ul li
{
  display: flex;
  flex-direction: row;
  
  justify-content: left;
  align-items: center;

  gap: 1.5rem;

  color: var(--primary-color);

  font-size: 1.5rem;
  font-family: 'Inter';
}

/* --------- FOOTER ------------ */

footer
{
  background-color: var(--primary-color);
  padding-block: 1.5rem;
  padding-inline: 2.5rem;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-family: 'Inter';
  font-size: 1.2rem;
  text-align: left;
  color: white;

}

footer .rights
{
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

footer .social-network ul
{
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
