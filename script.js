// create a close button and append it on each li tag
window.onload=()=>{
     // to add element
     document.getElementById("addToDoItem").addEventListener('click',createTodoElement)
    
    let myToDoList= document.getElementsByTagName('li');
    Array.from(myToDoList).forEach((element) => {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("x");
        // let checkBox= document.createElement("input");
        // checkBox.setAttribute('type','checkbox');
        // checkBox.className="checked";
        // ulListItems.appendChild(checkBox);
        span.className = "delete";
        span.appendChild(txt);
        element.appendChild(span);
    });
    deleteItem();
    // to add checkbox in all the items
        document.querySelector('ul').addEventListener('click',checkTask);
}
  // to create to-do element
  let createTodoElement= ()=>{
    let newItem= document.createElement('li');
    newItem.innerText= document.getElementById("inputByUser").value;
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("x");
    span.className = "delete";
    
    if (newItem.innerText === '') {
        alert("You must write something!");
        } else {
           let liItem= document.getElementById("listedItems")
           liItem.appendChild(newItem);
            span.appendChild(txt);
            newItem.appendChild(span);
        }
  }
  // to delete todo item
  let deleteItem =()=>{
            let deleteTodoItem= document.getElementsByClassName("delete");
            Array.from(deleteTodoItem).forEach((e)=>{
            e.addEventListener('click', (event)=>{
                let ulListItems= document.getElementById("listedItems");
                ulListItems.removeChild(event.target.parentElement);
        })}) 
  }
// to check completed task
  let checkTask= (ev)=> {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
    };
    let myToDoList= document.getElementsByTagName('li').value;
window.localStorage.setItem('todoitem', 'myToDoList[]');