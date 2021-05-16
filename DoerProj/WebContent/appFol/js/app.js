// CODE EXPLAINED channel

// Select the Elements
var meni = 0;
const clear = document.querySelector(".clear");
const menu = document.querySelector(".menu");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get item from localstorage
let data = localStorage.getItem("TODO");

// check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
}else{
    // if data isn't empty
    LIST = [];
    id = 0;
}

// load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

// show menu
var menuOptions = document.getElementById('menuoptions');
var mspanD = document.querySelector('.mspanD');
var mspanA = document.querySelector('.mspanA');
var mspanO = document.querySelector('.mspanO');
menu.addEventListener("click", function(){
    meni++;
            if(meni %2 == 0){
                menu.style.backgroundImage= 'url("./img/menu_black.png")';
                menuOptions.style.opacity= '0%';
                menu.style.transform= 'rotate(0)';
                menuOptions.style.left= '0%';
                mspanD.style.backgroundColor= 'rgb(0, 68, 253)';
                mspanA.style.backgroundColor= 'rgb(0, 68, 253)';
                mspanO.style.backgroundColor= 'rgb(0, 68, 253)';

                mspanD.style.margin= '0px';
                mspanA.style.margin= '0px';
                mspanO.style.margin= '0px';

            }else{
                menu.style.backgroundImage= "url('./img/menu_white.png')";
                menuOptions.style.opacity= '100%';
                menu.style.transform= 'rotate(-90deg)';
                menuOptions.style.left= '20%';
                mspanD.style.backgroundColor= '#ff59cc';
                mspanA.style.backgroundColor= '#4a92ff';
                mspanO.style.backgroundColor= '#ff8100';

                mspanD.style.margin= '4px';
                mspanA.style.margin= '4px';
                mspanO.style.margin= '4px';

                mspanD.addEventListener("mouseover" , function(){
                    mspanD.style.backgroundColor= 'black';
                });
                mspanD.addEventListener("mouseleave" , function(){
                    mspanD.style.backgroundColor= '#ff59cc';
                });

                mspanD.addEventListener("click" , function(){
                    window.location.href='../Dashboard.jsp';
                });

                mspanA.addEventListener("mouseover" , function(){
                    mspanA.style.backgroundColor= 'black';
                });
                mspanA.addEventListener("mouseleave" , function(){
                    mspanA.style.backgroundColor= '#4a92ff';
                });

                mspanA.addEventListener("click" , function(){
                    window.location.href='http://obekaspro.eb2a.com';
                });

                mspanO.addEventListener("mouseover" , function(){
                    mspanO.style.backgroundColor= 'black';
                });
                mspanO.addEventListener("mouseleave" , function(){
                    mspanO.style.backgroundColor= '#ff8100';
                });

                mspanO.addEventListener("click" , function(){
                    window.location.href='../index.jsp';
                });
            }
});

// Show todays date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-kolkata", options);

// add to do function

function addToDo(toDo, id, done, trash){
    
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            
            // add item to localstorage ( this code must be added where the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        input.value = "";
    }
});


    



// complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}

// target the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    
    // add item to localstorage ( this code must be added where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});


















