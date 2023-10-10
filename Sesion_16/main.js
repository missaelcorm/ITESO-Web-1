$(document).ready(() => {
    const ROWS = 5;
    const COLS = 4;
    const minValue = 0;
    const maxValue = ROWS * COLS - 1;
    const FLIP_TIME = 1000;
    const uniqueIntegers = Array.from({ length: maxValue - minValue + 1 }, (_, i) => i + minValue);

    Handlebars.registerHelper('getImg', value => {
        const images = {};

        for (let i = 0; i < COLS * ROWS; i++) {
            images[i] = (i > maxValue / 2) ? maxValue - i : i;
        }

        return images[value];
    });

    // Create a shuffled array of unique integers
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    function flip(card) {
        $(card).removeClass("not-flipped");
        $(card).addClass("flipped");
    }

    function unflip(card) {
        $(card).removeClass("flipped");
        $(card).addClass("not-flipped");
    }

    function checkForWin() {
        if (flippedCards.length === maxValue + 1) {
            alert("Congratulations, You Won! :D");
            restartGame();
        }
    }

    function fillArrayRandomly(matrix, numRows, numCols, uniqueIntegers) {
        let currentIndex = 0;

        for (let i = 0; i < numRows; i++) {
            matrix.rows[i] = {
                cols: new Array(numCols)
            };

            for (let j = 0; j < numCols; j++) {
                matrix.rows[i].cols[j] = uniqueIntegers[currentIndex++];
            }
        }
        
    }

    function restartGame() {
        // Reinitialize or reset any game-related variables
        currentCards.splice(0, currentCards.length);
        flippedCards.splice(0, flippedCards.length);
        isChecking = false;
    
        // Shuffle the cards again
        shuffleArray(uniqueIntegers);
    
        // Fill the matrix with new card values
        fillArrayRandomly(matrix, ROWS, COLS, uniqueIntegers);
    
        // Update the grid with the new cards
        const gridResult = template(matrix);
        gridContainer.html(gridResult);
    
        // Add event listeners to the new cards
        const newCards = $(".card");
        newCards.on("click", handleCardClick);
    }

    const handleCardClick = (event) => {
        const card = event.currentTarget;

        // Ignore clicks on already flipped cards or during a flip
        if ($(card).hasClass("flipped") || isFlipping) {
            return;
        }

        currentCards.push(card);
        flip(card);

        if (currentCards.length === 2) {
            isFlipping = true;

            setTimeout(() => {
                let firstCard = parseInt($(currentCards[0]).data('card'), 10);
                let secondCard = parseInt($(currentCards[1]).data('card'), 10);

                if (firstCard + secondCard === maxValue) {
                    currentCards.forEach(card => {
                        $(card).addClass("card-found");
                        flippedCards.push(card);
                    });
                } else {
                    currentCards.forEach(card => {
                        setTimeout(unflip, FLIP_TIME, card);
                    });
                }

                currentCards.splice(0, currentCards.length);
                isFlipping = false;
                checkForWin();
            }, FLIP_TIME);
        }
    };

    const gridTemplate = $("#template").first();
    const gridContainer = $(".container").first();
    const template = Handlebars.compile(gridTemplate.html());
    
    shuffleArray(uniqueIntegers);

    const matrix = {
        rows: new Array(ROWS),
        title: "Memorama"
    };

    fillArrayRandomly(matrix, ROWS, COLS, uniqueIntegers);

    const gridResult = template(matrix);
    gridContainer.html(gridResult);
    const cards = $(".card");

    const currentCards = [];
    const flippedCards = [];
    let isFlipping = false;

    cards.on("click", handleCardClick);

});
