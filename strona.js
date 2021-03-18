var timer1 = 0 ;
var timer2 = 0 ;
var numer = Math.floor(Math.random()*3)+1;

function Zmien(x)
{
clearTimeout(timer1);
clearTimeout(timer2);
schowaj();
numer = x-1;
setTimeout("zmiana()",500);
}

function schowaj()
{
	$("#slider").fadeOut(500); 
}


function zmiana()
{
	numer++; if (numer > 3) numer = 1;
	var plik = '<img src="img/' + numer + '.jpeg"/img>';
	document.getElementById("slider").innerHTML = plik;
	$("#slider").fadeIn(500);
	timer1 = setTimeout("zmiana()",5000);
	timer2 = setTimeout("schowaj()",4500);
}
