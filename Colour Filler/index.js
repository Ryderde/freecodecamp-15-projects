let colArr=['Grey','Red','Blue','Orange','White','Brown','Pink','Yellow','Green','Purple','Maroon','Turquoise','Cyan','Navy blue','Gold','Tomato','Teal','Lime','Cyan','Wheat','Salmon','Olive','Aqua','Violet','Chocolate','Navy']


let num=0
let mode='color'
function chgClr(){
if (mode==='color'){
  document.querySelector('.bgColor').innerHTML=colArr[num]
  document.body.style.backgroundColor=colArr[num]
  num++
  if (num==colArr.length-1){
    num=0
  }
}
  else if(mode==="hexColor"){
    let cl = '#'+Math.floor(Math.random()*16777216).toString(16)
    document.body.style.backgroundColor=cl
  document.querySelector('.bgColor').innerHTML=cl
    
  }
}


document.querySelector('.colorChanger').addEventListener('click',function() {
  chgClr()
})


document.querySelector('.color').addEventListener('click', ()=>{
  mode="color"
})

document.querySelector('.hexColor').addEventListener('click', ()=>{
  mode="hexColor"

  
  
})