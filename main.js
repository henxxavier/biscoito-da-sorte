const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const biscoito = document.querySelector(".shake");
const btnTry = document.querySelector(".btn-try");
let randomFrases = Math.round(Math.random() * 10)

const frases = [
	"A vida trará coisas boas se tiver paciência.",
	"Não há que ser forte. Há que ser flexível.",
	"Siga os bons e aprenda com eles.",
	"Uma bela flor é incompleta sem as suas folhas.",
	"A sorte favorece a mente bem preparada.",
	"Espere pelo mais sábio dos conselhos: o tempo.",
	"A paciência na adversidade é sinal de um coração sensível.",
	"Realize o óbvio, pense no improvável e conquiste o impossível.",
	"A inspiração vem dos outros. A motivação vem de dentro de nós.",
	"Motivação não é sinónimo de transformação, mas um passo em sua direção.",
	"Nós somos o que pensamos."
]

// altera as telas
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

//click no biscoito
function handleClick() {
  toggleScreen();

	screen2.querySelector("p").innerText = `${frases[randomFrases]}`

}

// reseta ao clicar no botao
function handleResetClick() {
  toggleScreen();
	randomFrases = Math.round(Math.random() * 10)

}
