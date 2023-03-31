document.querySelector('.menubtn').addEventListener("click", function(){
  if (document.querySelector('.menubtn').nextElementSibling.className=="blockclass"){
    document.querySelector('.blockclass').className='pages';
    document.querySelector('.menubtn').setAttribute('src', 'Images/bars-solid.svg')
  }
  else{
    document.querySelector('.pages').className='blockclass';
    document.querySelector('.menubtn').setAttribute('src', 'Images/x-solid.svg');
    document.querySelector('.navBar').style.height="auto"
  }
})