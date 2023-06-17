let popup =document.querySelector('.child')

//Button show popup

function showpopup(){

    popup.classList.add('show')

}
//Take value from input 
let take_value_from_input=document.querySelector('#input');
let inbild =document.querySelector('.test')


function get_value(){

    let parent_box = document.createElement('div')
    
    let first1 =document.createElement('h1')
    
    let child1 = document.createElement('p')
    
    // let child2 = document.createElement('p')

    let button1=document.createElement('button')
    let button2=document.createElement('button')

    inbild.appendChild(parent_box);
    parent_box.appendChild(first1);
    parent_box.appendChild(child1);
    // parent_box.appendChild(child2);
    parent_box.appendChild(button1);
    parent_box.appendChild(button2);
    
    first1.innerHTML=take_value_from_input.value ;

    button1.classList.add('button_position');
    button2.classList.add('button_position');
    button1.innerHTML='+'
    button2.innerHTML='-'
    
    parent_box.classList.add('show_div')

    let num=0;

   if(num){ popup.classList.add('none')
   num++;
}
else{
    popup.classList.remove('show')
    num--;
}


// button1.addEventListener('click',()=>{
//     popup.classList.add('show')
//     child1.innerHTML=take_value_from_input.value ;
// })
  
}


button1.addEventListener('click',()=>{
    popup2.classList.add('show')
    child1.innerHTML=take_value_from_input.value ;
})


































