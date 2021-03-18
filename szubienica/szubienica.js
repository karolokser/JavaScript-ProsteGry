var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();
var dlugosc_hasla = haslo.length;
var haslo1 = "";
var litery = new Array(34);
var skucha = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

	for (i=0; i<dlugosc_hasla; i++)
	{
		if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
			else haslo1 = haslo1 + "-";
	}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



function start()
{
var tresc_diva = "";

for (i=0;i<=34;i++)
{
var element = "lit" + i;
tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdzanie('+i+')" id="'+element+'">'+litery[i]+'</div>';
if ((i+1)%7==0) tresc_diva = tresc_diva + '<div style="clear: both;</div>"';
}
document.getElementById("alfabet").innerHTML = tresc_diva;
wypisz_haslo();
}

String.prototype.ustawZnak =function(miejsce, znak)
{
	if(miejsce>this.lenght-1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdzanie(nr)
{
	var trafienie = false;
	for (i=0; i<dlugosc_hasla; i++)
	{
	if (litery[nr] == haslo.charAt(i)) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafienie = true;
			
		}
	}

 
	if (trafienie == true)
	{
		yes.play();
		var element = "lit"+nr;
		document.getElementById(element).style.background="darkgreen";
		document.getElementById(element).style.color="lightgreen";
		document.getElementById(element).style.border="solid lightgreen";
		document.getElementById(element).style.cursor="default";
		wypisz_haslo();
	
	}
	else
	{
		no.play();
		var element = "lit"+nr;
		document.getElementById(element).style.background="darkred";
		document.getElementById(element).style.color="red";
		document.getElementById(element).style.border="solid red";
		document.getElementById(element).style.cursor="default";
		document.getElementById(element).setAttribute("onclick",";");
		skucha++;
		var kolejny_obrazek = '<img src="img/s'+skucha+'.jpg" /img>';
		document.getElementById("szubienica").innerHTML=kolejny_obrazek;
			if (skucha >=9) 
			{
				document.getElementById("alfabet").innerHTML = 'PRZEGRAŁEŚ <span class="reset" onclick = "location.reload()" style ="margin-top:20px; font-size: 32px;"></br></br>Jeszcze raz?</span>';
			}
	}
	if (haslo == haslo1) document.getElementById("alfabet").innerHTML = "Wygrałeś";
		
}













