let output = document.getElementById("output")
let happy = document.getElementsByClassName("happy")[0]
let sad = document.getElementsByClassName("sad")[0]
let video = document.getElementById("confeti")
const sound = document.getElementById("soundEffect")

function handleSubmit(event) {
    event.preventDefault();
    let name = document.getElementsByClassName("input")[0].value;
    console.log(name)
    checkName(name)
}

function checkName(name) {
    let ran = Math.floor(Math.random()*6 + 1)
    let shots = ''
    switch(ran) {
        case 1:
            shots = 'shot';
            break;
        case 2:
            shots = "shota";
            break;
        case 3:
            shots = "shote";
            break;
        case 4:
            shots = "shote";
            break;
        case 5:
            shots = "shotov";
            break;
        case 6:
            shots = "shotov";
            break;
    }
    name = name.toLowerCase()
    if (name === '') {
        output.innerText = 'Vnesi ime!'
    } else {
        if (name === "blaž" || name === "blaz" || name === "mihevc") {
        output.innerText = `Zaznan lovec lignjunov. Ti ne piješ! \n \n Sej ne😂 \n Spij ${ran} ${shots}!`
        sad.style.display = "flex"
        happy.style.display = "none"
        video.currentTime = 0;
        video.play()
        sound.currentTime = 0;
        sound.play()
        
    }
    else {
        name = name.charAt(0).toUpperCase() + name.slice(1)
        output.innerText = `${name}, spij ${ran} ${shots}!`
        happy.style.display = "flex"
        sad.style.display = "none"
        video.currentTime = 0;
        video.play()
        sound.currentTime = 0;
        sound.play()
    }
}
    }
    