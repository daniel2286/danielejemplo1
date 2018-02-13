var vp = document.getElementById("villatatan");
var papel = vp.getContext("2d");
var fondo = {
  url:"tile.png",
  cargaok: false
};
var vaca = {
  url:"vaca.png",
  cargaok: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

vaca.imagen= new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarvacas);

function cargarfondo()
{
fondo.cargaok = true;
dibujar();
}
function cargarvacas()
{
vaca.cargaok = true;
dibujar();
}
function dibujar()
{
if (fondo.cargaok)
{
  papel.drawImage(fondo.imagen, 0, 0);
}
if (vaca.cargaok)
   {
     var cantidad = aleatorio (5, 25)
     console.log(cantidad);
     for ( v=0; v< cantidad; v++)
     {
       var x = aleatorio(0, 5);
       var y = aleatorio(0, 5);
       var x = x * 80;
       var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
     }
 }
}
function aleatorio(min,maxi)
{
var resultado;
resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
return resultado;
}
