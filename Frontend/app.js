let containerM = document.querySelector("#container");
let parent = document.querySelector("#main");
let buttonQ = document.querySelector("#start");
let user = "lehrer"
let password = "supertool"
let buttonL = document.querySelector("#login");
let art;
let numberQuestion = 0;


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
  art = "Fragensammlung";
  let header = document.querySelector("#header");
  header.innerHTML = "Fragensammlung erstellen";
  let container = document.createElement('div');
  container.setAttribute("id", "container");
  let top = document.createElement("div");
  top.setAttribute("id", "topH");
  let titel = document.createElement("h3");
  titel.setAttribute("id", "titelF")
  titel.innerHTML = "Geben Sie hier den Namen ihrer Fragensammlung ein."
  let inputF = document.createElement("input");
  inputF.setAttribute("id", "nameFS");
  let description = document.createElement("h3");
  description.innerHTML = "Wählen Sie aus, ob Sie eine Multiple Choice Frage erstellen wollen, eine normale oder eine Richtig Falsch Frage."
  
  let button = document.createElement("button");
  button.innerHTML = "Multiple Choice Frage";
  button.setAttribute("id", "multi");

  let buttonN = document.createElement("button");
  buttonN.innerHTML = "Normale Frage";
  buttonN.setAttribute("id", "normal");

  let buttonR = document.createElement("button");
  buttonR.innerHTML = "Richtig Falsch Fragen";
  buttonR.setAttribute("id", "right");

  let end = document.createElement("div");
  end.setAttribute("id", "end");

  let backB = document.createElement("button");
  backB.innerHTML = "Zurück zum Hauptmenu";
  backB.setAttribute("id", "back");

  let finishB = document.createElement("button");
  finishB.innerHTML = "Fertig mit der Fragensammlung";
  finishB.setAttribute("id", "finish");


  let main = document.createElement("div");
  main.setAttribute("id", "center");

  top.appendChild(titel);
  top.appendChild(inputF);
  top.appendChild(description);
  top.appendChild(button);
  top.appendChild(buttonN);
  top.appendChild(buttonR);
  end.appendChild(backB);
  end.appendChild(finishB)
  container.appendChild(top);
  container.appendChild(end);
  container.appendChild(main);
  parent.appendChild(container);

  button.addEventListener("click", function () {
    let elementM = document.querySelector("#center")
    elementM.remove();
    multi();
  });

  buttonN.addEventListener("click", function () {
    let elementM = document.querySelector("#center")
    elementM.remove()
    normal();
  });

  buttonR.addEventListener("click", function () {
    let elementM = document.querySelector("#center")
    elementM.remove()
    trueA();
  });

  backB.addEventListener("click", function () {
    container.remove();
    home();
  });

  finishB.addEventListener("click", function () {
    container.remove();
    home();
  });
}

function addQ(){
  art = "Quiz"
  let header = document.querySelector("#header");
  header.innerHTML = "Quiz erstellen";
  let container = document.createElement('div');
  container.setAttribute("id", "container");
  let top = document.createElement("div");
  top.setAttribute("id", "topH");
  let titel = document.createElement("h3");
  titel.setAttribute("id", "titelF")
  titel.innerHTML = "Geben Sie hier den Namen ihres Quizs ein."
  let inputF = document.createElement("input");
  inputF.setAttribute("id", "nameFS");
  let description = document.createElement("h3");
  description.innerHTML = "Wenn sie dem Quiz noch eine Frage hinzufügen wollen. Wählen Sie aus, ob Sie eine Multiple Choice Frage erstellen wollen, eine normale oder eine Richtig Falsch Frage."
  
  let button = document.createElement("button");
  button.innerHTML = "Multiple Choice Frage";
  button.setAttribute("id", "multi");

  let buttonN = document.createElement("button");
  buttonN.innerHTML = "Normale Frage";
  buttonN.setAttribute("id", "normal");

  let buttonR = document.createElement("button");
  buttonR.innerHTML = "Richtig Falsch Fragen";
  buttonR.setAttribute("id", "right");

  let end = document.createElement("div");
  end.setAttribute("id", "end");

  let backB = document.createElement("button");
  backB.innerHTML = "Zurück zum Hauptmenu";
  backB.setAttribute("id", "back");

  let finishB = document.createElement("button");
  finishB.innerHTML = "Fertig mit der Fragensammlung";
  finishB.setAttribute("id", "finish");


  let main = document.createElement("div");
  main.setAttribute("id", "center");

  let fragST = document.createElement("div");
  fragST.setAttribute("id", "fragST");

  let questionTyp = document.createElement("div");
  questionTyp.setAttribute("id", "questionTyp");


  top.appendChild(titel);
  top.appendChild(inputF);
  questionTyp.appendChild(description);
  questionTyp.appendChild(button);
  questionTyp.appendChild(buttonN);
  questionTyp.appendChild(buttonR);
  end.appendChild(backB);
  end.appendChild(finishB)
  container.appendChild(top);
  container.appendChild(fragST)
  container.appendChild(end);
  container.appendChild(questionTyp);
  container.appendChild(main);
  parent.appendChild(container);

  button.addEventListener("click", function () {
    let elementM = document.querySelector("#center")
    elementM.remove();
    multi();
  });

  buttonN.addEventListener("click", function () {
    let elementM = document.querySelector("#center")
    elementM.remove()
    normal();
  });

  buttonR.addEventListener("click", function () {
    let elementM = document.querySelector("#center")
    elementM.remove()
    trueA();
  });

  backB.addEventListener("click", function () {
    container.remove();
    home();
  });

  finishB.addEventListener("click", function () {
    container.remove();
    home();
  });
}

function multi(){
  let containerM = document.querySelector("#container")
  let container = document.createElement("div");
  container.setAttribute("id", "center");

  let desQ = document.createElement("p");
  desQ.innerHTML = "Geben Sie hier ihre Frage ein."

  let inputQ = document.createElement("input")
  inputQ.setAttribute("id", "FI");

  let desA = document.createElement("p");
  desA.innerHTML = "Geben Sie hier ihre Antwort ein."

  let inputA = document.createElement("input")
  inputA.setAttribute("id", "AI");

  let desC = document.createElement("p");
  desC.innerHTML = "Geben Sie hier ihre anderen Antwort Optionen ein."

  let desC1 = document.createElement("p");
  desC1.innerHTML = "Option 1"

  let inputO1 = document.createElement("input")
  inputO1.setAttribute("id", "O1I");

  let desC2 = document.createElement("p");
  desC2.innerHTML = "Option 2"

  let inputO2 = document.createElement("input")
  inputO2.setAttribute("id", "O2I");

  let desC3 = document.createElement("p");
  desC3.innerHTML = "Option 3"

  let inputO3 = document.createElement("input")
  inputO3.setAttribute("id", "O3I");

  let button = document.createElement("button");
  button.setAttribute("id", "FMulti")
  button.innerHTML = "Fertig"


  container.appendChild(desQ);
  container.appendChild(inputQ);
  container.appendChild(desA);
  container.appendChild(inputA);
  container.appendChild(desC);
  container.appendChild(desC1);
  container.appendChild(inputO1);
  container.appendChild(desC2);
  container.appendChild(inputO2);
  container.appendChild(desC3);
  container.appendChild(inputO3);
  container.appendChild(button);
  containerM.appendChild(container)
  parent.appendChild(containerM);


  button.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
    container.remove();
    containerM.remove();
    
    if( art === "Fragensammlung"){
      addF();
      numberQuestion++;
    }else if(art === "Quiz"){
      addQ();
      numberQuestion++;
    }
  });


}

function normal(){
  let containerM = document.querySelector("#container")
  let container = document.createElement("div");
  container.setAttribute("id", "center");

  let desQ = document.createElement("p");
  desQ.innerHTML = "Geben Sie hier ihre Frage ein."

  let inputQ = document.createElement("input")
  inputQ.setAttribute("id", "FI");

  let desA = document.createElement("p");
  desA.innerHTML = "Geben Sie hier ihre Antwort ein."

  let inputA = document.createElement("input")
  inputA.setAttribute("id", "AI");


  let button = document.createElement("button");
  button.setAttribute("id", "FMulti")
  button.innerHTML = "Fertig"


  container.appendChild(desQ);
  container.appendChild(inputQ);
  container.appendChild(desA);
  container.appendChild(inputA);
  container.appendChild(button);
  containerM.appendChild(container)
  parent.appendChild(containerM);


  button.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
    container.remove();
    containerM.remove();
    
    if( art === "Fragensammlung"){
      addF();
      numberQuestion++;
    }else if(art === "Quiz"){
      addQ();
      numberQuestion++;
    }
  });

}

function trueA(){
  let antwort;
  let containerM = document.querySelector("#container")
  let container = document.createElement("div");
  container.setAttribute("id", "center");

  let desQ = document.createElement("p");
  desQ.innerHTML = "Geben Sie hier ihre Frage ein."

  let inputQ = document.createElement("input")
  inputQ.setAttribute("id", "FI");

  let desA = document.createElement("p");
  desA.innerHTML = "Wählen Sie aus, ob die Antwort für die Frage richtig oder falsch ist."

  let buttonR = document.createElement("button");
  buttonR.setAttribute("id", "falschB")
  buttonR.innerHTML = "Richtig";

  let buttonF = document.createElement("button");
  buttonF.setAttribute("id", "richtigB")
  buttonF.innerHTML = "Falsch";

  let space = document.createElement("br");

  let button = document.createElement("button");
  button.setAttribute("id", "FMulti")
  button.innerHTML = "Fertig";


  container.appendChild(desQ);
  container.appendChild(inputQ);
  container.appendChild(desA);
  container.appendChild(buttonR);
  container.appendChild(buttonF);
  container.appendChild(space);
  container.appendChild(button);
  containerM.appendChild(container)
  parent.appendChild(containerM);


  button.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
    container.remove();
    containerM.remove();
    
    if( art === "Fragensammlung"){
      addF();
      numberQuestion++;
    }else if(art === "Quiz"){
      addQ();
      numberQuestion++;
    }
  });

  buttonR.addEventListener("click", function () {
    antwort = "richtig";
    if(document.querySelector("#AT")){
      let text = document.querySelector("#AT");
      text.innerHTML = "Antwort: richtig";

    }else{
      let container = document.querySelector("#center");
      let text = document.createElement("p");
      text.innerHTML = "Antwort: richtig";
      text.setAttribute("id", "AT")
      container.appendChild(text);
    }

  });

  buttonF.addEventListener("click", function () {
    antwort = "falsch";
    if(document.querySelector("#AT")){
      let text = document.querySelector("#AT");
      text.innerHTML = "Antwort: falsch";
    }else{
      let container = document.querySelector("#center");
      let text = document.createElement("p");
      text.innerHTML = "Antwort: falsch";
      text.setAttribute("id", "AT")
      container.appendChild(text);
    }
  });
}