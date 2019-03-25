$(document).ready(function(){
    console.log("Hello, World!!")
    $('body').on('click', '.section-select', function(){
        console.log('section-select click')
        $(".section-select").css("opacity", 0.5)
        $(this).css("opacity", 1)
    })
    d3.select('h3-text').style('color', 'darkblue');
    d3.select('h3-text').style('font-size', '24px');
})