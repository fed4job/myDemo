
var input = document.getElementById("input"); 
var res = document.getElementById("res");
var del = document.getElementById("delete");
var work = document.getElementsByClassName('work');
var delAll = document.getElementById("deleteAll");
var record = document.getElementById('record');


if(localStorage.getItem('todo')==undefined){
var toDoList = [];}
else{
 toDoList = JSON.parse(localStorage.getItem('todo'));
   for(var key in toDoList){
       if (toDoList[key].checked ==false){
    res.insertAdjacentHTML("beforeend","<div class = 'work' onchange = md()> <input type='checkbox'>"+toDoList[key].data+ "</div>");
  work[key].style.background = "green";
       }
       else{
  res.insertAdjacentHTML("beforeend","<div class = 'work' onchange = md()> <input type='checkbox' checked>"+toDoList[key].data+ "</div>");
  work[key].style.background = "orange";
          
}
}
}
    
    
    
record.onclick = function() {
toDoList.push({data: input.value, checked: false});
for(var i = toDoList.length-1; i<toDoList.length; i++){
res.insertAdjacentHTML("beforeend","<div class = 'work' onchange = change()> <input type='checkbox'>"+toDoList[toDoList.length-1].data+ "</div>");
    work[i].style.background = "green";
  console.log(work);
    addToLocalStorage();
   }};
   
   
del.onclick = function removeDiv() {
work[work.length-1].remove();
        toDoList.splice(work.length,1);
       console.log(toDoList);
       addToLocalStorage();
    
   }

  
function change () { 
 
for(var j=0; j< work.length;j++){
var elements = document.querySelectorAll('div.work');//пришлось погуглиьб, ибо текущими знаниями не смог получить индекс элемента, по которому кликнул.
elements[j].index = j;
   
elements[j].onchange  = function () {

toDoList[this.index].checked = false? toDoList[this.index].checked==true:toDoList[this.index].checked==false;

toDoList[this.index].checked? work[this.index].style.background = "orange":work[this.index].style.background = "green";    
addToLocalStorage();
}
}
}

function addToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(toDoList));
     }


delAll.onclick = function() {
 toDoList = [];   
   addToLocalStorage();
    location.href=location.href;
}
