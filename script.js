// create a close button and append it on each li tag
window.onload=()=>{
     // to add element
     document.getElementById("addToDoItem").addEventListener('click',()=>{
        let newItem= document.createElement('li');
        newItem.innerText= document.getElementById("inputByUser").value;
      
        if (newItem.innerText === '') {
            alert("You must write something!");
            } else {
                document.getElementById("listedItems").appendChild(newItem);
            }
    })
    let myToDoList= document.getElementsByTagName('li');
    Array.from(myToDoList).forEach((element) => {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("x");
        span.className = "delete";
        span.appendChild(txt);
        element.appendChild(span);
    });
   // to delete todo item
    let deleteTodoItem= document.getElementsByClassName("delete");
        Array.from(deleteTodoItem).forEach((e)=>{
        e.addEventListener('click', (event)=>{
            let ulListItems= document.getElementById("listedItems");
            ulListItems.removeChild(event.target.parentElement);
    })}) 
    // to add checkbox in all the items
    }
  

// document.querySelector("#addToDoItem").addEventListener('click',()=>{

// })
