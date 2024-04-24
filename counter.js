let count=0;
const decrease = document.getElementById("d");
const increase = document.getElementById("i");
const reset = document.getElementById("r");
const countlabel = document.getElementById("c1");

decrease.onclick = function() {
    count--;
    countlabel.textContent=count;
}
reset.onclick = function(){
    count = 0;
    countlabel.textContent=count;
}
increase.onclick = function(){
    count++;
    countlabel.textContent=count;

}