// Basic




let numbers = [1, 7, 3, 9];

let max=numbers[0];

for (const val of numbers) {
  if (val>max){
    max=val;
  }
  console.log (max);
}





let temp=Math.random()*30-5;
  if(temp < 10){
    document.getElementById("statement").innerText ="The weather is Cold";
    document.getElementsByClassName("pic")[0].src="./snow.webp";
  }else{
    document.getElementById("statement").innerText ="The weather is warm";
    document.getElementsByClassName("pic")[0].src="./sunny.jpg";
  }
  
  let date=new Date();
  let day=date.getDate();
  let month=date.getMonth()+1;
  let year=date.getFullYear();
  let currentDate= `${day}-${month}-${year}`;
  console.log(currentDate);

  document.getElementsByClassName("date")[0].innerText=currentDate;




let allstudent =[
  
]

