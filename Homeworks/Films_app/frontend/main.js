$(document).ready(() => {
    const filmTemplate = $("#film-template").first();
    const filmContainer = $("#film-container").first();

    const compiledTemplate = Handlebars.compile(filmTemplate.html());

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/films",
        data: {
            "token": "1234"
        },
        dataType: "json",
        success: (films) => {
            const emptyListMsg = $("empty-list-message").first();
            emptyListMsg.addClass("hidden");
            const filmResult = compiledTemplate({
                films
            });
    
            filmContainer.html(filmResult);
        },
        error: (error) => {
            console.log(error);
        }
    });
});