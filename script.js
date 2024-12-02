const darkMode = document.getElementById('dark-mode');
let mode = true; //keep track of mode, true = normal

const title = document.getElementById('title');

const colours = ['blue', 'pink', 'purple', 'cyan', 'red', 'turquoise'];
let i = 0;

function changeColour(){
        title.style.color = colours[i];
        i++;
        if (i>colours.length-1){
            i=0;
        }
}

setInterval(function(){changeColour()}, 1000); //calls function periodically

darkMode.addEventListener('click', changeDarkMode)

function changeDarkMode(){

    if (mode){
        darkMode.textContent = "Light Mode";
        mode = false;
        document.body.style.color = 'grey'
        document.body.style.backgroundImage = "url(https://img.freepik.com/free-photo/abstract-geometric-background-shapes-texture_1194-305448.jpg?t=st=1732750035~exp=1732753635~hmac=0e43f87701ca25c51f3c5861d4efadd7e11be3775b3fe0af54eff9a44203736a&w=740)"
        document.getElementById('experience-h1').style.color = 'white'
        document.getElementById('experience-h1').style.backgroundColor = 'black'
        document.getElementById('intro-info').style.color = 'white'
        document.getElementById('contact-form').style.backgroundColor = '#222222'
        document.querySelector('footer').style = 'color: black';

    } else if (!mode) {
        darkMode.textContent = "Dark Mode";
        document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/geometric-pattern-background-vector-white_53876-126684.jpg?semt=ais_hybrid)"
        mode = true;
        document.body.style.color = 'black';
        document.getElementById('experience-h1').style.color = 'black'
        document.getElementById('experience-h1').style.backgroundColor = 'grey'
        document.getElementById('intro-info').style.color = 'black'
        document.getElementById('contact-form').style.backgroundColor = 'white'
    }
}

