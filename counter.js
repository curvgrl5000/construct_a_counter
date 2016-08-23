// ONE WAY TO USE A COUNTER
var i = 0;
var count = 0;

function counter() {
	return count += 1;
}
document.querySelector("p.num_1").innerHTML = counter() + "<br />";
document.querySelector("p.num_2").innerHTML = counter() + "<br />";
document.querySelector("p.num_3").innerHTML = counter() + "<br />";

console.log(counter());  // Returns 4

// ANOTHER WAY TO USE A COUNTER
function getAge() {
	var age = parseInt(document.getElementById("myAge").value);
	var lifeSpan = 80;
	var diff = lifeSpan - age;
	document.getElementById("ageInput").innerHTML = diff;
	//console.log(document.getElementById("ageInput").value = document.getElementById("ageInput").innerHTML = age);

	var totalLife = document.getElementById("bigUn").value = diff + 1;
	var numbs = Array.apply(null, Array(totalLife)).map(function (_, i) {return i;});
	
	function bigNum(numbs) {
		var arr = [];
		for ( i = 1;  i < numbs.length; i++ ) { 
			arr.push(numbs[i] + ", ");
		}
		return arr.join(" ");
	}
	document.getElementById("bigUn").innerHTML = bigNum(numbs) + "yrs so enjoy 'em!";
}

// ANOTHER WAY TO USE A COUNTER
function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}

