const edad = prompt('ingresa tu edad');
const miPromesa = new Promise((resolve, reject) => {

  if(edad >= 18 ){
    resolve(`su edad es: ${edad}, puedes ingresar al establecimiento `);

  }else if(edad <= 17){
    reject(`tu edad es:${edad} no puede ingresar ya que eres menor de edad`)
  }else if (edad != edad.isNan){}
   reject(`Edad no validad`)

});
miPromesa.then((valor) => {
  console.log(valor)
}).catch((err) => {
  console.log(err)

});
