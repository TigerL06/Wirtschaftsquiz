let containerM = document.querySelector("#container");
let parent = document.querySelector("#main");
let buttonQ = document.querySelector("#start");
let user = "lehrer"
let password = "supertool"
let buttonL = document.querySelector("#login");


buttonL.addEventListener("click", function () {
  let nameInput = document.querySelector("#name");
  let passwordInput = document.querySelector("#password");
  let eingabeN = nameInput.value
  let eingabeP = passwordInput.value

  if(eingabeN === user && eingabeP === password){
    containerM.remove();
    home();
  }
});

buttonQ.addEventListener("click", function () {
  containerM.remove();

});


function home(){
  let header = document.querySelector("#header");
  header.innerHTML = "Wirtschaftquiz";
  let container = document.createElement('div');
  container.setAttribute("id", "container");
  let top = document.createElement("div");
  top.setAttribute("id", "topH");
  let button = document.createElement("button");
  button.innerHTML = "Add Fragesammlung";
  button.setAttribute("id", "add");

  let buttonQ = document.createElement("button");
  buttonQ.innerHTML = "Add Quiz";
  buttonQ.setAttribute("id", "addQ");
  let main = document.createElement("div");
  main.setAttribute("id", "center");
  top.appendChild(button);
  top.appendChild(buttonQ);
  container.appendChild(top);
  container.appendChild(main);
  parent.appendChild(container);

  button.addEventListener("click", function () {
    container.remove();
    addF();
  });

  buttonQ.addEventListener("click", function () {
    container.remove();
    addQ();
  });
}

function addF(){

}

function addQ(){

}
