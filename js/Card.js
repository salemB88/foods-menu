$(document).ready(function() {
        
  var $products=$('.products');
   $products.isotope({
       itemSelector: '.item',
       layoutMode: 'fitRows'
});


$('.type-menu-li').on('click', function(){ 
    $('.type-menu-li').removeClass('active');
   $(this).addClass('active');
    var filter= $(this).attr('data-filter');
$products.isotope({ filter:filter});
});
});