let jumpscare = document.getElementById("jumpscare");
var audio = document.getElementById("jump")
let ai = document.getElementById("skolengpt")
let body = document.getElementById("kropp")
const move = document.getElementById("circle");
let think = document.getElementById("think")
var sound = document.getElementById("fast")

function away(){
    jumpscare.style.visibility="hidden";
}
function evil(){
    setTimeout(scarry, 9000)
    ai.src = "img/evil OsloskolenGPT.png"
    body.style.backgroundColor="#87001f"
}

function scarry (){
    jumpscare.style.visibility="visible";
    jumpscare.play()
    audio.play();
    setTimeout(away, 700);
}
function good (){
    ai.src = "img/good osloskolengpt.png"
    body.style.backgroundColor="lightblue"
    setTimeout(thought, 5000)

}
function thought() {
    think.style.visibility="visible"
    sound.play()
    setTimeout(scout, 1000)
}
function scout(){
    think.style.visibility="hidden"
}

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  move.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 1000, fill: "forwards" },
  );
};

