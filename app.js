let promesaCumplida = Boolean(Math.round(Math.random()));
console.log(promesaCumplida)
if (promesaCumplida == true){
}else promesaCumplida = true; 



let ingreso = prompt();

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
  if(ingreso >= 18 ){
    resolve('puede ingresar');

  }if(ingreso <= 17){
    resolve('no puede ingresar ya que es menor de edad o su documento no es valido')
}else{
    reject('promesa rechazada...');
  }
  }, 00);
});
miPromesa.then((valor) => {
  console.log(valor)
}).catch((err) => {
  console.log(err)

});

