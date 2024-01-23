let successMsg='<i class="fa-solid fa-circle-check"></i> Successfully Completed.';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error Founded ? ';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid inpur, please check again !';

function addTost(msg){
    let tost = document.createElement('div');
    tost.classList.add("tost");
    tost.innerHTML = msg;
    let tostBox = document.getElementById("tostBox");
    tostBox.appendChild(tost);

    if(msg.includes('Error'))
    tost.classList.add('error');
    else if(msg.includes('Invalid'))
    tost.classList.add('invalid');

    setTimeout(()=>{
        tost.remove();
    },5000);
}