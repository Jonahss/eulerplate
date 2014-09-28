$(function(){
  $('input.eulerplate').click(function(){
    if ($('input.eulerplate').is(':checked')) {
      $('label.eulerplate').text('OPT OUT OF OUR WEEKLY NEWSLETTER')
    }
    else {
      $('label.eulerplate').tect('I WANT TO RECEIVE OCCASIONAL EMAILS ABOUT PRODUCTS, PROMOTIONS AND OTHER NEWS')
    }
  })
})
