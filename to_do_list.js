let inputBox = document.getElementById("input-box")
let listCantainer = document.getElementById("list-container")

function addTask (params) {
    if(inputBox.value===""){
        alert("kuch nhi dala hain")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCantainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d1";
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData()
}
listCantainer.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.tagName ==="LI"){

        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData() {
    localStorage.setItem("data",listCantainer.innerHTML);
}
function showTask() {
    listCantainer.innerHTML = localStorage.getItem("data")
}
showTask()