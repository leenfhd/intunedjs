//hello this is a commentsss

document.getElementById("player1-id").append(" leen");
const swapper=document.getElementById("player1-id").textContent;
console.log(swapper);
document.getElementById("player1-id").textContent=document.getElementById("player2-id").textContent;
document.getElementById("player2-id").textContent=swapper;
console.log("ALOHA!".toLowerCase());



// fetching api
async function fetchApi(){
    let body;
await fetch("https://dog.ceo/api/breed/hound/list").then((result)=>{body= result.json();});

console.log(body);
}
fetchApi();