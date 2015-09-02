//Input Example
_INPUT = "2\n3 9\n17 24";
//Expected Output
/*
2
0
*/
//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)
//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";
//Expected Output
/*
2
1
0
1
*/
//----- Start your code here -------

var input = _INPUT.split('\n'); //separa _INPUT
var i=0; //contador para separar los rangos

for(i=1;i<input.length;i++)
{
	var rango = input[i].split(' '); //crea la variable rango donde va a guardar el dato inicial y el final
	var _A = rango[0];//guarda el dato inicial del rango
	var _B = rango[1]; //guarda el dato final del rango
	var E=0; //variable que guarda la cantidad de numero Enteros
	console.log("Rango: "+rango);
	
	for (_A = _A; _A <= _B; _A++)
	{		
		var c = Math.sqrt(_A);
		if (c % 1 == 0)
		{
			console.log("La raiz de " + _A + " es un numero entero y el resultado es: " + c)
			E++;
		}	
	}
console.log("En el rango "+rango+" hay " +E+" raices perfectas");
}


