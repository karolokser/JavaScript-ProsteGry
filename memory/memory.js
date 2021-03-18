var obrazki = new Array(16);
var obrazki_dlugosc = obrazki.length;
var numbers;
var click1;
var click2;
var nie;
var obrazek1;
var zmienna = false;
var licznik_powt=0;
var czy_wygrales =0;
var blokada = false;
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
	var nr;
	for (i=0;i<obrazki_dlugosc;i++)
	{
	var id=i;
	obraz = obraz + '<div class="obrazek" id="a'+i+'" onclick="sprawdzanie('+i+')"></div>';
	}
	document.getElementById("pojemnik").innerHTML = obraz;
}

function sprawdzanie(x)
{
if (blokada ==false )
{


	if (zmienna == false)
	{
		nie = x;
		obrazek1 = "";
		var obrazek2 = "";
		obrazek1 = x;
		obrazek2 = 'url("img/z'+obrazki[obrazek1]+'.jpg")';
		$('#a'+obrazek1).css('background-image', obrazek2);
		click1=obrazki[obrazek1];
		zmienna = true;
	}
	else
	{

		obrazek1 = x;
		click2=obrazki[obrazek1];
		obrazek2 = 'url("img/z'+obrazki[obrazek1]+'.jpg")';
		$('#a'+obrazek1).css('background-image', obrazek2);
		zmienna = false;	
		licznik_powt++;
		document.getElementById("licznik").innerHTML='Ilość ruchów: '+licznik_powt;
			//alert(x);
	}
	
	





if (zmienna == false)
{	
if (click1==(click2-8)|| click1==((click2-0)+8))
				{
					//alert ("trafiles");
					blokada = true;
					setTimeout("zniknij()",700);
					czy_wygrales++;
					if (czy_wygrales == 8)
					{
					$('#pojemnik').html('WYGRAŁEŚ!!!');
					}
					
				}
				else
				{
					//alert ("Nie tym razem");
					blokada = true;
					setTimeout("zaslon()",700);
				}
				
			click1="";click2="";	

}
}
}

function zaslon()
{
					
					var sciezka = 'url("img/zaslona.jpg")';
					$('#a'+obrazek1).css('background-image', sciezka );
					$('#a'+nie).css('background-image', sciezka );
					blokada = false;
}

function zniknij()
{
					$('#a'+obrazek1).css('opacity', '0' );
					$('#a'+obrazek1).css('cursor', 'default' );
					$('#a'+obrazek1).attr('onclick', '' );
					$('#a'+nie).css('opacity', '0' );
					$('#a'+nie).css('cursor', 'default' );
					$('#a'+nie).attr('onclick', '' );
					blokada = false;
}


