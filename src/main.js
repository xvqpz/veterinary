const navLinks = document.querySelector('.nav-links')

function onToggleMenu(e){   
    e.name = e.name === 'menu' ? 'close' : 'menu';
    
   let divElement = document.querySelector('.nav-links');

    if(divElement.style.top=== '-100%'){
        divElement.style.top = '7.7%';
    }
    else{
        divElement.style.top = '-100%';
    }      
};



document.getElementById('searchButton').addEventListener('click', function(){
    const selectCity = document.getElementById('selectCity').value;
    const selectPet = document.getElementById('selectPet').value;
    const selectProcedure = document.getElementById('selectProcedure').value;

    console.log("Selected values: ", selectCity, selectPet, selectProcedure);
});
 
