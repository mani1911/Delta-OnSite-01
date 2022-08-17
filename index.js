const layer5 = document.querySelector('.layer5');
const layer4 = document.querySelector('.layer4');
const layer3 = document.querySelector('.layer3');
const layer2 = document.querySelector('.layer2');
const layer1 = document.querySelector('.layer1');
const incBtn = document.querySelector('.inc');
const decBtn = document.querySelector('.dec');
const display = document.querySelector('.layers');
const selColor = document.querySelector('.selectColor');
const draggable = document.querySelector('.draggable');
const main = document.querySelector('.main');

layer5.style.display = "none";
layer4.style.display = "none";
layer3.style.display = "none";
layer2.style.display = "none";
layer1.style.display = "none";

let val = 0;
display.innerHTML = val;

incBtn.addEventListener('click',()=>{
    if(val >=5){
        alert('Maximum Limit Reached');
        return;
    }
    if(val<5){
        val++;
        display.innerHTML = val;
        console.log(val)
    }
    switch(val){
        case 1:
            layer5.style.display = "block";
            layer5.style.backgroundColor = selColor.value;
            break;
        case 2:
            layer4.style.display = "block";
            layer4.style.backgroundColor = selColor.value;
            break;
        case 3:
            layer3.style.display = "block";
            layer3.style.backgroundColor = selColor.value;
            break;
        case 4:
            layer2.style.display = "block";
            layer2.style.backgroundColor = selColor.value;
            break;
        case 5:
            layer1.style.display = "block";
            layer1.style.backgroundColor = selColor.value;
            break;
        default:
            break;
            
    }

})

decBtn.addEventListener('click', ()=>{
    if(val <=0){
        alert('No Layers Left');
        return;
    }
    if(val>0){
        val--;
        display.innerHTML = val;
        console.log(val)
    }
    switch(val){
        case 0:
            layer5.style.display = "none";
            break;
        case 1:
            layer4.style.display = "none";
            break;
        case 2:
            layer3.style.display = "none";
            break;
        case 3:
            layer2.style.display = "none";
            break;
        case 4:
            layer1.style.display = "none";
            break;
        default:
            break;
            
    }
})


const dragElement = (element, dragzone) =>{
    let pos1 = 0, pos2 =0, pos3=0, pos4=0;
    const dragMouseUp = ()=>{
        document.onmouseup = null;
        document.onmousemove = null;
        element.classList.remove("drag");

    }

    const dragMouseMove = (event)=>{
        event.preventDefault();
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;

        element.style.top = `${element.offsetTop - pos2}px`;
        element.style.left = `${element.offsetLeft- pos1}px`;

    }

    const dragMouseDown = (event)=>{
        event.preventDefault();
        pos3 = event.clientX;
        pos4 = event.clientY;

        element.classList.add("drag");

        document.onmouseup = dragMouseUp;
        document.onmousemove = dragMouseMove;


    }

    dragzone.onmousedown = dragMouseDown;

};

dragElement(draggable, main)




