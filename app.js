const ingreso = prompt('ingresa tu edad');
const miPromesa = new Promise((resolve, reject) => {

  if(ingreso >= 18 ){
    resolve(`su edad es: ${ingreso}, puedes ingresar al establecimiento `);

  }else if(ingreso <= 17){
    reject(`tu edad es:${ingreso} no puede ingresar ya que eres menor de edad`)
  }else if (ingreso != ingreso.isNan){}
   reject(`Edad no validad`)

});
miPromesa.then((valor) => {
  console.log(valor)
}).catch((err) => {
  console.log(err)

});
