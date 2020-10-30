function det() {
	var a1 = document.getElementById("s11");
	var a2 = document.getElementById("s12");
	var a3 = document.getElementById("s13");
	var b1 = document.getElementById("s21");
	var b2 = document.getElementById("s22");
	var b3 = document.getElementById("s23");
	var c1 = document.getElementById("s31");
	var c2 = document.getElementById("s32");
	var c3 = document.getElementById("s33");
	var result = document.getElementById("result");

	var finalResult = (a1.value*(b2.value*c3.value-b3.value*c2.value)) - (a2.value*(b1.value*c3.value-b3.value*c1.value)) + (a3.value*(b1.value*c2.value-b2.value*c1.value));
	result.innerHTML = finalResult;
}

var output = document.querySelector("#determinant");
output.addEventListener('click',det);
	