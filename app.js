// let number = document.querySelector(".like");
// let likes = 4;

// function addLike() {
//     number.innerText = ` ${likes} likes`
//     likes ++;
// }

let btn = document.getElementById("btn")
let allDiv = btn.closest("div");
let likes = allDiv.querySelector(".like");
let numlikes = 4;

function addLike() {
    likes.innerText =  ` ${numlikes} likes`;
    numlikes ++;
}



btn.addEventListener("click", addLike)


