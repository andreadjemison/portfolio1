// :gt() selector selects elements with an index number higher than a specified number
$('.slides > div:gt(0)').hide()

setInterval(()=>{
    $('.slides > div:first')
    .fadeIn('slow')
    // returns the next sibling element of the selected element
    .next()
    .fadeOut('slow')
        // returns the first sibling element once you get to the end
    .end()
    .appendTo(".slides")
}, 3000)

$('#submit').on('click',()=>{
    $(':text').val('')
})