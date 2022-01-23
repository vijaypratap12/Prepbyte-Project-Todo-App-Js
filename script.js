const arrayObj = [];
const miniObjArray = [];


function addTaskInput() {
  document.getElementById("main-container").style.filter = "blur(8px)";
  document.getElementById("task-input-container").style.visibility =
    "visible";
    document.getElementById("noItemMsg").style.display = "none";
}



function addDataObj(){
  let invalue = document.getElementById("list").value;

  let objData = {
    id: Date.now(),
    taskName: invalue,
  }

  arrayObj.push(objData);
  addCard()

}

function addCard() {
   
    let divElement = document.createElement("div")
    let headDiv = document.createElement("div");
    let middleDiv = document.createElement("div");
    let iconDiv = document.createElement("div");
    let h = document.createElement("h1");
    let iconAdd = document.createElement("i");
    let iconDelete = document.createElement("i");

    divElement.setAttribute("class", "card-1");
    divElement.setAttribute("id", "cardId");
    headDiv.setAttribute("class", "head-div");
    headDiv.setAttribute("id", "head-div-Id");
    middleDiv.setAttribute("class", "middle-div");
    middleDiv.setAttribute("id", "middle-div-Id");
    iconDiv.setAttribute("class", "icon-div");
    iconDiv.setAttribute("id", "icon-div-Id");
    iconAdd.setAttribute("class", "fas fa-plus-circle");
    iconAdd.setAttribute("id", "add-icon");
    iconDelete.setAttribute("class", "fas fa-trash-alt");
    iconDelete.setAttribute("id", "deleteIcon");
    
    let headingText = document.createTextNode(arrayObj[arrayObj.length-1].taskName);
     h.appendChild(headingText)
     headDiv.appendChild(h);
     divElement.appendChild(headDiv);
     divElement.appendChild(middleDiv);
     iconDiv.appendChild(iconDelete);
     iconDiv.appendChild(iconAdd);
     divElement.appendChild(iconDiv);




     //deleting the card

  iconDelete.addEventListener('click', ()=>{
    divElement.remove();
  })

  //creating again mini item
  iconAdd.addEventListener('click', ()=>{
    document.getElementById("main-container").style.filter = "blur(8px)";
  document.getElementById("minitask-input-container").style.visibility =
    "visible";

  })

  let miniAddBtn = document.getElementById("miniaddbtn");
  miniAddBtn.addEventListener("click", miniItemObj);



     
    document.getElementById("list-container").appendChild(divElement); 
    document.getElementById("task-input-container").style.visibility =  "hidden";
    
  document.getElementById("main-container").style.filter = "blur(0px)";



  headDiv.addEventListener('click', ()=>{
    document.getElementById("main-heading").style.display = "none";
    document.getElementById("card-header-content").style.display = "block";
    document.getElementById("middle-mini-item-heading").innerHTML = arrayObj[arrayObj.length-1].taskName;
    document.getElementById("add-task-name").innerText = "";
    document.getElementById("list-container").style.visibility =  "hidden";
    divElement.style.visibility = "visible";
    document.getElementById("middle-mini-item-heading").style.fontSize = "50px";
  })
}

function backDisplay(){
  document.getElementById("main-heading").style.display = "block";
    document.getElementById("card-header-content").style.display = "none";
    document.getElementById("middle-mini-item").style.display = "none";
    document.getElementById("list-container").style.visibility =  "visible";
    document.getElementById("add-task-name").innerText = "Add Item";
    
  
}




function miniItemObj(){
  let inputValue = document.getElementById("minilist").value;
  let miniObj = {
    id: Date.now(),
    miniItemName: inputValue,
  }

  miniObjArray.push(miniObj);
  addItem()


}

function addItem(){
  
  
  let miniItemDiv = document.createElement("div");
  let itemSpan = document.createElement("span");
  let cancelItemSpan = document.createElement("span");
  let v = document.createTextNode(miniObjArray[miniObjArray.length-1].miniItemName);
  let i = document.createTextNode("Mark Done");


  miniItemDiv.setAttribute("class", "mini-item-div");
  itemSpan.setAttribute("id", "mini-item");
  cancelItemSpan.setAttribute("id", "cancel-item");


  miniItemDiv.appendChild(itemSpan);
  miniItemDiv.appendChild(cancelItemSpan);
  itemSpan.appendChild(v);
  cancelItemSpan.appendChild(i);
  document.getElementById("middle-div-Id").appendChild(miniItemDiv);
 




  cancelItemSpan.addEventListener('click', ()=>{
    cancelItemSpan.remove();
    itemSpan .style.textDecoration = "line-through";
    itemSpan .style.color = "red";

  })




  document.getElementById("minitask-input-container").style.visibility =  "hidden";
    
  document.getElementById("main-container").style.filter = "blur(0px)";

}



