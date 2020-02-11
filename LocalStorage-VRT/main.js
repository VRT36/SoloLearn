/* 
Project     : Local Storage VRT
Done By     : VRT
Date        : 31/03/2019
Time        : 11:09
*/
function set(){
  localStorage.setItem("color", "violet");
  document.getElementById("btn1").classList.add("btn-swap-black-1");
  document.getElementById("btn2").classList.add("btn-swap-black-1");
  document.getElementById("btn3").classList.add("btn-swap-black-1");
  document.getElementById("btn4").classList.add("btn-swap-black-1");
  document.getElementById("btn5").classList.add("btn-swap-black-1");
  document.getElementById("btn6").classList.add("btn-swap-black-1");
  document.getElementById("btn7").classList.add("btn-swap-black-1");
}

// TS#1554010709

function get(){
  alert("This code will not work on SL mobile app.Use PC instead.Rerun the code to see the effect. :)")
  var cco = localStorage.getItem("color");
  if (cco == "violet"){
      var co = "indigo";
      localStorage.setItem("color", co);
    document.getElementById("btn1").classList.add("btn-swap-black-2");
    document.getElementById("btn2").classList.add("btn-swap-black-2");
    document.getElementById("btn3").classList.add("btn-swap-black-2");
    document.getElementById("btn4").classList.add("btn-swap-black-2");
    document.getElementById("btn5").classList.add("btn-swap-black-2");
    document.getElementById("btn6").classList.add("btn-swap-black-2");
    document.getElementById("btn7").classList.add("btn-swap-black-2");
    
  }else if(cco == "indigo"){
    var co = "blue";
      localStorage.setItem("color", co);
    document.getElementById("btn1").classList.add("btn-swap-black-3");
    document.getElementById("btn2").classList.add("btn-swap-black-3");
    document.getElementById("btn3").classList.add("btn-swap-black-3");
    document.getElementById("btn4").classList.add("btn-swap-black-3");
    document.getElementById("btn5").classList.add("btn-swap-black-3");
    document.getElementById("btn6").classList.add("btn-swap-black-3");
    document.getElementById("btn7").classList.add("btn-swap-black-3");

  }else if(cco == "blue"){
    var co = "green";
      localStorage.setItem("color", co);
    document.getElementById("btn1").classList.add("btn-swap-black-4");
    document.getElementById("btn2").classList.add("btn-swap-black-4");
    document.getElementById("btn3").classList.add("btn-swap-black-4");
    document.getElementById("btn4").classList.add("btn-swap-black-4");
    document.getElementById("btn5").classList.add("btn-swap-black-4");
    document.getElementById("btn6").classList.add("btn-swap-black-4");
    document.getElementById("btn7").classList.add("btn-swap-black-4");
    
  }else if(cco == "green"){
    var co = "yellow";
      localStorage.setItem("color", co);
    document.getElementById("btn1").classList.add("btn-swap-black-5");
    document.getElementById("btn2").classList.add("btn-swap-black-5");
    document.getElementById("btn3").classList.add("btn-swap-black-5");
    document.getElementById("btn4").classList.add("btn-swap-black-5");
    document.getElementById("btn5").classList.add("btn-swap-black-5");
    document.getElementById("btn6").classList.add("btn-swap-black-5");
    document.getElementById("btn7").classList.add("btn-swap-black-5");
    
  }else if(cco == "yellow"){
    var co = "orange";
      localStorage.setItem("color", co);
    document.getElementById("btn1").classList.add("btn-swap-black-6");
    document.getElementById("btn2").classList.add("btn-swap-black-6");
    document.getElementById("btn3").classList.add("btn-swap-black-6");
    document.getElementById("btn4").classList.add("btn-swap-black-6");
    document.getElementById("btn5").classList.add("btn-swap-black-6");
    document.getElementById("btn6").classList.add("btn-swap-black-6");
    document.getElementById("btn7").classList.add("btn-swap-black-6");
    
  }else if(cco == "orange"){
    var co = "red";
      localStorage.setItem("color", co);
    document.getElementById("btn1").classList.add("btn-swap-black-7");
    document.getElementById("btn2").classList.add("btn-swap-black-7");
    document.getElementById("btn3").classList.add("btn-swap-black-7");
    document.getElementById("btn4").classList.add("btn-swap-black-7");
    document.getElementById("btn5").classList.add("btn-swap-black-7");
    document.getElementById("btn6").classList.add("btn-swap-black-7");
    document.getElementById("btn7").classList.add("btn-swap-black-7");
    
  }else {
      set();
  }
}
