window.onload=()=>{
  
    let todoElementbyValue= (value)=>{
      todoListToBeSaved.push(value)
      let newItem= document.createElement('li');
      newItem.innerText= value;
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("x");
      span.className = "delete";
      
      if (newItem.innerText === '') {
          alert("You must write something!");
          } else {
             let liItem= document.getElementById("listedItems")
             liItem.appendChild(newItem);
              
              newItem.appendChild(span);
              span.appendChild(txt);
          }
    }
  
  
       // to add element
       const todoListToBeSaved = [];
  
       const mylistitems = localStorage.getItem("mylistitems");
  
       let arrayfromLocalStorage = mylistitems && mylistitems.split(",");
       if(arrayfromLocalStorage && arrayfromLocalStorage.length>0){
        arrayfromLocalStorage.forEach((arrayElement)=>{
          todoElementbyValue(arrayElement);
        })
       }
  
       const createTodoElement = ()=>{
        const inputValue = document.getElementById("inputByUser").value;
        todoElementbyValue(inputValue);
        localStorage.setItem("mylistitems",todoListToBeSaved);
       }
      let myToDoList= document.getElementsByTagName('li');
      Array.from(myToDoList).forEach((element) => {
          let span = document.createElement("SPAN");
          let txt = document.createTextNode("x");
          span.className = "delete";
          span.appendChild(txt);
          element.appendChild(span);
      });
      
  
    // to create to-do element
    
  
      
    const ulClicked = (event)=>{
      const lisOfClassForClickedElement = Array.from(event.target.classList);
      
      if(lisOfClassForClickedElement.includes("delete")){
        event.currentTarget.removeChild(event.target.parentElement);
        arrayfromLocalStorage.pop(event.target.parentElement.innerText);
        
        localStorage.setItem("mylistitems",arrayfromLocalStorage);
      }else{
          event.target.classList.toggle('checked')
      }
    }
    document.getElementById("listedItems").addEventListener("click",ulClicked);
    document.getElementById("addToDoItem").addEventListener('click',createTodoElement);
  } 
