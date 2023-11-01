console.log('***TODO LIST***')

let add=document.getElementById('add')
add.addEventListener('click',createtag)
let inputvalue= document.getElementById('inputvalue')
function createtag(){
    if(inputvalue.value ===""){
        alert("You must write something!");
        // let putAlert=document.createElement('p')
        // putAlert.innerText='* you must write something!!'
        // putAlert.style.color='red';
        // putAlert.style.fontSize='22px'
        // document.getElementById('first-div').append(putAlert)
    }
    else{
    let newTag = document.createElement('li')
    newTag.setAttribute('id','listItems')
    newTag.setAttribute("onclick","strikeThrough(this)")
    newTag.innerHTML=`<img src=\'./image/802338.png\'><span>${inputvalue.value}</span><button onclick='removeElement(this)'> X</button>`
    document.getElementById('list').append(newTag)
     inputvalue.value = "";
}
}
function removeElement(e){
    e.parentElement.remove()
}
function strikeThrough(e){
   
  
    if(e.style.textDecoration='line-Through'){
    // e.style.setProperty('text-decoration', 'line-through');
    // e.style.setProperty("background-color",'rgb(157 127 156)')
    e.style.TextDecoration="none"
    }
    else{
        e.style.TextDecoration='line-Through'
    }
}