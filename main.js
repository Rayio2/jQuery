var allimgs=$('.imgs>img')
$(allimgs[0]).addClass('current')
$(allimgs[1]).addClass('right')
$(allimgs[2]).addClass('right')
var n=0
setInterval(()=>{
$(allimgs[n]).removeClass('current').addClass('left')

if(n===2) n = -1
$(allimgs[n+1]).removeClass('right').addClass('current')

$(allimgs[n]).one('transitionend',function(x)
{
 $(x.currentTarget).removeClass('left').addClass('right')
})

n=n+1

},3000)
