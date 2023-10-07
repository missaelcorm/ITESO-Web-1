Handlebars.registerHelper('isString', value => {
    return typeof value === "string";
});

const listTemplate = $('#template').first();
const listContainer = $('#container').first();

const template = Handlebars.compile(listTemplate.html());

// API 
$.get('https://jsonplaceholder.typicode.com/users', (users) => {
    // const users = [
    //     { name: "Sofia Vazquez", email: "sofia@site.com"},
    //     { name: "Raul Pardo", email: "raul@site.com"},
    //     { name: "Rafael Santana", email: "rafael@site.com"}
    // ];

    const keys = Object.keys(users[0]);
    const cols = keys.filter(data => {
        return typeof users[0][data] === 'string'; // Returns the keys which their attributes are strings
    });

    const listResult = template({ 
        title: "MyTitle",
        users,
        cols
    });

    listContainer.html(listResult);
});

