var form=document.getElementById('addform');
var itemList=document.getElementById('items');

//form submit event

form.addEventListener('submit' , addItem);

//delete event

itemList.addEventListener('click' , removeItem);

//add item

 function addItem(e){
     e.preventDefault();


 //get  input  value

  var  newitem=document.getElementById('item').value;

  // create neww li element 
   var li = document.createElement('li');


   //add class
    
    li.className='list-group-item';
    console.log(li);

    //add text node input  value
     
     li.appendChild(document.createTextNode(newitem));

     // create del button element

     var deleteBtn= document.createElement('button');

     //add classesto del button

     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

     //append text node

     deleteBtn.appendChild(document.createTextNode('X'));

     //append button to li 

     li.appendChild(deleteBtn);
     
     //appned li to list 
     itemList.appendChild(li);


 }

 function removeItem(e){
 if(e.target.classList.contains('delete'))
 {
    if(confirm(' are you sure!')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }

 }

 }
