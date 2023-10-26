let btn = document.querySelector("button");
  

let chng = function() {
    let r = Math.floor(Math.random()*255)+1;
    let g = Math.floor(Math.random()*255)+1;
    let b = Math.floor(Math.random()*255)+1;
    
    document.querySelector("h1").innerText = `rgb(${r}, ${g},${b})`;
    document.querySelector(".box").style.backgroundColor = `rgb(${r}, ${g},${b})`;

};
btn.addEventListener("click", chng);
