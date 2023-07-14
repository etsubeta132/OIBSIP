

console.log("our temp converturer started...........")
function prTemp(){
    var inTemp = document.getElementById("inputTemp").value;
    var inScale = document.getElementById("inputScale").value;
    var outScale = document.getElementById("outputScale").value;
    var outTemp = document.getElementById("outputTemp").innerHTML;
    console.log(inTemp)
    console.log(inScale)
    console.log(outTemp)
    if (inScale == "Fahrenheit") {
        if(outScale== "celsius"){
            outTemp = (inTemp - 32) * 5 / 9;
        }
        else if (outScale== "kelvin"){
            outTemp = ((inTemp - 32) * 5 / 9) - 273.15;
        }
        else if (outScale == "Fahrenheit"){
            outTemp = inTemp;
        }
      }
    else if (inScale == "celsius") {
        if(outScale== "celsius"){
            outTemp = inTemp;
        }
        else if (outScale== "kelvin"){
            outTemp = inTemp + 273.15;
        }
        else if (outScale == "Fahrenheit"){
            outTemp = inTemp * 9 / 5 + 32;
        }
      
    } else if (inScale == "kelvin") {
        if(outScale== "celsius"){
            outTemp = inTemp - 273.15;  
        }
        else if (outScale== "kelvin"){
            outTemp = inTemp;
        }
        else if (outScale == "Fahrenheit"){
            outTemp = (inTemp - 273.15) * 9/5 + 32
        }
      
    }
    console.log(inScale,outTemp,outScale)
    
    document.getElementById("outputTemp").innerHTML = inTemp +" "+ inScale +" = "+ Math.round(outTemp)+" "+ outScale;
    inTemp = 0
  }
