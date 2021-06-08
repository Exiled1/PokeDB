// used in pokedex.
$(".delete-btn").on('click', function(e){
    alert($(this.closest('td').parent()[0].sectionRowIndex));
})