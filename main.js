const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", AddElemnet);

function AddElemnet()
{
    const deleteImgPath = "./icons/delete.svg";
    const checkImgPath = "./icons/check.svg";
    const editImgPath = "./icons/edit.svg";

    let item = document.createElement("div");
    let buttonsBox = document.createElement("div");
    item.className = "item";
    buttonsBox.className="button-box";
    
    //item Content
    let content = document.createElement("p");
    content.className = "item-content";
    content.textContent = todoInput.value;
    item.appendChild(content);

    //check box
    let checkBox = document.createElement("input");

    checkBox.type = "checkbox";
    checkBox.className = "item-checkbox element";

    buttonsBox.appendChild(checkBox);

    checkBox.addEventListener("change", function()
    {
        item.className += " done";
        editBut.remove();
        checkBox.remove();
    });

    if(checkBox.checked == true)
    {
        
    }
        //cand e checked sa mi dezactiveze butoanele, sa fie taiat si sa fie pus la finalul listei

    //edit button
    let editBut = document.createElement("button");
    let editButImg = document.createElement("img");

    editBut.type = "button";
    editBut.className = "item-mod-but element";
    editButImg.src = editImgPath;
    editBut.appendChild(editButImg); 
    
    editBut.addEventListener("click", function(){
        let input = document.createElement("input");
        let saveBut = document.createElement("button");
        let saveButImg = document.createElement("img");
        
        input.type = "text";
        input.value = content.textContent;
        saveBut.type = "button";
        saveBut.className = "button-save";
        saveButImg.src = checkImgPath;
        saveBut.appendChild(saveButImg);
        
        //remove child elem
        while(item.firstChild)
            item.removeChild(item.lastChild);
        
        item.appendChild(input);
        item.appendChild(saveBut);
        input.focus();

        //save but
        saveBut.addEventListener("click", function(){
            //delete elem
            while(item.firstChild)
                item.removeChild(item.lastChild);
            
            content.textContent = input.value;
            buttonsBox.appendChild(checkBox);
            buttonsBox.appendChild(editBut);
            buttonsBox.appendChild(delBut);
            item.appendChild(content);
            item.appendChild(buttonsBox); 
        });
    });
    buttonsBox.appendChild(editBut);

    //delete button
    let delBut = document.createElement("button");
    let delButImg = document.createElement("img");

    delButImg.src = deleteImgPath;
    delBut.appendChild(delButImg);
    delBut.type = "button";
    delBut.className = "item-del-but element";

    delBut.addEventListener("click", function(){
        item.remove();
    });

    buttonsBox.appendChild(delBut);
    item.appendChild(buttonsBox);
    todoList.appendChild(item);
    
}



