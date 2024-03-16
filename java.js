// document.getElementById("count_el").innerText=5
let saveEl=document.getElementById("save-el")
let resetEl=document.getElementById("count-el")
let count=0;
let countEl=document.getElementById("count-el")
function increment(){
    count=count+1
   countEl.innerText=count
}
function save(){
    let countStr= count + " - "
    saveEl.textContent +=countStr
    
    console.log(count)
}
function reset(){
    count=0
    resetEl.textContent=count

}
