let containerM = document.querySelector("#container");
let parent = document.querySelector("#main");
let buttonQ = document.querySelector("#start");
let user = "lehrer"
let password = "supertool"
let buttonL = document.querySelector("#login");
let art;
let numberQuestion = 0;
let nameCollection;


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
  getSammlungen();

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

  
  let numberOutput = document.createElement("p");
  numberOutput.innerHTML = numberQuestion;
  numberOutput.setAttribute("id", "numberOutput");

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
  container.appendChild(numberOutput);
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
    if(inputF.value === ""){
      title.innerHTML = "Es fehlt der Name der Fragesammlung"
      title.style.color = "red";
    }else {
      let type = "Fragesammlung";
      container.remove();
      postSammlung(inputF.value, type)
      numberQuestion = 0;
      home();
    }
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
  finishB.innerHTML = "Fertig mit dem Quiz";
  finishB.setAttribute("id", "finish");


  let main = document.createElement("div");
  main.setAttribute("id", "center");

  let fragST = document.createElement("div");
  fragST.setAttribute("id", "fragST");

  let questionTyp = document.createElement("div");
  questionTyp.setAttribute("id", "questionTyp");

  let numberOutput = document.createElement("p");
  numberOutput.innerHTML = numberQuestion;
  numberOutput.setAttribute("id", "numberOutput");


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
  container.appendChild(numberOutput);
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
    if(inputF.value === ""){
      title.innerHTML = "Es fehlt der Name der Fragesammlung"
      title.style.color = "red";
    }else {
      let type = "Quiz";
      container.remove();
      postSammlung(inputF.value, type)
      numberQuestion = 0;
      home();
    }
  });
}

function multi(){
  let title = document.querySelector("#titelF")
  title.innerHTML = "Geben Sie hier ihre Frage ein.";
  title.style.color = "black";
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
    let input = document.querySelector("#nameFS");
    let modus = "multiple choice";
    let question = "";
    let choices = {
      option1: inputO1.value,
      option2: inputO2.value,
      option3: inputO3.value
    };

    if(input.value === ""){
      title.innerHTML = "Es fehlt der Name der Fragesammlung"
      title.style.color = "red";
    }else {
      container.remove();
      containerM.remove();
      nameCollection = input.value;
      if( art === "Fragensammlung"){
        addF();
        numberQuestion++;
        let inputT = document.querySelector("#nameFS");
        inputT.value = nameCollection;
        postQuestion(input.value, question, inputQ.value, inputA.value, modus, choices)
      }else if(art === "Quiz"){
        addQ();
        numberQuestion++;
        let inputT = document.querySelector("#nameFS");
        inputT.value = nameCollection;
        postQuestion(question, input.value, inputQ.value, inputA.value, modus, choices)
      }
    }
  });


}

function normal(){
  let title = document.querySelector("#titelF")
  title.innerHTML = "Geben Sie hier ihre Frage ein.";
  title.style.color = "black";
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
    let input = document.querySelector("#nameFS");
    let modus = "normal";
    let question = "";
    if(input.value === ""){
      title.innerHTML = "Es fehlt der Name der Fragesammlung"
      title.style.color = "red";
    }else {
      container.remove();
      containerM.remove();
      nameCollection = input.value;
      if( art === "Fragensammlung"){
        addF();
        numberQuestion++;
        let inputT = document.querySelector("#nameFS");
        inputT.value = nameCollection;
        postQuestion(input.value, question, inputQ.value, inputA.value, modus, question)
      }else if(art === "Quiz"){
        addQ();
        numberQuestion++;
        let inputT = document.querySelector("#nameFS");
        inputT.value = nameCollection;
        postQuestion(question, input.value, desQ.value, inputA.value, modus, question)
      }
    }
    
  });

}

function trueA(){
  let answer;
  let title = document.querySelector("#titelF")
  title.innerHTML = "Geben Sie hier ihre Frage ein.";
  title.style.color = "black";
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
    let input = document.querySelector("#nameFS");
    let text = document.querySelector("#AT");
    let modus = "true or false";
    let question = "";
    if(input.value === ""){
      title.innerHTML = "Es fehlt der Name der Fragesammlung"
      title.style.color = "red";
    }else {
      container.remove();
      containerM.remove();
      nameCollection = input.value;
      if( art === "Fragensammlung"){
        addF();
        numberQuestion++;
        let inputT = document.querySelector("#nameFS");
        inputT.value = nameCollection;
        postQuestion(input.value, question, inputQ.value, answer, modus, question)
      }else if(art === "Quiz"){
        addQ();
        let inputT = document.querySelector("#nameFS");
        inputT.value = nameCollection;
        numberQuestion++;
        postQuestion(question, input.value, inputQ.value, answer, modus, question)
      }
    }
  });

  buttonR.addEventListener("click", function () {
    answer = "richtig";
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
    answer = "falsch";
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

async function postQuestion(fragesammlung, quiz, frage, antwort, modus, auswahl){
  let numberOutput = document.querySelector("#numberOutput");
  if (numberQuestion != null) {
    let number = numberQuestion;
    numberOutput.innerHTML = number;
  } else {
    numberOutput.innerHTML = 0;
  }
  const newFrage = {
    fragesammlung,
    quiz,
    frage,
    antwort,
    modus,
    auswahl,
  };


    const response = await fetch('http://localhost:3000/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFrage),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Erfolgreich gespeichert:', result);
  
}

async function postSammlung(name, type){
  const newSammlung ={
    name: name,
    type: type
  };
  await fetch(`http://localhost:3000/collections`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newSammlung),
  });
}

async function getSammlungen(){
  try {
    const response = await fetch(`http://localhost:3000/collections`);

    if (!response.ok) {
      throw new Error('Fehler beim Abrufen der Daten');
    }

    const collections = await response.json();
    let Container = document.querySelector("#center");

    // Display notes
    collections.forEach(collection => {
      let collectionDiv = document.createElement("div");
      collectionDiv.className = "collection";

      let title = document.createElement("h2");
      title.textContent = collection.title;

      let mainText = document.createElement("p");
      mainText.textContent = collection.name;

      let buttonE = document.createElement("button");
      buttonE.innerHTML = "Edit";

      let buttonP = document.createElement("button");
      buttonP.innerHTML = "Play";

      // Event listener for edit
      buttonE.addEventListener("click", function () {
        let container = document.querySelector("#container");
        container.remove();
        editSammlung(collection._id, collection.name);
      });

      // Add elements
      collectionDiv.appendChild(title);
      collectionDiv.appendChild(mainText);
      collectionDiv.appendChild(buttonE);
      if(collection.type === "Quiz"){
        collectionDiv.appendChild(buttonP)
      }

      // Event listener for Play button
      buttonP.addEventListener("click", function () {
        console.log(`Spiel starten für Quiz: ${collection.name}`);
        // Hier könnte zusätzliche Logik hinzugefügt werden
      });

      Container.appendChild(collectionDiv);
    });
  } catch (error) {
    console.error("Fehler:", error);
  }
}

function getQuestionfromSammlung(sammlung){

}

async function getSammlungfromType(type){

}

async function putCollection(id, _name) {
  const updatName = { name: _name };
  let _id = id;
  console.log(_id)
  console.log("http://localhost:3000/collections/update/${id}")
  const response = await fetch(`http://localhost:3000/collections/update/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatName)
  });

  if (!response.ok) {
    throw new Error(`Fehler beim Aktualisieren der Fragensammlung: ${response.status}`);
  }

  const updatedCollection = await response.json();
  console.log("Fragensammlung erfolgreich aktualisiert:", updatedCollection);
  alert("Fragensammlung erfolgreich aktualisiert!");


}

async function putQuestion(id) {
  
}

function editSammlung(id, name){
  let answer;
  let _id = id;
  let title = document.querySelector("#header")
  title.innerHTML = "Fragensammlung verändern";
  let containerM = document.createElement('div');
  containerM.setAttribute("id", "container");
  let container = document.createElement("div");
  container.setAttribute("id", "center");

  let desQ = document.createElement("p");
  desQ.innerHTML = "Name von der Fragensammlung"
  desQ.style.color = "black";

  let input = document.createElement("input")
  input.setAttribute("id", "FP");
  input.value = name;

  let space = document.createElement("br");

  let button = document.createElement("button");
  button.setAttribute("id", "updateF")
  button.innerHTML = "Verändern";

  let buttonB = document.createElement("button");
  buttonB.setAttribute("id", "BackF")
  buttonB.innerHTML = "Zurück zur Startseite";

  let des = document.createElement("p");
  des.innerHTML = "Alle Fragen von der Fragensammlung"

  let questionPart = document.createElement("div");
  questionPart.setAttribute("id", "questionPart")
  console.log("test")
  console.log(id);
  editQuestion(name, id);

  container.appendChild(desQ);
  container.appendChild(input);
  container.appendChild(space);
  container.appendChild(button);
  container.appendChild(buttonB)
  containerM.appendChild(container)
  containerM.appendChild(questionPart)
  parent.appendChild(containerM);


  button.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
    if(input.value === ""){
      desQ.innerHTML = "Es fehlt der Name der Fragesammlung"
      desQ.style.color = "red";
    }else {
      container.remove();
      containerM.remove();

      putCollection(_id, input.value);

      home();
    }
  });

  buttonB.addEventListener("click", function (){
    let containerM = document.querySelector("#container");
    container.remove();
    containerM.remove();
    home();
  });

}

async function editQuestion(fragesammlung, id) {
  console.log(`http://localhost:3000/questions/by-fragesammlung/${fragesammlung}`)
  const response = await fetch(`http://localhost:3000/questions/by-fragesammlung/${fragesammlung}`);

  if (!response.ok) {
    throw new Error('Fehler beim Abrufen der Fragen');
  }

  const questions = await response.json();
  let questionPart = document.querySelector("#questionPart");

  questions.forEach(question => {
    let questionDiv = document.createElement("div");
    questionDiv.className = "question";

    let title = document.createElement("h3");
    title.textContent = question.frage;

    let answer = document.createElement("p");
    answer.textContent = `Antwort: ${question.antwort}`;

    let modus = document.createElement("p");
    modus.textContent = `Modus: ${question.modus}`;

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";

    let auswahl = [];
    question.auswahl.forEach(element => {
      let i = 0;
      auswahl[i] = element;
      console.log(auswahl[i])
      i++;
      
    });

    // Event listener für den Edit-Button
    editButton.addEventListener("click", function () {
      if(question.modus === "multiple choice"){
        let containerM = document.querySelector("#container");
        containerM.remove();
        multiEdit(question._id, question.frage, question.antwort, auswahl[0], auswahl[1], auswahl[3], id, fragesammlung)
      }else if(question.modus === "normal"){
        let containerM = document.querySelector("#container");
        containerM.remove();
        normalEdit(question._id, question.frage, question.antwort, id, fragesammlung)
      }else if(question.modus === "true or false"){
        let containerM = document.querySelector("#container");
        containerM.remove();
        trueEdit(question._id, question.frage, question.antwort, id, fragesammlung)
      }
    });

    // Elemente hinzufügen
    questionDiv.appendChild(title);
    questionDiv.appendChild(answer);
    questionDiv.appendChild(modus);
    questionDiv.appendChild(editButton);

    questionPart.appendChild(questionDiv);
  });

}

function normalEdit(frageID, frage, antwort, id, name){
  let title = document.querySelector("#header")
  title.innerHTML = "Frage verändern";
  title.style.color = "black";
  let containerM = document.createElement("div")
  containerM.setAttribute("id", "container")
  let container = document.createElement("div");
  container.setAttribute("id", "center");

  let desQ = document.createElement("p");
  desQ.innerHTML = "Geben Sie hier ihre Frage ein."

  let inputQ = document.createElement("input")
  inputQ.setAttribute("id", "FI");
  inputQ.value = frage;

  let desA = document.createElement("p");
  desA.innerHTML = "Geben Sie hier ihre Antwort ein."

  let inputA = document.createElement("input")
  inputA.setAttribute("id", "AI");
  inputA.value = antwort;

  let button = document.createElement("button");
  button.setAttribute("id", "FMulti")
  button.innerHTML = "Fertig"

  let buttonB = document.createElement("button");
  buttonB.innerHTML = "Zurück"




  container.appendChild(desQ);
  container.appendChild(inputQ);
  container.appendChild(desA);
  container.appendChild(inputA);
  container.appendChild(button);
  container.appendChild(buttonB)
  containerM.appendChild(container)
  parent.appendChild(containerM);


  bbuttonB.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
   container.remove();
    containerM.remove();
  });
  
  button.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
    container.remove();
    containerM.remove();
    putQuestion(frageID);
    editSammlung(id, name);
  });
}

function trueEdit(frageID, frage, antwort, id, name){
  let title = document.querySelector("#header")
  title.innerHTML = "Frage bearbeiten";
  let containerM = document.createElement("div")
  containerM.setAttribute("id", "container")
  let container = document.createElement("div");
  container.setAttribute("id", "center");

  let desQ = document.createElement("p");
  desQ.innerHTML = "Geben Sie hier ihre Frage ein."

  let inputQ = document.createElement("input")
  inputQ.setAttribute("id", "FI");
  inputQ.value = frage;

  let desA = document.createElement("p");
  desA.innerHTML = "Wählen Sie aus, ob die Antwort für die Frage richtig oder falsch ist."

  let text = document.createElement("p");
  text.innerHTML = "Antwort: " + antwort;
  text.setAttribute("id", "AT")

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

  
  let buttonB = document.createElement("button");
  buttonB.innerHTML = "Zurück"



  container.appendChild(desQ);
  container.appendChild(inputQ);
  container.appendChild(desA);
  container.appendChild(buttonR);
  container.appendChild(buttonF);
  container.appendChild(space);
  container.appendChild(button);
  container.appendChild(buttonB)
  container.appendChild(text);
  containerM.appendChild(container)
  parent.appendChild(containerM);


  buttonB.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
   container.remove();
    containerM.remove();
  });
  
  button.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
      container.remove();
      containerM.remove();
      putQuestion(frageID);
      editSammlung(id, name);
  });

  buttonR.addEventListener("click", function () {
    answer = "richtig";
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
    answer = "falsch";
    if(document.querySelector("#AT")){
      let text = document.querySelector("#AT");
      text.innerHTML = "Antwort: falsch";
    }else{
      let container = document.querySelector("#center");
      container.appendChild(text);
    }
  });
}

function multiEdit(frageID, frage, antwort, auswahl, auswahl2, auswahl3, id, name){
  let title = document.querySelector("#header")
  title.innerHTML = "Frage verändern";
  title.style.color = "black";
  let containerM = document.createElement("div")
  containerM.setAttribute("id", "container")
  let container = document.createElement("div");
  container.setAttribute("id", "center");

  let desQ = document.createElement("p");
  desQ.innerHTML = "Geben Sie hier ihre Frage ein."

  let inputQ = document.createElement("input")
  inputQ.setAttribute("id", "FI");
  inputQ.value = frage;

  let desA = document.createElement("p");
  desA.innerHTML = "Geben Sie hier ihre Antwort ein."

  let inputA = document.createElement("input")
  inputA.setAttribute("id", "AI");
  inputA.value = antwort;

  let desC = document.createElement("p");
  desC.innerHTML = "Geben Sie hier ihre anderen Antwort Optionen ein."

  let desC1 = document.createElement("p");
  desC1.innerHTML = "Option 1"

  let inputO1 = document.createElement("input")
  inputO1.setAttribute("id", "O1I");
  inputO1.value = auswahl;

  let desC2 = document.createElement("p");
  desC2.innerHTML = "Option 2"

  let inputO2 = document.createElement("input")
  inputO2.setAttribute("id", "O2I");
  inputO2.value = auswahl2

  let desC3 = document.createElement("p");
  desC3.innerHTML = "Option 3"

  let inputO3 = document.createElement("input")
  inputO3.setAttribute("id", "O3I");
  inputO3.value = auswahl3

  let button = document.createElement("button");
  button.setAttribute("id", "FMulti")
  button.innerHTML = "Fertig"

  let buttonB = document.createElement("button");
  buttonB.innerHTML = "Zurück"




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
  container.appendChild(buttonB)
  containerM.appendChild(container)
  parent.appendChild(containerM);


  buttonB.addEventListener("click", function () {
    let containerM = document.querySelector("#container");
   container.remove();
    containerM.remove();
  });
  
  buttonB.addEventListener("click", function(){
    let containerM = document.querySelector("#container");
      container.remove();
      containerM.remove();
      putQuestion(frageID);
      editSammlung(id, name);
  });
}


