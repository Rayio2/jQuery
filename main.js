var allbuttons = $('#buttondiv>button')

var timerId = setTimer();
var n = 0

function setTimer() {
    return setInterval(() => {
      n += 1
      allbuttons.eq(n % 3).trigger('click')
      if(n>=3)n=n%3
    }, 1000)
  }
  
var buttonAct = function(xxx){
  $(allbuttons[xxx]).addClass('red')
  $(allbuttons[xxx]).siblings().removeClass('red')
}

for(let i =0;i<allbuttons.length;i++)
  {
      $(allbuttons[i]).on('click',function(x)
      {
      var index = $(x.currentTarget).index()
      var p = index * -300
      buttonAct(index)
      $('#container').css(
        {
          transform: 'translate('+ p +'px)'
        })
      })
  }

$('.window').on('mouseenter',function(){
  window.clearInterval(timerId)
})

$('.window').on('mouseleave',function(){
  timerId=setTimer() 
})