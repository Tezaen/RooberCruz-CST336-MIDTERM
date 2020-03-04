var ISBN = 0;

let bookInfo = function(){
    $("#Result").empty();
    ISBN = $("#ISBN-input").val();
    $.ajax({
        method: "GET",
        url:"https://openlibrary.org/api/books?bibkeys=ISBN:" + ISBN + "&format=JSON&jscmd=data",
        dataType: "json",
        success: function(result){
            console.log(result["ISBN:" + ISBN]);
            let content = result["ISBN:" + ISBN];
            $("#Result").append("<div class=\"form-group row\"><img class=\"col-sm-3 cover\" src=" + 
            content.cover.large + "><span class=\"col-sm-4\">Title: " + content.title + "<br>Author: " + 
            content.authors[0].name + "<br> Publish: " + content.publish_date + "<br> Publisher: " + content.publishers[0].name + "<br>ISBN: " + 
            ISBN + "<br>Pages: " + content.number_of_pages + "</div>");
           
        }
    });
}