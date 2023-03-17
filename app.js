const nombre = prompt ('ingresa tu nombre: ')
const ingreso = prompt('ingresa tu edad');
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
  if(ingreso >= 18 ){
    resolve(`su nombre es: ${nombre},  su edad es: ${ingreso},  puedes ingresar al establecimiento `);

  }else if(ingreso <= 17){
    resolve('no puede ingresar ya que eres menor de edad o su documento no es valido')
}
  }, 100);
});
miPromesa.then((valor) => {
  console.log(valor)
}).catch((err) => {
  console.log(err)

});


