const color=()=>{
    const Number=Math.floor(Math.random() * 16777215);
    const code="#" + Number.toString(16);
    document.body.style.backgroundColor=code;
    document.getElementById("h").innerText=code;
}
document.getElementById("btn").addEventListener("click", color)
color()
