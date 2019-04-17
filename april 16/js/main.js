window.onload = function () {

    //  let div = document.querySelector('.context-menu');
    let forNewDivs = document.querySelector('.for-new-divs')
  
    document.oncontextmenu = function(e){
        e.preventDefault()
         div = document.querySelector('.context-menu');
         let x = event.clientX;
         let y = event.clientY;
        document.querySelector(".context-menu").classList.remove('d-none')
        div.style.left = x + 'px';
        div.style.top = y + 'px';
    }

    let li = document.querySelector('.context-menu  .libig')
    li.onclick= function(){
        document.querySelector(".folder").classList.remove('d-none');
        document.querySelector(".context-menu").classList.add('d-none')
    }

    
    let buttons = document.querySelector('.buttons')
    let inputFolderName = document.querySelector('input');
   
   
    buttons.firstElementChild.onclick = function (){

        let newFolder = document.createElement('div');
        newFolder.style.width = '100px';
        newFolder.style.height = '40px';
        newFolder.style.backgroundColor = 'red';
        newFolder.style.marginLeft = '8px';
        newFolder.style.display = 'flex';
        newFolder.innerText = inputFolderName.value.trim();
        forNewDivs.appendChild(newFolder); 
        document.querySelector(".folder").classList.add('d-none');
        inputFolderName.value = "";
    }

    document.querySelector(".folder").onkeydown = function(e){
        if( e.keyCode === 13){
            let newFolder = document.createElement('div');
        newFolder.style.width = '100px';
        newFolder.style.height = '40px';
        newFolder.style.backgroundColor = 'red';
        newFolder.style.marginLeft = '8px';
        newFolder.style.display = 'flex';
        newFolder.innerText = inputFolderName.value.trim();
        forNewDivs.appendChild(newFolder); 
        document.querySelector(".folder").classList.add('d-none');
        inputFolderName.value = "";
        }
    }


    buttons.lastElementChild.onclick = function (){
        document.querySelector(".folder").classList.add('d-none');
        inputFolderName.value = "";
    }


    document.onclick = function(e){
        e.preventDefault()
     document.querySelector(".context-menu").classList.add('d-none')
    }
}