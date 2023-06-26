// A Set used to store card objects.

var arr_of_obj = new Set();

//A variable to store the current card ID.

var value_id;

// A boolean flag to track if a card's title is displayed.
var title_flag = false;

//A Map used to store subtasks for each card.
var subtask = new Map;

function modal(){
    document.getElementById("modal-div").style.display = "block";
};
function addCard(){
    var card_title = document.getElementById("modal-input-box").value;
    createObj(card_title);
    closeModal();
}
function closeModal(){
    document.getElementById("modal-div").style.display = "none";
}
function createObj(title){
    document.getElementById('empty-list').style.display = 'none'
    var card_obj = {
        title: title,
        id: Date.now(),
        subtask
    };
    arr_of_obj.add(card_obj);
    createCard(card_obj.id);
};

// Add list for adding popup of cards .......ADD button 2 .....
function addList(){
     var cloned_list_item = document.querySelector(".this-list-element").cloneNode(true);
    var card_item = document.getElementById('modal-input-box-card').value;
    console.log(value_id);
    cloned_list_item.innerText =  card_item; 
    cloned_list_item.style.display = "block";
    cloned_list_item.setAttribute('id',`${Date.now()}`);
    // // cloned_list_item.setAttribute('value',`${Date.now()}`);
    cloned_list_item.setAttribute('style',"margin-left: 10px;");
    var done_button = document.createElement('button');
    done_button.setAttribute('id',`check-done-${Date.now()}`);
    done_button.setAttribute('class','mark-as-done-class');
    done_button.setAttribute('value',`${Date.now()}`);
    done_button.setAttribute('onclick','completedTask(this.value)');
    done_button.innerText = ' Mark Done';
    done_button.setAttribute('style','font-size:15 px;cursor:pointer; height:18px; border-radius:10px;')
    cloned_list_item.appendChild(done_button);
    cloned_list_item.setAttribute('onClick',"completedTask(this.value)");
     for(obj of arr_of_obj){
        for(prop in obj){
            if(obj.id == value_id){
                obj.subtask.set(`${card_item}`,`${Date.now()}`);
                break;
            }
        }
    }
    document.getElementById(`${value_id}`).getElementsByClassName('add-list-after-this')[0].appendChild(cloned_list_item).appendChild(done_button);
    closeCardModal();
}
function closeCardModal(){
    document.getElementById('modal-div-card').style.display = "none";
}
function addSubtask(val) {
    document.getElementById("modal-div-card").style.display = "block";
    value_id = val;
};
function deleteCard(val){
    var delete_div = document.getElementById(`${val}`);
    for(obj of arr_of_obj){
        for(prop in obj){
        if (obj.id==val)
        arr_of_obj.delete(obj);
        break;
        }
    }
    delete_div.parentNode.removeChild(delete_div);
    if(arr_of_obj.size==0){
        document.getElementById('empty-list').style.display = 'block';
    }
    
};

function createCard(){
    var first_card = document.querySelector('.card').cloneNode(true);
    display(first_card);
};
function completedTask(value){
    document.getElementById(`${value}`).style.textDecoration = 'line-through';
    document.getElementById(`${value}`).style.color = '#112D4E';
    document.getElementById(`check-done-${value}`).remove();
}
function display(card){
    document.getElementById('empty-list').style.display = 'none'
    arr_of_obj.forEach(element => {
        card.id = element.id;
        card.querySelector(".card-head").innerHTML = element.title;
        card.querySelector(".card-head").setAttribute('value',`${element.id}`);
        card.setAttribute("value",`${element.id}`);
        card.setAttribute("display","block");
        card.setAttribute("min-height","300px");
        card.querySelector(".delete-button-in-card").setAttribute("value",`${element.id}`);
        card.querySelector(".delete-button-in-card").setAttribute("onClick","deleteCard(this.value)");
        card.querySelector(".add-button-in-card").setAttribute("value",`${element.id}`);
        card.querySelector(".add-button-in-card").setAttribute("onClick","addSubtask(this.value)");    
    });
    if(title_flag)
    card.style.display = 'none';
    else
    card.style.display = "block";
    document.getElementById("outer-container").appendChild(card);
}
function headerFunc(val){
    var card_header;
    for(let ele of arr_of_obj){
        for(let id in ele){
            if(ele[id]==val){
                card_header = ele.title;
                break;
            };
        };
    };
    document.querySelector("#app-name").style.display = 'none';
    document.querySelector("#add-button-text").style.display = 'none';
    for(let ele of arr_of_obj){
            if(ele.id==val){
                document.getElementById(`${ele.id}`).style.display = 'block';
            }
            else {
                document.getElementById(`${ele.id}`).style.display = 'none';
            }
    };
    document.getElementById('card-dynamic-head').innerText = `${card_header}`;
    document.getElementById('card-dynamic-head').style.display = 'flex'
    document.getElementById('back-button').style.display = 'block'
    title_flag = true;
};
function displayAll(){
    title_flag = false;
    document.querySelector("#app-name").style.display = 'block';
    document.querySelector("#add-button-text").style.display = 'inline-block';
    document.getElementById('back-button').style.display = 'none';
    for(let ele of arr_of_obj){
            document.getElementById(`${ele.id}`).style.display = 'block';
    };
    document.getElementById('card-dynamic-head').innerText = ``;
    document.getElementById('card-dynamic-head').style.display = 'none';
}




















// function sum(a,b){

// return a+b ;
// // let promises =new Promis((resolve , reject)=>{
// if(sum=number){
//     resolve();
// }
// else{
//     reject();
// }

// })
// }
// let ans= sum(20,30).then((ans)=>{console.log(ans)})
// .catch((ans2)=>{console.log(ans2)})
// console.log(ans)
