$(document).ready(() => {
    
    Handlebars.registerHelper('getImg', value => {
        const images = {};
        
        for (let i = 0; i < COLS*ROWS; i++) {
            images[i] = (i > maxValue/2) ? maxValue - i : i;
        }
        
        return images[value];
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Create a shuffled array of unique integers
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    function flip(card){
        $(card).removeClass("not-flipped");
        $(card).addClass("flipped"); 
    }

    function unflip(card){
        $(card).removeClass("flipped");
        $(card).addClass("not-flipped"); 
    }

    const ROWS = 5;
    const COLS = 4;
    const minValue = 0;
    const maxValue = ROWS*COLS-1;
    
    const uniqueIntegers = Array.from({ length: maxValue - minValue + 1 }, (_, i) => i + minValue);

    shuffleArray(uniqueIntegers);

    function fillArrayRandomly(matrix, numRows, numCols, uniqueIntegers){
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

    const gridTemplate = $("#template").first();
    const gridContainer = $(".container").first();

    const template = Handlebars.compile(gridTemplate.html());
    
    const matrix = {
        rows: new Array(ROWS),
        title: "Memorama"
    };

    fillArrayRandomly(matrix, ROWS, COLS, uniqueIntegers);

    const gridResult = template(matrix);
    gridContainer.html(gridResult);
    const cards = $(".card");

    var cardsFlippedCount = 0;
    const currentCards = [];
    const flippedCards = [];

    cards.each((index, card) => {
        $(card).on("click", () => {
            currentCards.push(card);
            
            if($(card).hasClass("not-flipped")){
                cardsFlippedCount++;
                flip(card);

                if(cardsFlippedCount == 2){
                    let firstCard = parseInt($(currentCards[0]).attr('data-card'), 10);
                    let secondCard = parseInt($(currentCards[1]).attr('data-card'), 10);

                    // console.log(firstCard, secondCard, "=", (firstCard+secondCard));

                    if(firstCard+secondCard===19){
                        $(currentCards[0]).addClass("card-found");
                        $(currentCards[1]).addClass("card-found");

                        // console.log("WIN");

                        flippedCards.push(currentCards[0]);
                        flippedCards.push(currentCards[1]);

                        currentCards.splice(0, currentCards.length);
                        cardsFlippedCount = 0;
                    } else {
                        currentCards.forEach(card => {
                            setTimeout(() => {
                                unflip(card);
                            }, 1000);
                        });

                        currentCards.splice(0, currentCards.length);
                        cardsFlippedCount = 0;
                    }
                }

            } else if($(card).hasClass("flipped") && !$(card).hasClass("card-found")){
                unflip(card);
            } 

            if(flippedCards.length===maxValue+1){
                alert("Congratulations, You Won! :D");
            }
        });
        
    });
    
})