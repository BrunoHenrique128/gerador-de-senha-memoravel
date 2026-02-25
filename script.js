const substantivos = ["Rapaz", "Mulher", "Homem", "Garoto", "Menina"];
const adjetivos = ["Feliz", "Triste", "Humilde", "Amável"];
const numeros1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numeros3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const especial = ["*", "@"];

const copyBtn = document.getElementById("copyBtn");
const button = document.getElementById("generate");
const password = document.getElementById("password");

function result() {
    const resultado1 = Math.floor(Math.random() * substantivos.length);
    const resultado2 = Math.floor(Math.random() * adjetivos.length);
    const resultado3 = Math.floor(Math.random() * numeros1.length);
    const resultado4 = Math.floor(Math.random() * numeros2.length);
    const resultado5 = Math.floor(Math.random() * numeros3.length);
    const resultado6 = Math.floor(Math.random() * especial.length);

    password.innerHTML = substantivos[resultado1] + 
                         adjetivos[resultado2] + 
                         numeros1[resultado3] + 
                         numeros2[resultado4] + 
                         numeros3[resultado5] + 
                         especial[resultado6];
}

button.addEventListener("click", result);

copyBtn.addEventListener("click", async () => {
    try {
        navigator.clipboard.writeText(password.textContent)
    } catch(error) {
        console.log("Falhou")
    }
})
