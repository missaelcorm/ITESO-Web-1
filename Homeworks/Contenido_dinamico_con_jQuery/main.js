$(document).ready(function(){
    var users = {
        1: "Juan",
        2: "Pedro",
        3: "Diego",
        4: "Sofia",
        5: "Ximena",
        6: "Raul",
        7: "Julian",
        8: "Karen",
        9: "Renata",
        10: "Regina"
    };

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        dataType: "json",
        success: function(json) {
            $.each(json, function (index, post) {
                currentUser = users[post.userId];
                
                const postsDiv = $("#posts");

                var postElement = $('<div>').addClass("postContainer");

                // let postId = $('<p>').addClass("postId");
                // postId.append("<span class=\"subtitle\">Post ID: </span>"+post.id);
                let postUser = $('<p>').addClass("postUser");
                postUser.append(`<span class="subtitle">By: </span>${currentUser}`);
                let postTitle = $('<h4>').addClass("postTitle");
                postTitle.append(post.title);
                let postBody = $('<p>').addClass("postBody");
                postBody.append(post.body);

                postElement.append(postTitle);
                // postElement.append(postId);
                postElement.append(postBody);
                postElement.append(postUser);

                postsDiv.append(postElement);
            });
        },
        error: function(error){
            console.log("Error fetching data: "+error);
        }
    })
});
