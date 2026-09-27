// select input tag using id
let inputbox=document.getElementById("inputbox")
let result=document.getElementById("result")
let tasks=JSON.parse(localStorage.getItem("task"
))  || [];
inputbox.addEventListener("keydown",
    function(event){
        if(event.key ==="Enter"){
            change();
        }
});
function change()
{
    if(inputbox.value===""){
    alert("please enter a task");
    return;
}
let li=document.createElement("li")
li.textContent=inputbox.value;
li.onclick=function(){
    li.classList.toggle("completed")
}
li.textContent=inputbox.value;
tasks.push(inputbox.value);
localStorage.setItem("task",JSON.stringify(tasks));
result.append(li);

let deleteBtn=document.createElement("button")
deleteBtn.textContent="Delete";
li.append(deleteBtn);

deleteBtn.onclick=function () {
    li.remove();
}
inputbox.value="";
}
let savedtask=JSON.parse(localStorage.getItem("task"));
console.log(savedtask);

if(savedtask){
    savedtask.forEach(function(item) {
    let li=document.createElement("li");
    li.textContent=item;
    let deleteBtn=document.createElement("button")
deleteBtn.textContent="Delete";
li.append(deleteBtn);

deleteBtn.onclick=function () {
    
    let index=tasks.indexOf(li.textContent);
    tasks.splice(index, 1);
    localStorage.setItem("task",JSON.stringify(tasks));
    li.remove();
}
 result.append(li);
    });
}