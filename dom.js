// Créez un nouvel élément de la liste en cliquant sur le bouton "Add"

function newElement() {
  let li = document.createElement("li");
  let input_val = document.getElementById("input_add").value;
  let text = document.createTextNode(input_val);
  li.appendChild(text);
  
  //Message alert si champ to do est vide

  if (input_val === '') {
    alert("Champ vide!\nEcrire quelque chose SVP");
  } else {
    document.getElementById("ul_list").appendChild(li);
  }
  document.getElementById("input_add").value = "";

  // Créez un bouton "close" et concaténer  avec chaque élément de la liste

  let span = document.createElement("SPAN");
  let croix = document.createTextNode("×");
  span.className = "close";
  span.appendChild(croix);
  li.appendChild(span);

  // Cliquez sur un bouton "close" pour masquer l'élément de la liste 

  let close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      this.parentElement.style.display = "none";
    }
  }
}

