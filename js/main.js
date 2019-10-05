 function calc() {
     if (document.getElementById("yourName").value == "") {
         document.getElementById("calcFunction").innerHTML = "Enter your name please"
     } else {
         if (document.getElementById('horse_power').value == "" || document.getElementById('age').value == "") {

             document.getElementById("calcFunction").innerHTML = "Please insert values";

         } else {
             var name = document.getElementById("yourName").value;
             var contry = document.getElementById('select').value;
             var agenow = document.getElementById('age').value;
             var horse = document.getElementById('horse_power').value;

             console.log(agenow);
             if (contry == "Austria") {
                 insurance = horse * 100 / agenow + 50;
                 console.log(insurance);
             } else if (contry == "Hungary") {
                 insurance = horse * 120 / agenow + 100;
                 document.getElementById('calcFunction').innerHTML;
             } else {
                 insurance = (horse * 150 / (agenow + 3) + 50);
                 document.getElementById('calcFunction').innerHTML;
             }
             document.getElementById("calcFunction").innerHTML = name + " your Insurance cost: " + insurance.toFixed(2) + " €";

         }
     }
 }
 