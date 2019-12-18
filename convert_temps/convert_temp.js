"use strict";
var $ = function(id) { return document.getElementById(id); };

var degrees_entered = 0;


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

// *****************************************************************************************

var toFahrenheit = function(){
    var conversion_type;

    if($("to_fahrenheit").checked)
    {
        conversion_type = $("degree_label_1").innerHTML = "Enter C Degrees";
        conversion_type = $("degree_label_2").innerHTML = "Degrees Fahrenheit";
        $("degrees_entered").focus();
        clearTextBoxes();
    }
};

// *****************************************************************************************

var toCelsius = function(conversion_type){
    
    if($("to_celsius").checked)
    {
        conversion_type = $("degree_label_1").innerHTML = "Enter F Degrees";
        conversion_type = $("degree_label_2").innerHTML = "Degrees Celsius";
        $("degrees_entered").focus();
        clearTextBoxes();
    }
};

// *****************************************************************************************

var convertTemp = function(){
     degrees_entered = $("degrees_entered").value;
    
    if($("to_celsius").checked)
    {
           $("degrees_computed").value = (degrees_entered - 32) * (5 / 9);
    }
    else if($("to_fahrenheit").checked)
    {
        $("degrees_computed").value = (degrees_entered * (9 / 5) + 32);
    }

    if(isNaN(degrees_entered))
    {
        alert("You must enter a valid number for degrees");
        $("degrees_entered").focus();
    }
};

// *****************************************************************************************

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};