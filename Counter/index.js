let counter=0;

document.querySelector(".increase").addEventListener('click', function (){
  counter++
  document.querySelector(".number").innerHTML=counter;
  color();
})
document.querySelector(".reset").addEventListener('click', function (){
  counter=0
  document.querySelector(".number").innerHTML=counter;
  color();
})
document.querySelector(".decrease").addEventListener('click', function (){
  counter--
  document.querySelector(".number").innerHTML=counter;
  color();
})

function color(){
  if(counter ==0 ){
    document.querySelector(".number").style.color="yellow"
  }else if (counter >0){
     document.querySelector(".number").style.color="hsla(127, 100%, 50%, 1)"
  }else{
     document.querySelector(".number").style.color="red"
  }
}