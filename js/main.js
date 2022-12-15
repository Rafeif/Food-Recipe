let formSearh=document.querySelector("form");
let srchRes=document.getElementById("searh-result")
let html=document.getElementById('html')
let recipeName=document.getElementById('recipe-name')
let detailes=document.getElementById('detailes')
let cardBtn=document.getElementById('cardBtn')
let clsBtn=document.getElementById('clsBtn')
let progressLoader=document.getElementById('progress-loader')
let inputSearch='';
const foodID='5b5be5b8'
const foodKey='006173b3e30a916446f68c7317e171d6'
let c=document.getElementById('c')


formSearh.addEventListener('submit',(e,index)=>{
    progressLoader.style.display='none'
e.preventDefault();
inputSearch=e.target.querySelector("input").value;
foodApi();
progressLoader.style.display='block'
});
async function foodApi(){
const foodUrl=`https://api.edamam.com/search?q=${inputSearch}&app_id=${foodID}&app_key=${foodKey}&to=20`
const response=await fetch(foodUrl);
const data=await response.json();
generateHtml(data.hits);
//  myFunction()
}

let res;
function generateHtml(results){
    
    let genarete=' '
    h+=`<button id="clsBtn" class="sticky-top" onclick="close(
        c.classList.add('d-none')
    
     )">X</button>
     
    `
    
    results.map((result) =>{
    recipeName.value= ' '
        genarete+=`
        <div class="col-md-4 col-sm-6">
        <div class="card">
        <img src=${result.recipe.image} id='foodImg'alt="">
        <div class="card-details">
        <p class="text-title">${result.recipe.label}</p>
        <button class="card-button " onclick='press()'id="cardBtn">More info</button>
        </div>
        </div>
        </div>`
        h+=
        `
        <ul>
        <li><p>${result.recipe.ingredientLines}</p></li>
        </ul>
      `
      progressLoader.style.display='none'})
html.innerHTML=genarete;

document.getElementById('cardBtn').disabled = false;

}

let h='';

function press(){
    document.getElementById('cardBtn').disabled = false
    c.classList.remove('d-none')
    c.classList.add('d-inline-block')
    c.classList.add('co')
    
c.innerHTML+=h;
document.getElementById('cardBtn').disabled = false;
}
// function close(){
//     document.getElementById('clsBtn').disabled = false;
   
// }