$(document).ready(function() {
  var margin = 0;
  var count = $('.timeline').children().length;
  
  for (i = 0; i < count; i++) {
    $('.tab-box').append($('<span>').addClass('tab'));
  }
  
  $('.tab:first-child').addClass('tab-active');

  // handlers
  $('.nav-prev').on('click', function() {
    margin += 100;
    
    if (margin/100 > 0) {
      margin = (count - 1) * -100;
    }
    
    update();
  });
  
  $('.nav-next').on('click', function() {
    margin -= 100;
    
    if (margin/100 < 1 - count) {
      margin = 0;
    }
    
    update();
  });
  
  var $tabs = $('.tab');
  
  $tabs.toArray().forEach(function(element, index, array) {
    (function() {
      $(element).on('click', function() {
        margin = index * -100;
        update();
      });
    })();
  });  
  
  function update() {
    $('.timeline').css({'margin-left': margin + '%'});    

    $('.tab-box .tab').removeClass('tab-active');    
    $('.tab-box .tab:nth-child(' + (Math.abs(margin/100) + 1) + ')').addClass('tab-active');
  }
});