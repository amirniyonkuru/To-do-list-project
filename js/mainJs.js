/***  function to add new element (in array) and it checks if chars and items dont exceed the max numbers given ***/
var myItems =[];
var output = document.getElementById("checkList");
document.getElementById("addBtn").addEventListener("click", 
function addItem(){
    var newItem = document.getElementById("inputtext1").value;
    if(newItem.length < 28){
        if(myItems.length < 10){
            myItems.push(newItem);
            output.innerHTML += "<div id='items'>"+
                "<span id='itemList'>"+ myItems[myItems.length-1] +"</span>"+
                "<span class='mySpan'><button type='submit' id='itemListBtn' onclick='removeItem()'>X</button></span>"+
            "</div>";
              
        }else{
            messageItem("You can't exceed the maximum Items!!!(10)");
        }
    }else{
        messageItem("You can't exceed the maximum characters!!!(28)");
    }
    
   
})

/*** This function is for removing the item according to the one you select, it checks the index got from going down the tree of parents and children ***/ 
function removeItem (){
        var itemIndex = window.event.target.parentElement.parentElement.children[0].innerHTML;
        var itemRemove = myItems.indexOf(itemIndex);
        // console.log(itemRemove);
        myItems.splice(itemRemove, 1);
        window.event.target.parentElement.parentElement.style.display = "none";
    
   
}

/*** This is messages function, you can use it and pass any msg u like in the whole script, you can use it anywhere and only change the msg ***/
function messageItem(msg){
    alert(msg);
}
