// used in pokedex.
$("button").on('click', function(e){
    alert($(this.closest('td').parent()[0].sectionRowIndex));
})