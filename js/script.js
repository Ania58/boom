/* Coger los id del usuario,tiempo del calculo y resultado ok
Crear una promesa que tenga efectos despues de 5 segundos
Crear 2 opciones - if/else
Coger el boton por su id y crear un evento para que de reinicializa
Hacer el css
*/


const userChoice = document.getElementById('userInput');
const countdownDisplay = document.getElementById('countdown');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');


let computerInput;
let userInput; 

const startCountdown = () => {
    let countdown = 5;
    countdownDisplay.innerHTML = `<p class="countdownText">
    Cuenta atras: ${countdown} segundos</p>`;
    const interval = setInterval(() => {
        countdown -= 1;
        countdownDisplay.innerHTML = `<p class="countdownText">
        Cuenta atras: ${countdown} segundos</p>`;

        if (countdown === 0) {
            clearInterval(interval);
            generateRandomNumber();
        }
    }, 1000);
}
    
const generateRandomNumber = () => {
const computerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const newValue = Math.floor(Math.random() * 3 + 1);
      resolve(newValue);
    }, 5000);
  });

 computerPromise.then((newValue) => {
      computerInput = newValue;
      checkResult();
})
}

  console.log('Random number generated: ', computerInput);



const checkResult = () => {
    if(userInput === computerInput) {
        result.innerHTML = `<h2>¡Has salvado el mundo!</h2>
        <span class="finalResult">Tu número ${userInput} 
        es el mismo que el número ${computerInput}</span>`
        result.classList.remove('red');
        result.classList.add('green');
    } else {
    result.innerHTML = `<h2>La bomba ha estallado!</h2>
        <span class="finalResult">Tu número ${userInput} 
        no es el mismo que el número ${computerInput}</span>`
    result.classList.remove('green');
    result.classList.add('red');
  }
}
  
userChoice.addEventListener('change', () => {
    userInput = parseInt(userChoice.value, 10);
    startCountdown();
});


   

restartButton.addEventListener('click', () =>{
    location.reload();
})