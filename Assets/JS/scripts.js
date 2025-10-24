// let nom = document.getElementById("nom");

let nomValue = "Mohamed Bakhoum";

let count = 0;

if(count <= nomValue.length){
     setInterval(() => {
        nom.textContent += nomValue[count];
        if(count ===  nomValue.length){
            nom.textContent = "M";
            count = 0;
        }
        count++
    }, 500)
}


