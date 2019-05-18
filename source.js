function totalUp() {
	var input = parseFloat(document.getElementById("input").value);
	var input2 = parseFloat(document.getElementById("input2").value);
	var input3 = parseFloat(document.getElementById("input3").value);
	var input4 = parseFloat(document.getElementById("input4").value);
	var input5 = parseFloat(document.getElementById("input5").value);
	var input6 = parseFloat(document.getElementById("input6").value);
	var input7 = parseFloat(document.getElementById("input7").value);
	var input8 = parseFloat(document.getElementById("input8").value);
	var input9 = parseFloat(document.getElementById("input9").value);
	var input10 = parseFloat(document.getElementById("input10").value);

	var total = input + input2 + input3 + input4 + input5 + input6 + input7 + input8 + input9 + input10;
	console.log(total);
	if(total < 100){
	var red = total.toString();
	document.getElementById("result").innerHTML = red.fontcolor("red");
	}
	else if(total > 100){
	red = total.toString();
	document.getElementById("result").innerHTML = red.fontcolor("red");
	}
	else if(total = 100){
	var green = total.toString();
	document.getElementById("result").innerHTML = green.fontcolor("green");
	}
	var missing = 100 - total;
	document.getElementById("missing").innerHTML = missing;

	if(isNaN(input)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input2)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input3)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input4)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input5)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input6)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input7)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input8)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input9)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	if(isNaN(input10)){
		document.getElementById("result").innerHTML = "Key in a number."
		document.getElementById("missing").innerHTML = "-";
	}
	
}

window.onload = totalUp;

