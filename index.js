let btn=document.getElementById("form-btn");

btn.addEventListener('click',(e)=>{
  e.preventDefault();
  let a=document.querySelector("#name");
  let b=document.querySelector("#email");
  let c=document.querySelector("#msg");
  console.log("yes")

  if(!(a.value&&b.value&&c.value)){
    alert("Kindly please fill the form completly.")
  }
})


// console.log("yes")