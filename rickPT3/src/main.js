let clickers = 15;
let startTime = Date.now();

// position element in the DOM
function sync(dom, pos) {
  dom.style.left = `${pos.x}px`;
  dom.style.top = `${pos.y}px`;
}

function addClicker() {
  const pos = {
    x: Math.random() * 500,
    y: Math.random() * 300
  };
  const img = new Image();
  img.src = "res/images/rick.png";
  img.style.position = "absolute";
  img.addEventListener("click", removeClicker, false);

  document.querySelector("#board").appendChild(img);
  sync(img, pos);
}

//get the paragraph from the HTML file
var x = document.getElementById("ricksLeft");

//put the first numnber (15) to start with, after this, the functions will 
//update it
document.getElementById("ricksLeft").innerHTML = 
'The number of ricks left is: ' + clickers;

//function that will change the number of ricks 
function updatedNumber(){
    document.getElementById("ricksLeft").innerHTML = 
'The number of ricks left is: ' + clickers;
}

function removeClicker(e) {
  e.target.parentNode.removeChild(e.target);
  clickers--;
  checkGameOver();

  //update number of ricks every time one is removed
  updatedNumber();

}

function checkGameOver() {
   
  if (clickers === 0) {
    const taken = Math.round((Date.now() - startTime) / 1000);
    alert(`De-rick-ed in ${taken} seconds!`);
  }
}

// Add all the Ricks!
for (let i = 0; i < clickers; i++) {
  addClicker();
}




