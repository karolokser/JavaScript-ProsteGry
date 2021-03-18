var obrazki = new Array(16);
var obrazki_dlugosc = obrazki.length;
var numbers;

function losuj(k, n) 
{ 
	
var numbers = new Array(n);
for (var i=0; i<n; i++) {
numbers[i] = i + 1;
}
for (var i=0; i<k; i++) {
var r = Math.floor(Math.random()*n);
obrazki[i]=numbers[r];
numbers[r] = numbers[n - 1];
n--;
}
}

function wypelnij()
{
	losuj(16,16);
	var obraz = "";
	for (i=0;i<obrazki_dlugosc;i++)
	{
	var id=i;
	obraz = obraz + '<div class="obrazek" id="a'+i+'" onclick="zamien('+id+')"><img src="img/z'+obrazki[i]+'.jpeg"/img></div>';
	}
	document.getElementById("pojemnik").innerHTML = obraz;
}


function zamien(x)
{
var zmienna = "a"+x; //identyfikator obiektu; x-numer identyfikatora
var obrazek_srodek = ""; //numer obrazka w div-ie
obrazek_srodek = document.getElementById(zmienna).innerHTML;
obrazek_srodek = obrazek_srodek.substr(15,2);
if (obrazek_srodek.substr(1.1)==".") {obrazek_srodek = obrazek_srodek.substr(0,1);}
if(x<=14)
{
var zmienna2 = "a"+((x-0)+1); //identyfikator obiektu; x-numer identyfikatora
var obrazek_srodek2 = ""; //numer obrazka w div-ie
obrazek_srodek2 = document.getElementById(zmienna2).innerHTML;
obrazek_srodek2 = obrazek_srodek2.substr(15,2);
if (obrazek_srodek2.substr(1.1)==".") {obrazek_srodek2 = obrazek_srodek2.substr(0,1);}
}
if(x<=11)
{
var zmienna3 = "a"+((x-0)+4); //identyfikator obiektu; x-numer identyfikatora
var obrazek_srodek3 = ""; //numer obrazka w div-ie
obrazek_srodek3 = document.getElementById(zmienna3).innerHTML;
obrazek_srodek3 = obrazek_srodek3.substr(15,2);
if (obrazek_srodek3.substr(1.1)==".") {obrazek_srodek3 = obrazek_srodek3.substr(0,1);}
}
if(x>=1)
{
var zmienna4 = "a"+(x-1); //identyfikator obiektu; x-numer identyfikatora
var obrazek_srodek4 = ""; //numer obrazka w div-ie
obrazek_srodek4 = document.getElementById(zmienna4).innerHTML;
obrazek_srodek4 = obrazek_srodek4.substr(15,2);
if (obrazek_srodek4.substr(1.1)==".") {obrazek_srodek4 = obrazek_srodek4.substr(0,1);}
}
if(x>=4)
{
var zmienna5 = "a"+(x-4); //identyfikator obiektu; x-numer identyfikatora
var obrazek_srodek5 = ""; //numer obrazka w div-ie
obrazek_srodek5 = document.getElementById(zmienna5).innerHTML;
obrazek_srodek5 = obrazek_srodek5.substr(15,2);
if (obrazek_srodek5.substr(1.1)==".") {obrazek_srodek5 = obrazek_srodek5.substr(0,1);}
}



if ((x+1)%4!=0)
{
if (obrazek_srodek2==16)
{
	var biale = "";
	biale = document.getElementById(zmienna).innerHTML;
	document.getElementById('a'+x).innerHTML = document.getElementById('a'+((x-0)+1)).innerHTML;
	document.getElementById('a'+((x-0)+1)).innerHTML = biale;
	//alert(biale);
}
}


if (obrazek_srodek3==16)
{
	var biale = "";
	biale = document.getElementById(zmienna).innerHTML;
	document.getElementById('a'+x).innerHTML = document.getElementById('a'+((x-0)+4)).innerHTML;
	document.getElementById('a'+((x-0)+4)).innerHTML = biale;
	//alert(biale);
}
if (obrazek_srodek4==16)
{
	var biale = "";
	biale = document.getElementById(zmienna).innerHTML;
	document.getElementById('a'+x).innerHTML = document.getElementById('a'+(x-1)).innerHTML;
	document.getElementById('a'+(x-1)).innerHTML = biale;
	//alert(biale);
}
if (obrazek_srodek5==16)
{
	var biale = "";
	biale = document.getElementById(zmienna).innerHTML;
	document.getElementById('a'+x).innerHTML = document.getElementById('a'+(x-4)).innerHTML;
	document.getElementById('a'+(x-4)).innerHTML = biale;
	//alert(biale);
}
 czy_wygrales(x);
}


function czy_wygrales(y)
{
var zmienna = "a"+y;
var obrazek_srodek = ""; //numer obrazka w div-ie
obrazek_srodek = document.getElementById(zmienna).innerHTML;
obrazek_srodek = obrazek_srodek.substr(15,2);
if (obrazek_srodek.substr(1.1)==".") {obrazek_srodek = obrazek_srodek.substr(0,1);}
		//alert(((y-0)+1));
		//alert(obrazek_srodek);
				var punkt;
	for (i=0;i<16;i++)
	{

		if (((y-0)+1)==obrazek_srodek)
		{
		punkt++;
		}
	}
	if (punkt==16)
		{
			var html1 = '<img src="img/wygrana.jpg"/img>';
			document.getElementById("pojemnik").innerHTML = html1;
		}
	else punkt =0;
}











