const resultado = document.querySelector("#resultado");

let myfunc1 = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

// chamando a função

myfunc1.showArguments(
    "Vai São Paulo",
    "Full-Stack Developer",
    "React",
    "NodeJs",
    "Typescript"

)

// arrowFunction não acessa arguments
let myfunc2 = {
    showArguments: () => {
        //resultado.innerHTML = arguments;
       // console.log(...arguments);
    },
};

myfunc2.showArguments(
    "Vai São Paulo",
    "Full-Stack Developer",
    "React",
    "NodeJs",
    "Typescript"

)

let user = {
    name: "George Wanderson",
    usandoArrow: ()=>{
        console.log("Meu nome é ", this.name, "Arrow Function");
    },
    usandoNominal(){
        console.log("Meu nome é ", this.name, "Nominal Function");
    }
}

user.usandoArrow();
user.usandoNominal();