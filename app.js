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
            card.style.zIndex = "1";
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

let limit = 0;
let karta1Text = null;
let karta2Text = null;

cards.forEach((card) => {
    card.addEventListener("click", () => {
        limit++;

        if (!karta1Text) {
            karta1 = card.querySelector(".card-front");

            karta1Text = karta1.textContent;
            console.log("Pierwsza karta: " + karta1Text);
        } else {
            karta2 = card.querySelector(".card-front");

            karta2Text = karta2.textContent;
            console.log("Druga karta: " + karta2Text);
        }

        if (karta1Text === karta2Text) {
            console.log("Karty sa takie same");
            karta1Text = null;
            karta2Text = null;

            limit = 0;
        } else {
            if (limit === 2) {
                cards.forEach((karta) => {
                    karta.style.zIndex = "-1";
                    karta1Text = null;
                    karta2Text = null;
                });

                setTimeout(() => {
                    cards.forEach((karta) => {
                        karta.classList.add("flipped");
                        limit = 0;
                    });

                    cards.forEach((karta) => {
                        karta.style.zIndex = "1";
                    });
                }, 500);
            }
        }
    });
});
