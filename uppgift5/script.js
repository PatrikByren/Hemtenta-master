const result = document.querySelector("#resultat")

function random(){
let randomTenFirst = Math.floor(Math.random() * 10 +1);
console.log(randomTenFirst)
let randomTenLast = Math.floor(Math.random() * 10 +1);
console.log(randomTenLast)

const ulHeadFirst = document.createElement("ol");
const ulHeadLast = document.createElement("ol");
for (i = 0; i < randomTenFirst; i++)
{
    let newItem = document.createElement("li")
    let randomHundra = Math.round(Math.random() * 100);
    console.log(randomHundra)
    newItem.innerText = randomHundra;
    ulHeadFirst.appendChild(newItem)
    }
    result.appendChild(ulHeadFirst);
    for (i = 0; i < randomTenLast; i++)
    {
        let newItem = document.createElement("li")
        let randomHundra = Math.round(Math.random() * 100);
        console.log(randomHundra)
        newItem.innerText = randomHundra;
        ulHeadLast.appendChild(newItem)
        }
        result.appendChild(ulHeadLast);
}




/*
UPPGIFT 5
    1. Skapa en extern scriptfil och skapa en funktion som kallas av en knapptryckning av knappen nedan
    2. Låt funktionen generera en lista som innehåller ett slumpat antal element mellan 1 och 10. 
       Värdet på dessa element ska också vara slumpade fast mellan 0-100. 
       Exempel på 2 listor som kan bli genererade är: [0, 77, 26] och [22, 1, 78, 100, 0, 8, 10]
    3. Skriv ut dessa i en numrerad lista under diven med id:t "resultat". Använd taggarna <ol> och <li> för detta.
*/