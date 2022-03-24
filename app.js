console.log("Let's get this party started!");
const $search = $("#search");


function addGif(res){
    let resLength = res.data.length;
    let random = Math.floor(Math.random() * resLength);
    let source = res.data[random].images.original.url;
    let $p = $("<p>") ;
    $p.append($(`<img src = ${source}></img>`));
    $("#gifSpace").append($p);
}


$("#subBtn").on("click", async function(evt){
evt.preventDefault();
let $query = $search.val();
const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${$query}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
console.log(res);
addGif(res.data);
$search.val('');

});

$("#remBtn").on("click", function() {
    $("#gifSpace").empty();
  });


