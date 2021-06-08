//Accediendo a un solo elemento del DOM
//const var1 = document.querySelector('h2');
//console.log(var1);


//Accediendo a varios elementos del DOM
//const var2 =document.querySelectorAll('h2');

//Forma 1
//console.log(var2);

//Forma 2
//var2.forEach(vari2=>{
//console.log(vari2);
//})


//Forma diferente de acceder al DOM
//const var3= document.getElementsByTagName('footer');
//console.log(var3);


//Cambiar el contenido de una página.
//const newtext = document.querySelector('p');
//console.log(newtext.innerHTML);
//Forma 1
//newtext.innerHTML  = 'Espacio para describir quien soy!';

//Forma 2
//newtext.innerHTML += 'algo más aqui!';


//Cambiar el código HTML de una página.
//const content = document.querySelector('h2');
//console.log(content.innerHTML);
//content.innerHTML = '<h2>Titulo modificado!</h2>';


//Obtener y actualizar atributros de HTML.
//const link = document.querySelector('a');
//console.log(link.getAttribute('href'));
//link.setAttribute('href', 'https://github.com/diegotorres30');
//link.innerText = 'Perfil de Git Hub';


//Cambiar los estilos de CSS.
//Forma 1
//const messageCSS = document.querySelector('h2');
//messageCSS.setAttribute('style', 'border: 1px solid orange;');

//Forma 2 --Conocer características
//const messageCSS = document.querySelector('h2');
//console.log(messageCSS.style);

//Forma 2 --Actualizar estilo.
//const messageCSS = document.querySelector('h2');
//messageCSS.style.color = 'green';