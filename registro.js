// declaracion de variable

const contenedor__login_register = document.querySelector(".contenedor__login-register");
const formulario__login = document.querySelector(".formulario__login");
const formulario__register = document.querySelector(".formulario__register");
const caja_trasera_login = document.querySelector(".caja__trasera-login");
const caja_trasera_register = document.querySelector(".caja__trasera-register");
const registrase= document.querySelector(".registro");
const nombre= document.querySelector(".Nombre")
const email= document.querySelector(".email");
const usuario= document.querySelector(".usuario");


window.addEventListener("resize", anchoPagina=()=>{
    if(window.innerWidth>850){
        caja_trasera_login.style.display ="block";
        caja_trasera_register.style.display= "block";
    }

    else{
        caja_trasera_register.style.display="block";
        caja_trasera_register.style.opacity="1";
        caja_trasera_login.style.display="none";
        formulario__login.style.display="block";
        formulario__register.style.display="none";
        contenedor__login_register.style.left="0px";

    }
 
})

anchoPagina()

const inicio = document.getElementById("iniciar-sesion")

inicio.addEventListener("click", inicioSesion = () => { 
if(window.innerWidth > 850){ 
    formulario__register.style.display = "none";
    contenedor__login_register.style.left = "10";
    formulario__login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0"; }
    else{
        formulario__register.style.display = "none";
        contenedor__login_register.style.left = "0";
        formulario__login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.opacity = "none";

    }


})

const registro = document.getElementById("registrarse")

registro.addEventListener("click", register = () => {
    if(window.innerWidth > 850){
        formulario__register.style.display = "block";
        contenedor__login_register.style.left = "410px";
        formulario__login.style.display = "none";
       caja_trasera_register.style.opacity = "0";
       caja_trasera_login.style.opacity = "1";
    }
    else{
        formulario__register.style.display = "block";
        contenedor__login_register.style.left = "0px";
        formulario__login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1"; 

    }

    

});

registrase.addEventListener("click", (e)=>{
    e.preventDefault()
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML= error[1];
        resultado.classList.add("red")
    }
    else{
        resultado.innerHTML="te as registrado excitosamente";
        resultado.classList.add("green")
    }
})

const validarCampos=()=>{
    let error =[];
    if(nombre.ariaValueMax.length < 5 || nombre.ariaValueMax.length > 40){
        error[0] = true;
        error[1] = "el nombre es invalido";
        return error;

    }else if (email.Value.length < 5 ||
               email.Value.length > 40 ||
               email.value.indexof("@") == -1 ||
               email.value.indexof(".") == -1){
        error[0] =true;
        error[1] = "El email  es invalido";
        return error;
        }else if (usuario.value < 4 ||  usuario.value > 40){
            error[0] = true;
            error[1] = "ya existe";
        }


   error[0]=false;
   return error;
}