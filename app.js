const game = document.querySelector(".game");
const startGameButton = document.querySelector("#startGame");
const frontCards = document.querySelectorAll(".card-front");
const cards = document.querySelectorAll(".card");
const symbols = ["🎄", "❄️", "🧸", "🍪", "🃏"];

startGameButton.addEventListener("click", () => {
    startGameButton.parentElement.style.display = "none";
    game.style.display = "flex";

    setTimeout(() => {
        cards.forEach((card) => {
            card.classList.add("flipped");
        });
    }, 500);

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });

    const totalCards = cards.length;
    const cardSymbols = [...symbols, ...symbols];

    shuffleArray(cardSymbols);

    frontCards.forEach((card, index) => {
        card.textContent = cardSymbols[index];
    });
});

// Tasowanie kart

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//
